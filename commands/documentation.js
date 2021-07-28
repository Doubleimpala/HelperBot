const { MessageEmbed } = require('discord.js')

module.exports={
  name: 'documentation',
  description: 'Provides documentation for the bot.',
  async excecute(message, args, client){
    const docembed = new MessageEmbed()
    .setTitle("Documentation")
    .addField("Updates", "Check out the trello: https://trello.com/b/KYrvkDps/helper-bot")
    .addField("Existing Commands", "Try >help to look at all the commands. Do >help [command name] to get a description")
    .addField("Invite", "Really want to invite the bot? Use this! \n https://discord.com/oauth2/authorize?client_id=827944592912809995&permissions=8&scope=bot")
    .addField("Support", "If you can't figure something out, no worries. Either DM Doubleimpala#2019, or just wait until we release some documentation on a website.")
    .setFooter("Official Documentation for HelperBot. Last edited: 6/28/21")

    message.channel.send(docembed)
  }
}