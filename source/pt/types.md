# Tipos

- [Atualização](#update)
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

Esse objeto representa uma atualização por vir. Ao menos um dos parâmetros opcionais devem estar presentes em alguma atualização.

| Campo                  | Tipo               | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| update_id              | Interger (Número)  | true (Verdadeiro) | O identificador exclusivo da atualização. Atualização dos identificadores começam de um certo numero positivo e aumentam gradativamente. This ID becomes especially handy if you’re using Webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. |
| message                | Message            | false (Falso)     | New incoming message of any kind — text, photo, sticker, etc.                                                                                                                                                                                                                                                                                                                                                                                                    |
| edited_message         | Message            | false (Falso)     | New version of a message that is known to the bot and was edited                                                                                                                                                                                                                                                                                                                                                                                                 |
| channel_post           | Message            | false (Falso)     | New incoming channel post of any kind — text, photo, sticker, etc.                                                                                                                                                                                                                                                                                                                                                                                               |
| edited_channel_post  | Message            | false (Falso)     | New version of a channel post that is known to the bot and was edited                                                                                                                                                                                                                                                                                                                                                                                            |
| inline_query           | InlineQuery        | false (Falso)     | New incoming inline query                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| chosen_inline_result | ChosenInlineResult | false (Falso)     | The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.                                                                                                                                                                                                                                                         |
| callback_query         | CallbackQuery      | false (Falso)     | New incoming callback query                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| shipping_query         | ShippingQuery      | false (Falso)     | New incoming shipping query. Only for invoices with flexible price                                                                                                                                                                                                                                                                                                                                                                                               |
| pre_checkout_query   | PreCheckoutQuery   | false (Falso)     | New incoming pre-checkout query. Contains full information about checkout                                                                                                                                                                                                                                                                                                                                                                                        |

## WebhookInfo

Contains information about the current status of a webhook.

| Campo                    | Tipo                             | Requerido         | Descrição                                                                                                                   |
| ------------------------ | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| url                      | String (Sequência de caracteres) | true (Verdadeiro) | Webhook URL, may be empty if webhook is not set up                                                                          |
| has_custom_certificate | Boolen (Boleano)                 | true (Verdadeiro) | True, if a custom certificate was provided for webhook certificate checks                                                   |
| pending_update_count   | Interger (Número)                | true (Verdadeiro) | Number of updates awaiting delivery                                                                                         |
| last_error_date        | Interger (Número)                | false (Falso)     | Unix time for the most recent error that happened when trying to deliver an update via webhook                              |
| last_error_message     | String (Sequência de caracteres) | false (Falso)     | Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook |
| max_connections          | Interger (Número)                | false (Falso)     | Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery                                 |
| allowed_updates          | Array de String                  | false (Falso)     | A list of update types the bot is subscribed to. Defaults to all update types                                               |

## User

This object represents a Telegram user or bot.

| Campo         | Tipo                             | Requerido         | Descrição                                |
| ------------- | -------------------------------- | ----------------- | ---------------------------------------- |
| id            | Interger (Número)                | true (Verdadeiro) | Unique identifier for this user or bot   |
| is_bot        | Boolen (Boleano)                 | true (Verdadeiro) | True, if this user is a bot              |
| first_name    | String (Sequência de caracteres) | true (Verdadeiro) | User‘s or bot’s first name               |
| last_name     | String (Sequência de caracteres) | false (Falso)     | User‘s or bot’s last name                |
| username      | String (Sequência de caracteres) | false (Falso)     | User‘s or bot’s username                 |
| language_code | String (Sequência de caracteres) | false (Falso)     | IETF language tag of the user's language |

## Chat

This object represents a chat.

| Campo                            | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                           |
| -------------------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                               | Interger (Número)                | true (Verdadeiro) | Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty&#x2F;silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| tipo                             | String (Sequência de caracteres) | true (Verdadeiro) | Type of chat, can be either “private”, “group”, “supergroup” or “channel”                                                                                                                                                                                                                           |
| title                            | String (Sequência de caracteres) | false (Falso)     | Title, for supergroups, channels and group chats                                                                                                                                                                                                                                                    |
| username                         | String (Sequência de caracteres) | false (Falso)     | Username, for private chats, supergroups and channels if available                                                                                                                                                                                                                                  |
| first_name                       | String (Sequência de caracteres) | false (Falso)     | First name of the other party in a private chat                                                                                                                                                                                                                                                     |
| last_name                        | String (Sequência de caracteres) | false (Falso)     | Last name of the other party in a private chat                                                                                                                                                                                                                                                      |
| all_members_are_administrators | Boolen (Boleano)                 | false (Falso)     | True if a group has ‘All Members Are Admins’ enabled.                                                                                                                                                                                                                                               |
| photo                            | ChatPhoto                        | false (Falso)     | Chat photo. Returned only in getChat.                                                                                                                                                                                                                                                               |
| description                      | String (Sequência de caracteres) | false (Falso)     | Description, for supergroups and channel chats. Returned only in getChat.                                                                                                                                                                                                                           |
| invite_link                      | String (Sequência de caracteres) | false (Falso)     | Chat invite link, for supergroups and channel chats. Returned only in getChat.                                                                                                                                                                                                                      |
| pinned_message                   | Message                          | false (Falso)     | Pinned message, for supergroups and channel chats. Returned only in getChat.                                                                                                                                                                                                                        |
| sticker_set_name               | String (Sequência de caracteres) | false (Falso)     | For supergroups, name of group sticker set. Returned only in getChat.                                                                                                                                                                                                                               |
| can_set_sticker_set            | Boolen (Boleano)                 | false (Falso)     | True, if the bot can change the group sticker set. Returned only in getChat.                                                                                                                                                                                                                        |

## Message

This object represents a message.

| Campo                     | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | -------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message_id                | Interger (Número)                | true (Verdadeiro) | Unique message identifier inside this chat                                                                                                                                                                                                                                                                                                      |
| from                      | User                             | false (Falso)     | Sender, empty for messages sent to channels                                                                                                                                                                                                                                                                                                     |
| date                      | Interger (Número)                | true (Verdadeiro) | Date the message was sent in Unix time                                                                                                                                                                                                                                                                                                          |
| chat                      | Chat                             | true (Verdadeiro) | Conversation the message belongs to                                                                                                                                                                                                                                                                                                             |
| forward_from              | User                             | false (Falso)     | For forwarded messages, sender of the original message                                                                                                                                                                                                                                                                                          |
| forward_from_chat       | Chat                             | false (Falso)     | For messages forwarded from channels, information about the original channel                                                                                                                                                                                                                                                                    |
| forward_from_message_id | Interger (Número)                | false (Falso)     | For messages forwarded from channels, identifier of the original message in the channel                                                                                                                                                                                                                                                         |
| forward_signature         | String (Sequência de caracteres) | false (Falso)     | For messages forwarded from channels, signature of the post author if present                                                                                                                                                                                                                                                                   |
| forward_date              | Interger (Número)                | false (Falso)     | For forwarded messages, date the original message was sent in Unix time                                                                                                                                                                                                                                                                         |
| reply_to_message        | Message                          | false (Falso)     | For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.                                                                                                                                                                                  |
| edit_date                 | Interger (Número)                | false (Falso)     | Date the message was last edited in Unix time                                                                                                                                                                                                                                                                                                   |
| media_group_id          | String (Sequência de caracteres) | false (Falso)     | The unique identifier of a media message group this message belongs to                                                                                                                                                                                                                                                                          |
| author_signature          | String (Sequência de caracteres) | false (Falso)     | Signature of the post author for messages in channels                                                                                                                                                                                                                                                                                           |
| text                      | String (Sequência de caracteres) | false (Falso)     | For text messages, the actual UTF-8 text of the message, 0-4096 characters.                                                                                                                                                                                                                                                                     |
| entities                  | Array of MessageEntity           | false (Falso)     | For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text                                                                                                                                                                                                                                            |
| caption_entities          | Array of MessageEntity           | false (Falso)     | For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption                                                                                                                                                                                                                               |
| audio                     | Audio                            | false (Falso)     | Message is an audio file, information about the file                                                                                                                                                                                                                                                                                            |
| document                  | Document                         | false (Falso)     | Message is a general file, information about the file                                                                                                                                                                                                                                                                                           |
| game                      | Game                             | false (Falso)     | Message is a game, information about the game. More about games »                                                                                                                                                                                                                                                                               |
| photo                     | Array of PhotoSize               | false (Falso)     | Message is a photo, available sizes of the photo                                                                                                                                                                                                                                                                                                |
| sticker                   | Sticker                          | false (Falso)     | Message is a sticker, information about the sticker                                                                                                                                                                                                                                                                                             |
| video                     | Video                            | false (Falso)     | Message is a video, information about the video                                                                                                                                                                                                                                                                                                 |
| voice                     | Voice                            | false (Falso)     | Message is a voice message, information about the file                                                                                                                                                                                                                                                                                          |
| video_note                | VideoNote                        | false (Falso)     | Message is a video note, information about the video message                                                                                                                                                                                                                                                                                    |
| caption                   | String (Sequência de caracteres) | false (Falso)     | Caption for the audio, document, photo, video or voice, 0-200 characters                                                                                                                                                                                                                                                                        |
| contact                   | Contact                          | false (Falso)     | Message is a shared contact, information about the contact                                                                                                                                                                                                                                                                                      |
| location                  | Location                         | false (Falso)     | Message is a shared location, information about the location                                                                                                                                                                                                                                                                                    |
| venue                     | Venue                            | false (Falso)     | Message is a venue, information about the venue                                                                                                                                                                                                                                                                                                 |
| new_chat_members        | Array of User                    | false (Falso)     | New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)                                                                                                                                                                                                                  |
| left_chat_member        | User                             | false (Falso)     | A member was removed from the group, information about them (this member may be the bot itself)                                                                                                                                                                                                                                                 |
| new_chat_title          | String (Sequência de caracteres) | false (Falso)     | A chat title was changed to this value                                                                                                                                                                                                                                                                                                          |
| new_chat_photo          | Array of PhotoSize               | false (Falso)     | A chat photo was change to this value                                                                                                                                                                                                                                                                                                           |
| delete_chat_photo       | True                             | false (Falso)     | Service message: the chat photo was deleted                                                                                                                                                                                                                                                                                                     |
| group_chat_created      | True                             | false (Falso)     | Service message: the group has been created                                                                                                                                                                                                                                                                                                     |
| supergroup_chat_created | True                             | false (Falso)     | Service message: the supergroup has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.                                   |
| channel_chat_created    | True                             | false (Falso)     | Service message: the channel has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.                                                             |
| migrate_to_chat_id      | Interger (Número)                | false (Falso)     | The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty&#x2F;silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.   |
| migrate_from_chat_id    | Interger (Número)                | false (Falso)     | The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty&#x2F;silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| pinned_message            | Message                          | false (Falso)     | Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply.                                                                                                                                                                                       |
| invoice                   | Invoice                          | false (Falso)     | Message is an invoice for a payment, information about the invoice. More about payments »                                                                                                                                                                                                                                                       |
| successful_payment        | SuccessfulPayment                | false (Falso)     | Message is a service message about a successful payment, information about the payment. More about payments »                                                                                                                                                                                                                                   |
| connected_website         | String (Sequência de caracteres) | false (Falso)     | The domain name of the website on which the user has logged in. More about Telegram Login »                                                                                                                                                                                                                                                     |

