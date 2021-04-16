module.exports={
  name: 'join',
  description: 'The bot joins your voice channel!',
  async excecute(message){
    if (message.member.voice.channel) {
    message.react('✅');
    message.channel.send('Joining but please be in the VC when you say >leave, or else get an admin to kick me out of the VC as it is a bug at this point.')
    const connection = await message.member.voice.channel.join();
    } else{
      message.react('❌')
      message.channel.send("You're not in a VC!")
    }
  }
}