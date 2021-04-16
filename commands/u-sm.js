module.exports = {
  name: 'sm',
  description: 'Sets slowmode in channel.',
  async excecute(message, args) {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You cannot use this command.'), message.react('❌')
    else {
      message.react('✅')
    }
    
    if (!args[0]) return message.channel.send('You did not mention the time in seconds to set the slowmode to.');
    if (args[0] === 'none') {
      await message.channel.setRateLimitPerUser(0);
      return message.channel.send('Set slowmode to 0 seconds.')
    }
    const setTimeTo = Number(args[0]);

    if (setTimeTo === 5) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 5 seconds.')
    };
    if (setTimeTo === 10) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 10 seconds.')
    };
    if (setTimeTo === 15) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 15 seconds.')
    };
    if (setTimeTo === 30) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 30 seconds.')
    };
    if (setTimeTo === 60) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 1 minute.')
    };
    if (setTimeTo === 900) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 15 minutes.')
    };
    if (setTimeTo === 1000) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 1000 seconds, or 16 minutes and 40 seconds.')
    };
    if (setTimeTo === 1500) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 25 minutes.')
    };
    if (setTimeTo === 3600) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 1 hour.')
    };
    if (setTimeTo === 7200) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 2 hours.')
    };

    if (setTimeTo === 21600) {
      await message.channel.setRateLimitPerUser(setTimeTo);
      return message.channel.send('Set slowmode to 6 hours.')
    };
    message.reactions.removeAll()
    message.react('❌')
    message.channel.send('Invalid time.' + ` **Options are:** none, 5, 10, 15, 30, 60, 900, 1000, 1500, 3600, 7200, and 21600.`)
  }
}
    