## MessageEntity

This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.

| Campo  | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                   |
| ------ | -------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tipo   | String (Sequência de caracteres) | true (Verdadeiro) | Type of the entity. Can be mention (@username), hashtag, bot_command, url, email, bold (bold text), italic (italic text), code (monowidth string), pre (monowidth block), text_link (for clickable text URLs), text_mention (for users without usernames) |
| offset | Interger (Número)                | true (Verdadeiro) | Offset in UTF-16 code units to the start of the entity                                                                                                                                                                                                      |
| length | Interger (Número)                | true (Verdadeiro) | Length of the entity in UTF-16 code units                                                                                                                                                                                                                   |
| url    | String (Sequência de caracteres) | false (Falso)     | For “text_link” only, url that will be opened after user taps on the text                                                                                                                                                                                   |
| user   | User                             | false (Falso)     | For “text_mention” only, the mentioned user                                                                                                                                                                                                                 |

## PhotoSize

This object represents one size of a photo or a file &#x2F; sticker thumbnail.

| Campo     | Tipo                             | Requerido         | Descrição                       |
| --------- | -------------------------------- | ----------------- | ------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Unique identifier for this file |
| width     | Interger (Número)                | true (Verdadeiro) | Photo width                     |
| height    | Interger (Número)                | true (Verdadeiro) | Photo height                    |
| file_size | Interger (Número)                | false (Falso)     | File size                       |

