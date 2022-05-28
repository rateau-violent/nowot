const dotenv = require('dotenv');

import { Client, Intents } from "discord.js";

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

client.on("message", message => {
    if (message.content.toLowerCase().includes("wowo")) {
        message.react('🖕');
    }
    if (message.content.toLowerCase().includes("ωoωo")) {
       message.react('🖕');
    }
});

client.login(token);
