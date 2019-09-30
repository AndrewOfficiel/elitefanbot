const Discord = require("discord.js");
var prefix = "ef/"

module.exports = async(client, message) => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if(!message.content.startWith(prefix +)) return;

    const args = message.content.slice(prefix.lenght).trim().split(/ef/g);
    const commande = args.shift();

    const cmd = client.commands.get(commande);

    if(!cmd) return;

    cmd.run(client, message, args)
};

client.on("message", async message => 
{  //Soit je voie un message 

    if(message.content.startWith(config.prefix +"discord")) {  //Je vérifie qu'il commence par ef/discord
    message.author.send("Mon discord : https://discord.gg/MxzmtdK");   //J'envoie un message privé à son auteur
    }
});