## Audio

This object represents an audio file to be treated as music by the Telegram clients.

| Campo     | Tipo                             | Requerido         | Descrição                                                    |
| --------- | -------------------------------- | ----------------- | ------------------------------------------------------------ |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Unique identifier for this file                              |
| duration  | Interger (Número)                | true (Verdadeiro) | Duration of the audio in seconds as defined by sender        |
| performer | String (Sequência de caracteres) | false (Falso)     | Performer of the audio as defined by sender or by audio tags |
| title     | String (Sequência de caracteres) | false (Falso)     | Title of the audio as defined by sender or by audio tags     |
| mime_type | String (Sequência de caracteres) | false (Falso)     | MIME type of the file as defined by sender                   |
| file_size | Interger (Número)                | false (Falso)     | File size                                                    |

## Document

This object represents a general file (as opposed to photos, voice messages and audio files).

| Campo     | Tipo                             | Requerido         | Descrição                                  |
| --------- | -------------------------------- | ----------------- | ------------------------------------------ |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Unique file identifier                     |
| thumb     | PhotoSize                        | false (Falso)     | Document thumbnail as defined by sender    |
| file_name | String (Sequência de caracteres) | false (Falso)     | Original filename as defined by sender     |
| mime_type | String (Sequência de caracteres) | false (Falso)     | MIME type of the file as defined by sender |
| file_size | Interger (Número)                | false (Falso)     | File size                                  |

## Video

This object represents a video file.

| Campo     | Tipo                             | Requerido         | Descrição                                             |
| --------- | -------------------------------- | ----------------- | ----------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Unique identifier for this file                       |
| width     | Interger (Número)                | true (Verdadeiro) | Video width as defined by sender                      |
| height    | Interger (Número)                | true (Verdadeiro) | Video height as defined by sender                     |
| duration  | Interger (Número)                | true (Verdadeiro) | Duration of the video in seconds as defined by sender |
| thumb     | PhotoSize                        | false (Falso)     | Video thumbnail                                       |
| mime_type | String (Sequência de caracteres) | false (Falso)     | Mime type of a file as defined by sender              |
| file_size | Interger (Número)                | false (Falso)     | File size                                             |

## Voice

This object represents a voice note.

| Campo     | Tipo                             | Requerido         | Descrição                                             |
| --------- | -------------------------------- | ----------------- | ----------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Unique identifier for this file                       |
| duration  | Interger (Número)                | true (Verdadeiro) | Duration of the audio in seconds as defined by sender |
| mime_type | String (Sequência de caracteres) | false (Falso)     | MIME type of the file as defined by sender            |
| file_size | Interger (Número)                | false (Falso)     | File size                                             |

