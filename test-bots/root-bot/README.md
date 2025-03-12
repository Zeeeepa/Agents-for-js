# root-bot

A bot to call other bots

## Msg1

ABS -> Bot

```json
{
    "type": "message",
    "id": "IfxenhOqYRR4jfMT7XOjdC-us|0000000",
    "timestamp": "2025-03-11T22:03:56.63556\\u002B00:00",
    "localTimestamp": "2025-03-11T15:03:56.447-07:00",
    "localTimezone": "America/Los_Angeles",
    "serviceUrl": "https://webchat.botframework.com/",
    "channelId": "webchat",
    "from": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "conversation": {
        "id": "IfxenhOqYRR4jfMT7XOjdC-us",
        "properties": {}
    },
    "recipient": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01"
    },
    "textFormat": "plain",
    "locale": "en-US",
    "text": "agent",
    "entities": [
        {
            "type": "ClientCapabilities",
            "requiresBotState": true,
            "supportsListening": true,
            "supportsTts": true
        }
    ],
    "channelData": {
        "clientActivityID": "8ityzzi5obi"
    }
}
```

convRef

```json
{
    "activityId": "IfxenhOqYRR4jfMT7XOjdC-us|0000000",
    "user": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "bot": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01"
    },
    "conversation": {
        "id": "IfxenhOqYRR4jfMT7XOjdC-us",
        "properties": {}
    },
    "channelId": "webchat",
    "serviceUrl": "https://webchat.botframework.com/",
    "locale": "en-US"
}
```

stored as 

```json
{
    "3cced747-119c-45ee-b34f-74a94fce495c": {
        "ConversationReference": {
            "ActivityId": "IfxenhOqYRR4jfMT7XOjdC-us|0000000",
            "User": {
                "Id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
                "Name": "",
                "AadObjectId": null,
                "Role": null,
                "Properties": {}
            },
            "Bot": {
                "Id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
                "Name": "rido-bot-01",
                "AadObjectId": null,
                "Role": null,
                "Properties": {}
            },
            "Conversation": {
                "IsGroup": null,
                "ConversationType": null,
                "TenantId": null,
                "Id": "IfxenhOqYRR4jfMT7XOjdC-us",
                "Name": null,
                "AadObjectId": null,
                "Role": null,
                "Properties": {}
            },
            "ChannelId": "webchat",
            "ServiceUrl": "https://webchat.botframework.com/",
            "Locale": "en-US"
        },
        "OAuthScope": "https://api.botframework.com"
    }
}
```


# Msg2 Root -> Echo

```json
{
    "type": "message",
    "id": "IfxenhOqYRR4jfMT7XOjdC-us|0000003",
    "timestamp": "2025-03-11T23:01:25.8053662\\u002B00:00",
    "localTimestamp": "2025-03-11T16:01:25.724-07:00",
    "localTimezone": "America/Los_Angeles",
    "callerId": "urn:botframework:aadappid:e20ad82f-4f72-406d-8a0b-4bc1a94852c3",
    "serviceUrl": "http://localhost:3978/api/botresponse/",
    "channelId": "webchat",
    "from": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "conversation": {
        "id": "7e7e53aa-d7e0-47a0-8517-1e0a517b4df0",
        "properties": {}
    },
    "recipient": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01",
        "role": "skill"
    },
    "textFormat": "plain",
    "locale": "en-US",
    "text": "agent",
    "channelData": {
        "clientActivityID": "9nd67cngcjt"
    },
    "relatesTo": {
        "activityId": "IfxenhOqYRR4jfMT7XOjdC-us|0000003",
        "conversation": {
            "id": "IfxenhOqYRR4jfMT7XOjdC-us",
            "properties": {}
        },
        "channelId": "webchat",
        "serviceUrl": "https://webchat.botframework.com/",
        "locale": "en-US"
    }
}

```

conv ref

```json
{
    "activityId": "IfxenhOqYRR4jfMT7XOjdC-us|0000003",
    "user": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "bot": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01",
        "role": "skill"
    },
    "conversation": {
        "id": "7e7e53aa-d7e0-47a0-8517-1e0a517b4df0",
        "properties": {}
    },
    "channelId": "webchat",
    "serviceUrl": "http://localhost:3978/api/botresponse/",
    "locale": "en-US"
}
```

buff act

```json
{
    "type": "message",
    "serviceUrl": "http://localhost:3978/api/botresponse/",
    "channelId": "webchat",
    "from": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01",
        "role": "skill"
    },
    "conversation": {
        "id": "7e7e53aa-d7e0-47a0-8517-1e0a517b4df0",
        "properties": {}
    },
    "recipient": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "locale": "en-US",
    "text": "Echo(Bot2): agent",
    "speak": "Echo(Bot2): agent",
    "inputHint": "ignoringInput",
    "replyToId": "IfxenhOqYRR4jfMT7XOjdC-us|0000003"
}
```



## Msg 3 Response

Echo -> root

