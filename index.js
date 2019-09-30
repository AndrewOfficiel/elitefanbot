const Discord = require('discord.js')
const client = new Discord.Client()
const monnaie = require('./monnaie.json')

var token = "votre token"
var prefix = "ef/"

client.login(token);

client.on("ready", function(){
	console.log("Je suis connecté")
	client.user.setActivity("ef/", type {"WATCHING"}| ${client.guilds.size} serveurs)
});

client.on("message", function(message){
	 if(message.content.includes(prefix + 'deconnexion')){
		 message.channel.send("**À bientôt !**")
		 message.delete().then(client.destroy())
     }
});

client.on("message", message => {
	 if(message.content.includes("ef/createrole")){
		 message.guild.createRole("new rôle")
		 message.channel.send("Rôle créer !")
       }
});

client.on("message", message => {
	 if(message.content.includes("ef/createchannel")){
		 message.guild.createChannel("Salon", "text")
		 message.channel.send("Channel créer !")
       }
});

client.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** À rejoint ! **' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('625415667302268940').send(embed)
    member.addRole('625418904457707551')
})
 
client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** Nous à malheureusement quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('625438443459051541').send(embed)
})

client.on('message', message => {
    if(message.content.startsWith("<@" + client.user.id + ">")) {
            message.channel.send("mon prefix est **ef/**");        
    }
  
});