## VideoNote

This object represents a video message (available in Telegram apps as of v.4.0).

| Campo     | Tipo                             | Requerido         | Descrição                                             |
| --------- | -------------------------------- | ----------------- | ----------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Unique identifier for this file                       |
| length    | Interger (Número)                | true (Verdadeiro) | Video width and height as defined by sender           |
| duration  | Interger (Número)                | true (Verdadeiro) | Duration of the video in seconds as defined by sender |
| thumb     | PhotoSize                        | false (Falso)     | Video thumbnail                                       |
| file_size | Interger (Número)                | false (Falso)     | File size                                             |

## Contact

This object represents a phone contact.

| Campo        | Tipo                             | Requerido         | Descrição                             |
| ------------ | -------------------------------- | ----------------- | ------------------------------------- |
| phone_number | String (Sequência de caracteres) | true (Verdadeiro) | Contact's phone number                |
| first_name   | String (Sequência de caracteres) | true (Verdadeiro) | Primeiro nome do contato              |
| last_name    | String (Sequência de caracteres) | false (Falso)     | Último nome do contato                |
| user_id      | Interger (Número)                | false (Falso)     | Contact's user identifier in Telegram |

## Location

This object represents a point on the map.

| Campo     | Tipo  | Requerido         | Descrição                      |
| --------- | ----- | ----------------- | ------------------------------ |
| longitude | Float | true (Verdadeiro) | Longitude as defined by sender |
| latitude  | Float | true (Verdadeiro) | Latitude as defined by sender  |

## Venue

This object represents a venue.

| Campo         | Tipo                             | Requerido         | Descrição                          |
| ------------- | -------------------------------- | ----------------- | ---------------------------------- |
| location      | Location                         | true (Verdadeiro) | Venue location                     |
| title         | String (Sequência de caracteres) | true (Verdadeiro) | Name of the venue                  |
| address       | String (Sequência de caracteres) | true (Verdadeiro) | Address of the venue               |
| foursquare_id | String (Sequência de caracteres) | false (Falso)     | Foursquare identifier of the venue |

## UserProfilePhotos

This object represent a user's profile pictures.

| Campo       | Tipo                        | Requerido         | Descrição                                            |
| ----------- | --------------------------- | ----------------- | ---------------------------------------------------- |
| total_count | Interger (Número)           | true (Verdadeiro) | Total number of profile pictures the target user has |
| photos      | Array of Array of PhotoSize | true (Verdadeiro) | Requested profile pictures (in up to 4 sizes each)   |

## File

This object represents a file ready to be downloaded. The file can be downloaded via the link https:&#x2F;&#x2F;api.telegram.org&#x2F;file&#x2F;bot&lt;token&gt;&#x2F;&lt;file_path&gt;. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.

| Campo     | Tipo                             | Requerido         | Descrição                                                                                                                                         |
| --------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Unique identifier for this file                                                                                                                   |
| file_size | Interger (Número)                | false (Falso)     | File size, if known                                                                                                                               |
| file_path | String (Sequência de caracteres) | false (Falso)     | File path. Use https:&#x2F;&#x2F;api.telegram.org&#x2F;file&#x2F;bot&lt;token&gt;&#x2F;&lt;file_path&gt; to get the file. |

## ReplyKeyboardMarkup

This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).

| Campo               | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyboard            | Array of Array of KeyboardButton | true (Verdadeiro) | Array of button rows, each represented by an Array of KeyboardButton objects                                                                                                                                                                                                                                                                                                                                                       |
| resize_keyboard     | Boolen (Boleano)                 | false (Falso)     | Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.                                                                                                                                                                      |
| one_time_keyboard | Boolen (Boleano)                 | false (Falso)     | Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to false.                                                                                                                                  |
| selective           | Boolen (Boleano)                 | false (Falso)     | Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user requests to change the bot‘s language, bot replies to the request with a keyboard to select the new language. Other users in the group don’t see the keyboard. |

## KeyboardButton

This object represents one button of the reply keyboard. For simple text buttons String can be used instead of this object to specify text of the button. Optional fields are mutually exclusive.

| Campo            | Tipo                             | Requerido         | Descrição                                                                                                              |
| ---------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| text             | String (Sequência de caracteres) | true (Verdadeiro) | Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed   |
| request_contact  | Boolen (Boleano)                 | false (Falso)     | If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only |
| request_location | Boolen (Boleano)                 | false (Falso)     | If True, the user's current location will be sent when the button is pressed. Available in private chats only          |

## ReplyKeyboardRemove

Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup).

| Campo           | Tipo             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| remove_keyboard | True             | true (Verdadeiro) | Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)                                                                                                                                                                                                                                                       |
| selective       | Boolen (Boleano) | false (Falso)     | Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. |

## InlineKeyboardMarkup

This object represents an inline keyboard that appears right next to the message it belongs to.

| Campo           | Tipo                                   | Requerido         | Descrição                                                                          |
| --------------- | -------------------------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| inline_keyboard | Array of Array of InlineKeyboardButton | true (Verdadeiro) | Array of button rows, each represented by an Array of InlineKeyboardButton objects |

## InlineKeyboardButton

This object represents one button of an inline keyboard. You must use exactly one of the optional fields.

