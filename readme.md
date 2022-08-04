# discord-address-whitelister

A discord bot allowing users of a specific role the ability to whitelist an address against their discord id.

## Requirements

Node v16.6.0 or higher
## Installation

```bash
cp .env.example .env
```

```bash
npm install -g typescript ts-node
```

```bash
npm install
```

## Instructions

- Create a Bot through the discord developer portal, give it relevant permissions and invite it to your discord server.

#### Add to the .env File:

- The TOKEN for the discord bot.

- The SERVER_ID

- The relevant ROLE_ID which a user must have to whitelist an address.

## Running

```bash
npm run start
```

## Notes

- It's assumed that a database and table already exist to interact with.
- The message is only listening for a mainnet cardano address.