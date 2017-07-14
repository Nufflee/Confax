const Discord = require('discord.js')
const Confax = require('../bot.js')
const bot = Confax.bot
const config = Confax.config

bot.on('ready', () => {
  setUp()
  console.log('Confax is ready to rumble!')
})

bot.on('reconnecting', () => {
  setUp()
  console.log('Confax has reconnected to Discord.')
})

function setUp(){
  bot.user.setGame('!help to get started.')
  bot.user.setStatus('online')
}

bot.login(process.env.BOT_TOKEN)