| Campo                                | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------ | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| text                                 | String (Sequência de caracteres) | true (Verdadeiro) | Label text on the button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| url                                  | String (Sequência de caracteres) | false (Falso)     | HTTP url to be opened when button is pressed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| callback_data                        | String (Sequência de caracteres) | false (Falso)     | Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| switch_inline_query                | String (Sequência de caracteres) | false (Falso)     | If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm… actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen. |
| switch_inline_query_current_chat | String (Sequência de caracteres) | false (Falso)     | If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot’s username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.                                                                                                                                                                                                                            |
| callback_game                        | CallbackGame                     | false (Falso)     | Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row.                                                                                                                                                                                                                                                                                                                                                                                                               |
| pay                                  | Boolen (Boleano)                 | false (Falso)     | Specify True, to send a Pay button.NOTE: This type of button must always be the first button in the first row.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## CallbackQuery

This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.

| Campo               | Tipo                             | Requerido         | Descrição                                                                                                                                              |
| ------------------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                  | String (Sequência de caracteres) | true (Verdadeiro) | Unique identifier for this query                                                                                                                       |
| from                | User                             | true (Verdadeiro) | Sender                                                                                                                                                 |
| message             | Message                          | false (Falso)     | Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old |
| inline_message_id | String (Sequência de caracteres) | false (Falso)     | Identifier of the message sent via the bot in inline mode, that originated the query.                                                                  |
| chat_instance       | String (Sequência de caracteres) | true (Verdadeiro) | Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.         |
| data                | String (Sequência de caracteres) | false (Falso)     | Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.                                            |
| game_short_name   | String (Sequência de caracteres) | false (Falso)     | Short name of a Game to be returned, serves as the unique identifier for the game                                                                      |

## ForceReply

Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot‘s message and tapped ’Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.

| Campo       | Tipo             | Requerido         | Descrição                                                                                                                                                                                                                                        |
| ----------- | ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| force_reply | True             | true (Verdadeiro) | Shows reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply'                                                                                                                                             |
| selective   | Boolen (Boleano) | false (Falso)     | Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. |

## ChatPhoto

This object represents a chat photo.

| Campo           | Tipo                             | Requerido         | Descrição                                                                                               |
| --------------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------- |
| small_file_id | String (Sequência de caracteres) | true (Verdadeiro) | Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download. |
| big_file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download.   |

## ChatMember

This object contains information about one member of a chat.

| Campo                         | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                         |
| ----------------------------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user                          | User                             | true (Verdadeiro) | Information about the user                                                                                                                                                                                                                        |
| status                        | String (Sequência de caracteres) | true (Verdadeiro) | The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”                                                                                                                                    |
| until_date                    | Interger (Número)                | false (Falso)     | Restricted and kicked only. Date when restrictions will be lifted for this user, unix time                                                                                                                                                        |
| can_be_edited               | Boolen (Boleano)                 | false (Falso)     | Administrators only. True, if the bot is allowed to edit administrator privileges of that user                                                                                                                                                    |
| can_change_info             | Boolen (Boleano)                 | false (Falso)     | Administrators only. True, if the administrator can change the chat title, photo and other settings                                                                                                                                               |
| can_post_messages           | Boolen (Boleano)                 | false (Falso)     | Administrators only. True, if the administrator can post in the channel, channels only                                                                                                                                                            |
| can_edit_messages           | Boolen (Boleano)                 | false (Falso)     | Administrators only. True, if the administrator can edit messages of other users and can pin messages, channels only                                                                                                                              |
| can_delete_messages         | Boolen (Boleano)                 | false (Falso)     | Administrators only. True, if the administrator can delete messages of other users                                                                                                                                                                |
| can_invite_users            | Boolen (Boleano)                 | false (Falso)     | Administrators only. True, if the administrator can invite new users to the chat                                                                                                                                                                  |
| can_restrict_members        | Boolen (Boleano)                 | false (Falso)     | Administrators only. True, if the administrator can restrict, ban or unban chat members                                                                                                                                                           |
| can_pin_messages            | Boolen (Boleano)                 | false (Falso)     | Administrators only. True, if the administrator can pin messages, supergroups only                                                                                                                                                                |
| can_promote_members         | Boolen (Boleano)                 | false (Falso)     | Administrators only. True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user) |
| can_send_messages           | Boolen (Boleano)                 | false (Falso)     | Restricted only. True, if the user can send text messages, contacts, locations and venues                                                                                                                                                         |
| can_send_media_messages     | Boolen (Boleano)                 | false (Falso)     | Restricted only. True, if the user can send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages                                                                                                           |
| can_send_other_messages     | Boolen (Boleano)                 | false (Falso)     | Restricted only. True, if the user can send animations, games, stickers and use inline bots, implies can_send_media_messages                                                                                                                    |
| can_add_web_page_previews | Boolen (Boleano)                 | false (Falso)     | Restricted only. True, if user may add web page previews to his messages, implies can_send_media_messages                                                                                                                                       |

## ResponseParameters

Contains information about why a request was unsuccessful.

