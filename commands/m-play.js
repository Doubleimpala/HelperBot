const ytdl = require('ytdl-core')
const ytSearch = require('yt-search')

module.exports = {
  name: 'play',
  description: 'Plays youtube link or keywords you provide!',
  async excecute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play something.')
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send('You don\'t have the correct permissions.');
    if (!permissions.has('SPEAK')) return message.channel.send('You don\'t have the correct permissions.');
    if (!args.length) return message.channel.send('Insufficient Args. You need to send the second argument.')


    const validUrl = (str) =>{
      var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if(!regex.test(str)){
        return false
      } else {
        return true
      }
    }

    if(validUrl(args[0])){

      const connection = await voiceChannel.join()
      const stream = ytdl(args[0], {filter: 'audioonly'});
      
      connection.play(stream, {seek: 0, volume: 1})
      .on('finish', () =>{
        voiceChannel.leave();
        message.channel.send('Leaving channel')
      });

      await message.reply('Now playing ***Your Link!***')

      return
    }

    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query)

      return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
    }

    const video = await videoFinder(args.join(' '));

    if(video){
      const stream = ytdl(video.url, {filter: 'audioonly'});
      connection.play(stream, {seek: 0, volume: 1})
      .on('finish', () =>{
        voiceChannel.leave();
      });

      await message.reply(`Now playing ***${video.title}***`)
    }
    else{
      message.channel.send('No video results found.')
    }
  }
}