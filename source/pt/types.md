# Tipo

- [Atualizações](#update)
- [WebhookInfo](#webhookinfo)
- [User](#user)
- [Chat](#chat)
- [#-#-#-#-# messages. po (udemy-website) #-#-#-#-#\nMensagens\n#-#-#-#-# others. po (udemy-website) #-#-#-#-#\n#-#-#-#-# messages. po (udemy-website) #-#-#-#-#\nMensagens\n#-#-#-#-# others. po (udemy-website) #-#-#-#-#\nMessages](#message)
- [MessageEntity](#messageentity)
- [PhotoSize](#photosize)
- [Audio](#audio)
- [Documents](#document)
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
- [InlineQuery (Consulta Inline)](#inlinequery)
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

Este objeto representa uma atualização vinda. Ao menos um dos parâmetros opcionais devem estar presentes em alguma atualização.

| Campo                  | Tipo                          | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ----------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| update_id              | Integer (Número)              | true (Verdadeiro) | O identificador da atualização. Atualização dos identificadores começam de um certo numero positivo e aumentam gradativamente. Este ID torna-se especialmente útil se você estiver usúando Webhooks, já que isso te permite ignorar atualizações repetidas ou restaurar a sequência de atualização correta, eles devem chegar fora de ordem. Se não houver novas atualizações por pelos uma semana, o identificador da próxima atualização será escolhido aleatoriamente ao invés de sequencialmente. |
| message (Mensagem)     | Message                       | false (Falso)     | Nova mensagem recebida de qualquer tipo — texto, foto, sticker, etc.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| edited_message         | Message                       | false (Falso)     | Nova versão de uma mensagem que é conhecida pelo bot e foi editada                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| channel_post           | Message                       | false (Falso)     | Nova postagem de canal recebida de qualquer tipo — texto, foto, sticker, etc.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| edited_channel_post  | Message                       | false (Falso)     | Nova versão de uma postagem de canal que é conhecida pelo bot e foi editada                                                                                                                                                                                                                                                                                                                                                                                                                           |
| inline_query           | InlineQuery (Consulta Inline) | false (Falso)     | Nova consulta inline recebida                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| chosen_inline_result | ChosenInlineResult            | false (Falso)     | O resultado de uma consulta inline que foi escolhida por um usuário e enviada para seu parceiro de chat. Por favor, consulte a nossa documentação sobre coleta de "feedback" para obter mais detalhes de como ativar esse Update em seu bot.                                                                                                                                                                                                                                                          |
| callback_query         | CallbackQuery                 | false (Falso)     | Nova consulta de callback query recebida                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| shipping_query         | ShippingQuery                 | false (Falso)     | Nova consulta de shipping query recebida. Somente para chamadas de voz com preço flexível                                                                                                                                                                                                                                                                                                                                                                                                             |
| pre_checkout_query   | PreCheckoutQuery              | false (Falso)     | Nova consulta de pré-pagamento. Contém informações completas sobre o pagamento                                                                                                                                                                                                                                                                                                                                                                                                                        |

## WebhookInfo

Contém informações sobre o status atual de um webhook.

| Campo                    | Tipo                             | Requerido         | Descrição                                                                                                                   |
| ------------------------ | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| url                      | String (Sequência de caracteres) | true (Verdadeiro) | Webhook URL, pode ser vazia se o webhook não estiver configurado                                                            |
| has_custom_certificate | Boolen (Boleano)                 | true (Verdadeiro) | Se isso estive como "true", um certificado deve ser fornecido para uso de verificação da integração do webhook.             |
| pending_update_count   | Integer (Número)                 | true (Verdadeiro) | Número de atualizações esperando entrega                                                                                    |
| last_error_date        | Integer (Número)                 | false (Falso)     | Unix time para o erro mais recente que ocorreu ao tentar entregar uma atualização via webhook                               |
| last_error_message     | String (Sequência de caracteres) | false (Falso)     | Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook |
| max_connections          | Integer (Número)                 | false (Falso)     | Número máximo permitido de conexões simultâneas HTTPS para o webhook para a entrega de atualizações                         |
| allowed_updates          | Array de String                  | false (Falso)     | Uma lista de tipos de atualização que o bot está inscrito. Padrão para todos os tipos de atualização                        |

## User

Esse objeto representa um usuário ou um bot do Telegram.

| Campo         | Tipo                             | Requerido         | Descrição                                        |
| ------------- | -------------------------------- | ----------------- | ------------------------------------------------ |
| id            | Integer (Número)                 | true (Verdadeiro) | Identificador exclusivo para esse usuário ou bot |
| is_bot        | Boolen (Boleano)                 | true (Verdadeiro) | Verdadeiro, se esse usuário é um bot             |
| first_name    | String (Sequência de caracteres) | true (Verdadeiro) | Primeiro nome de um usuário ou um bot            |
| last_name     | String (Sequência de caracteres) | false (Falso)     | Sobrenome de um usuário ou um bot                |
| username      | String (Sequência de caracteres) | false (Falso)     | Nome de usuário de um usuário ou um bot          |
| language_code | String (Sequência de caracteres) | false (Falso)     | Tag IETF de idioma do usuário                    |

## Chat

Esse objeto representa um chat.

| Campo                            | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                          |
| -------------------------------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                               | Integer (Número)                 | true (Verdadeiro) | Identificador exclusivo para esse chat. Esse número pode ser maior que 32 bits e algumas linguagens de programação podem ter defeitos de dificuldade/silenciação na interpretação. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| tipo                             | String (Sequência de caracteres) | true (Verdadeiro) | Tipo de chat, pode ser tanto quanto “privado”, “grupo”, “supergrupo” ou “canal”                                                                                                                                                                                                                                    |
| título                           | String (Sequência de caracteres) | false (Falso)     | Título, para supergrupos, canais e grupos                                                                                                                                                                                                                                                                          |
| username                         | String (Sequência de caracteres) | false (Falso)     | Nome de usuário, para chats privados, supergrupos e canais, se disponível                                                                                                                                                                                                                                          |
| first_name                       | String (Sequência de caracteres) | false (Falso)     | Primeiro nome da outra parte em um chat privado                                                                                                                                                                                                                                                                    |
| last_name                        | String (Sequência de caracteres) | false (Falso)     | Sobrenome da outra parte em um chat privado                                                                                                                                                                                                                                                                        |
| all_members_are_administrators | Boolen (Boleano)                 | false (Falso)     | Verdadeiro, se um grupo tem “Todos os Membros são Admins” ativado.                                                                                                                                                                                                                                                 |
| photo                            | ChatPhoto                        | false (Falso)     | Foto do Chat. Retornado somente em getChat.                                                                                                                                                                                                                                                                        |
| description                      | String (Sequência de caracteres) | false (Falso)     | Descrição, para supergrupos e canais. Retornado somente em getChat.                                                                                                                                                                                                                                                |
| invite_link                      | String (Sequência de caracteres) | false (Falso)     | Link de convite do chat, para supergrupos e canais. Retornado somente em getChat.                                                                                                                                                                                                                                  |
| pinned_message                   | Message (Mensagem)               | false (Falso)     | Mensagem fixada, para supergrupos e canais. Retornado somente em getChat.                                                                                                                                                                                                                                          |
| sticker_set_name               | String (Sequência de caracteres) | false (Falso)     | Para supergrupos, nome do pacote de sticker do grupo. Retornado somente em getChat.                                                                                                                                                                                                                                |
| can_set_sticker_set            | Boolen (Boleano)                 | false (Falso)     | Verdadeiro, se o bot pode alterar o pacote de sticker do grupo. Retornado somente em getChat.                                                                                                                                                                                                                      |

## Message

Esse objeto representa uma mensagem.

| Campo                     | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                               |
| ------------------------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message_id                | Integer (Número)                 | true (Verdadeiro) | Identificador exclusivo de mensagem dentro deste chat                                                                                                                                                                                                                                                                                                   |
| from                      | User                             | false (Falso)     | Remetente, vazio para mensagens enviadas para canais                                                                                                                                                                                                                                                                                                    |
| date                      | Integer (Número)                 | true (Verdadeiro) | Data em que a mensagem foi enviada em Unix time                                                                                                                                                                                                                                                                                                         |
| chat                      | Chat                             | true (Verdadeiro) | A mensagem pertence ao chat/grupo/canal                                                                                                                                                                                                                                                                                                                 |
| forward_from              | User                             | false (Falso)     | Para mensagens encaminhadas, remetente da mensagem original                                                                                                                                                                                                                                                                                             |
| forward_from_chat       | Chat                             | false (Falso)     | Para mensagens encaminhadas de canais, informações sobre o canal original                                                                                                                                                                                                                                                                               |
| forward_from_message_id | Integer (Número)                 | false (Falso)     | Para mensagens encaminhadas de canais, identificador da mensagem original no canal                                                                                                                                                                                                                                                                      |
| forward_signature         | String (Sequência de caracteres) | false (Falso)     | Para mensagens encaminhadas de canais, a assinatura do autor da postagem se houver                                                                                                                                                                                                                                                                      |
| forward_date              | Integer (Número)                 | false (Falso)     | Para mensagens encaminhadas, data em que a mensagem original foi enviada em Unix time                                                                                                                                                                                                                                                                   |
| reply_to_message        | Message (Mensagem)               | false (Falso)     | Para respostas, a mensagem original. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.                                                                                                                                                                                        |
| edit_date                 | Integer (Número)                 | false (Falso)     | Data em que a mensagem foi editada pela última vez em Unix time                                                                                                                                                                                                                                                                                         |
| media_group_id          | String (Sequência de caracteres) | false (Falso)     | O identificador exclusivo de uma mensagem de mídia que pertence ao grupo                                                                                                                                                                                                                                                                                |
| author_signature          | String (Sequência de caracteres) | false (Falso)     | Assinatura do autor da postagem para mensagens em canais                                                                                                                                                                                                                                                                                                |
| text                      | String (Sequência de caracteres) | false (Falso)     | Para mensagens de texto, o texto atual da mensagem em UTF-8, 0-4096 caracteres.                                                                                                                                                                                                                                                                         |
| entities                  | Array de MessageEntity           | false (Falso)     | Para mensagens de texto, entidades especiais como nomes de usuário, URLs, comandos do bot, etc. que aparecem no texto                                                                                                                                                                                                                                   |
| caption_entities          | Array de MessageEntity           | false (Falso)     | Para mensagens com uma legenda, entidades especiais como nomes de usuário, URLs, comandos do bot, etc. que aparecem na legenda                                                                                                                                                                                                                          |
| audio                     | Audio                            | false (Falso)     | Mensagem é um arquivo de áudio, informações sobre o arquivo                                                                                                                                                                                                                                                                                             |
| document                  | Document                         | false (Falso)     | Mensagem é um arquivo, informações sobre o arquivo                                                                                                                                                                                                                                                                                                      |
| game                      | Game                             | false (Falso)     | Mensagem é um jogo, informações sobre o arquivo. Mais sobre jogos »                                                                                                                                                                                                                                                                                     |
| photo                     | Array de PhotoSize               | false (Falso)     | Message is a photo, available sizes of the photo                                                                                                                                                                                                                                                                                                        |
| sticker                   | Sticker                          | false (Falso)     | Message is a sticker, information about the sticker                                                                                                                                                                                                                                                                                                     |
| video                     | Video                            | false (Falso)     | Message is a video, information about the video                                                                                                                                                                                                                                                                                                         |
| voice                     | Voice                            | false (Falso)     | Message is a voice message, information about the file                                                                                                                                                                                                                                                                                                  |
| video_note                | VideoNote                        | false (Falso)     | Message is a video note, information about the video message                                                                                                                                                                                                                                                                                            |
| caption                   | String (Sequência de caracteres) | false (Falso)     | Caption for the audio, document, photo, video or voice, 0-200 characters                                                                                                                                                                                                                                                                                |
| contact                   | Contact                          | false (Falso)     | Message is a shared contact, information about the contact                                                                                                                                                                                                                                                                                              |
| location                  | Location                         | false (Falso)     | Message is a shared location, information about the location                                                                                                                                                                                                                                                                                            |
| venue                     | Venue                            | false (Falso)     | Message is a venue, information about the venue                                                                                                                                                                                                                                                                                                         |
| new_chat_members        | Array de Usuário                 | false (Falso)     | Novos membros que foram adicionados ao grupo ou supergrupo e informações sobre o mesmo (o bot em si pode ser um desses membros)                                                                                                                                                                                                                         |
| left_chat_member        | User                             | false (Falso)     | Um membro foi removido do grupo, informações sobre o mesmo (esse membro pode ser o próprio bot)                                                                                                                                                                                                                                                         |
| new_chat_title          | String (Sequência de caracteres) | false (Falso)     | Um título do chat foi alterado para este valor                                                                                                                                                                                                                                                                                                          |
| new_chat_photo          | Array de PhotoSize               | false (Falso)     | A chat photo was change to this value                                                                                                                                                                                                                                                                                                                   |
| delete_chat_photo       | True (Verdadeiro)                | false (Falso)     | Mensagem de serviço: a foto do chat foi apagada                                                                                                                                                                                                                                                                                                         |
| group_chat_created      | True (Verdadeiro)                | false (Falso)     | Mensagem de serviço: o grupo foi criado                                                                                                                                                                                                                                                                                                                 |
| supergroup_chat_created | True (Verdadeiro)                | false (Falso)     | Service message: the supergroup has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.                                           |
| channel_chat_created    | True (Verdadeiro)                | false (Falso)     | Mensagem de serviço: o canal foi criado. This field can‘t be received in a message coming through updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.                                                                           |
| migrate_to_chat_id      | Integer (Número)                 | false (Falso)     | The group has been migrated to a supergroup with the specified identifier. Esse número pode ser maior que 32 bits e algumas linguagens de programação podem ter defeitos de dificuldade/silenciação na interpretação. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.   |
| migrate_from_chat_id    | Integer (Número)                 | false (Falso)     | The supergroup has been migrated from a group with the specified identifier. Esse número pode ser maior que 32 bits e algumas linguagens de programação podem ter defeitos de dificuldade/silenciação na interpretação. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| pinned_message            | Message (Mensagem)               | false (Falso)     | Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply.                                                                                                                                                                                               |
| invoice                   | Invoice                          | false (Falso)     | Message is an invoice for a payment, information about the invoice. More about payments »                                                                                                                                                                                                                                                               |
| successful_payment        | SuccessfulPayment                | false (Falso)     | Message is a service message about a successful payment, information about the payment. More about payments »                                                                                                                                                                                                                                           |
| connected_website         | String (Sequência de caracteres) | false (Falso)     | The domain name of the website on which the user has logged in. More about Telegram Login »                                                                                                                                                                                                                                                             |

## MessageEntity

Esse objeto representa uma entidade especial em uma mensagem de texto. Por exemplo, hashtags, nomes de usuário, URLs, etc.

| Campo  | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                 |
| ------ | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tipo   | String (Sequência de caracteres) | true (Verdadeiro) | Tipo da entidade. Can be mention (@username), hashtag, bot_command, url, email, bold (bold text), italic (italic text), code (monowidth string), pre (monowidth block), text_link (for clickable text URLs), text_mention (for users without usernames) |
| offset | Integer (Número)                 | true (Verdadeiro) | Offset in UTF-16 code units to the start of the entity                                                                                                                                                                                                    |
| lenght | Integer (Número)                 | true (Verdadeiro) | Length of the entity in UTF-16 code units                                                                                                                                                                                                                 |
| url    | String (Sequência de caracteres) | false (Falso)     | For “text_link” only, url that will be opened after user taps on the text                                                                                                                                                                                 |
| user   | User                             | false (Falso)     | For “text_mention” only, the mentioned user                                                                                                                                                                                                               |

## PhotoSize

Este objeto representa um tamanho de uma foto ou a miniatura de um arquivo/sticker.

| Campo     | Tipo                             | Requerido         | Descrição                             |
| --------- | -------------------------------- | ----------------- | ------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo desse arquivo |
| width     | Integer (Número)                 | true (Verdadeiro) | Largura da foto                       |
| height    | Integer (Número)                 | true (Verdadeiro) | Altura da foto                        |
| file_size | Integer (Número)                 | false (Falso)     | Tamanho do arquivo                    |

## Audio

This object represents an audio file to be treated as music by the Telegram clients.

| Campo     | Tipo                             | Requerido         | Descrição                                                             |
| --------- | -------------------------------- | ----------------- | --------------------------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo desse arquivo                                 |
| duration  | Integer (Número)                 | true (Verdadeiro) | Duração do áudio em segundos conforme definido pelo remetente         |
| artista   | String (Sequência de caracteres) | false (Falso)     | Performer of the audio as defined by sender or by audio tags          |
| title     | String (Sequência de caracteres) | false (Falso)     | Título do áudio conforme definido pelo remetente ou por tags de áudio |
| mime_type | String (Sequência de caracteres) | false (Falso)     | Tipo MIME do arquivo conforme definido pelo remetente                 |
| file_size | Integer (Número)                 | false (Falso)     | Tamanho do arquivo                                                    |

## Document

This object represents a general file (as opposed to photos, voice messages and audio files).

| Campo     | Tipo                             | Requerido         | Descrição                                             |
| --------- | -------------------------------- | ----------------- | ----------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo do arquivo                    |
| thumb     | PhotoSize                        | false (Falso)     | Document thumbnail as defined by sender               |
| file_name | String (Sequência de caracteres) | false (Falso)     | Original filename as defined by sender                |
| mime_type | String (Sequência de caracteres) | false (Falso)     | Tipo MIME do arquivo conforme definido pelo remetente |
| file_size | Integer (Número)                 | false (Falso)     | Tamanho do arquivo                                    |

## Video

Esse objeto representa um arquivo de vídeo.

| Campo     | Tipo                             | Requerido         | Descrição                                                     |
| --------- | -------------------------------- | ----------------- | ------------------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo desse arquivo                         |
| width     | Integer (Número)                 | true (Verdadeiro) | Video width as defined by sender                              |
| height    | Integer (Número)                 | true (Verdadeiro) | Video height as defined by sender                             |
| duration  | Integer (Número)                 | true (Verdadeiro) | Duração do vídeo em segundos conforme definido pelo remetente |
| thumb     | PhotoSize                        | false (Falso)     | Miniatura do vídeo                                            |
| mime_type | String (Sequência de caracteres) | false (Falso)     | Mime type of a file as defined by sender                      |
| file_size | Integer (Número)                 | false (Falso)     | Tamanho do arquivo                                            |

## Voice

This object represents a voice note.

| Campo     | Tipo                             | Requerido         | Descrição                                                     |
| --------- | -------------------------------- | ----------------- | ------------------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo desse arquivo                         |
| duration  | Integer (Número)                 | true (Verdadeiro) | Duração do áudio em segundos conforme definido pelo remetente |
| mime_type | String (Sequência de caracteres) | false (Falso)     | Tipo MIME do arquivo conforme definido pelo remetente         |
| file_size | Integer (Número)                 | false (Falso)     | Tamanho do arquivo                                            |

## VideoNote

Esse objeto representa uma mensagem de vídeo (disponível em apps Telegram como v.4.0).

| Campo     | Tipo                             | Requerido         | Descrição                                                     |
| --------- | -------------------------------- | ----------------- | ------------------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo desse arquivo                         |
| lenght    | Integer (Número)                 | true (Verdadeiro) | Largura e altura do vídeo definido pelo remetente             |
| duration  | Integer (Número)                 | true (Verdadeiro) | Duração do vídeo em segundos conforme definido pelo remetente |
| thumb     | PhotoSize                        | false (Falso)     | Miniatura do vídeo                                            |
| file_size | Integer (Número)                 | false (Falso)     | Tamanho do arquivo                                            |

## Contact

Esse objeto representa um telefone de contato.

| Campo        | Tipo                             | Requerido         | Descrição                             |
| ------------ | -------------------------------- | ----------------- | ------------------------------------- |
| phone_number | String (Sequência de caracteres) | true (Verdadeiro) | Número de telefone do contato         |
| first_name   | String (Sequência de caracteres) | true (Verdadeiro) | Primeiro nome do contato              |
| last_name    | String (Sequência de caracteres) | false (Falso)     | Último nome do contato                |
| user_id      | Integer (Número)                 | false (Falso)     | Contact's user identifier in Telegram |

## Location

Esse objeto representa um ponto no mapa.

| Campo     | Tipo  | Requerido         | Descrição                                  |
| --------- | ----- | ----------------- | ------------------------------------------ |
| longitude | Float | true (Verdadeiro) | Longitude conforme definido pelo remetente |
| latitude  | Float | true (Verdadeiro) | Latitude conforme definido pelo remetente  |

## Venue

Esse objeto representa uma venue (local).

| Campo         | Tipo                             | Requerido         | Descrição                                    |
| ------------- | -------------------------------- | ----------------- | -------------------------------------------- |
| location      | Location                         | true (Verdadeiro) | Local                                        |
| title         | String (Sequência de caracteres) | true (Verdadeiro) | Título do local                              |
| address       | String (Sequência de caracteres) | true (Verdadeiro) | Endereço do local                            |
| foursquare_id | String (Sequência de caracteres) | false (Falso)     | Foursquare identificador de um venue (local) |

## UserProfilePhotos

Esse objeto representa as fotos de perfil de um usuário.

| Campo       | Tipo                        | Requerido         | Descrição                                         |
| ----------- | --------------------------- | ----------------- | ------------------------------------------------- |
| total_count | Integer (Número)            | true (Verdadeiro) | Total de fotos de perfil                          |
| photos      | Array de Array de PhotoSize | true (Verdadeiro) | Fotos do Perfil em 4 tipos de tamanhos diferentes |

## File

This object represents a file ready to be downloaded. O arquivo pode ser baixado através do link https:&#x2F;&#x2F;api.telegram.org&#x2F;file&#x2F;bot&lt;token&gt;&#x2F;&lt;file_path&gt;. É garantido que o link será válido por pelo menos 1 hora. Quando o link expira, um novo link pode ser solicitada pela chamada getFile.

| Campo     | Tipo                             | Requerido         | Descrição                                                                                           |
| --------- | -------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo desse arquivo                                                               |
| file_size | Integer (Número)                 | false (Falso)     | Tamanho do arquivo, se conhecido                                                                    |
| file_path | String (Sequência de caracteres) | false (Falso)     | Caminho do arquivo. Usar https://api.telegram.org/file/bot<token>/<file_path> para obter o arquivo. |

## ReplyKeyboardMarkup

Esse objeto representa um teclado personalizado com opções de resposta (veja Introdução aos Bots para detalhes e exemplos).

| Campo               | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyboard            | Array de Array de KeyboardButton | true (Verdadeiro) | Array of button rows, each represented by an Array of KeyboardButton objects                                                                                                                                                                                                                                                                                                                                                       |
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

| Campo           | Tipo              | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| remove_keyboard | True (Verdadeiro) | true (Verdadeiro) | Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)                                                                                                                                                                                                                                                       |
| selective       | Boolen (Boleano)  | false (Falso)     | Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. |

## InlineKeyboardMarkup

This object represents an inline keyboard that appears right next to the message it belongs to.

| Campo           | Tipo                                   | Requerido         | Descrição                                                                          |
| --------------- | -------------------------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| inline_keyboard | Array de Array de InlineKeyboardButton | true (Verdadeiro) | Array of button rows, each represented by an Array of InlineKeyboardButton objects |

## InlineKeyboardButton

Este objeto representa um botão de uma inline teclado. Você deve usar exatamente um dos campos opcionais.

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
| message             | Message (Mensagem)               | false (Falso)     | Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old |
| inline_message_id | String (Sequência de caracteres) | false (Falso)     | Identifier of the message sent via the bot in inline mode, that originated the query.                                                                  |
| chat_instance       | String (Sequência de caracteres) | true (Verdadeiro) | Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.         |
| data                | String (Sequência de caracteres) | false (Falso)     | Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.                                            |
| game_short_name   | String (Sequência de caracteres) | false (Falso)     | Short name of a Game to be returned, serves as the unique identifier for the game                                                                      |

## ForceReply

Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot‘s message and tapped ’Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.

| Campo       | Tipo              | Requerido         | Descrição                                                                                                                                                                                                                                        |
| ----------- | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| force_reply | True (Verdadeiro) | true (Verdadeiro) | Shows reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply'                                                                                                                                             |
| selective   | Boolen (Boleano)  | false (Falso)     | Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. |

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
| until_date                    | Integer (Número)                 | false (Falso)     | Restricted and kicked only. Date when restrictions will be lifted for this user, unix time                                                                                                                                                        |
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

| Campo                | Tipo             | Requerido     | Descrição                                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| migrate_to_chat_id | Integer (Número) | false (Falso) | The group has been migrated to a supergroup with the specified identifier. Esse número pode ser maior que 32 bits e algumas linguagens de programação podem ter defeitos de dificuldade/silenciação na interpretação. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| retry_after          | Integer (Número) | false (Falso) | In case of exceeding flood control, the number of seconds left to wait before the request can be repeated                                                                                                                                                                                                                                             |

## InputMediaPhoto

Represents a photo to be sent.

| Campo      | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                            |
| ---------- | -------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tipo       | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "photo"                                                                                                                                                                                                                                                                                                                                     |
| media      | String (Sequência de caracteres) | true (Verdadeiro) | File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach:&#x2F;&#x2F;&lt;file_attach_name&gt;" to upload a new one using multipart&#x2F;form-data under &lt;file_attach_name&gt; name. More info on Sending Files » |
| caption    | String (Sequência de caracteres) | false (Falso)     | Legenda da foto a ser enviada, 0-200 caracteres                                                                                                                                                                                                                                                                                                                      |
| parse_mode | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto.                                                                                                                                                                                                                                                                       |

## InputMediaVideo

Represents a video to be sent.

| Campo              | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | -------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tipo               | String (Sequência de caracteres) | true (Verdadeiro) | Tipo do result, deve ser "video"                                                                                                                                                                                                                                                                                                                                     |
| media              | String (Sequência de caracteres) | true (Verdadeiro) | File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach:&#x2F;&#x2F;&lt;file_attach_name&gt;" to upload a new one using multipart&#x2F;form-data under &lt;file_attach_name&gt; name. More info on Sending Files » |
| caption            | String (Sequência de caracteres) | false (Falso)     | Legenda da vídeo a ser enviada, 0-200 caracteres                                                                                                                                                                                                                                                                                                                     |
| parse_mode         | String (Sequência de caracteres) | false (Falso)     | "Markdown" ou "HTML", se você quiser que os aplicativos mostrem formatação na legenda da foto.                                                                                                                                                                                                                                                                       |
| width              | Integer (Número)                 | false (Falso)     | Largura do vídeo                                                                                                                                                                                                                                                                                                                                                     |
| height             | Integer (Número)                 | false (Falso)     | Altura do vídeo                                                                                                                                                                                                                                                                                                                                                      |
| duration           | Integer (Número)                 | false (Falso)     | Duração do vídeo                                                                                                                                                                                                                                                                                                                                                     |
| supports_streaming | Boolen (Boleano)                 | false (Falso)     | Pass True, if the uploaded video is suitable for streaming                                                                                                                                                                                                                                                                                                           |

## Sticker

This object represents a sticker.

| Campo         | Tipo                             | Requerido         | Descrição                                                       |
| ------------- | -------------------------------- | ----------------- | --------------------------------------------------------------- |
| file_id       | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo desse arquivo                           |
| width         | Integer (Número)                 | true (Verdadeiro) | Sticker width                                                   |
| height        | Integer (Número)                 | true (Verdadeiro) | Sticker height                                                  |
| thumb         | PhotoSize                        | false (Falso)     | Sticker thumbnail in the .webp or .jpg format                   |
| emoji         | String (Sequência de caracteres) | false (Falso)     | Emoji associated with the sticker                               |
| set_name      | String (Sequência de caracteres) | false (Falso)     | Name of the sticker set to which the sticker belongs            |
| mask_position | MaskPosition                     | false (Falso)     | For mask stickers, the position where the mask should be placed |
| file_size     | Integer (Número)                 | false (Falso)     | Tamanho do arquivo                                              |

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

## InlineQuery (Consulta Inline)

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

| Campo       | Tipo             | Requerido         | Descrição                                                                                     |
| ----------- | ---------------- | ----------------- | --------------------------------------------------------------------------------------------- |
| latitude    | Float            | true (Verdadeiro) | Latitude of the location in degrees                                                           |
| longitude   | Float            | true (Verdadeiro) | Longitude of the location in degrees                                                          |
| live_period | Integer (Número) | false (Falso)     | Período em segundos para que a localização possa ser atualizada, deve estar entre 60 e 86400. |

## InputVenueMessageContent

Represents the content of a venue message to be sent as the result of an inline query.

| Campo         | Tipo                             | Requerido         | Descrição                                    |
| ------------- | -------------------------------- | ----------------- | -------------------------------------------- |
| latitude      | Float                            | true (Verdadeiro) | Latitude of the venue in degrees             |
| longitude     | Float                            | true (Verdadeiro) | Longitude of the venue in degrees            |
| title         | String (Sequência de caracteres) | true (Verdadeiro) | Name of the venue                            |
| address       | String (Sequência de caracteres) | true (Verdadeiro) | Endereço do local                            |
| foursquare_id | String (Sequência de caracteres) | false (Falso)     | Foursquare identifier of the venue, if known |

## InputContactMessageContent

Represents the content of a contact message to be sent as the result of an inline query.

| Campo        | Tipo                             | Requerido         | Descrição                     |
| ------------ | -------------------------------- | ----------------- | ----------------------------- |
| phone_number | String (Sequência de caracteres) | true (Verdadeiro) | Número de telefone do contato |
| first_name   | String (Sequência de caracteres) | true (Verdadeiro) | Primeiro nome do contato      |
| last_name    | String (Sequência de caracteres) | false (Falso)     | Último nome do contato        |

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
| amount | Integer (Número)                 | true (Verdadeiro) | Price of the product in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Invoice

This object contains basic information about an invoice.

| Campo           | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                                                                             |
| --------------- | -------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title           | String (Sequência de caracteres) | true (Verdadeiro) | Product name                                                                                                                                                                                                                                                                                          |
| description     | String (Sequência de caracteres) | true (Verdadeiro) | Product description                                                                                                                                                                                                                                                                                   |
| start_parameter | String (Sequência de caracteres) | true (Verdadeiro) | Unique bot deep-linking parameter that can be used to generate this invoice                                                                                                                                                                                                                           |
| currency        | String (Sequência de caracteres) | true (Verdadeiro) | Three-letter ISO 4217 currency code                                                                                                                                                                                                                                                                   |
| total_amount    | Integer (Número)                 | true (Verdadeiro) | Total price in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

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
| total_amount                 | Integer (Número)                 | true (Verdadeiro) | Total price in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
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
| total_amount         | Integer (Número)                 | true (Verdadeiro) | Total price in the smallest units of the currency (integer, not float&#x2F;double). For example, for a price of US$ 1.45 pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| invoice_payload      | String (Sequência de caracteres) | true (Verdadeiro) | Bot specified invoice payload                                                                                                                                                                                                                                                                         |
| shipping_option_id | String (Sequência de caracteres) | false (Falso)     | Identifier of the shipping option chosen by the user                                                                                                                                                                                                                                                  |
| order_info           | OrderInfo                        | false (Falso)     | Order info provided by the user                                                                                                                                                                                                                                                                       |

## Game

This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.

| Campo         | Tipo                             | Requerido         | Descrição                                                                                                                                                                                                                                        |
| ------------- | -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title         | String (Sequência de caracteres) | true (Verdadeiro) | Title of the game                                                                                                                                                                                                                                |
| description   | String (Sequência de caracteres) | true (Verdadeiro) | Description of the game                                                                                                                                                                                                                          |
| photo         | Array de PhotoSize               | true (Verdadeiro) | Photo that will be displayed in the game message in chats.                                                                                                                                                                                       |
| text          | String (Sequência de caracteres) | false (Falso)     | Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. |
| text_entities | Array de MessageEntity           | false (Falso)     | Special entities that appear in text, such as usernames, URLs, bot commands, etc.                                                                                                                                                                |
| animation     | Animation                        | false (Falso)     | Animation that will be displayed in the game message in chats. Upload via BotFather                                                                                                                                                              |

## Animation

You can provide an animation for your game so that it looks stylish in chats (check out Lumberjack for an example). This object represents an animation file to be displayed in the message containing a game.

| Campo     | Tipo                             | Requerido         | Descrição                                             |
| --------- | -------------------------------- | ----------------- | ----------------------------------------------------- |
| file_id   | String (Sequência de caracteres) | true (Verdadeiro) | Identificador exclusivo do arquivo                    |
| thumb     | PhotoSize                        | false (Falso)     | Animation thumbnail as defined by sender              |
| file_name | String (Sequência de caracteres) | false (Falso)     | Original animation filename as defined by sender      |
| mime_type | String (Sequência de caracteres) | false (Falso)     | Tipo MIME do arquivo conforme definido pelo remetente |
| file_size | Integer (Número)                 | false (Falso)     | Tamanho do arquivo                                    |

## GameHighScore

Esse objeto representa uma linha da tabela de pontuações mais altas de um jogo.

| Campo    | Tipo             | Requerido         | Descrição                              |
| -------- | ---------------- | ----------------- | -------------------------------------- |
| position | Integer (Número) | true (Verdadeiro) | Posição na tabela de pontuação do jogo |
| user     | User             | true (Verdadeiro) | User                                   |
| score    | Integer (Número) | true (Verdadeiro) | Pontuação                              |