| Campo                | Tipo              | Requerido     | Descrição                                                                                                                                                                                                                                                                                                                                     |
| -------------------- | ----------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| migrate_to_chat_id | Interger (Número) | false (Falso) | The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty&#x2F;silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| retry_after          | Interger (Número) | false (Falso) | In case of exceeding flood control, the number of seconds left to wait before the request can be repeated                                                                                                                                                                                                                                     |

## InputMediaPhoto

Represents a photo to be sent.

| Campo      | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | -------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tipo       | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be photo                                                                                                                                                                                                                                                                                                                                    |
| media      | String (Sequência de caracteres) | true (Verdadeiro) | File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach:&#x2F;&#x2F;&lt;file_attach_name&gt;" to upload a new one using multipart&#x2F;form-data under &lt;file_attach_name&gt; name. More info on Sending Files » |
| caption    | String (Sequência de caracteres) | false (Falso)     | Caption of the photo to be sent, 0-200 characters                                                                                                                                                                                                                                                                                                                    |
| parse_mode | String (Sequência de caracteres) | false (Falso)     | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.                                                                                                                                                                                                                                         |

## InputMediaVideo

Represents a video to be sent.

| Campo              | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | -------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tipo               | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be video                                                                                                                                                                                                                                                                                                                                    |
| media              | String (Sequência de caracteres) | true (Verdadeiro) | File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach:&#x2F;&#x2F;&lt;file_attach_name&gt;" to upload a new one using multipart&#x2F;form-data under &lt;file_attach_name&gt; name. More info on Sending Files » |
| caption            | String (Sequência de caracteres) | false (Falso)     | Caption of the video to be sent, 0-200 characters                                                                                                                                                                                                                                                                                                                    |
| parse_mode         | String (Sequência de caracteres) | false (Falso)     | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.                                                                                                                                                                                                                                         |
| width              | Interger (Número)                | false (Falso)     | Video width                                                                                                                                                                                                                                                                                                                                                          |
| height             | Interger (Número)                | false (Falso)     | Video height                                                                                                                                                                                                                                                                                                                                                         |
| duration           | Interger (Número)                | false (Falso)     | Video duration                                                                                                                                                                                                                                                                                                                                                       |
| supports_streaming | Boolen (Boleano)                 | false (Falso)     | Pass True, if the uploaded video is suitable for streaming                                                                                                                                                                                                                                                                                                           |

## Sticker

This object represents a sticker.

| Campo         | Tipo                             | Requerido         | Descrição                                                       |
| ------------- | -------------------------------- | ----------------- | --------------------------------------------------------------- |
| file_id       | String (Sequência de caracteres) | true (Verdadeiro) | Unique identifier for this file                                 |
| width         | Interger (Número)                | true (Verdadeiro) | Sticker width                                                   |
| height        | Interger (Número)                | true (Verdadeiro) | Sticker height                                                  |
| thumb         | PhotoSize                        | false (Falso)     | Sticker thumbnail in the .webp or .jpg format                   |
| emoji         | String (Sequência de caracteres) | false (Falso)     | Emoji associated with the sticker                               |
| set_name      | String (Sequência de caracteres) | false (Falso)     | Name of the sticker set to which the sticker belongs            |
| mask_position | MaskPosition                     | false (Falso)     | For mask stickers, the position where the mask should be placed |
| file_size     | Interger (Número)                | false (Falso)     | File size                                                       |

## StickerSet

This object represents a sticker set.

| Campo          | Tipo                             | Requerido         | Descrição                               |
| -------------- | -------------------------------- | ----------------- | --------------------------------------- |
| name           | String (Sequência de caracteres) | true (Verdadeiro) | Sticker set name                        |
| title          | String (Sequência de caracteres) | true (Verdadeiro) | Sticker set title                       |
| contains_masks | Boolen (Boleano)                 | true (Verdadeiro) | True, if the sticker set contains masks |
| stickers       | Array of Sticker                 | true (Verdadeiro) | List of all set stickers                |

## MaskPosition

This object describes the position on faces where a mask should be placed by default.

| Campo   | Tipo                             | Requerido         | Descrição                                                                                                                                                                             |
| ------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| point   | String (Sequência de caracteres) | true (Verdadeiro) | The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.                                                                      |
| x_shift | Float número                     | true (Verdadeiro) | Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. |
| y_shift | Float número                     | true (Verdadeiro) | Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.               |
| scale   | Float número                     | true (Verdadeiro) | Mask scaling coefficient. For example, 2.0 means double size.                                                                                                                         |

## InlineQuery

This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.

| Campo    | Tipo                             | Requerido         | Descrição                                                          |
| -------- | -------------------------------- | ----------------- | ------------------------------------------------------------------ |
| id       | String (Sequência de caracteres) | true (Verdadeiro) | Unique identifier for this query                                   |
| from     | User                             | true (Verdadeiro) | Sender                                                             |
| location | Location                         | false (Falso)     | Sender location, only for bots that request user location          |
| query    | String (Sequência de caracteres) | true (Verdadeiro) | Text of the query (up to 512 characters)                           |
| offset   | String (Sequência de caracteres) | true (Verdadeiro) | Offset of the results to be returned, can be controlled by the bot |

## InputTextMessageContent

Represents the content of a text message to be sent as the result of an inline query.

