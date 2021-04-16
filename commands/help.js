const { MessageEmbed } = require('discord.js')
const { prefix } = require('../config')

module.exports={
  name: 'help',
  description: 'Shows all the commands of the bot.',
  async excecute(message, args, client){
    
    if(args[0]) {
      const ctg = client.commands.get(args[0])
      if(!ctg) return message.reply('Invalid Command'), message.react('❌')
      
      const name = ctg.name
      const desc = ctg.description

      message.react('✅')
      const ctgEmbed = new MessageEmbed()
       .setTitle(`Name: ${name} \nDescription: ${desc}`)
       .setColor('WHITE')
       .setTimestamp();

       message.channel.send(ctgEmbed)
    } else {
      let cmds = client.commands.map(command => command.name)
       
       message.react('✅')
       const allEmbed = new MessageEmbed()
       .setTitle('My Prefix is \`' + prefix + '\` \n\nHere are all my commands:')
       .setDescription(`**${cmds.join(` \n `) }** \n *You can say **>help [command name]** for a description of the command.* \n \n **You can also join our support server at discord.gg/chEh4MhsUM.** \n \n **Look at the website at helperbot.gq.**`)
       .setColor('WHITE')
       .setTimestamp();

       message.channel.send(allEmbed)

    }
  }
}