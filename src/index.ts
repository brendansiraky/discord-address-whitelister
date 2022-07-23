import DiscordJs, { Intents, Message, GuildMember, PartialGuildMember } from 'discord.js'

import { handleMessageCreate } from '../utility/handleMessageCreate'
import { config } from '../config'
import { handleGuildMemberChange } from '../utility/handleGuildMemberChange'

export const client = new DiscordJs.Client({
    intents: [
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
    ],
    partials: [
        'CHANNEL',
    ]
})

client.on('ready', async () => {
    console.log('Whitelister Bot Connected!')
})

client.on('messageCreate', async (message: Message) => {
    handleMessageCreate(message, client)
})

client.on('guildMemberUpdate', async (guildMember: GuildMember | PartialGuildMember) => {
    handleGuildMemberChange(guildMember, client)
})

client.on('guildMemberRemove', async (guildMember: GuildMember | PartialGuildMember) => {
    handleGuildMemberChange(guildMember, client)
})

client.login(config.TOKEN)