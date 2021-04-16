module.exports={
  name: 'leave',
  description: 'The bot leaves your voice channel!',
  async excecute(message){
    message.react('✅');
    if(message.member.voice.channel){
      await message.member.voice.channel.leave();
    } else{
      await voice.channel.leave();
    }
  }
}