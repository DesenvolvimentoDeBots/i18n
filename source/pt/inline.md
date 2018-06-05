# Inline Query

- [InlineQueryResultArticle](#InlineQueryResultArticle)
- [InlineQueryResultPhoto](#InlineQueryResultPhoto)
- [InlineQueryResultGif](#InlineQueryResultGif)
- [InlineQueryResultMpeg4Gif](#InlineQueryResultMpeg4Gif)
- [InlineQueryResultVideo](#InlineQueryResultVideo)
- [InlineQueryResultAudio](#InlineQueryResultAudio)
- [InlineQueryResultVoice](#InlineQueryResultVoice)
- [InlineQueryResultDocument](#InlineQueryResultDocument)
- [InlineQueryResultLocation](#InlineQueryResultLocation)
- [InlineQueryResultVenue](#InlineQueryResultVenue)
- [InlineQueryResultContact](#InlineQueryResultContact)
- [InlineQueryResultGame](#InlineQueryResultGame)
- [InlineQueryResultCachedPhoto](#InlineQueryResultCachedPhoto)
- [InlineQueryResultCachedGif](#InlineQueryResultCachedGif)
- [InlineQueryResultCachedMpeg4Gif](#InlineQueryResultCachedMpeg4Gif)
- [InlineQueryResultCachedSticker](#InlineQueryResultCachedSticker)
- [InlineQueryResultCachedDocument](#InlineQueryResultCachedDocument)
- [InlineQueryResultCachedVideo](#InlineQueryResultCachedVideo)
- [InlineQueryResultCachedVoice](#InlineQueryResultCachedVoice)
- [InlineQueryResultCachedAudio](#InlineQueryResultCachedAudio)

## InlineQueryResultArticle

Represents a link to an article or web page.

| Field                   | Type                 | Required | Desc                                                            |
| ----------------------- | -------------------- | -------- | --------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be article                             |
| id                      | String               | true     | Unique identifier for this result, 1-64 Bytes                   |
| title                   | String               | true     | Title of the result                                             |
| input_message_content | InputMessageContent  | true     | Content of the message to be sent                               |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                         |
| url                     | String               | false    | URL of the result                                               |
| hide_url                | Boolean              | false    | Pass True, if you don't want the URL to be shown in the message |
| description             | String               | false    | Short description of the result                                 |
| thumb_url               | String               | false    | Url of the thumbnail for the result                             |
| thumb_width             | Integer              | false    | Thumbnail width                                                 |
| thumb_height            | Integer              | false    | Thumbnail height                                                |

Example:

```javascript
[{
    type = String,
    id = String,
    title = String,
    input_message_content = InputMessageContent,
    reply_markup = InlineKeyboardMarkup,
    url = String,
    hide_url = Boolean,
    description = String,
    thumb_url = String,
    thumb_width = Integer,
    thumb_height = Integer,
}]
```

## InlineQueryResultPhoto

Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be photo                                                                                            |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| photo_url               | String               | true     | A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB                                       |
| thumb_url               | String               | true     | URL of the thumbnail for the photo                                                                                           |
| photo_width             | Integer              | false    | Width of the photo                                                                                                           |
| photo_height            | Integer              | false    | Height of the photo                                                                                                          |
| title                   | String               | false    | Title for the result                                                                                                         |
| description             | String               | false    | Short description of the result                                                                                              |
| caption                 | String               | false    | Caption of the photo to be sent, 0-200 characters                                                                            |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the photo                                                                       |

Example:

```javascript
[{
    type = String,
    id = String,
    photo_url = String,
    thumb_url = String,
    photo_width = Integer,
    photo_height = Integer,
    title = String,
    description = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultGif

Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be gif                                                                                              |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| gif_url                 | String               | true     | A valid URL for the GIF file. File size must not exceed 1MB                                                                  |
| gif_width               | Integer              | false    | Width of the GIF                                                                                                             |
| gif_height              | Integer              | false    | Height of the GIF                                                                                                            |
| gif_duration            | Integer              | false    | Duration of the GIF                                                                                                          |
| thumb_url               | String               | true     | URL of the static thumbnail for the result (jpeg or gif)                                                                     |
| title                   | String               | false    | Title for the result                                                                                                         |
| caption                 | String               | false    | Caption of the GIF file to be sent, 0-200 characters                                                                         |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the GIF animation                                                               |

Example:

```javascript
[{
    type = String,
    id = String,
    gif_url = String,
    gif_width = Integer,
    gif_height = Integer,
    gif_duration = Integer,
    thumb_url = String,
    title = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultMpeg4Gif

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be mpeg4_gif                                                                                        |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| mpeg4_url               | String               | true     | A valid URL for the MP4 file. File size must not exceed 1MB                                                                  |
| mpeg4_width             | Integer              | false    | Video width                                                                                                                  |
| mpeg4_height            | Integer              | false    | Video height                                                                                                                 |
| mpeg4_duration          | Integer              | false    | Video duration                                                                                                               |
| thumb_url               | String               | true     | URL of the static thumbnail (jpeg or gif) for the result                                                                     |
| title                   | String               | false    | Title for the result                                                                                                         |
| caption                 | String               | false    | Caption of the MPEG-4 file to be sent, 0-200 characters                                                                      |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the video animation                                                             |

Example:

```javascript
[{
    type = String,
    id = String,
    mpeg4_url = String,
    mpeg4_width = Integer,
    mpeg4_height = Integer,
    mpeg4_duration = Integer,
    thumb_url = String,
    title = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultVideo

Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.

| Field                   | Type                 | Required | Desc                                                                                                                                                                       |
| ----------------------- | -------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be video                                                                                                                                          |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                                                              |
| video_url               | String               | true     | A valid URL for the embedded video player or video file                                                                                                                    |
| mime_type               | String               | true     | Mime type of the content of video url, “text/html” or “video/mp4”                                                                                                          |
| thumb_url               | String               | true     | URL of the thumbnail (jpeg only) for the video                                                                                                                             |
| title                   | String               | true     | Title for the result                                                                                                                                                       |
| caption                 | String               | false    | Caption of the video to be sent, 0-200 characters                                                                                                                          |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.                                               |
| video_width             | Integer              | false    | Video width                                                                                                                                                                |
| video_height            | Integer              | false    | Video height                                                                                                                                                               |
| video_duration          | Integer              | false    | Video duration in seconds                                                                                                                                                  |
| description             | String               | false    | Short description of the result                                                                                                                                            |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                                                                    |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). |

Example:

```javascript
[{
    type = String,
    id = String,
    video_url = String,
    mime_type = String,
    thumb_url = String,
    title = String,
    caption = String,
    parse_mode = String,
    video_width = Integer,
    video_height = Integer,
    video_duration = Integer,
    description = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultAudio

Represents a link to an mp3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be audio                                                                                            |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| audio_url               | String               | true     | A valid URL for the audio file                                                                                               |
| title                   | String               | true     | Title                                                                                                                        |
| caption                 | String               | false    | Caption, 0-200 characters                                                                                                    |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| performer               | String               | false    | Performer                                                                                                                    |
| audio_duration          | Integer              | false    | Audio duration in seconds                                                                                                    |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the audio                                                                       |

Example:

```javascript
[{
    type = String,
    id = String,
    audio_url = String,
    title = String,
    caption = String,
    parse_mode = String,
    performer = String,
    audio_duration = Integer,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultVoice

Represents a link to a voice recording in an .ogg container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be voice                                                                                            |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| voice_url               | String               | true     | A valid URL for the voice recording                                                                                          |
| title                   | String               | true     | Recording title                                                                                                              |
| caption                 | String               | false    | Caption, 0-200 characters                                                                                                    |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| voice_duration          | Integer              | false    | Recording duration in seconds                                                                                                |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the voice recording                                                             |

Example:

```javascript
[{
    type = String,
    id = String,
    voice_url = String,
    title = String,
    caption = String,
    parse_mode = String,
    voice_duration = Integer,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultDocument

Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be document                                                                                         |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| title                   | String               | true     | Title for the result                                                                                                         |
| caption                 | String               | false    | Caption of the document to be sent, 0-200 characters                                                                         |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| document_url            | String               | true     | A valid URL for the file                                                                                                     |
| mime_type               | String               | true     | Mime type of the content of the file, either “application/pdf” or “application/zip”                                          |
| description             | String               | false    | Short description of the result                                                                                              |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the file                                                                        |
| thumb_url               | String               | false    | URL of the thumbnail (jpeg only) for the file                                                                                |
| thumb_width             | Integer              | false    | Thumbnail width                                                                                                              |
| thumb_height            | Integer              | false    | Thumbnail height                                                                                                             |

Example:

```javascript
[{
    type = String,
    id = String,
    title = String,
    caption = String,
    parse_mode = String,
    document_url = String,
    mime_type = String,
    description = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
    thumb_url = String,
    thumb_width = Integer,
    thumb_height = Integer,
}]
```

## InlineQueryResultLocation

Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.

| Field                   | Type                 | Required | Desc                                                                                     |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be location                                                     |
| id                      | String               | true     | Unique identifier for this result, 1-64 Bytes                                            |
| latitude                | Float number         | true     | Location latitude in degrees                                                             |
| longitude               | Float number         | true     | Location longitude in degrees                                                            |
| title                   | String               | true     | Location title                                                                           |
| live_period             | Integer              | false    | Period in seconds for which the location can be updated, should be between 60 and 86400. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                  |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the location                                |
| thumb_url               | String               | false    | Url of the thumbnail for the result                                                      |
| thumb_width             | Integer              | false    | Thumbnail width                                                                          |
| thumb_height            | Integer              | false    | Thumbnail height                                                                         |

Example:

```javascript
[{
    type = String,
    id = String,
    latitude = Float number,
    longitude = Float number,
    title = String,
    live_period = Integer,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
    thumb_url = String,
    thumb_width = Integer,
    thumb_height = Integer,
}]
```

## InlineQueryResultVenue

Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.

| Field                   | Type                 | Required | Desc                                                   |
| ----------------------- | -------------------- | -------- | ------------------------------------------------------ |
| type                    | String               | true     | Type of the result, must be venue                      |
| id                      | String               | true     | Unique identifier for this result, 1-64 Bytes          |
| latitude                | Float                | true     | Latitude of the venue location in degrees              |
| longitude               | Float                | true     | Longitude of the venue location in degrees             |
| title                   | String               | true     | Title of the venue                                     |
| address                 | String               | true     | Address of the venue                                   |
| foursquare_id           | String               | false    | Foursquare identifier of the venue if known            |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the venue |
| thumb_url               | String               | false    | Url of the thumbnail for the result                    |
| thumb_width             | Integer              | false    | Thumbnail width                                        |
| thumb_height            | Integer              | false    | Thumbnail height                                       |

Example:

```javascript
[{
    type = String,
    id = String,
    latitude = Float,
    longitude = Float,
    title = String,
    address = String,
    foursquare_id = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
    thumb_url = String,
    thumb_width = Integer,
    thumb_height = Integer,
}]
```

## InlineQueryResultContact

Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.

| Field                   | Type                 | Required | Desc                                                     |
| ----------------------- | -------------------- | -------- | -------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be contact                      |
| id                      | String               | true     | Unique identifier for this result, 1-64 Bytes            |
| phone_number            | String               | true     | Contact's phone number                                   |
| first_name              | String               | true     | Contact's first name                                     |
| last_name               | String               | false    | Contact's last name                                      |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                  |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the contact |
| thumb_url               | String               | false    | Url of the thumbnail for the result                      |
| thumb_width             | Integer              | false    | Thumbnail width                                          |
| thumb_height            | Integer              | false    | Thumbnail height                                         |

Example:

```javascript
[{
    type = String,
    id = String,
    phone_number = String,
    first_name = String,
    last_name = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
    thumb_url = String,
    thumb_width = Integer,
    thumb_height = Integer,
}]
```

## InlineQueryResultGame

Represents a Game.

| Field             | Type                 | Required | Desc                                          |
| ----------------- | -------------------- | -------- | --------------------------------------------- |
| type              | String               | true     | Type of the result, must be game              |
| id                | String               | true     | Unique identifier for this result, 1-64 bytes |
| game_short_name | String               | true     | Short name of the game                        |
| reply_markup      | InlineKeyboardMarkup | false    | Inline keyboard attached to the message       |

Example:

```javascript
[{
    type = String,
    id = String,
    game_short_name = String,
    reply_markup = InlineKeyboardMarkup,
}]
```

## InlineQueryResultCachedPhoto

Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be photo                                                                                            |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| photo_file_id         | String               | true     | A valid file identifier of the photo                                                                                         |
| title                   | String               | false    | Title for the result                                                                                                         |
| description             | String               | false    | Short description of the result                                                                                              |
| caption                 | String               | false    | Caption of the photo to be sent, 0-200 characters                                                                            |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the photo                                                                       |

Example:

```javascript
[{
    type = String,
    id = String,
    photo_file_id = String,
    title = String,
    description = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultCachedGif

Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be gif                                                                                              |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| gif_file_id           | String               | true     | A valid file identifier for the GIF file                                                                                     |
| title                   | String               | false    | Title for the result                                                                                                         |
| caption                 | String               | false    | Caption of the GIF file to be sent, 0-200 characters                                                                         |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the GIF animation                                                               |

Example:

```javascript
[{
    type = String,
    id = String,
    gif_file_id = String,
    title = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultCachedMpeg4Gif

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be mpeg4_gif                                                                                        |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| mpeg4_file_id         | String               | true     | A valid file identifier for the MP4 file                                                                                     |
| title                   | String               | false    | Title for the result                                                                                                         |
| caption                 | String               | false    | Caption of the MPEG-4 file to be sent, 0-200 characters                                                                      |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the video animation                                                             |

Example:

```javascript
[{
    type = String,
    id = String,
    mpeg4_file_id = String,
    title = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultCachedSticker

Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.

| Field                   | Type                 | Required | Desc                                                     |
| ----------------------- | -------------------- | -------- | -------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be sticker                      |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes            |
| sticker_file_id       | String               | true     | A valid file identifier of the sticker                   |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                  |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the sticker |

Example:

```javascript
[{
    type = String,
    id = String,
    sticker_file_id = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultCachedDocument

Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be document                                                                                         |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| title                   | String               | true     | Title for the result                                                                                                         |
| document_file_id      | String               | true     | A valid file identifier for the file                                                                                         |
| description             | String               | false    | Short description of the result                                                                                              |
| caption                 | String               | false    | Caption of the document to be sent, 0-200 characters                                                                         |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the file                                                                        |

Example:

```javascript
[{
    type = String,
    id = String,
    title = String,
    document_file_id = String,
    description = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultCachedVideo

Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be video                                                                                            |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| video_file_id         | String               | true     | A valid file identifier for the video file                                                                                   |
| title                   | String               | true     | Title for the result                                                                                                         |
| description             | String               | false    | Short description of the result                                                                                              |
| caption                 | String               | false    | Caption of the video to be sent, 0-200 characters                                                                            |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the video                                                                       |

Example:

```javascript
[{
    type = String,
    id = String,
    video_file_id = String,
    title = String,
    description = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultCachedVoice

Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be voice                                                                                            |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| voice_file_id         | String               | true     | A valid file identifier for the voice message                                                                                |
| title                   | String               | true     | Voice message title                                                                                                          |
| caption                 | String               | false    | Caption, 0-200 characters                                                                                                    |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the voice message                                                               |

Example:

```javascript
[{
    type = String,
    id = String,
    voice_file_id = String,
    title = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultCachedAudio

Represents a link to an mp3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.

| Field                   | Type                 | Required | Desc                                                                                                                         |
| ----------------------- | -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| type                    | String               | true     | Type of the result, must be audio                                                                                            |
| id                      | String               | true     | Unique identifier for this result, 1-64 bytes                                                                                |
| audio_file_id         | String               | true     | A valid file identifier for the audio file                                                                                   |
| caption                 | String               | false    | Caption, 0-200 characters                                                                                                    |
| parse_mode              | String               | false    | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption. |
| reply_markup            | InlineKeyboardMarkup | false    | Inline keyboard attached to the message                                                                                      |
| input_message_content | InputMessageContent  | false    | Content of the message to be sent instead of the audio                                                                       |

Example:

```javascript
[{
    type = String,
    id = String,
    audio_file_id = String,
    caption = String,
    parse_mode = String,
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```