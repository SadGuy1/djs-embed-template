// Template by SadGuy
const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const TOKEN = 'your_bot_token'
const client = new Client();
   client.on('ready', () => {
        client.user.setActivity('YOUR_BOT_STATUS ', { type: 'PLAYING' });
        console.log(`${client.user.username} logged in!`);
    })
client.on('message', message => {
  if (message.content === '!embed') {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('your_embed_title')
	.setDescription('your_embed_description')
	.setThumbnail('https://cdn.sadguy.pl/admin.png')
	.addFields(
		{ name: '\u200B', value: 'embed_field_1' },
	)
	.setTimestamp()
	.setFooter('your_embed_footer', 'https://cdn.sadguy.pl/admin.png');

message.channel.send(exampleEmbed);
}});
// If there are bugs here, comment and I'll try to fix them as soon as possible.
// Check out my website! sadguy.pl

client.login(TOKEN);
