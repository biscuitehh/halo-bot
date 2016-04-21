/*
 * halo-bot
 */

var Botkit = require('Botkit')

// Setup Slack Bot
if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

var controller = Botkit.slackbot({
  debug: true
});

controller.spawn({
  token: process.env.token
}).startRTM(function(err) {
  if (err) {
    throw new Error(err);
  }
});

controller.hears(['hello', 'hi', 'help'], 'direct_message,direct_mention,mention', function(bot, message) {
  bot.reply(message, 'Hello.');
});
