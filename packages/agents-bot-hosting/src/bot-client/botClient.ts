import { Activity, ActivityTypes } from '@microsoft/agents-bot-activity'
import { BotClientConfig } from './botClientConfig'
// import { v4 } from 'uuid'
import { AuthConfiguration, MsalTokenProvider } from '../auth'
import { v4 } from 'uuid'
import { MemoryStorage, StoreItem } from '../storage'

export const PostActivity = async (activity: Activity, botClientConfig: BotClientConfig, authConfig: AuthConfiguration): Promise<unknown> => {
  // const activityCopy = Activity.fromObject({ ...activity })
  // activityCopy.serviceUrl = botClientConfig.serviceUrl
  // activityCopy.recipient = { role: RoleTypes.Skill }
  // activityCopy.relatesTo = activity.getConversationReference()

  // activityCopy.conversation!.id = v4()

  const activityCopy = new Activity(ActivityTypes.Message)
  activityCopy.text = activity.text
  activityCopy.conversation = activity.conversation
  activityCopy.from = activity.from
  activityCopy.recipient = activity.recipient
  activityCopy.serviceUrl = activity.serviceUrl
  activityCopy.channelId = activity.channelId
  activityCopy.channelData = activity.channelData

  const newId = v4()

  const memory = MemoryStorage.getSingleInstance()
  const changes: StoreItem = {} as StoreItem
  changes[newId] = {
    conversationReference: activity.getConversationReference()
  }
  await memory.write(changes)

  activityCopy.conversation!.id = newId
  activityCopy.serviceUrl = botClientConfig.serviceUrl
  activityCopy.replyToId = activity.id
  activityCopy.relatesTo = activity.getConversationReference()
  activityCopy.id = activity.id

  const authProvider = new MsalTokenProvider()
  const token = await authProvider.getAccessToken(authConfig, botClientConfig.botId)

  const response = await fetch(botClientConfig.botEndPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'x-ms-conversation-id': activityCopy.conversation!.id
    },
    body: JSON.stringify(activityCopy)
  })
  if (!response.ok) {
    throw new Error(`Failed to post activity to bot: ${response.statusText}`)
  }
  return response.json()
}
