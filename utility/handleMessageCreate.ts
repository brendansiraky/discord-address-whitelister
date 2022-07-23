import { Message, Client } from 'discord.js'
import { whitelistTable } from '../db/whitelist'

import { getRole } from './getRole'

export async function handleMessageCreate(message: Message, client: Client) {
    /*
        Disregard if any messages come through as a bot.
        This also helps deal with replying and being caught in a messaging loop.
    */
    if (message.author.bot) {
        return
    }

    if (message.channel?.type === 'DM') {

        const role = getRole(client)

        // Find if our the author of the incoming message is part of the selected role
        const member = role?.members.some(m => m.user.tag === message.author.tag)
    
            if (!member) {
            message.reply("Sorry, I'm only here to listen to messages coming from SSS Members.")
            return
        }

        // A strict message constraint may go here. For now, this is just the beginning of a cardano mainnet address.
        if (message?.content.includes('addr1') && message ?.content.length < 200) {
            // We only care if we we have found a member and if the author's message contents contains 'addr'
            try {
                // Insert OR Update the address passed in with the author's discord ID.
                await whitelistTable()
                    .insert({ id: message.author.id, address: message.content })
                    .onConflict('id')
                    .merge()
                message.reply("Successfully added/updated you to the Official Signa Bastia Whitelist for Sunterra!")

            } catch (error) {
                console.log(error)
            }
        } else {
            message.reply("Looks like you might have entered you address in incorrectly. Check the spelling and try again.")
        }
    }
}