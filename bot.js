require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.once('ready', () => {
    console.log('Ready!');
});



client.on('message', message => {
    if (!message.content.toLowerCase().startsWith(process.env.PREFIX + " ") || message.author.bot) return; // if the message doesn't start with !lily, or is from a bot, return
    const args = message.content.slice(process.env.PREFIX.length).split(/ +/); // regex get rid of extra spaces, allows for input like 
    const command = args.shift().toLowerCase();
    if (command == "ping"){ 
        return message.reply('Pong!');
    }

    if (command == "avatar"){
        return message.reply(`${message.author.displayAvatarURL({ format: "png", dynamic: false })}`);
    }

    // if (command == "test"){

    //     return message.channel.send('test worked!');
    // }

});

    client.on('guildMemberAdd', (guildMember) => {
        guildMember.roles.add(guildMember.guild.roles.cache.find(role => role.name === "Newbie!"));
    });