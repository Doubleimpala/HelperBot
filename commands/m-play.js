const ytdl = require('ytdl-core')
const connection = require('ffmpeg')

module.exports = {
  name: 'play',
  description: 'Plays the youtube link you provide!',
  async excecute(message, args) {
    if (!args[0]){
      message.reply('You did not send a link to the song!')
    }

    const connection = await message.member.voice.channel.join();
    
    const ytLink = args.join(" ")
    const stream = ytdl(ytLink, { filter: 'audioonly' });
    const dispatcher = connection.play(stream);
  }
}