| Campo                      | Tipo                             | Requerido         | Descrição                                                                                                                     |
| -------------------------- | -------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| message_text               | String (Sequência de caracteres) | true (Verdadeiro) | Text of the message to be sent, 1-4096 characters                                                                             |
| parse_mode                 | String (Sequência de caracteres) | false (Falso)     | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot's message. |
| disable_web_page_preview | Boolen (Boleano)                 | false (Falso)     | Disables link previews for links in the sent message                                                                          |

## InputLocationMessageContent

Represents the content of a location message to be sent as the result of an inline query.

| Campo       | Tipo              | Requerido         | Descrição                                                                                |
| ----------- | ----------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| latitude    | Float             | true (Verdadeiro) | Latitude of the location in degrees                                                      |
| longitude   | Float             | true (Verdadeiro) | Longitude of the location in degrees                                                     |
| live_period | Interger (Número) | false (Falso)     | Period in seconds for which the location can be updated, should be between 60 and 86400. |

## InputVenueMessageContent

Represents the content of a venue message to be sent as the result of an inline query.

| Campo         | Tipo                             | Requerido         | Descrição                                    |
| ------------- | -------------------------------- | ----------------- | -------------------------------------------- |
| latitude      | Float                            | true (Verdadeiro) | Latitude of the venue in degrees             |
| longitude     | Float                            | true (Verdadeiro) | Longitude of the venue in degrees            |
| title         | String (Sequência de caracteres) | true (Verdadeiro) | Name of the venue                            |
| address       | String (Sequência de caracteres) | true (Verdadeiro) | Address of the venue                         |
| foursquare_id | String (Sequência de caracteres) | false (Falso)     | Foursquare identifier of the venue, if known |

## InputContactMessageContent

Represents the content of a contact message to be sent as the result of an inline query.

| Campo        | Tipo                             | Requerido         | Descrição                |
| ------------ | -------------------------------- | ----------------- | ------------------------ |
| phone_number | String (Sequência de caracteres) | true (Verdadeiro) | Contact's phone number   |
| first_name   | String (Sequência de caracteres) | true (Verdadeiro) | Primeiro nome do contato |
| last_name    | String (Sequência de caracteres) | false (Falso)     | Último nome do contato   |

## ChosenInlineResult

Represents a result of an inline query that was chosen by the user and sent to their chat partner.

| Campo               | Tipo                             | Requerido         | Descrição                                                                                                                                                                                    |
| ------------------- | -------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| result_id           | String (Sequência de caracteres) | true (Verdadeiro) | The unique identifier for the result that was chosen                                                                                                                                         |
| from                | User                             | true (Verdadeiro) | The user that chose the result                                                                                                                                                               |
| location            | Location                         | false (Falso)     | Sender location, only for bots that require user location                                                                                                                                    |
| inline_message_id | String (Sequência de caracteres) | false (Falso)     | Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. |
| query               | String (Sequência de caracteres) | true (Verdadeiro) | The query that was used to obtain the result                                                                                                                                                 |

## LabeledPrice

This object represents a portion of the price for goods or services.

| Campo  | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                      |
| ------ | -------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label  | String (Sequência de caracteres) | true (Verdadeiro) | Portion label                                                                                                                                                                                                                                                                                                  |
| amount | Interger (Número)                | true (Verdadeiro) | Price of the product in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Invoice

This object contains basic information about an invoice.

| Campo           | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                             |
| --------------- | -------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title           | String (Sequência de caracteres) | true (Verdadeiro) | Product name                                                                                                                                                                                                                                                                                          |
| description     | String (Sequência de caracteres) | true (Verdadeiro) | Product description                                                                                                                                                                                                                                                                                   |
| start_parameter | String (Sequência de caracteres) | true (Verdadeiro) | Unique bot deep-linking parameter that can be used to generate this invoice                                                                                                                                                                                                                           |
| currency        | String (Sequência de caracteres) | true (Verdadeiro) | Three-letter ISO 4217 currency code                                                                                                                                                                                                                                                                   |
| total_amount    | Interger (Número)                | true (Verdadeiro) | Total price in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## ShippingAddress

This object represents a shipping address.

| Campo        | Tipo                             | Requerido         | Descrição                       |
| ------------ | -------------------------------- | ----------------- | ------------------------------- |
| country_code | String (Sequência de caracteres) | true (Verdadeiro) | ISO 3166-1 alpha-2 country code |
| state        | String (Sequência de caracteres) | true (Verdadeiro) | State, if applicable            |
| city         | String (Sequência de caracteres) | true (Verdadeiro) | City                            |
| street_line1 | String (Sequência de caracteres) | true (Verdadeiro) | First line for the address      |
| street_line2 | String (Sequência de caracteres) | true (Verdadeiro) | Second line for the address     |
| post_code    | String (Sequência de caracteres) | true (Verdadeiro) | Address post code               |

## OrderInfo

This object represents information about an order.

| Campo            | Tipo                             | Requerido     | Descrição             |
| ---------------- | -------------------------------- | ------------- | --------------------- |
| name             | String (Sequência de caracteres) | false (Falso) | User name             |
| phone_number     | String (Sequência de caracteres) | false (Falso) | User's phone number   |
| email            | String (Sequência de caracteres) | false (Falso) | User email            |
| shipping_address | ShippingAddress                  | false (Falso) | User shipping address |

