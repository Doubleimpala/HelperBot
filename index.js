require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
  const event = require(`./events/${file}`)
  if(event.once) {
    client.once(event.name, (...args) => event.excecute(...args, client));
  } else{
    client.on(event.name, (...args) => event.excecute(...args, client));
  }
}

const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for (file of command_files) {
  const command = require(`./commands/${file}`);
  const command_name = file.split('.')[0];

  if (command.name){
  console.log(`${command_name} loaded!`)
  client.commands.set(command.name, command)
  } else{
    continue
  }
}

//Prefix help scanners:

client.on('message', message => {
	if (message.content === 'help') {
		message.channel.send('My prefix is > and try >help for all the commands.');
	}
});

client.on('message', message => {
	if (message.content === 'prefix') {
		message.channel.send('My prefix is > and try >help for all the commands.');
	}
});


//End Prefix help scanners.

const { prefix } = require('./config')
const server = require('./server.js')

client.login(process.env.token);