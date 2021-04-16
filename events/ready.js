module.exports = {
  name: 'ready',
  once: true,
  excecute (client) {
    console.log(client.user.tag + " has logged in!")
    client.user.setPresence({ activity : {name: '>help', type: 'WATCHING'}, status: 'online'});
  }
}