## ShippingOption

This object represents one shipping option.

| Campo  | Tipo                             | Requerido         | Descrição                  |
| ------ | -------------------------------- | ----------------- | -------------------------- |
| id     | String (Sequência de caracteres) | true (Verdadeiro) | Shipping option identifier |
| title  | String (Sequência de caracteres) | true (Verdadeiro) | Option title               |
| prices | Array of LabeledPrice            | true (Verdadeiro) | List of price portions     |

## SuccessfulPayment

This object contains basic information about a successful payment.

| Campo                        | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                             |
| ---------------------------- | -------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currency                     | String (Sequência de caracteres) | true (Verdadeiro) | Three-letter ISO 4217 currency code                                                                                                                                                                                                                                                                   |
| total_amount                 | Interger (Número)                | true (Verdadeiro) | Total price in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| invoice_payload              | String (Sequência de caracteres) | true (Verdadeiro) | Bot specified invoice payload                                                                                                                                                                                                                                                                         |
| shipping_option_id         | String (Sequência de caracteres) | false (Falso)     | Identifier of the shipping option chosen by the user                                                                                                                                                                                                                                                  |
| order_info                   | OrderInfo                        | false (Falso)     | Order info provided by the user                                                                                                                                                                                                                                                                       |
| telegram_payment_charge_id | String (Sequência de caracteres) | true (Verdadeiro) | Telegram payment identifier                                                                                                                                                                                                                                                                           |
| provider_payment_charge_id | String (Sequência de caracteres) | true (Verdadeiro) | Provider payment identifier                                                                                                                                                                                                                                                                           |

## ShippingQuery

This object contains information about an incoming shipping query.

| Campo            | Tipo                             | Requerido         | Descrição                       |
| ---------------- | -------------------------------- | ----------------- | ------------------------------- |
| id               | String (Sequência de caracteres) | true (Verdadeiro) | Unique query identifier         |
| from             | User                             | true (Verdadeiro) | User who sent the query         |
| invoice_payload  | String (Sequência de caracteres) | true (Verdadeiro) | Bot specified invoice payload   |
| shipping_address | ShippingAddress                  | true (Verdadeiro) | User specified shipping address |

## PreCheckoutQuery

This object contains information about an incoming pre-checkout query.

| Campo                | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                             |
| -------------------- | -------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                   | String (Sequência de caracteres) | true (Verdadeiro) | Unique query identifier                                                                                                                                                                                                                                                                               |
| from                 | User                             | true (Verdadeiro) | User who sent the query                                                                                                                                                                                                                                                                               |
| currency             | String (Sequência de caracteres) | true (Verdadeiro) | Three-letter ISO 4217 currency code                                                                                                                                                                                                                                                                   |
| total_amount         | Interger (Número)                | true (Verdadeiro) | Total price in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| invoice_payload      | String (Sequência de caracteres) | true (Verdadeiro) | Bot specified invoice payload                                                                                                                                                                                                                                                                         |
| shipping_option_id | String (Sequência de caracteres) | false (Falso)     | Identifier of the shipping option chosen by the user                                                                                                                                                                                                                                                  |
| order_info           | OrderInfo                        | false (Falso)     | Order info provided by the user                                                                                                                                                                                                                                                                       |

## Game

This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.

| Campo         | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                        |
| ------------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title         | String (Sequência de caracteres) | true (Verdadeiro) | Title of the game                                                                                                                                                                                                                                |
| description   | String (Sequência de caracteres) | true (Verdadeiro) | Description of the game                                                                                                                                                                                                                          |
| photo         | Array of PhotoSize               | true (Verdadeiro) | Photo that will be displayed in the game message in chats.                                                                                                                                                                                       |
| text          | String (Sequência de caracteres) | false (Falso)     | Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. |
| text_entities | Array of MessageEntity           | false (Falso)     | Special entities that appear in text, such as usernames, URLs, bot commands, etc.                                                                                                                                                                |
| animation     | Animation                        | false (Falso)     | Animation that will be displayed in the game message in chats. Upload via BotFather                                                                                                                                                              |

## Animation

You can provide an animation for your game so that it looks stylish in chats (check out Lumberjack for an example). This object represents an animation file to be displayed in the message containing a game.

| Campo     | Tipo                             | Requerido         | Descrição                                        |
| --------- | -------------------------------- | ----------------- | ------------------------------------------------ |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Unique file identifier                           |
| thumb     | PhotoSize                        | false (Falso)     | Animation thumbnail as defined by sender         |
| file_name | String (Sequência de caracteres) | false (Falso)     | Original animation filename as defined by sender |
| mime_type | String (Sequência de caracteres) | false (Falso)     | MIME type of the file as defined by sender       |
| file_size | Interger (Número)                | false (Falso)     | File size                                        |

## GameHighScore

This object represents one row of the high scores table for a game.

| Campo    | Tipo              | Requerido         | Descrição                                 |
| -------- | ----------------- | ----------------- | ----------------------------------------- |
| position | Interger (Número) | true (Verdadeiro) | Position in high score table for the game |
| user     | User              | true (Verdadeiro) | User                                      |
| score    | Interger (Número) | true (Verdadeiro) | Score                                     |