URL: `"/api/botresponse/v3/conversations/3cced747-119c-45ee-b34f-74a94fce495c/activities/IfxenhOqYRR4jfMT7XOjdC-us|0000000"`

```json
{
    "type": "message",
    "serviceUrl": "http://localhost:3978/api/botresponse/",
    "channelId": "webchat",
    "from": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01",
        "role": "skill"
    },
    "conversation": {
        "id": "3cced747-119c-45ee-b34f-74a94fce495c",
        "properties": {}
    },
    "recipient": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "locale": "en-US",
    "text": "Echo(Bot2): agent",
    "speak": "Echo(Bot2): agent",
    "inputHint": "ignoringInput",
    "replyToId": "IfxenhOqYRR4jfMT7XOjdC-us|0000000"
}
```

conv ref

```json
{
    "conversationReference": {
        "activityId": "IfxenhOqYRR4jfMT7XOjdC-us|0000000",
        "user": {
            "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
            "name": ""
        },
        "bot": {
            "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
            "name": "rido-bot-01"
        },
        "conversation": {
            "id": "IfxenhOqYRR4jfMT7XOjdC-us",
            "properties": {}
        },
        "channelId": "webchat",
        "serviceUrl": "https://webchat.botframework.com/",
        "locale": "en-US"
    },
    "oAuthScope": "https://api.botframework.com"
}
```

cont act

```json
{
    "type": "event",
    "id": "f9d9f6c6-100a-40ee-a66d-20344d42923c",
    "serviceUrl": "https://webchat.botframework.com/",
    "channelId": "webchat",
    "from": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "conversation": {
        "id": "IfxenhOqYRR4jfMT7XOjdC-us",
        "properties": {}
    },
    "recipient": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01"
    },
    "locale": "en-US",
    "name": "ContinueConversation",
    "relatesTo": {
        "activityId": "IfxenhOqYRR4jfMT7XOjdC-us|0000000",
        "user": {
            "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
            "name": ""
        },
        "bot": {
            "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
            "name": "rido-bot-01"
        },
        "conversation": {
            "id": "IfxenhOqYRR4jfMT7XOjdC-us",
            "properties": {}
        },
        "channelId": "webchat",
        "serviceUrl": "https://webchat.botframework.com/",
        "locale": "en-US"
    }
}
```

cont act 2

```json
{
    "type": "event",
    "id": "cec0dbb8-7135-49d2-a2f5-47688aac0d73",
    "serviceUrl": "https://webchat.botframework.com/",
    "channelId": "webchat",
    "from": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "conversation": {
        "id": "IfxenhOqYRR4jfMT7XOjdC-us",
        "properties": {}
    },
    "recipient": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01"
    },
    "locale": "en-US",
    "name": "ContinueConversation",
    "relatesTo": {
        "activityId": "IfxenhOqYRR4jfMT7XOjdC-us|0000000",
        "user": {
            "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
            "name": ""
        },
        "bot": {
            "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
            "name": "rido-bot-01"
        },
        "conversation": {
            "id": "IfxenhOqYRR4jfMT7XOjdC-us",
            "properties": {}
        },
        "channelId": "webchat",
        "serviceUrl": "https://webchat.botframework.com/",
        "locale": "en-US"
    }
}
```

after aply conv ref

```json
{
    "type": "message",
    "serviceUrl": "https://webchat.botframework.com/",
    "channelId": "webchat",
    "from": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01"
    },
    "conversation": {
        "id": "IfxenhOqYRR4jfMT7XOjdC-us",
        "properties": {}
    },
    "recipient": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "locale": "en-US",
    "text": "Echo(Bot2): agent",
    "speak": "Echo(Bot2): agent",
    "inputHint": "ignoringInput",
    "replyToId": "IfxenhOqYRR4jfMT7XOjdC-us|0000000"
}
```

act to be sent

```json
{
    "type": "message",
    "serviceUrl": "https://webchat.botframework.com/",
    "channelId": "webchat",
    "from": {
        "id": "rido-bot-01@3Y0PGApS8twNuWdPhuFH7pL2WOq8tb9A6lJpPZeuRYNRespZ40k1JQQJ99BBACZoyfiAArohAAABAZBSi1sO",
        "name": "rido-bot-01"
    },
    "conversation": {
        "id": "IfxenhOqYRR4jfMT7XOjdC-us",
        "properties": {}
    },
    "recipient": {
        "id": "c7292dba-1513-42bc-9ba8-4d686b21aad7",
        "name": ""
    },
    "locale": "en-US",
    "text": "Echo(Bot2): agent",
    "speak": "Echo(Bot2): agent",
    "inputHint": "ignoringInput",
    "replyToId": "IfxenhOqYRR4jfMT7XOjdC-us|0000000"
}
```

posted to webchat /v3/conversations/IfxenhOqYRR4jfMT7XOjdC-us/activities/IfxenhOqYRR4jfMT7XOjdC-us%7C0000000