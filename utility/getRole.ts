import { Client } from 'discord.js'

import { config } from '../config'

const { SERVER_ID, ROLE_ID } = config

export function getRole(client: Client) {

    // Get the guild by CHANNEL_ID
    const guild = client.guilds.cache.get(SERVER_ID)

    // Get the role by ROLE_ID
    const role = guild?.roles.cache.get(ROLE_ID)

    return role
}