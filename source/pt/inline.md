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

Representa um link para um objeto do tipo photo. Por padrão essa foto será enviada pelo usuário com legenda opcional. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez da foto.

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

Representa um link para um arquivo GIF animado. Por padrão esse GIF animado será enviado pelo usuário com legenda opcional. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez de uma animação.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "gif"                                                                 |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| gif_url                 | String (Sequência de caracteres) | true (Verdadeiro) | Uma URL válida para o arquivo GIF. O tamanho do arquivo não deve ultrapassar 1MB               |
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

Representa um link para um arquivo de vídeo animado (H.264&#x2F;MPEG-4 AVC de vídeo sem audio). Por padrão esse MPEG-4 animado será enviado pelo usuário com legenda opcional. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez de uma animação.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "mpeg4_gif"                                                          |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| mpeg4_url               | String (Sequência de caracteres) | true (Verdadeiro) | Uma URL válida para o arquivo MP4. O tamanho do arquivo não deve ultrapassar 1MB              |
| mpeg4_width             | Integer (Número)                 | false (Falso)     | Largura do vídeo                                                                              |
| mpeg4_height            | Integer (Número)                 | false (Falso)     | Altura do vídeo                                                                               |
| mpeg4_duration          | Integer (Número)                 | false (Falso)     | Duração do vídeo                                                                              |
| thumb_url               | String (Sequência de caracteres) | true (Verdadeiro) | URL da miniatura estática (gif ou jpeg) para o resultado                                      |
| title                   | String (Sequência de caracteres) | false (Falso)     | Título do result                                                                              |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda do arquivo MPEG-4 a ser enviado, 0-200 caracteres                                     |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | O conteúdo da mensagem a ser enviada, em vez de um vídeo animado                              |

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

Representa um link para uma página que contém um reprodutor de vídeo incorporado ou um arquivo de vídeo. Por padrão, esse arquivo de vídeo será enviado pelo usuário com uma legenda opcional. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez da vídeo.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                                                                                                                         |
| ----------------------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "video"                                                                                                                                                                  |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                                                                                                                              |
| video_url               | String (Sequência de caracteres) | true (Verdadeiro) | Uma URL válida para o player de vídeo incorporado ou um arquivo de vídeo                                                                                                                          |
| mime_type               | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do conteúdo da url deve ser “text&#x2F;html” ou “video&#x2F;mp4”                                                                                                                             |
| thumb_url               | String (Sequência de caracteres) | true (Verdadeiro) | URL da miniatura estática (jpeg somente) para o vídeo                                                                                                                                             |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do result                                                                                                                                                                                  |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda da vídeo a ser enviada, 0-200 caracteres                                                                                                                                                  |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto.                                                                                                    |
| video_width             | Integer (Número)                 | false (Falso)     | Largura do vídeo                                                                                                                                                                                  |
| video_height            | Integer (Número)                 | false (Falso)     | Altura do vídeo                                                                                                                                                                                   |
| video_duration          | Integer (Número)                 | false (Falso)     | Definir a duração do vídeo em segundos                                                                                                                                                            |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                                                                                                                         |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                                                                                                                              |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada, em vez do vídeo. Este campo é obrigatório se InlineQueryResultVideo é usado para enviar uma página HTML como um resultado (por exemplo, um vídeo do YouTube). |

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

Representa um link para um arquivo em mp3. Por padrão, esse arquivo de áudio será enviado pelo usuário. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez da áudio.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "audio"                                                               |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| audio_url               | String (Sequência de caracteres) | true (Verdadeiro) | Uma URL válida para o arquivo de audio                                                         |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título                                                                                         |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda, 0-200 caracteres no máximo                                                            |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| performer               | String (Sequência de caracteres) | false (Falso)     | Artista                                                                                        |
| audio_duration          | Integer (Número)                 | false (Falso)     | Definir a duração do áudio em segundos                                                         |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada em vez do áudio                                             |

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

Representa um link para uma gravação de voz em um .ogg codificado com OPUS. Por padrão, esse gravação de voz será enviado pelo usuário. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez da mensagem de voz.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "voice"                                                               |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| voice_url               | String (Sequência de caracteres) | true (Verdadeiro) | Uma URL válida para a gravação de voz                                                          |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título da gravação                                                                             |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda, 0-200 caracteres no máximo                                                            |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| voice_duration          | Integer (Número)                 | false (Falso)     | Duração da gravação em segundos                                                                |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada em vez da gravação de voz                                   |

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

## InlineQueryResultDocument

Representa um link para um arquivo. Por padrão, este arquivo será enviado pelo usuário com uma legenda opcional. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez do arquivo. Atualmente, somente arquivos .PDF e .ZIP podem ser enviadas usando este método.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "document"                                                           |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do result                                                                              |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda do documento a ser enviado, 0-200 caracteres                                          |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF. |
| document_url            | String (Sequência de caracteres) | true (Verdadeiro) | Uma URL válida para o arquivo                                                                 |
| mime_type               | String (Sequência de caracteres) | true (Verdadeiro) | Tipo de conteúdo do arquivo deve ser “application&#x2F;pdf” ou “application&#x2F;zip”         |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                     |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada, em vez do arquivo                                         |
| thumb_url               | String (Sequência de caracteres) | false (Falso)     | URL da miniatura estática (jpeg somente) para o arquivo                                       |
| thumb_width             | Integer (Número)                 | false (Falso)     | Largura da miniatura                                                                          |
| thumb_height            | Integer (Número)                 | false (Falso)     | Altura da miniatura                                                                           |

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

Representa uma localização no mapa. Por padrão, a localização será enviado pelo usuário. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez de uma localização.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do resultado, deve ser "location"                                                        |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| latitude                | Float número                     | true (Verdadeiro) | Localização, latitude em graus                                                                |
| longitude               | Float número                     | true (Verdadeiro) | Localização, longitude em graus                                                               |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título da localização                                                                         |
| live_period             | Integer (Número)                 | false (Falso)     | Período em segundos para que a localização possa ser atualizada, deve estar entre 60 e 86400. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada em vez da localização                                      |
| thumb_url               | String (Sequência de caracteres) | false (Falso)     | URL da miniatura do result                                                                    |
| thumb_width             | Integer (Número)                 | false (Falso)     | Largura da miniatura                                                                          |
| thumb_height            | Integer (Número)                 | false (Falso)     | Altura da miniatura                                                                           |

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

Representa um "venue". Por padrão, o "venue" será enviado pelo usuário. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez do "venue".

| Campo                   | Tipo                             | Requerido         | Descrição                                             |
| ----------------------- | -------------------------------- | ----------------- | ----------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "venue"                      |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes  |
| latitude                | Float                            | true (Verdadeiro) | Localização, latitude em graus                        |
| longitude               | Float                            | true (Verdadeiro) | Localização, longitude em graus                       |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do local                                       |
| address                 | String (Sequência de caracteres) | true (Verdadeiro) | Endereço do local                                     |
| foursquare_id           | String (Sequência de caracteres) | false (Falso)     | Foursquare identifier of the venue if known           |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                  |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada, em vez do "venue" |
| thumb_url               | String (Sequência de caracteres) | false (Falso)     | URL da miniatura do result                            |
| thumb_width             | Integer (Número)                 | false (Falso)     | Largura da miniatura                                  |
| thumb_height            | Integer (Número)                 | false (Falso)     | Altura da miniatura                                   |

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

Representa o número de telefone do contato. Por padrão, esse contato será enviado pelo usuário. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.

| Campo                   | Tipo                             | Requerido         | Descrição                                            |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "contact"                   |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes |
| phone_number            | String (Sequência de caracteres) | true (Verdadeiro) | Número de telefone do contato                        |
| first_name              | String (Sequência de caracteres) | true (Verdadeiro) | Primeiro nome do contato                             |
| last_name               | String (Sequência de caracteres) | false (Falso)     | Último nome do contato                               |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                 |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada em vez da contato |
| thumb_url               | String (Sequência de caracteres) | false (Falso)     | URL da miniatura do result                           |
| thumb_width             | Integer (Número)                 | false (Falso)     | Largura da miniatura                                 |
| thumb_height            | Integer (Número)                 | false (Falso)     | Altura da miniatura                                  |

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

Representa um Jogo.

| Campo             | Tipo                             | Requerido         | Descrição                                            |
| ----------------- | -------------------------------- | ----------------- | ---------------------------------------------------- |
| tipo              | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "game"                      |
| id                | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes |
| game_short_name | String (Sequência de caracteres) | true (Verdadeiro) | Nome abreviado do jogo                               |
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

Representa um link para uma foto armazenada nos servidores do Telegram. Por padrão, essa foto será enviada pelo usuário com uma legenda opcional. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez da foto.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "photo"                                                               |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| photo_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | Um arquivo válido identificador da foto                                                        |
| title                   | String (Sequência de caracteres) | false (Falso)     | Título do result                                                                               |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                      |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda da foto a ser enviada, 0-200 caracteres                                                |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | O conteúdo da mensagem a ser enviada, em vez da foto                                           |

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
| gif_file_id           | String (Sequência de caracteres) | true (Verdadeiro) | Um identificador de arquivo válido para o arquivo GIF                                          |
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

Represents a link to a video animation (H.264&#x2F;MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez de uma gif.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                      |
| ----------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "mpeg4_gif"                                                           |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| mpeg4_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | Um identificador de arquivo válido para o arquivo MP4                                          |
| title                   | String (Sequência de caracteres) | false (Falso)     | Título do result                                                                               |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda do arquivo MPEG-4 a ser enviado, 0-200 caracteres                                      |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | O conteúdo da mensagem a ser enviada, em vez de um vídeo animado                               |

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

Representa um link para um arquivo de sticker armazenado nos servidores do Telegram. Por padrão, esse sticker será enviado pelo usuário. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.

| Campo                   | Tipo                             | Requerido         | Descrição                                                |
| ----------------------- | -------------------------------- | ----------------- | -------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "sticker"                       |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes     |
| sticker_file_id       | String (Sequência de caracteres) | true (Verdadeiro) | Um arquivo válido identificador do adesivo               |
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

Representa um link para um arquivo armazenado nos servidores do Telegram. Por padrão, este arquivo será enviado pelo usuário com uma legenda opcional. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez do arquivo.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "document"                                                           |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do result                                                                              |
| document_file_id      | String (Sequência de caracteres) | true (Verdadeiro) | Um identificador de arquivo válido para o arquivo                                             |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                     |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda do documento a ser enviado, 0-200 caracteres                                          |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada, em vez do arquivo                                         |

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

## InlineQueryResultCachedVideo

Representa um link para um arquivo de vídeo armazenado nos servidores do Telegram. Por padrão, esse arquivo de vídeo será enviado pelo usuário com uma legenda opcional. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez da vídeo.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "video"                                                              |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| video_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | Válido de identificador do arquivo de vídeo                                                   |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título do result                                                                              |
| description             | String (Sequência de caracteres) | false (Falso)     | Breve descrição do result                                                                     |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda da vídeo a ser enviada, 0-200 caracteres                                              |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada, em vez do vídeo                                           |

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
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "voice"                                                               |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                           |
| voice_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | Um identificador de arquivo válido para a mensagem de voz                                      |
| title                   | String (Sequência de caracteres) | true (Verdadeiro) | Título da mensagem de voz                                                                      |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda, 0-200 caracteres no máximo                                                            |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                           |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada em vez da mensagem de voz                                   |

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

Representa um link para um aúdio mp3 armazenado nos servidores do Telegram. Por padrão, esse arquivo de áudio será enviado pelo usuário. Como alternativa, você pode usar o input_message_content para enviar uma mensagem com um conteúdo especificado em vez da áudio.

| Campo                   | Tipo                             | Requerido         | Descrição                                                                                     |
| ----------------------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| tipo                    | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "audio"                                                              |
| id                      | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo para esse result, 1-64 Bytes                                          |
| audio_file_id         | String (Sequência de caracteres) | true (Verdadeiro) | A valid file identifier for the audio file                                                    |
| caption                 | String (Sequência de caracteres) | false (Falso)     | Legenda, 0-200 caracteres no máximo                                                           |
| parse_mode              | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda do GIF. |
| reply_markup            | InlineKeyboardMarkup             | false (Falso)     | Inline keyboard referente à mensagem                                                          |
| input_message_content | InputMessageContent              | false (Falso)     | Conteúdo da mensagem a ser enviada em vez do áudio                                            |

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