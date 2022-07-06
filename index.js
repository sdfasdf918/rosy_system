require("http").createServer((req, res) => res.end(process.version)).listen()

const { Client, Collection } = require("discord.js");
const Discord = require("discord.js");
const colors = require("colors");
const Enmap = require("enmap");
const { promisify } = require("util");
const { glob } = require("glob");

const globPromise = promisify(glob)

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login("OTg5ODEzMDA2OTc0MjA1OTYy.Gk81a0.vFDRNk7EMQ0GuArlJ806da3F9Yo4QqKkFzeNpc");