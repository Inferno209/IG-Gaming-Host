const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "."


client.on("message", message =>{
    console.log("this bot is now online")
    client.user.setActivity("Under development")
if(!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/)
const command = args.shift().toLowerCase();

if (command === "test"){
        message.channel.send("it works")
}else if(command ==="test2"){
      message.channel.send("test 2 also works")
}else; if(command ==="embed"){
      const embred = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Embed")
      .setDescription(`This embed works`)
      message.channel.send(embed)
}else if  (command === "userinfo"){
      let user = message.mentions.users.first() ||message.author || message.member.user
      let member = message.guild.members.cache.get(user.id)
      let userinfo = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`user info for ${user.username}`)
      .setThumbnail(user.displayAvatarURL())
      .addField('Usertag: ', `${user.tag}`)
      .addField('userId: ', `${user.id}`)
      .addField('createdAT: ',`${member.joinedAt}`)
      .addField('joinedAt: ', `${member.joinedAt}`)
      .addField('roles: ', `${member.roles.cache.size - 1}`)
      .addField('Bot: ', `${user.bot}`)
      .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
      message.channel.send(userinfo)
}
if (command === "ping") {
      message.channel.send(`Pong!\n**Took ${Date.now() - message.createdTimestamp}ms**`)
  }
if (command === "kick") {
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Missing Permissions... [Kick members]").then(msg => msg.delete({ timeout : 10000}))
          const member = message.mentions.members.first()
          if(!member) return message.channel.send("You need to mention someone...").then(msg => msg.delete({ timeout : 10000}))
          if (!member.kickable) return message.channel.send("Unable to kick the user... check my role and perms lol").then(msg => msg.delete({ timeout : 10000}))
          const reason = args.slice(1).join(" ")
          if(member) {
              if(!reason) return member.kick().then(member => {message.channel.send(`**${member.user.tag} was kicked**`);
          })

          if(reason) return member.kick(reason).then(member => {message.channel.send(`**${member.user.tag} was kicked**\n> Reason - \`${reason}\``);
      })
    }
  }
  if (command === "ban") {
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Missing Permissions... [Ban members]").then(msg => msg.delete({ timeout : 10000}))
          const member = message.mentions.members.first()
          if(!member) return message.channel.send("You need to mention someone...").then(msg => msg.delete({ timeout : 10000}))
          if (!member.bannable) return message.channel.send("Unable to ban the user... check my role and perms lol").then(msg => msg.delete({ timeout : 10000}))
          const reason = args.slice(1).join(" ")
          if(member) {
              if(!reason) return member.ban().then(member => {message.channel.send(`**${member.user.tag} was kicked**`);
          })

          if(reason) return member.ban(reason).then(member => {message.channel.send(`**${member.user.tag} was kicked**\n> Reason - \`${reason}\``);
      })
    }
  }
  if (command === "purge") {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Missing Permissions... [Manage messages]").then(msg => msg.delete({ timeout : 10000}))
      const number = args.join(" ")
      if (!number) return message.channel.send("You haven't specified amount of messages to purge :/").then(msg => msg.delete({ timeout : 10000}))
      message.channel.bulkDelete(number).catch(console.error)
      message.channel.send(`Delete ${number} messages!`).then(msg => msg.delete({ timeout : 2000}))
  }
  if (command === "help") {
      const helpEmbed = new Discord.MessageEmbed()
              .setTitle(`IG Gamings's Help Menu`)
              .setDescription(`**PREFIX - \`{.}\`**`)
              .addField("`ping`", "Check my latency to discord servers :D")
              .addField("`help_moderation`", "Moderation commands")
              .addField("`help_fun`", "Fun games")
      message.channel.send(helpEmbed)
  }
  if (command === "help_moderation") {
      const helpEmbed = new Discord.MessageEmbed()
              .setTitle(`IG gaming's Help Menu`)
              .addField("`kick`", `Kick someone for being disgracefull\n**Usage: $ {PREFIX}kick [@USER] <REASON>**`)
              .addField("`ban`", `Ban someone for being naughty\n**Usage: $ {PREFIX}ban [@USER] <REASON>**`)
              .addField("`purge`", `Delete messages in bulk and be lazy :P\n**Usage: $ {PREFIX}purge [AMOUNT]**`)
      message.channel.send(helpEmbed)
  }

  if (command === "rps") {
      const choice = [
          "rock",
          "paper",
          "scissors"
      ]
      const msg2 = args.join(" ");
      const res = choice[Math.floor(Math.random() * choice.length)]

      let msg = msg2.toLowerCase().trim()

      if(msg === "rock" || msg === "paper" || msg === "scissor") {

      var first = "You choosed " + msg + " and i choosed " + res + " so, "

      var second;

      if(msg === res) second = "its a Draw:neutral_face:!!"

      else if(msg === "scissor" && res === "paper") second ="l lose :pensive:"

      else if(msg === "paper" && res === "rock") second = "l lose :confused:"

      else if(msg === "rock" && res === "scissor") second = "l lose :tired_face:"

      else second = "I won :smirk: "

      reply = first + second

  } else{

    reply = `You did not choosed any options :/\n**Usage: ${prefix}rps [rock / paper / scissors]**`
  }

  message.channel.send(`${reply}`)
}

})

client.login("ODEzNjQ5OTc3OTE3NDQwMDIx.YDSYlw.rSsXRcR2UTFfQpHIqnGsAp2t1B8");
