# Inline Query

- [InlineQueryResultArticle](#inlinequeryresultarticle)
- [InlineQueryResultPhoto](#inlinequeryresultphoto)
- [InlineQueryResultGif](#inlinequeryresultgif)
- [InlineQueryResultMpeg4Gif](#inlinequeryresultmpeg4gif)
- [InlineQueryResultVideo](#inlinequeryresultvideo)
- [InlineQueryResultAudio](#inlinequeryresultaudio)
- [InlineQueryResultVoice](#inlinequeryresultvoice)
- [InlineQueryResultDocument](#inlinequeryresultdocument)
- [InlineQueryResultLocation](#inlinequeryresultlocation)
- [InlineQueryResultVenue](#inlinequeryresultvenue)
- [InlineQueryResultContact](#inlinequeryresultcontact)
- [InlineQueryResultGame](#inlinequeryresultgame)
- [InlineQueryResultCachedPhoto](#inlinequeryresultcachedphoto)
- [InlineQueryResultCachedGif](#inlinequeryresultcachedgif)
- [InlineQueryResultCachedMpeg4Gif](#inlinequeryresultcachedmpeg4gif)
- [InlineQueryResultCachedSticker](#inlinequeryresultcachedsticker)
- [InlineQueryResultCachedDocument](#inlinequeryresultcacheddocument)
- [InlineQueryResultCachedVideo](#inlinequeryresultcachedvideo)
- [InlineQueryResultCachedVoice](#inlinequeryresultcachedvoice)
- [InlineQueryResultCachedAudio](#inlinequeryresultcachedaudio)

## InlineQueryResultArticle

Representa um link para um artigo ou página da web.

| Campo                   | Tipo                             | Requerido         | Descrição                                                         |
| ----------------------- | -------------------------------- | ----------------- | ----------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "article"                                |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes              |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do result                                                  |
| input_message_content | InputMessageContent              | true (Verdadeiro) | O conteúdo da mensagem a ser enviada                              |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                              |
| url                     | String (Sequência de caracteres) | false (Falso)     | URL do resultado                                                  |
| hide_url                | Boolen (Boleano)                 | false (Falso)     | Passe True se você não deseja que o URL seja mostrado na mensagem |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                         |
| thumb_url               | String (Sequência de caracteres) | false (Falso)     | URL da miniatura do result                                        |
| thumb_width             | Integer (Número)                 | false (Falso)     | Largura da miniatura                                              |
| thumb_height            | Integer (Número)                 | false (Falso)     | Altura da miniatura                                               |

Exemplo:

```javascript
[{
    type = String (Sequência de caracteres),
    id = String (Sequência de caracteres),
    title = String (Sequência de caracteres),
    input_message_content = InputMessageContent,
    reply_markup = InlineKeyboardMarkup,
    url = String (Sequência de caracteres),
    hide_url = Boolean (Booleano),
    description = String (Sequência de caracteres),
    thumb_url = String (Sequência de caracteres),
    thumb_width = Integer (Número),
    thumb_height = Integer (Número),
}]
```

## InlineQueryResultPhoto

Representa um link para um objeto do tipo photo. Por padrão essa foto será enviada pelo usuário com legenda opcional. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                           |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "photo"                                                                    |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                                |
| photo_url               | String (Sequência de caracteres) | true (Verdadeiro) | Uma URL válida da foto. A foto deve estar no formato jpeg. Tamanho da foto não deve ultrapassar 5MB |
| thumb_url               | String (Sequência de caracteres) | true (Verdadeiro) | URL da miniatura da foto                                                                            |
| photo_width             | Integer (Número)                 | false (Falso)     | Largura da foto                                                                                     |
| photo_height            | Integer (Número)                 | false (Falso)     | Altura da foto                                                                                      |
| title                   | String (Sequência de caracteres) | false (Falso)     | Título do result                                                                                    |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                           |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda da foto a ser enviada, 0-200 caracteres                                                     |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF.       |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                                |
| input_message_content | InputMessageContent              | false (Falso)     | O conteúdo da mensagem a ser enviada, em vez da foto                                                |

Exemplo:

```javascript
[{
    type = String (Sequência de caracteres),
    id = String (Sequência de caracteres),
    photo_url = String (Sequência de caracteres),
    thumb_url = String (Sequência de caracteres),
    photo_width = Integer (Número),
    photo_height = Integer (Número),
    title = String (Sequência de caracteres),
    description = String (Sequência de caracteres),
    caption = String (Sequência de caracteres),
    parse_mode = String (Sequência de caracteres),
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultGif

Representa um link para um arquivo GIF animado. Por padrão esse GIF animado será enviado pelo usuário com legenda opcional. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "gif"                                                                 |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| gif_url                 | String (Sequência de caracteres) | true (Verdadeiro) | Uma URL válida para o arquivo GIF. File size must not exceed 1MB                               |
| gif_width               | Integer (Número)                 | false (Falso)     | Largura do GIF                                                                                 |
| gif_height              | Integer (Número)                 | false (Falso)     | Altura do GIF                                                                                  |
| gif_duration            | Integer (Número)                 | false (Falso)     | Duração do GIF                                                                                 |
| thumb_url               | String (Sequência de caracteres) | true (Verdadeiro) | URL da miniatura estática para o result (jpeg ou gif)                                          |
| title                   | String (Sequência de caracteres) | false (Falso)     | Título do result                                                                               |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda do GIF a ser enviado, 0-200 caracteres                                                 |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | O conteúdo da mensagem a ser enviada, em vez do GIF                                            |

Exemplo:

```javascript
[{
    type = String (Sequência de caracteres),
    id = String (Sequência de caracteres),
    gif_url = String (Sequência de caracteres),
    gif_width = Integer (Número),
    gif_height = Integer (Número),
    gif_duration = Integer (Número),
    thumb_url = String (Sequência de caracteres),
    title = String (Sequência de caracteres),
    caption = String (Sequência de caracteres),
    parse_mode = String (Sequência de caracteres),
    reply_markup = InlineKeyboardMarkup,
    input_message_content = InputMessageContent,
}]
```

## InlineQueryResultMpeg4Gif

Represents a link to a video animation (H.264&#x2F;MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be mpeg4_gif                                                          |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| mpeg4_url               | String (Sequência de caracteres) | true (Verdadeiro) | A valid URL for the MP4 file. File size must not exceed 1MB                                    |
| mpeg4_width             | Integer (Número)                 | false (Falso)     | Video width                                                                                    |
| mpeg4_height            | Integer (Número)                 | false (Falso)     | Video height                                                                                   |
| mpeg4_duration          | Integer (Número)                 | false (Falso)     | Video duration                                                                                 |
| thumb_url               | String (Sequência de caracteres) | true (Verdadeiro) | URL of the static thumbnail (jpeg or gif) for the result                                       |
| title                   | String (Sequência de caracteres) | false (Falso)     | Título do result                                                                               |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption of the MPEG-4 file to be sent, 0-200 characters                                        |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the video animation                               |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                                                                                                  |
| ----------------------- | -------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be video                                                                                                                                          |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                                                                                                       |
| video_url               | String (Sequência de caracteres) | true (Verdadeiro) | A valid URL for the embedded video player or video file                                                                                                                    |
| mime_type               | String (Sequência de caracteres) | true (Verdadeiro) | Mime type of the content of video url, “text&#x2F;html” or “video&#x2F;mp4”                                                                                                |
| thumb_url               | String (Sequência de caracteres) | true (Verdadeiro) | URL of the thumbnail (jpeg only) for the video                                                                                                                             |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do result                                                                                                                                                           |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption of the video to be sent, 0-200 characters                                                                                                                          |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto.                                                                             |
| video_width             | Integer (Número)                 | false (Falso)     | Video width                                                                                                                                                                |
| video_height            | Integer (Número)                 | false (Falso)     | Video height                                                                                                                                                               |
| video_duration          | Integer (Número)                 | false (Falso)     | Video duration in seconds                                                                                                                                                  |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                                                                                                  |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                                                                                                       |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video). |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be audio                                                             |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| audio_url               | String (Sequência de caracteres) | true (Verdadeiro) | A valid URL for the audio file                                                                |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Title                                                                                         |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption, 0-200 characters                                                                     |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF. |
| performer               | String (Sequência de caracteres) | false (Falso)     | Performer                                                                                     |
| audio_duration          | Integer (Número)                 | false (Falso)     | Audio duration in seconds                                                                     |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the audio                                        |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be voice                                                             |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| voice_url               | String (Sequência de caracteres) | true (Verdadeiro) | A valid URL for the voice recording                                                           |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Recording title                                                                               |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption, 0-200 characters                                                                     |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF. |
| voice_duration          | Integer (Número)                 | false (Falso)     | Recording duration in seconds                                                                 |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the voice recording                              |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be document                                                           |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do result                                                                               |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption of the document to be sent, 0-200 characters                                           |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| document_url            | String (Sequência de caracteres) | true (Verdadeiro) | A valid URL for the file                                                                       |
| mime_type               | String (Sequência de caracteres) | true (Verdadeiro) | Mime type of the content of the file, either “application&#x2F;pdf” or “application&#x2F;zip”  |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                      |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the file                                          |
| thumb_url               | String (Sequência de caracteres) | false (Falso)     | URL of the thumbnail (jpeg only) for the file                                                  |
| thumb_width             | Integer (Número)                 | false (Falso)     | Largura da miniatura                                                                           |
| thumb_height            | Integer (Número)                 | false (Falso)     | Altura da miniatura                                                                            |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be location                                                     |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                     |
| latitude                | Float número                     | true (Verdadeiro) | Location latitude in degrees                                                             |
| longitude               | Float número                     | true (Verdadeiro) | Location longitude in degrees                                                            |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Location title                                                                           |
| live_period             | Integer (Número)                 | false (Falso)     | Period in seconds for which the location can be updated, should be between 60 and 86400. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                     |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the location                                |
| thumb_url               | String (Sequência de caracteres) | false (Falso)     | URL da miniatura do result                                                               |
| thumb_width             | Integer (Número)                 | false (Falso)     | Largura da miniatura                                                                     |
| thumb_height            | Integer (Número)                 | false (Falso)     | Altura da miniatura                                                                      |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                              |
| ----------------------- | -------------------------------- | ----------------- | ------------------------------------------------------ |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be venue                      |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes   |
| latitude                | Float                            | true (Verdadeiro) | Latitude of the venue location in degrees              |
| longitude               | Float                            | true (Verdadeiro) | Longitude of the venue location in degrees             |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Title of the venue                                     |
| address                 | String (Sequência de caracteres) | true (Verdadeiro) | Address of the venue                                   |
| foursquare_id           | String (Sequência de caracteres) | false (Falso)     | Foursquare identifier of the venue if known            |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                   |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the venue |
| thumb_url               | String (Sequência de caracteres) | false (Falso)     | URL da miniatura do result                             |
| thumb_width             | Integer (Número)                 | false (Falso)     | Largura da miniatura                                   |
| thumb_height            | Integer (Número)                 | false (Falso)     | Altura da miniatura                                    |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                |
| ----------------------- | -------------------------------- | ----------------- | -------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be contact                      |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes     |
| phone_number            | String (Sequência de caracteres) | true (Verdadeiro) | Número de telefone de contacto                           |
| first_name              | String (Sequência de caracteres) | true (Verdadeiro) | Primeiro nome do contato                                 |
| last_name               | String (Sequência de caracteres) | false (Falso)     | Último nome do contato                                   |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                     |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the contact |
| thumb_url               | String (Sequência de caracteres) | false (Falso)     | URL da miniatura do result                               |
| thumb_width             | Integer (Número)                 | false (Falso)     | Largura da miniatura                                     |
| thumb_height            | Integer (Número)                 | false (Falso)     | Altura da miniatura                                      |

Exemplo:

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

| Campo             | Tipo                             | Requerido         | Descrição                                            |
| ----------------- | -------------------------------- | ----------------- | ---------------------------------------------------- |
| tipo              | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be game                     |
| id                | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes |
| game_short_name | String (Sequência de caracteres) | true (Verdadeiro) | Short name of the game                               |
| reply_markup      | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                 |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "photo"                                                              |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| photo_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | A valid file identifier of the photo                                                          |
| title                   | String (Sequência de caracteres) | false (Falso)     | Título do result                                                                              |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                     |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda da foto a ser enviada, 0-200 caracteres                                               |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | O conteúdo da mensagem a ser enviada, em vez da foto                                          |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "gif"                                                                 |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| gif_file_id           | String (Sequência de caracteres) | true (Verdadeiro) | A valid file identifier for the GIF file                                                       |
| title                   | String (Sequência de caracteres) | false (Falso)     | Título do result                                                                               |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda do GIF a ser enviado, 0-200 caracteres                                                 |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | O conteúdo da mensagem a ser enviada, em vez do GIF                                            |

Exemplo:

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

Represents a link to a video animation (H.264&#x2F;MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be mpeg4_gif                                                         |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| mpeg4_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | A valid file identifier for the MP4 file                                                      |
| title                   | String (Sequência de caracteres) | false (Falso)     | Título do result                                                                              |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption of the MPEG-4 file to be sent, 0-200 characters                                       |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the video animation                              |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                |
| ----------------------- | -------------------------------- | ----------------- | -------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be sticker                      |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes     |
| sticker_file_id       | String (Sequência de caracteres) | true (Verdadeiro) | A valid file identifier of the sticker                   |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                     |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the sticker |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be document                                                           |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do result                                                                               |
| document_file_id      | String (Sequência de caracteres) | true (Verdadeiro) | A valid file identifier for the file                                                           |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                      |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption of the document to be sent, 0-200 characters                                           |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the file                                          |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be video                                                              |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| video_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | A valid file identifier for the video file                                                     |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do result                                                                               |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                      |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption of the video to be sent, 0-200 characters                                              |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the video                                         |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be voice                                                              |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| voice_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | A valid file identifier for the voice message                                                  |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Voice message title                                                                            |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption, 0-200 characters                                                                      |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the voice message                                 |

Exemplo:

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

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Type of the result, must be audio                                                              |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| audio_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | A valid file identifier for the audio file                                                     |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Caption, 0-200 characters                                                                      |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | Content of the message to be sent instead of the audio                                         |

Exemplo:

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