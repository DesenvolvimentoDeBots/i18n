# Tipos

- [Update](#update)
- [WebhookInfo](#webhookinfo)
- [User](#user)
- [Chat](#chat)
- [Message](#message)
- [MessageEntity](#messageentity)
- [PhotoSize](#photosize)
- [Audio](#audio)
- [Document](#document)
- [Video](#video)
- [Voice](#voice)
- [VideoNote](#videonote)
- [Contact](#contact)
- [Location](#location)
- [Venue](#venue)
- [UserProfilePhotos](#userprofilephotos)
- [File](#file)
- [ReplyKeyboardMarkup](#replykeyboardmarkup)
- [KeyboardButton](#keyboardbutton)
- [ReplyKeyboardRemove](#replykeyboardremove)
- [InlineKeyboardMarkup](#inlinekeyboardmarkup)
- [InlineKeyboardButton](#inlinekeyboardbutton)
- [CallbackQuery](#callbackquery)
- [ForceReply](#forcereply)
- [ChatPhoto](#chatphoto)
- [ChatMember](#chatmember)
- [ResponseParameters](#responseparameters)
- [InputMediaPhoto](#inputmediaphoto)
- [InputMediaVideo](#inputmediavideo)
- [Sticker](#sticker)
- [StickerSet](#stickerset)
- [MaskPosition](#maskposition)
- [InlineQuery](#inlinequery)
- [InputTextMessageContent](#inputtextmessagecontent)
- [InputLocationMessageContent](#inputlocationmessagecontent)
- [InputVenueMessageContent](#inputvenuemessagecontent)
- [InputContactMessageContent](#inputcontactmessagecontent)
- [ChosenInlineResult](#choseninlineresult)
- [LabeledPrice](#labeledprice)
- [Invoice](#invoice)
- [ShippingAddress](#shippingaddress)
- [OrderInfo](#orderinfo)
- [ShippingOption](#shippingoption)
- [SuccessfulPayment](#successfulpayment)
- [ShippingQuery](#shippingquery)
- [PreCheckoutQuery](#precheckoutquery)
- [Game](#game)
- [Animation](#animation)
- [GameHighScore](#gamehighscore)

## Update

This object represents an incoming update.At most one of the optional parameters can be present in any given update.

| Field                  | Type               | Required | Desc                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| update_id              | Integer            | true     | The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you’re using Webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. |
| message                | Message            | false    | New incoming message of any kind — text, photo, sticker, etc.                                                                                                                                                                                                                                                                                                                                                                              |
| edited_message         | Message            | false    | New version of a message that is known to the bot and was edited                                                                                                                                                                                                                                                                                                                                                                           |
| channel_post           | Message            | false    | New incoming channel post of any kind — text, photo, sticker, etc.                                                                                                                                                                                                                                                                                                                                                                         |
| edited_channel_post  | Message            | false    | New version of a channel post that is known to the bot and was edited                                                                                                                                                                                                                                                                                                                                                                      |
| inline_query           | InlineQuery        | false    | New incoming inline query                                                                                                                                                                                                                                                                                                                                                                                                                  |
| chosen_inline_result | ChosenInlineResult | false    | The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.                                                                                                                                                                                                                                   |
| callback_query         | CallbackQuery      | false    | New incoming callback query                                                                                                                                                                                                                                                                                                                                                                                                                |
| shipping_query         | ShippingQuery      | false    | New incoming shipping query. Only for invoices with flexible price                                                                                                                                                                                                                                                                                                                                                                         |
| pre_checkout_query   | PreCheckoutQuery   | false    | New incoming pre-checkout query. Contains full information about checkout                                                                                                                                                                                                                                                                                                                                                                  |

## WebhookInfo

Contains information about the current status of a webhook.

| Field                    | Type            | Required | Desc                                                                                                                        |
| ------------------------ | --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| url                      | String          | true     | Webhook URL, may be empty if webhook is not set up                                                                          |
| has_custom_certificate | Boolean         | true     | True, if a custom certificate was provided for webhook certificate checks                                                   |
| pending_update_count   | Integer         | true     | Number of updates awaiting delivery                                                                                         |
| last_error_date        | Integer         | false    | Unix time for the most recent error that happened when trying to deliver an update via webhook                              |
| last_error_message     | String          | false    | Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook |
| max_connections          | Integer         | false    | Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery                                 |
| allowed_updates          | Array of String | false    | A list of update types the bot is subscribed to. Defaults to all update types                                               |

## User

This object represents a Telegram user or bot.

| Field         | Type    | Required | Desc                                     |
| ------------- | ------- | -------- | ---------------------------------------- |
| id            | Integer | true     | Unique identifier for this user or bot   |
| is_bot        | Boolean | true     | True, if this user is a bot              |
| first_name    | String  | true     | User‘s or bot’s first name               |
| last_name     | String  | false    | User‘s or bot’s last name                |
| username      | String  | false    | User‘s or bot’s username                 |
| language_code | String  | false    | IETF language tag of the user's language |

## Chat

This object represents a chat.

| Field                            | Type      | Required | Desc                                                                                                                                                                                                                                                                                                |
| -------------------------------- | --------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                               | Integer   | true     | Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty&#x2F;silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| type                             | String    | true     | Type of chat, can be either “private”, “group”, “supergroup” or “channel”                                                                                                                                                                                                                           |
| title                            | String    | false    | Title, for supergroups, channels and group chats                                                                                                                                                                                                                                                    |
| username                         | String    | false    | Username, for private chats, supergroups and channels if available                                                                                                                                                                                                                                  |
| first_name                       | String    | false    | First name of the other party in a private chat                                                                                                                                                                                                                                                     |
| last_name                        | String    | false    | Last name of the other party in a private chat                                                                                                                                                                                                                                                      |
| all_members_are_administrators | Boolean   | false    | True if a group has ‘All Members Are Admins’ enabled.                                                                                                                                                                                                                                               |
| photo                            | ChatPhoto | false    | Chat photo. Returned only in getChat.                                                                                                                                                                                                                                                               |
| description                      | String    | false    | Description, for supergroups and channel chats. Returned only in getChat.                                                                                                                                                                                                                           |
| invite_link                      | String    | false    | Chat invite link, for supergroups and channel chats. Returned only in getChat.                                                                                                                                                                                                                      |
| pinned_message                   | Message   | false    | Pinned message, for supergroups and channel chats. Returned only in getChat.                                                                                                                                                                                                                        |
| sticker_set_name               | String    | false    | For supergroups, name of group sticker set. Returned only in getChat.                                                                                                                                                                                                                               |
| can_set_sticker_set            | Boolean   | false    | True, if the bot can change the group sticker set. Returned only in getChat.                                                                                                                                                                                                                        |

## Message

This object represents a message.

| Field                     | Type                   | Required | Desc                                                                                                                                                                                                                                                                                                                                            |
| ------------------------- | ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message_id                | Integer                | true     | Unique message identifier inside this chat                                                                                                                                                                                                                                                                                                      |
| from                      | User                   | false    | Sender, empty for messages sent to channels                                                                                                                                                                                                                                                                                                     |
| date                      | Integer                | true     | Date the message was sent in Unix time                                                                                                                                                                                                                                                                                                          |
| chat                      | Chat                   | true     | Conversation the message belongs to                                                                                                                                                                                                                                                                                                             |
| forward_from              | User                   | false    | For forwarded messages, sender of the original message                                                                                                                                                                                                                                                                                          |
| forward_from_chat       | Chat                   | false    | For messages forwarded from channels, information about the original channel                                                                                                                                                                                                                                                                    |
| forward_from_message_id | Integer                | false    | For messages forwarded from channels, identifier of the original message in the channel                                                                                                                                                                                                                                                         |
| forward_signature         | String                 | false    | For messages forwarded from channels, signature of the post author if present                                                                                                                                                                                                                                                                   |
| forward_date              | Integer                | false    | For forwarded messages, date the original message was sent in Unix time                                                                                                                                                                                                                                                                         |
| reply_to_message        | Message                | false    | For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.                                                                                                                                                                                  |
| edit_date                 | Integer                | false    | Date the message was last edited in Unix time                                                                                                                                                                                                                                                                                                   |
| media_group_id          | String                 | false    | The unique identifier of a media message group this message belongs to                                                                                                                                                                                                                                                                          |
| author_signature          | String                 | false    | Signature of the post author for messages in channels                                                                                                                                                                                                                                                                                           |
| text                      | String                 | false    | For text messages, the actual UTF-8 text of the message, 0-4096 characters.                                                                                                                                                                                                                                                                     |
| entities                  | Array of MessageEntity | false    | For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text                                                                                                                                                                                                                                            |
| caption_entities          | Array of MessageEntity | false    | For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption                                                                                                                                                                                                                               |
| audio                     | Audio                  | false    | Message is an audio file, information about the file                                                                                                                                                                                                                                                                                            |
| document                  | Document               | false    | Message is a general file, information about the file                                                                                                                                                                                                                                                                                           |
| game                      | Game                   | false    | Message is a game, information about the game. More about games »                                                                                                                                                                                                                                                                               |
| photo                     | Array of PhotoSize     | false    | Message is a photo, available sizes of the photo                                                                                                                                                                                                                                                                                                |
| sticker                   | Sticker                | false    | Message is a sticker, information about the sticker                                                                                                                                                                                                                                                                                             |
| video                     | Video                  | false    | Message is a video, information about the video                                                                                                                                                                                                                                                                                                 |
| voice                     | Voice                  | false    | Message is a voice message, information about the file                                                                                                                                                                                                                                                                                          |
| video_note                | VideoNote              | false    | Message is a video note, information about the video message                                                                                                                                                                                                                                                                                    |
| caption                   | String                 | false    | Caption for the audio, document, photo, video or voice, 0-200 characters                                                                                                                                                                                                                                                                        |
| contact                   | Contact                | false    | Message is a shared contact, information about the contact                                                                                                                                                                                                                                                                                      |
| location                  | Location               | false    | Message is a shared location, information about the location                                                                                                                                                                                                                                                                                    |
| venue                     | Venue                  | false    | Message is a venue, information about the venue                                                                                                                                                                                                                                                                                                 |
| new_chat_members        | Array of User          | false    | New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)                                                                                                                                                                                                                  |
| left_chat_member        | User                   | false    | A member was removed from the group, information about them (this member may be the bot itself)                                                                                                                                                                                                                                                 |
| new_chat_title          | String                 | false    | A chat title was changed to this value                                                                                                                                                                                                                                                                                                          |
| new_chat_photo          | Array of PhotoSize     | false    | A chat photo was change to this value                                                                                                                                                                                                                                                                                                           |
| delete_chat_photo       | True                   | false    | Service message: the chat photo was deleted                                                                                                                                                                                                                                                                                                     |
| group_chat_created      | True                   | false    | Service message: the group has been created                                                                                                                                                                                                                                                                                                     |
| supergroup_chat_created | True                   | false    | Service message: the supergroup has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.                                   |
| channel_chat_created    | True                   | false    | Service message: the channel has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.                                                             |
| migrate_to_chat_id      | Integer                | false    | The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty&#x2F;silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.   |
| migrate_from_chat_id    | Integer                | false    | The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty&#x2F;silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| pinned_message            | Message                | false    | Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply.                                                                                                                                                                                       |
| invoice                   | Invoice                | false    | Message is an invoice for a payment, information about the invoice. More about payments »                                                                                                                                                                                                                                                       |
| successful_payment        | SuccessfulPayment      | false    | Message is a service message about a successful payment, information about the payment. More about payments »                                                                                                                                                                                                                                   |
| connected_website         | String                 | false    | The domain name of the website on which the user has logged in. More about Telegram Login »                                                                                                                                                                                                                                                     |

## MessageEntity

This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.

| Field  | Type    | Required | Desc                                                                                                                                                                                                                                                        |
| ------ | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type   | String  | true     | Type of the entity. Can be mention (@username), hashtag, bot_command, url, email, bold (bold text), italic (italic text), code (monowidth string), pre (monowidth block), text_link (for clickable text URLs), text_mention (for users without usernames) |
| offset | Integer | true     | Offset in UTF-16 code units to the start of the entity                                                                                                                                                                                                      |
| length | Integer | true     | Length of the entity in UTF-16 code units                                                                                                                                                                                                                   |
| url    | String  | false    | For “text_link” only, url that will be opened after user taps on the text                                                                                                                                                                                   |
| user   | User    | false    | For “text_mention” only, the mentioned user                                                                                                                                                                                                                 |

## PhotoSize

This object represents one size of a photo or a file &#x2F; sticker thumbnail.

| Field     | Type    | Required | Desc                            |
| --------- | ------- | -------- | ------------------------------- |
| file_id   | String  | true     | Unique identifier for this file |
| width     | Integer | true     | Photo width                     |
| height    | Integer | true     | Photo height                    |
| file_size | Integer | false    | File size                       |

## Audio

This object represents an audio file to be treated as music by the Telegram clients.

| Field     | Type    | Required | Desc                                                         |
| --------- | ------- | -------- | ------------------------------------------------------------ |
| file_id   | String  | true     | Unique identifier for this file                              |
| duration  | Integer | true     | Duration of the audio in seconds as defined by sender        |
| performer | String  | false    | Performer of the audio as defined by sender or by audio tags |
| title     | String  | false    | Title of the audio as defined by sender or by audio tags     |
| mime_type | String  | false    | MIME type of the file as defined by sender                   |
| file_size | Integer | false    | File size                                                    |

## Document

This object represents a general file (as opposed to photos, voice messages and audio files).

| Field     | Type      | Required | Desc                                       |
| --------- | --------- | -------- | ------------------------------------------ |
| file_id   | String    | true     | Unique file identifier                     |
| thumb     | PhotoSize | false    | Document thumbnail as defined by sender    |
| file_name | String    | false    | Original filename as defined by sender     |
| mime_type | String    | false    | MIME type of the file as defined by sender |
| file_size | Integer   | false    | File size                                  |

## Video

This object represents a video file.

| Field     | Type      | Required | Desc                                                  |
| --------- | --------- | -------- | ----------------------------------------------------- |
| file_id   | String    | true     | Unique identifier for this file                       |
| width     | Integer   | true     | Video width as defined by sender                      |
| height    | Integer   | true     | Video height as defined by sender                     |
| duration  | Integer   | true     | Duration of the video in seconds as defined by sender |
| thumb     | PhotoSize | false    | Video thumbnail                                       |
| mime_type | String    | false    | Mime type of a file as defined by sender              |
| file_size | Integer   | false    | File size                                             |

## Voice

This object represents a voice note.

| Field     | Type    | Required | Desc                                                  |
| --------- | ------- | -------- | ----------------------------------------------------- |
| file_id   | String  | true     | Unique identifier for this file                       |
| duration  | Integer | true     | Duration of the audio in seconds as defined by sender |
| mime_type | String  | false    | MIME type of the file as defined by sender            |
| file_size | Integer | false    | File size                                             |

## VideoNote

This object represents a video message (available in Telegram apps as of v.4.0).

| Field     | Type      | Required | Desc                                                  |
| --------- | --------- | -------- | ----------------------------------------------------- |
| file_id   | String    | true     | Unique identifier for this file                       |
| length    | Integer   | true     | Video width and height as defined by sender           |
| duration  | Integer   | true     | Duration of the video in seconds as defined by sender |
| thumb     | PhotoSize | false    | Video thumbnail                                       |
| file_size | Integer   | false    | File size                                             |

## Contact

This object represents a phone contact.

| Field        | Type    | Required | Desc                                  |
| ------------ | ------- | -------- | ------------------------------------- |
| phone_number | String  | true     | Contact's phone number                |
| first_name   | String  | true     | Contact's first name                  |
| last_name    | String  | false    | Contact's last name                   |
| user_id      | Integer | false    | Contact's user identifier in Telegram |

## Location

This object represents a point on the map.

| Field     | Type  | Required | Desc                           |
| --------- | ----- | -------- | ------------------------------ |
| longitude | Float | true     | Longitude as defined by sender |
| latitude  | Float | true     | Latitude as defined by sender  |

## Venue

This object represents a venue.

| Field         | Type     | Required | Desc                               |
| ------------- | -------- | -------- | ---------------------------------- |
| location      | Location | true     | Venue location                     |
| title         | String   | true     | Name of the venue                  |
| address       | String   | true     | Address of the venue               |
| foursquare_id | String   | false    | Foursquare identifier of the venue |

## UserProfilePhotos

This object represent a user's profile pictures.

| Field       | Type                        | Required | Desc                                                 |
| ----------- | --------------------------- | -------- | ---------------------------------------------------- |
| total_count | Integer                     | true     | Total number of profile pictures the target user has |
| photos      | Array of Array of PhotoSize | true     | Requested profile pictures (in up to 4 sizes each)   |

## File

This object represents a file ready to be downloaded. The file can be downloaded via the link https:&#x2F;&#x2F;api.telegram.org&#x2F;file&#x2F;bot&lt;token&gt;&#x2F;&lt;file_path&gt;. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.

| Field     | Type    | Required | Desc                                                                                                                                              |
| --------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| file_id   | String  | true     | Unique identifier for this file                                                                                                                   |
| file_size | Integer | false    | File size, if known                                                                                                                               |
| file_path | String  | false    | File path. Use https:&#x2F;&#x2F;api.telegram.org&#x2F;file&#x2F;bot&lt;token&gt;&#x2F;&lt;file_path&gt; to get the file. |

## ReplyKeyboardMarkup

This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).

| Field               | Type                             | Required | Desc                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------- | -------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyboard            | Array of Array of KeyboardButton | true     | Array of button rows, each represented by an Array of KeyboardButton objects                                                                                                                                                                                                                                                                                                                                                       |
| resize_keyboard     | Boolean                          | false    | Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.                                                                                                                                                                      |
| one_time_keyboard | Boolean                          | false    | Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to false.                                                                                                                                  |
| selective           | Boolean                          | false    | Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user requests to change the bot‘s language, bot replies to the request with a keyboard to select the new language. Other users in the group don’t see the keyboard. |

## KeyboardButton

This object represents one button of the reply keyboard. For simple text buttons String can be used instead of this object to specify text of the button. Optional fields are mutually exclusive.

| Field            | Type    | Required | Desc                                                                                                                   |
| ---------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| text             | String  | true     | Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed   |
| request_contact  | Boolean | false    | If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only |
| request_location | Boolean | false    | If True, the user's current location will be sent when the button is pressed. Available in private chats only          |

## ReplyKeyboardRemove

Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup).

| Field           | Type    | Required | Desc                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| remove_keyboard | True    | true     | Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)                                                                                                                                                                                                                                                       |
| selective       | Boolean | false    | Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. |

## InlineKeyboardMarkup

This object represents an inline keyboard that appears right next to the message it belongs to.

| Field           | Type                                   | Required | Desc                                                                               |
| --------------- | -------------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| inline_keyboard | Array of Array of InlineKeyboardButton | true     | Array of button rows, each represented by an Array of InlineKeyboardButton objects |

## InlineKeyboardButton

This object represents one button of an inline keyboard. You must use exactly one of the optional fields.

| Field                                | Type         | Required | Desc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------ | ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| text                                 | String       | true     | Label text on the button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| url                                  | String       | false    | HTTP url to be opened when button is pressed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| callback_data                        | String       | false    | Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| switch_inline_query                | String       | false    | If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm… actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen. |
| switch_inline_query_current_chat | String       | false    | If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot’s username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.                                                                                                                                                                                                                            |
| callback_game                        | CallbackGame | false    | Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row.                                                                                                                                                                                                                                                                                                                                                                                                               |
| pay                                  | Boolean      | false    | Specify True, to send a Pay button.NOTE: This type of button must always be the first button in the first row.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## CallbackQuery

This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.

| Field               | Type    | Required | Desc                                                                                                                                                   |
| ------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                  | String  | true     | Unique identifier for this query                                                                                                                       |
| from                | User    | true     | Sender                                                                                                                                                 |
| message             | Message | false    | Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old |
| inline_message_id | String  | false    | Identifier of the message sent via the bot in inline mode, that originated the query.                                                                  |
| chat_instance       | String  | true     | Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.         |
| data                | String  | false    | Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.                                            |
| game_short_name   | String  | false    | Short name of a Game to be returned, serves as the unique identifier for the game                                                                      |

## ForceReply

Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot‘s message and tapped ’Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.

| Field       | Type    | Required | Desc                                                                                                                                                                                                                                             |
| ----------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| force_reply | True    | true     | Shows reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply'                                                                                                                                             |
| selective   | Boolean | false    | Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. |

## ChatPhoto

This object represents a chat photo.

| Field           | Type   | Required | Desc                                                                                                    |
| --------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------- |
| small_file_id | String | true     | Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download. |
| big_file_id   | String | true     | Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download.   |

## ChatMember

This object contains information about one member of a chat.

| Field                         | Type    | Required | Desc                                                                                                                                                                                                                                              |
| ----------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user                          | User    | true     | Information about the user                                                                                                                                                                                                                        |
| status                        | String  | true     | The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”                                                                                                                                    |
| until_date                    | Integer | false    | Restricted and kicked only. Date when restrictions will be lifted for this user, unix time                                                                                                                                                        |
| can_be_edited               | Boolean | false    | Administrators only. True, if the bot is allowed to edit administrator privileges of that user                                                                                                                                                    |
| can_change_info             | Boolean | false    | Administrators only. True, if the administrator can change the chat title, photo and other settings                                                                                                                                               |
| can_post_messages           | Boolean | false    | Administrators only. True, if the administrator can post in the channel, channels only                                                                                                                                                            |
| can_edit_messages           | Boolean | false    | Administrators only. True, if the administrator can edit messages of other users and can pin messages, channels only                                                                                                                              |
| can_delete_messages         | Boolean | false    | Administrators only. True, if the administrator can delete messages of other users                                                                                                                                                                |
| can_invite_users            | Boolean | false    | Administrators only. True, if the administrator can invite new users to the chat                                                                                                                                                                  |
| can_restrict_members        | Boolean | false    | Administrators only. True, if the administrator can restrict, ban or unban chat members                                                                                                                                                           |
| can_pin_messages            | Boolean | false    | Administrators only. True, if the administrator can pin messages, supergroups only                                                                                                                                                                |
| can_promote_members         | Boolean | false    | Administrators only. True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user) |
| can_send_messages           | Boolean | false    | Restricted only. True, if the user can send text messages, contacts, locations and venues                                                                                                                                                         |
| can_send_media_messages     | Boolean | false    | Restricted only. True, if the user can send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages                                                                                                           |
| can_send_other_messages     | Boolean | false    | Restricted only. True, if the user can send animations, games, stickers and use inline bots, implies can_send_media_messages                                                                                                                    |
| can_add_web_page_previews | Boolean | false    | Restricted only. True, if user may add web page previews to his messages, implies can_send_media_messages                                                                                                                                       |

## ResponseParameters

Contains information about why a request was unsuccessful.

| Field                | Type    | Required | Desc                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| migrate_to_chat_id | Integer | false    | The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty&#x2F;silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| retry_after          | Integer | false    | In case of exceeding flood control, the number of seconds left to wait before the request can be repeated                                                                                                                                                                                                                                     |

## InputMediaPhoto

Represents a photo to be sent.

| Field      | Type   | Required | Desc                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | String | true     | Type of the result, must be photo                                                                                                                                                                                                                                                                                                                                    |
| media      | String | true     | File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach:&#x2F;&#x2F;&lt;file_attach_name&gt;" to upload a new one using multipart&#x2F;form-data under &lt;file_attach_name&gt; name. More info on Sending Files » |
| caption    | String | false    | Caption of the photo to be sent, 0-200 characters                                                                                                                                                                                                                                                                                                                    |
| parse_mode | String | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.                                                                                                                                                                                                                                         |

## InputMediaVideo

Represents a video to be sent.

| Field              | Type    | Required | Desc                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type               | String  | true     | Type of the result, must be video                                                                                                                                                                                                                                                                                                                                    |
| media              | String  | true     | File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach:&#x2F;&#x2F;&lt;file_attach_name&gt;" to upload a new one using multipart&#x2F;form-data under &lt;file_attach_name&gt; name. More info on Sending Files » |
| caption            | String  | false    | Caption of the video to be sent, 0-200 characters                                                                                                                                                                                                                                                                                                                    |
| parse_mode         | String  | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.                                                                                                                                                                                                                                         |
| width              | Integer | false    | Video width                                                                                                                                                                                                                                                                                                                                                          |
| height             | Integer | false    | Video height                                                                                                                                                                                                                                                                                                                                                         |
| duration           | Integer | false    | Video duration                                                                                                                                                                                                                                                                                                                                                       |
| supports_streaming | Boolean | false    | Pass True, if the uploaded video is suitable for streaming                                                                                                                                                                                                                                                                                                           |

## Sticker

This object represents a sticker.

| Field         | Type         | Required | Desc                                                            |
| ------------- | ------------ | -------- | --------------------------------------------------------------- |
| file_id       | String       | true     | Unique identifier for this file                                 |
| width         | Integer      | true     | Sticker width                                                   |
| height        | Integer      | true     | Sticker height                                                  |
| thumb         | PhotoSize    | false    | Sticker thumbnail in the .webp or .jpg format                   |
| emoji         | String       | false    | Emoji associated with the sticker                               |
| set_name      | String       | false    | Name of the sticker set to which the sticker belongs            |
| mask_position | MaskPosition | false    | For mask stickers, the position where the mask should be placed |
| file_size     | Integer      | false    | File size                                                       |

## StickerSet

This object represents a sticker set.

| Field          | Type             | Required | Desc                                    |
| -------------- | ---------------- | -------- | --------------------------------------- |
| name           | String           | true     | Sticker set name                        |
| title          | String           | true     | Sticker set title                       |
| contains_masks | Boolean          | true     | True, if the sticker set contains masks |
| stickers       | Array of Sticker | true     | List of all set stickers                |

## MaskPosition

This object describes the position on faces where a mask should be placed by default.

| Field   | Type         | Required | Desc                                                                                                                                                                                  |
| ------- | ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| point   | String       | true     | The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.                                                                      |
| x_shift | Float number | true     | Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. |
| y_shift | Float number | true     | Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.               |
| scale   | Float number | true     | Mask scaling coefficient. For example, 2.0 means double size.                                                                                                                         |

## InlineQuery

This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.

| Field    | Type     | Required | Desc                                                               |
| -------- | -------- | -------- | ------------------------------------------------------------------ |
| id       | String   | true     | Unique identifier for this query                                   |
| from     | User     | true     | Sender                                                             |
| location | Location | false    | Sender location, only for bots that request user location          |
| query    | String   | true     | Text of the query (up to 512 characters)                           |
| offset   | String   | true     | Offset of the results to be returned, can be controlled by the bot |

## InputTextMessageContent

Represents the content of a text message to be sent as the result of an inline query.

| Field                      | Type    | Required | Desc                                                                                                                          |
| -------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| message_text               | String  | true     | Text of the message to be sent, 1-4096 characters                                                                             |
| parse_mode                 | String  | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot's message. |
| disable_web_page_preview | Boolean | false    | Disables link previews for links in the sent message                                                                          |

## InputLocationMessageContent

Represents the content of a location message to be sent as the result of an inline query.

| Field       | Type    | Required | Desc                                                                                     |
| ----------- | ------- | -------- | ---------------------------------------------------------------------------------------- |
| latitude    | Float   | true     | Latitude of the location in degrees                                                      |
| longitude   | Float   | true     | Longitude of the location in degrees                                                     |
| live_period | Integer | false    | Period in seconds for which the location can be updated, should be between 60 and 86400. |

## InputVenueMessageContent

Represents the content of a venue message to be sent as the result of an inline query.

| Field         | Type   | Required | Desc                                         |
| ------------- | ------ | -------- | -------------------------------------------- |
| latitude      | Float  | true     | Latitude of the venue in degrees             |
| longitude     | Float  | true     | Longitude of the venue in degrees            |
| title         | String | true     | Name of the venue                            |
| address       | String | true     | Address of the venue                         |
| foursquare_id | String | false    | Foursquare identifier of the venue, if known |

## InputContactMessageContent

Represents the content of a contact message to be sent as the result of an inline query.

| Field        | Type   | Required | Desc                   |
| ------------ | ------ | -------- | ---------------------- |
| phone_number | String | true     | Contact's phone number |
| first_name   | String | true     | Contact's first name   |
| last_name    | String | false    | Contact's last name    |

## ChosenInlineResult

Represents a result of an inline query that was chosen by the user and sent to their chat partner.

| Field               | Type     | Required | Desc                                                                                                                                                                                         |
| ------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| result_id           | String   | true     | The unique identifier for the result that was chosen                                                                                                                                         |
| from                | User     | true     | The user that chose the result                                                                                                                                                               |
| location            | Location | false    | Sender location, only for bots that require user location                                                                                                                                    |
| inline_message_id | String   | false    | Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. |
| query               | String   | true     | The query that was used to obtain the result                                                                                                                                                 |

## LabeledPrice

This object represents a portion of the price for goods or services.

| Field  | Type    | Required | Desc                                                                                                                                                                                                                                                                                                           |
| ------ | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label  | String  | true     | Portion label                                                                                                                                                                                                                                                                                                  |
| amount | Integer | true     | Price of the product in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Invoice

This object contains basic information about an invoice.

| Field           | Type    | Required | Desc                                                                                                                                                                                                                                                                                                  |
| --------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title           | String  | true     | Product name                                                                                                                                                                                                                                                                                          |
| description     | String  | true     | Product description                                                                                                                                                                                                                                                                                   |
| start_parameter | String  | true     | Unique bot deep-linking parameter that can be used to generate this invoice                                                                                                                                                                                                                           |
| currency        | String  | true     | Three-letter ISO 4217 currency code                                                                                                                                                                                                                                                                   |
| total_amount    | Integer | true     | Total price in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## ShippingAddress

This object represents a shipping address.

| Field        | Type   | Required | Desc                            |
| ------------ | ------ | -------- | ------------------------------- |
| country_code | String | true     | ISO 3166-1 alpha-2 country code |
| state        | String | true     | State, if applicable            |
| city         | String | true     | City                            |
| street_line1 | String | true     | First line for the address      |
| street_line2 | String | true     | Second line for the address     |
| post_code    | String | true     | Address post code               |

## OrderInfo

This object represents information about an order.

| Field            | Type            | Required | Desc                  |
| ---------------- | --------------- | -------- | --------------------- |
| name             | String          | false    | User name             |
| phone_number     | String          | false    | User's phone number   |
| email            | String          | false    | User email            |
| shipping_address | ShippingAddress | false    | User shipping address |

## ShippingOption

This object represents one shipping option.

| Field  | Type                  | Required | Desc                       |
| ------ | --------------------- | -------- | -------------------------- |
| id     | String                | true     | Shipping option identifier |
| title  | String                | true     | Option title               |
| prices | Array of LabeledPrice | true     | List of price portions     |

## SuccessfulPayment

This object contains basic information about a successful payment.

| Field                        | Type      | Required | Desc                                                                                                                                                                                                                                                                                                  |
| ---------------------------- | --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currency                     | String    | true     | Three-letter ISO 4217 currency code                                                                                                                                                                                                                                                                   |
| total_amount                 | Integer   | true     | Total price in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| invoice_payload              | String    | true     | Bot specified invoice payload                                                                                                                                                                                                                                                                         |
| shipping_option_id         | String    | false    | Identifier of the shipping option chosen by the user                                                                                                                                                                                                                                                  |
| order_info                   | OrderInfo | false    | Order info provided by the user                                                                                                                                                                                                                                                                       |
| telegram_payment_charge_id | String    | true     | Telegram payment identifier                                                                                                                                                                                                                                                                           |
| provider_payment_charge_id | String    | true     | Provider payment identifier                                                                                                                                                                                                                                                                           |

## ShippingQuery

This object contains information about an incoming shipping query.

| Field            | Type            | Required | Desc                            |
| ---------------- | --------------- | -------- | ------------------------------- |
| id               | String          | true     | Unique query identifier         |
| from             | User            | true     | User who sent the query         |
| invoice_payload  | String          | true     | Bot specified invoice payload   |
| shipping_address | ShippingAddress | true     | User specified shipping address |

## PreCheckoutQuery

This object contains information about an incoming pre-checkout query.

| Field                | Type      | Required | Desc                                                                                                                                                                                                                                                                                                  |
| -------------------- | --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                   | String    | true     | Unique query identifier                                                                                                                                                                                                                                                                               |
| from                 | User      | true     | User who sent the query                                                                                                                                                                                                                                                                               |
| currency             | String    | true     | Three-letter ISO 4217 currency code                                                                                                                                                                                                                                                                   |
| total_amount         | Integer   | true     | Total price in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| invoice_payload      | String    | true     | Bot specified invoice payload                                                                                                                                                                                                                                                                         |
| shipping_option_id | String    | false    | Identifier of the shipping option chosen by the user                                                                                                                                                                                                                                                  |
| order_info           | OrderInfo | false    | Order info provided by the user                                                                                                                                                                                                                                                                       |

## Game

This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.

| Field         | Type                   | Required | Desc                                                                                                                                                                                                                                             |
| ------------- | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title         | String                 | true     | Title of the game                                                                                                                                                                                                                                |
| description   | String                 | true     | Description of the game                                                                                                                                                                                                                          |
| photo         | Array of PhotoSize     | true     | Photo that will be displayed in the game message in chats.                                                                                                                                                                                       |
| text          | String                 | false    | Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. |
| text_entities | Array of MessageEntity | false    | Special entities that appear in text, such as usernames, URLs, bot commands, etc.                                                                                                                                                                |
| animation     | Animation              | false    | Animation that will be displayed in the game message in chats. Upload via BotFather                                                                                                                                                              |

## Animation

You can provide an animation for your game so that it looks stylish in chats (check out Lumberjack for an example). This object represents an animation file to be displayed in the message containing a game.

| Field     | Type      | Required | Desc                                             |
| --------- | --------- | -------- | ------------------------------------------------ |
| file_id   | String    | true     | Unique file identifier                           |
| thumb     | PhotoSize | false    | Animation thumbnail as defined by sender         |
| file_name | String    | false    | Original animation filename as defined by sender |
| mime_type | String    | false    | MIME type of the file as defined by sender       |
| file_size | Integer   | false    | File size                                        |

## GameHighScore

This object represents one row of the high scores table for a game.

| Field    | Type    | Required | Desc                                      |
| -------- | ------- | -------- | ----------------------------------------- |
| position | Integer | true     | Position in high score table for the game |
| user     | User    | true     | User                                      |
| score    | Integer | true     | Score                                     |