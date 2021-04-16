module.exports = {
  name: 'verify',
  description: 'A fun command for now, but later once we add setup, you will be able to add a human barrier so that people have to verify to get a certain role.',
  async excecute(message, args, client) {
    message.channel.send('React to your message with ✅ to be verified!')
    message.react('✅')
    const filter = (reaction, user) => {
      return ['✅'].includes(reaction.emoji.name) && user.id === message.author.id;
  };
  
  message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✅') {
			message.reply('You were verified!');
		} else {
			message.reply('There was an error. Contact the developers in the support server.');
    }
  })
  }
}