module.exports = {
  name: 'av',
  description: 'Shows an enlarged version of your avatar.',
  async excecute(message, args) {
    message.react('✅');
    const user = message.author;

		return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
  }
}
		
