module.exports={
  name: 'leave',
  description: 'The bot stops playing and leaves your voice channel!',
  async excecute(message){
    const voiceChannel = message.member.voice.channel;

    if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music.");
    await voiceChannel.leave();
    await message.channel.send('Leaving channel. Good bye ol\' friend!')
  }
}