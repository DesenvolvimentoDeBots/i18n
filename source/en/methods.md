# Methods

- [getUpdates](#getUpdates)
- [setWebhook](#setWebhook)
- [sendMessage](#sendMessage)
- [forwardMessage](#forwardMessage)
- [sendPhoto](#sendPhoto)
- [sendAudio](#sendAudio)
- [sendDocument](#sendDocument)
- [sendVideo](#sendVideo)
- [sendVoice](#sendVoice)
- [sendVideoNote](#sendVideoNote)
- [sendMediaGroup](#sendMediaGroup)
- [sendLocation](#sendLocation)
- [editMessageLiveLocation](#editMessageLiveLocation)
- [stopMessageLiveLocation](#stopMessageLiveLocation)
- [sendVenue](#sendVenue)
- [sendContact](#sendContact)
- [getUserProfilePhotos](#getUserProfilePhotos)
- [getFile](#getFile)
- [kickChatMember](#kickChatMember)
- [unbanChatMember](#unbanChatMember)
- [restrictChatMember](#restrictChatMember)
- [promoteChatMember](#promoteChatMember)
- [exportChatInviteLink](#exportChatInviteLink)
- [setChatPhoto](#setChatPhoto)
- [deleteChatPhoto](#deleteChatPhoto)
- [setChatTitle](#setChatTitle)
- [setChatDescription](#setChatDescription)
- [pinChatMessage](#pinChatMessage)
- [unpinChatMessage](#unpinChatMessage)
- [leaveChat](#leaveChat)
- [getChat](#getChat)
- [getChatAdministrators](#getChatAdministrators)
- [getChatMembersCount](#getChatMembersCount)
- [getChatMember](#getChatMember)
- [setChatStickerSet](#setChatStickerSet)
- [deleteChatStickerSet](#deleteChatStickerSet)
- [answerCallbackQuery](#answerCallbackQuery)
- [editMessageText](#editMessageText)
- [editMessageCaption](#editMessageCaption)
- [editMessageReplyMarkup](#editMessageReplyMarkup)
- [deleteMessage](#deleteMessage)
- [sendSticker](#sendSticker)
- [getStickerSet](#getStickerSet)
- [uploadStickerFile](#uploadStickerFile)
- [createNewStickerSet](#createNewStickerSet)
- [addStickerToSet](#addStickerToSet)
- [setStickerPositionInSet](#setStickerPositionInSet)
- [deleteStickerFromSet](#deleteStickerFromSet)
- [answerInlineQuery](#answerInlineQuery)
- [sendInvoice](#sendInvoice)
- [answerShippingQuery](#answerShippingQuery)
- [answerPreCheckoutQuery](#answerPreCheckoutQuery)
- [sendGame](#sendGame)
- [setGameScore](#setGameScore)
- [getGameHighScores](#getGameHighScores)

## getUpdates
Use this method to receive incoming updates using long polling (wiki). An Array of Update objects is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
offset | Integer | false | Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten. |
limit | Integer | false | Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100. |
timeout | Integer | false | Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. |
allowed_updates | Array of String | false | List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.Please note that this parameter doesn&#39;t affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time. |

Example:
```javascript
getUpdates({
	offset = Integer,
	limit = Integer,
	timeout = Integer,
	allowed_updates = Array of String,
})
```

## setWebhook
Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
url | String | true | HTTPS url to send updates to. Use an empty string to remove webhook integration |
certificate | InputFile | false | Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details. |
max_connections | Integer | false | Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot‘s server, and higher values to increase your bot’s throughput. |
allowed_updates | Array of String | false | List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.Please note that this parameter doesn&#39;t affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time. |

Example:
```javascript
setWebhook({
	url = String,
	certificate = InputFile,
	max_connections = Integer,
	allowed_updates = Array of String,
})
```

## sendMessage
Use this method to send text messages. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
text | String | true | Text of the message to be sent |
parse_mode | String | false | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot&#39;s message. |
disable_web_page_preview | Boolean | false | Disables link previews for links in this message |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendMessage({
	chat_id = Integer or String,
	text = String,
	parse_mode = String,
	disable_web_page_preview = Boolean,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## forwardMessage
Use this method to forward messages of any kind. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
from_chat_id | Integer or String | true | Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
message_id | Integer | true | Message identifier in the chat specified in from_chat_id |

Example:
```javascript
forwardMessage({
	chat_id = Integer or String,
	from_chat_id = Integer or String,
	disable_notification = Boolean,
	message_id = Integer,
})
```

## sendPhoto
Use this method to send photos. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
photo | InputFile or String | true | Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. More info on Sending Files » |
caption | String | false | Photo caption (may also be used when resending photos by file_id), 0-200 characters |
parse_mode | String | false | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendPhoto({
	chat_id = Integer or String,
	photo = InputFile or String,
	caption = String,
	parse_mode = String,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## sendAudio
Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .mp3 format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
audio | InputFile or String | true | Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » |
caption | String | false | Audio caption, 0-200 characters |
parse_mode | String | false | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
duration | Integer | false | Duration of the audio in seconds |
performer | String | false | Performer |
title | String | false | Track name |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendAudio({
	chat_id = Integer or String,
	audio = InputFile or String,
	caption = String,
	parse_mode = String,
	duration = Integer,
	performer = String,
	title = String,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## sendDocument
Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
document | InputFile or String | true | File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » |
caption | String | false | Document caption (may also be used when resending documents by file_id), 0-200 characters |
parse_mode | String | false | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendDocument({
	chat_id = Integer or String,
	document = InputFile or String,
	caption = String,
	parse_mode = String,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## sendVideo
Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
video | InputFile or String | true | Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More info on Sending Files » |
duration | Integer | false | Duration of sent video in seconds |
width | Integer | false | Video width |
height | Integer | false | Video height |
caption | String | false | Video caption (may also be used when resending videos by file_id), 0-200 characters |
parse_mode | String | false | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
supports_streaming | Boolean | false | Pass True, if the uploaded video is suitable for streaming |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendVideo({
	chat_id = Integer or String,
	video = InputFile or String,
	duration = Integer,
	width = Integer,
	height = Integer,
	caption = String,
	parse_mode = String,
	supports_streaming = Boolean,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## sendVoice
Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .ogg file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
voice | InputFile or String | true | Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » |
caption | String | false | Voice message caption, 0-200 characters |
parse_mode | String | false | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
duration | Integer | false | Duration of the voice message in seconds |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendVoice({
	chat_id = Integer or String,
	voice = InputFile or String,
	caption = String,
	parse_mode = String,
	duration = Integer,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## sendVideoNote
As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
video_note | InputFile or String | true | Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More info on Sending Files ». Sending video notes by a URL is currently unsupported |
duration | Integer | false | Duration of sent video in seconds |
length | Integer | false | Video width and height |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendVideoNote({
	chat_id = Integer or String,
	video_note = InputFile or String,
	duration = Integer,
	length = Integer,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## sendMediaGroup
Use this method to send a group of photos or videos as an album. On success, an array of the sent Messages is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
media | Array of InputMedia | true | A JSON-serialized array describing photos and videos to be sent, must include 2–10 items |
disable_notification | Boolean | false | Sends the messages silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the messages are a reply, ID of the original message |

Example:
```javascript
sendMediaGroup({
	chat_id = Integer or String,
	media = Array of InputMedia,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
})
```

## sendLocation
Use this method to send point on the map. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
latitude | Float number | true | Latitude of the location |
longitude | Float number | true | Longitude of the location |
live_period | Integer | false | Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400. |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendLocation({
	chat_id = Integer or String,
	latitude = Float number,
	longitude = Float number,
	live_period = Integer,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## editMessageLiveLocation
Use this method to edit live location messages sent by the bot or via the bot (for inline bots). A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message was sent by the bot, the edited Message is returned, otherwise True is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | false | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
message_id | Integer | false | Required if inline_message_id is not specified. Identifier of the sent message |
inline_message_id | String | false | Required if chat_id and message_id are not specified. Identifier of the inline message |
latitude | Float number | true | Latitude of new location |
longitude | Float number | true | Longitude of new location |
reply_markup | InlineKeyboardMarkup | false | A JSON-serialized object for a new inline keyboard. |

Example:
```javascript
editMessageLiveLocation({
	chat_id = Integer or String,
	message_id = Integer,
	inline_message_id = String,
	latitude = Float number,
	longitude = Float number,
	reply_markup = InlineKeyboardMarkup,
})
```

## stopMessageLiveLocation
Use this method to stop updating a live location message sent by the bot or via the bot (for inline bots) before live_period expires. On success, if the message was sent by the bot, the sent Message is returned, otherwise True is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | false | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
message_id | Integer | false | Required if inline_message_id is not specified. Identifier of the sent message |
inline_message_id | String | false | Required if chat_id and message_id are not specified. Identifier of the inline message |
reply_markup | InlineKeyboardMarkup | false | A JSON-serialized object for a new inline keyboard. |

Example:
```javascript
stopMessageLiveLocation({
	chat_id = Integer or String,
	message_id = Integer,
	inline_message_id = String,
	reply_markup = InlineKeyboardMarkup,
})
```

## sendVenue
Use this method to send information about a venue. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
latitude | Float number | true | Latitude of the venue |
longitude | Float number | true | Longitude of the venue |
title | String | true | Name of the venue |
address | String | true | Address of the venue |
foursquare_id | String | false | Foursquare identifier of the venue |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendVenue({
	chat_id = Integer or String,
	latitude = Float number,
	longitude = Float number,
	title = String,
	address = String,
	foursquare_id = String,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## sendContact
Use this method to send phone contacts. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
phone_number | String | true | Contact&#39;s phone number |
first_name | String | true | Contact&#39;s first name |
last_name | String | false | Contact&#39;s last name |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove keyboard or to force a reply from the user. |

Example:
```javascript
sendContact({
	chat_id = Integer or String,
	phone_number = String,
	first_name = String,
	last_name = String,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## getUserProfilePhotos
Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
user_id | Integer | true | Unique identifier of the target user |
offset | Integer | false | Sequential number of the first photo to be returned. By default, all photos are returned. |
limit | Integer | false | Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100. |

Example:
```javascript
getUserProfilePhotos({
	user_id = Integer,
	offset = Integer,
	limit = Integer,
})
```

## getFile
Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt;, where &lt;file_path&gt; is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
file_id | String | true | File identifier to get info about |

Example:
```javascript
getFile({
	file_id = String,
})
```

## kickChatMember
Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) |
user_id | Integer | true | Unique identifier of the target user |
until_date | Integer | false | Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever |

Example:
```javascript
kickChatMember({
	chat_id = Integer or String,
	user_id = Integer,
	until_date = Integer,
})
```

## unbanChatMember
Use this method to unban a previously kicked user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target group or username of the target supergroup or channel (in the format @username) |
user_id | Integer | true | Unique identifier of the target user |

Example:
```javascript
unbanChatMember({
	chat_id = Integer or String,
	user_id = Integer,
})
```

## restrictChatMember
Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass True for all boolean parameters to lift restrictions from a user. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
user_id | Integer | true | Unique identifier of the target user |
until_date | Integer | false | Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever |
can_send_messages | Boolean | false | Pass True, if the user can send text messages, contacts, locations and venues |
can_send_media_messages | Boolean | false | Pass True, if the user can send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages |
can_send_other_messages | Boolean | false | Pass True, if the user can send animations, games, stickers and use inline bots, implies can_send_media_messages |
can_add_web_page_previews | Boolean | false | Pass True, if the user may add web page previews to their messages, implies can_send_media_messages |

Example:
```javascript
restrictChatMember({
	chat_id = Integer or String,
	user_id = Integer,
	until_date = Integer,
	can_send_messages = Boolean,
	can_send_media_messages = Boolean,
	can_send_other_messages = Boolean,
	can_add_web_page_previews = Boolean,
})
```

## promoteChatMember
Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
user_id | Integer | true | Unique identifier of the target user |
can_change_info | Boolean | false | Pass True, if the administrator can change chat title, photo and other settings |
can_post_messages | Boolean | false | Pass True, if the administrator can create channel posts, channels only |
can_edit_messages | Boolean | false | Pass True, if the administrator can edit messages of other users and can pin messages, channels only |
can_delete_messages | Boolean | false | Pass True, if the administrator can delete messages of other users |
can_invite_users | Boolean | false | Pass True, if the administrator can invite new users to the chat |
can_restrict_members | Boolean | false | Pass True, if the administrator can restrict, ban or unban chat members |
can_pin_messages | Boolean | false | Pass True, if the administrator can pin messages, supergroups only |
can_promote_members | Boolean | false | Pass True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him) |

Example:
```javascript
promoteChatMember({
	chat_id = Integer or String,
	user_id = Integer,
	can_change_info = Boolean,
	can_post_messages = Boolean,
	can_edit_messages = Boolean,
	can_delete_messages = Boolean,
	can_invite_users = Boolean,
	can_restrict_members = Boolean,
	can_pin_messages = Boolean,
	can_promote_members = Boolean,
})
```

## exportChatInviteLink
Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as String on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

Example:
```javascript
exportChatInviteLink({
	chat_id = Integer or String,
})
```

## setChatPhoto
Use this method to set a new profile photo for the chat. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success. 

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
photo | InputFile | true | New chat photo, uploaded using multipart/form-data |

Example:
```javascript
setChatPhoto({
	chat_id = Integer or String,
	photo = InputFile,
})
```

## deleteChatPhoto
Use this method to delete a chat photo. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success. 

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

Example:
```javascript
deleteChatPhoto({
	chat_id = Integer or String,
})
```

## setChatTitle
Use this method to change the title of a chat. Titles can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success. 

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
title | String | true | New chat title, 1-255 characters |

Example:
```javascript
setChatTitle({
	chat_id = Integer or String,
	title = String,
})
```

## setChatDescription
Use this method to change the description of a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success. 

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
description | String | false | New chat description, 0-255 characters |

Example:
```javascript
setChatDescription({
	chat_id = Integer or String,
	description = String,
})
```

## pinChatMessage
Use this method to pin a message in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the ‘can_pin_messages’ admin right in the supergroup or ‘can_edit_messages’ admin right in the channel. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
message_id | Integer | true | Identifier of a message to pin |
disable_notification | Boolean | false | Pass True, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels. |

Example:
```javascript
pinChatMessage({
	chat_id = Integer or String,
	message_id = Integer,
	disable_notification = Boolean,
})
```

## unpinChatMessage
Use this method to unpin a message in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the ‘can_pin_messages’ admin right in the supergroup or ‘can_edit_messages’ admin right in the channel. Returns True on success. 

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

Example:
```javascript
unpinChatMessage({
	chat_id = Integer or String,
})
```

## leaveChat
Use this method for your bot to leave a group, supergroup or channel. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

Example:
```javascript
leaveChat({
	chat_id = Integer or String,
})
```

## getChat
Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

Example:
```javascript
getChat({
	chat_id = Integer or String,
})
```

## getChatAdministrators
Use this method to get a list of administrators in a chat. On success, returns an Array of ChatMember objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

Example:
```javascript
getChatAdministrators({
	chat_id = Integer or String,
})
```

## getChatMembersCount
Use this method to get the number of members in a chat. Returns Int on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

Example:
```javascript
getChatMembersCount({
	chat_id = Integer or String,
})
```

## getChatMember
Use this method to get information about a member of a chat. Returns a ChatMember object on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |
user_id | Integer | true | Unique identifier of the target user |

Example:
```javascript
getChatMember({
	chat_id = Integer or String,
	user_id = Integer,
})
```

## setChatStickerSet
Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
sticker_set_name | String | true | Name of the sticker set to be set as the group sticker set |

Example:
```javascript
setChatStickerSet({
	chat_id = Integer or String,
	sticker_set_name = String,
})
```

## deleteChatStickerSet
Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

Example:
```javascript
deleteChatStickerSet({
	chat_id = Integer or String,
})
```

## answerCallbackQuery
Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
callback_query_id | String | true | Unique identifier for the query to be answered |
text | String | false | Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters |
show_alert | Boolean | false | If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. |
url | String | false | URL that will be opened by the user&#39;s client. If you have created a Game and accepted the conditions via @Botfather, specify the URL that opens your game – note that this will only work if the query comes from a callback_game button.Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter. |
cache_time | Integer | false | The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. |

Example:
```javascript
answerCallbackQuery({
	callback_query_id = String,
	text = String,
	show_alert = Boolean,
	url = String,
	cache_time = Integer,
})
```

## editMessageText
Use this method to edit text and game messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | false | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
message_id | Integer | false | Required if inline_message_id is not specified. Identifier of the sent message |
inline_message_id | String | false | Required if chat_id and message_id are not specified. Identifier of the inline message |
text | String | true | New text of the message |
parse_mode | String | false | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot&#39;s message. |
disable_web_page_preview | Boolean | false | Disables link previews for links in this message |
reply_markup | InlineKeyboardMarkup | false | A JSON-serialized object for an inline keyboard. |

Example:
```javascript
editMessageText({
	chat_id = Integer or String,
	message_id = Integer,
	inline_message_id = String,
	text = String,
	parse_mode = String,
	disable_web_page_preview = Boolean,
	reply_markup = InlineKeyboardMarkup,
})
```

## editMessageCaption
Use this method to edit captions of messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | false | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
message_id | Integer | false | Required if inline_message_id is not specified. Identifier of the sent message |
inline_message_id | String | false | Required if chat_id and message_id are not specified. Identifier of the inline message |
caption | String | false | New caption of the message |
parse_mode | String | false | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
reply_markup | InlineKeyboardMarkup | false | A JSON-serialized object for an inline keyboard. |

Example:
```javascript
editMessageCaption({
	chat_id = Integer or String,
	message_id = Integer,
	inline_message_id = String,
	caption = String,
	parse_mode = String,
	reply_markup = InlineKeyboardMarkup,
})
```

## editMessageReplyMarkup
Use this method to edit only the reply markup of messages sent by the bot or via the bot (for inline bots).  On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | false | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
message_id | Integer | false | Required if inline_message_id is not specified. Identifier of the sent message |
inline_message_id | String | false | Required if chat_id and message_id are not specified. Identifier of the inline message |
reply_markup | InlineKeyboardMarkup | false | A JSON-serialized object for an inline keyboard. |

Example:
```javascript
editMessageReplyMarkup({
	chat_id = Integer or String,
	message_id = Integer,
	inline_message_id = String,
	reply_markup = InlineKeyboardMarkup,
})
```

## deleteMessage
Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Bots can delete outgoing messages in groups and supergroups.- Bots granted can_post_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
message_id | Integer | true | Identifier of the message to delete |

Example:
```javascript
deleteMessage({
	chat_id = Integer or String,
	message_id = Integer,
})
```

## sendSticker
Use this method to send .webp stickers. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer or String | true | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
sticker | InputFile or String | true | Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .webp file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply | false | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. |

Example:
```javascript
sendSticker({
	chat_id = Integer or String,
	sticker = InputFile or String,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply,
})
```

## getStickerSet
Use this method to get a sticker set. On success, a StickerSet object is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
name | String | true | Name of the sticker set |

Example:
```javascript
getStickerSet({
	name = String,
})
```

## uploadStickerFile
Use this method to upload a .png file with a sticker for later use in createNewStickerSet and addStickerToSet methods (can be used multiple times). Returns the uploaded File on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
user_id | Integer | true | User identifier of sticker file owner |
png_sticker | InputFile | true | Png image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. More info on Sending Files » |

Example:
```javascript
uploadStickerFile({
	user_id = Integer,
	png_sticker = InputFile,
})
```

## createNewStickerSet
Use this method to create new sticker set owned by a user. The bot will be able to edit the created sticker set. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
user_id | Integer | true | User identifier of created sticker set owner |
name | String | true | Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can&#39;t contain consecutive underscores and must end in “_by_&lt;bot username&gt;”. &lt;bot_username&gt; is case insensitive. 1-64 characters. |
title | String | true | Sticker set title, 1-64 characters |
png_sticker | InputFile or String | true | Png image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » |
emojis | String | true | One or more emoji corresponding to the sticker |
contains_masks | Boolean | false | Pass True, if a set of mask stickers should be created |
mask_position | MaskPosition | false | A JSON-serialized object for position where the mask should be placed on faces |

Example:
```javascript
createNewStickerSet({
	user_id = Integer,
	name = String,
	title = String,
	png_sticker = InputFile or String,
	emojis = String,
	contains_masks = Boolean,
	mask_position = MaskPosition,
})
```

## addStickerToSet
Use this method to add a new sticker to a set created by the bot. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
user_id | Integer | true | User identifier of sticker set owner |
name | String | true | Sticker set name |
png_sticker | InputFile or String | true | Png image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files » |
emojis | String | true | One or more emoji corresponding to the sticker |
mask_position | MaskPosition | false | A JSON-serialized object for position where the mask should be placed on faces |

Example:
```javascript
addStickerToSet({
	user_id = Integer,
	name = String,
	png_sticker = InputFile or String,
	emojis = String,
	mask_position = MaskPosition,
})
```

## setStickerPositionInSet
Use this method to move a sticker in a set created by the bot to a specific position . Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
sticker | String | true | File identifier of the sticker |
position | Integer | true | New sticker position in the set, zero-based |

Example:
```javascript
setStickerPositionInSet({
	sticker = String,
	position = Integer,
})
```

## deleteStickerFromSet
Use this method to delete a sticker from a set created by the bot. Returns True on success.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
sticker | String | true | File identifier of the sticker |

Example:
```javascript
deleteStickerFromSet({
	sticker = String,
})
```

## answerInlineQuery
Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
inline_query_id | String | true | Unique identifier for the answered query |
results | Array of InlineQueryResult | true | A JSON-serialized array of results for the inline query |
cache_time | Integer | false | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. |
is_personal | Boolean | false | Pass True, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query |
next_offset | String | false | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don‘t support pagination. Offset length can’t exceed 64 bytes. |
switch_pm_text | String | false | If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter switch_pm_parameter |
switch_pm_parameter | String | false | Deep-linking parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a ‘Connect your YouTube account’ button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot&#39;s inline capabilities. |

Example:
```javascript
answerInlineQuery({
	inline_query_id = String,
	results = Array of InlineQueryResult,
	cache_time = Integer,
	is_personal = Boolean,
	next_offset = String,
	switch_pm_text = String,
	switch_pm_parameter = String,
})
```

## sendInvoice
Use this method to send invoices. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer | true | Unique identifier for the target private chat |
title | String | true | Product name, 1-32 characters |
description | String | true | Product description, 1-255 characters |
payload | String | true | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. |
provider_token | String | true | Payments provider token, obtained via Botfather |
start_parameter | String | true | Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter |
currency | String | true | Three-letter ISO 4217 currency code, see more on currencies |
prices | Array of LabeledPrice | true | Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) |
provider_data | String | false | JSON-encoded data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. |
photo_url | String | false | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. |
photo_size | Integer | false | Photo size |
photo_width | Integer | false | Photo width |
photo_height | Integer | false | Photo height |
need_name | Boolean | false | Pass True, if you require the user&#39;s full name to complete the order |
need_phone_number | Boolean | false | Pass True, if you require the user&#39;s phone number to complete the order |
need_email | Boolean | false | Pass True, if you require the user&#39;s email address to complete the order |
need_shipping_address | Boolean | false | Pass True, if you require the user&#39;s shipping address to complete the order |
send_phone_number_to_provider | Boolean | false | Pass True, if user&#39;s phone number should be sent to provider |
send_email_to_provider | Boolean | false | Pass True, if user&#39;s email address should be sent to provider |
is_flexible | Boolean | false | Pass True, if the final price depends on the shipping method |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup | false | A JSON-serialized object for an inline keyboard. If empty, one &#39;Pay total price&#39; button will be shown. If not empty, the first button must be a Pay button. |

Example:
```javascript
sendInvoice({
	chat_id = Integer,
	title = String,
	description = String,
	payload = String,
	provider_token = String,
	start_parameter = String,
	currency = String,
	prices = Array of LabeledPrice,
	provider_data = String,
	photo_url = String,
	photo_size = Integer,
	photo_width = Integer,
	photo_height = Integer,
	need_name = Boolean,
	need_phone_number = Boolean,
	need_email = Boolean,
	need_shipping_address = Boolean,
	send_phone_number_to_provider = Boolean,
	send_email_to_provider = Boolean,
	is_flexible = Boolean,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup,
})
```

## answerShippingQuery
If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
shipping_query_id | String | true | Unique identifier for the query to be answered |
ok | Boolean | true | Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) |
shipping_options | Array of ShippingOption | false | Required if ok is True. A JSON-serialized array of available shipping options. |
error_message | String | false | Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. &quot;Sorry, delivery to your desired address is unavailable&#39;). Telegram will display this message to the user. |

Example:
```javascript
answerShippingQuery({
	shipping_query_id = String,
	ok = Boolean,
	shipping_options = Array of ShippingOption,
	error_message = String,
})
```

## answerPreCheckoutQuery
Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
pre_checkout_query_id | String | true | Unique identifier for the query to be answered |
ok | Boolean | true | Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. |
error_message | String | false | Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. &quot;Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!&quot;). Telegram will display this message to the user. |

Example:
```javascript
answerPreCheckoutQuery({
	pre_checkout_query_id = String,
	ok = Boolean,
	error_message = String,
})
```

## sendGame
Use this method to send a game. On success, the sent Message is returned.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
chat_id | Integer | true | Unique identifier for the target chat |
game_short_name | String | true | Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather. |
disable_notification | Boolean | false | Sends the message silently. Users will receive a notification with no sound. |
reply_to_message_id | Integer | false | If the message is a reply, ID of the original message |
reply_markup | InlineKeyboardMarkup | false | A JSON-serialized object for an inline keyboard. If empty, one ‘Play game_title’ button will be shown. If not empty, the first button must launch the game. |

Example:
```javascript
sendGame({
	chat_id = Integer,
	game_short_name = String,
	disable_notification = Boolean,
	reply_to_message_id = Integer,
	reply_markup = InlineKeyboardMarkup,
})
```

## setGameScore
Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited Message, otherwise returns True. Returns an error, if the new score is not greater than the user&#39;s current score in the chat and force is False.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
user_id | Integer | true | User identifier |
score | Integer | true | New score, must be non-negative |
force | Boolean | false | Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters |
disable_edit_message | Boolean | false | Pass True, if the game message should not be automatically edited to include the current scoreboard |
chat_id | Integer | false | Required if inline_message_id is not specified. Unique identifier for the target chat |
message_id | Integer | false | Required if inline_message_id is not specified. Identifier of the sent message |
inline_message_id | String | false | Required if chat_id and message_id are not specified. Identifier of the inline message |

Example:
```javascript
setGameScore({
	user_id = Integer,
	score = Integer,
	force = Boolean,
	disable_edit_message = Boolean,
	chat_id = Integer,
	message_id = Integer,
	inline_message_id = String,
})
```

## getGameHighScores
Use this method to get data for high score tables. Will return the score of the specified user and several of his neighbors in a game. On success, returns an Array of GameHighScore objects.

Field     | Type     | Required     | Desc     |
--------- | -------- | ------------ | -------- |
user_id | Integer | true | Target user id |
chat_id | Integer | false | Required if inline_message_id is not specified. Unique identifier for the target chat |
message_id | Integer | false | Required if inline_message_id is not specified. Identifier of the sent message |
inline_message_id | String | false | Required if chat_id and message_id are not specified. Identifier of the inline message |

Example:
```javascript
getGameHighScores({
	user_id = Integer,
	chat_id = Integer,
	message_id = Integer,
	inline_message_id = String,
})
```

