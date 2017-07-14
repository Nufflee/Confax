const Discord = require('discord.js')
const Confax = require('../bot.js')

Confax.registerCommand('uptime', 'default', (message, bot) => {
  var now = Date.now()
  var msec = now - bot.readyTimestamp
  var days = Math.floor(msec / 1000 / 60 / 60 / 24)
  msec -= days * 1000 * 60 * 60 * 24
  var hours = Math.floor(msec / 1000 / 60 / 60)
  msec -= hours * 1000 * 60 * 60
  var mins = Math.floor(msec / 1000 / 60)
  msec -= mins * 1000 * 60
  var secs = Math.floor(msec / 1000)
  var timestring = ''
  if (days > 0) {
    timestring += days + 'd '
  }
  if (hours > 0) {
    timestring += hours + 'h '
  }
  if (mins > 0) {
    timestring += mins + 'm '
  }
  if (secs > 0) {
    timestring += secs + 's '
  }
  return '**Uptime:** ' + timestring
}, [], 'View the current uptime of Confax', '[]')
