import { knexConfig } from '../knexfile'

export const whitelistTable = () => knexConfig('whitelist')