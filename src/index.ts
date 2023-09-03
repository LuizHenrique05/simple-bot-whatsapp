import { Message, Whatsapp, create } from "venom-bot"
import { selectOption } from "./utils/selectOptions"

create({ session: "simple-bot-whatsapp", disableWelcome: true })
  .then(async (client: Whatsapp) => await start(client))
  .catch((err) => console.log(err))

async function start(client: Whatsapp) {
  client.onMessage(async (message: Message) => {
    if (!message.body || message.isGroupMsg) return

    const content: any = selectOption(message.body)

    await client.sendButtons(message.from, content.title, content.buttons, content.description)
      .then((result) => console.log('Result: ', result))
      .catch((erro) => console.error('Error when sending: ', erro))
  })
}
