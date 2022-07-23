import { Client, GuildMember, PartialGuildMember } from 'discord.js'

import { getRole } from './getRole'
import { whitelistTable } from '../db/whitelist'

export async function handleGuildMemberChange(guildMember: GuildMember | PartialGuildMember, client: Client) {
    const role = getRole(client)
    const userId = guildMember.id

    const member = role?.members.some(m => m.user.id === userId)

    if (!member) {
        /*
            The member at this stage is not part of the role.
            In this case, we just need to check if that user is in our whitelist database, if they are we need to remove them.
        */
        try {
            await whitelistTable()
                .where({ id: userId })
                .del()
            console.log('Guild Member Removed')
        } catch (error) {
            console.log(error)
        }
    }

}