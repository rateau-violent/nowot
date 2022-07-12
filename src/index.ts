const dotenv = require('dotenv');

import { Client, Intents } from "discord.js";
import { isWowo } from "./isWowo";

dotenv.config();

const token = process.env.TOKEN;

console.log(token);

console.log("Nowot is starting...");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

client.once("ready", () => {
    console.log(`${client.user?.username} is ready`);
});

client.on("message", (message) => {
    if (isWowo(message.content.toLowerCase())) {
        message.react('🖕');
    }
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    let content: string = newMessage!.content!.toLowerCase();

    if (content != null && isWowo(content)) {
        newMessage.react('🖕');
    }
});

client.login(token);
