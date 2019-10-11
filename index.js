const Discord = require('discord.js')
const client = new Discord.Client()

var token = "votre token"
var prefix = "e!"

client.login(token);

client.on("ready", function(){
	console.log("Je suis connecter !")
	client.user.setActivity("e!aide", {type : "WATCHING" | ${client.guilds.size} serveurs})
});)
});

client.on("message", function(message){
				  if(message.content.includes(prefix + "deconnexion"))
					if(!message.member.hasPermission("ADMINISTRATOR")) {return message.channel.send("Vous n'avez pas les permissions !")}
					    message.channel.send("```A bientot :(```")
					    message.delete().then(client.destroy())
});

client.on("message", message => {
	 if(message.content.includes("ef/createrole")){
		 message.guild.createRole("new role")
		 message.channel.send("Role creer !")
       };
});

client.on("message", message => {
	 if(message.content.includes("ef/createchannel")){
		 message.guild.createChannel("Salon", "text")
		 message.channel.send("Channel creer !")
       };
});

client.on('guildMemberAdd', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ! **' + member.guild.name)
        .setFooter('Nous sommes desormais' + member.guild.memberCount)
        .setColor("#14FF00")
    member.guild.channels.get('625415667302268940').send(embed)
    member.addRole('625418904457707551')
});
 
client.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription('**:cry:**' + member.user.username + '** Nous a  malheureusement quitte ;(' + member.guild.name)
        .setFooter('Nous sommes desormais' + member.guild.memberCount)
        .setColor("#8B0015")
    member.guild.channels.get('625438443459051541').send(embed)
});

/*Kick*/

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send('**' + member.user.username + '** a ete exclu :white_check_mark:')
    };
});
 
/*Ban*/

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** a ete banni :white_check_mark:')
    };
});


client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(count + 1, true)
    }
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (!member.manageable) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }

    })

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("Veuillez indiquer une raison")
        if (!warns[member.id]) {
            warns[member.id] = []
        };
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        });
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send(member + " a ete warn pour " + reason + " :white_check_mark:")
    };
 
    if (args[0].toLowerCase() === prefix + "infractions") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed)
    };
});

client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    //unmute
    if (args[0].toLowerCase() === prefix + "unmute") {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
        if(!member.manageable) return message.channel.send("Je ne pas unmute ce membre.")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send(member + ' a été unmute :white_check_mark:')
    };
 
    //unwarn
    if (args[0].toLowerCase() === prefix + "unwarn") {
        let member = message.mentions.members.first()
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unwarn ce membre.")
        if(!member.manageable) return message.channel.send("Je ne pas unwarn ce membre.")
        if(!warns[member.id] || !warns[member.id].length) return message.channel.send("Ce membre n'a actuellement aucun warns.")
        warns[member.id].shift()
        message.channel.send("Le dernier warn de " + member + " a été retiré :white_check_mark:")
    };
});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "8ball") {
        if (!args[1]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut etre... :thinking:", "Absolument :interrobang:","Oui :happy:","Cest un connard :angry:","Je m'en fou","Suce ma bite","Absolument pas :x:","Je le connais pas","Salut mais pas salut!","Petite bite"]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#FF00BE")
            .addField("Question :", question)
            .addField("Reponse :", answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    };
});

client.on("message", message => {
	if(message.content === (prefix + "aideModeration")){
  var embed = new Discord.RichEmbed()
		.setTitle("Aide Moderation")
		.setDescription("Ceci est une aide moderation")
		.addField("e!warn","warn la personne", true)
		.addField("e!unwarn","enleve le warn", true)
		.addField("e!ban","Ban la personne selectionner", true)
		.addField("e!mute","mute la personne", true)
		.addField("e!unmute","demute la personne", true)
		.addField("e!kick","expluse la personne du serveur", true)
		.addField("e!clear","supprime tous les messages dans le salon selectionner", true)
		.addField("e!ping","Montre la latence du bot(bientot disponible !)", true)
		.addField("e!createchannel","Creer un channel", true)
		.addField("e!createrole","Creer un role", true)
		.setColor("#FFF300")
		.setFooter("Voici les commandes de moderations| Creer par Andrew Officiel#2074")
	message.channel.sendEmbed(embed);
      };
});

client.on("message", message => {
	if(message.content === (prefix + "aideFun")){
  var embed = new Discord.RichEmbed()
		.setTitle("Fun")
		.setDescription("Ceci est une liste de commandes funs")
		.addField("e!8ball ","Pose une question en mentionnant user et le bot te repond", true)
		.setColor("#FF3800")
		.setFooter("Voici les commandes de fun | Creer par Andrew Officiel#2074")
	message.channel.sendEmbed(embed);
      };
});

client.on("message", message => {
	if(message.content === (prefix + "aide")){
	var embed = new Discord.RichEmbed()
		.setTitle("Liste des commandes")
		.setDescription("Ceci est une aide")
		.addField("e!aide","Affiche les commandes", true)
		.addField("e!aideModeration","affiche les commandes de moderations", true)
		.addField("e!aideFun","affiche des commandes funs", true)
		.addField("e!aideMusique","Affche l'aide de musique(arrive bientôt!)", true)
		.setColor("#FF00A6")
		.setFooter("Bon moment parmis nous ! Créer par Andrew Officiel#2074")
	message.channel.sendEmbed(embed);
     };
});
