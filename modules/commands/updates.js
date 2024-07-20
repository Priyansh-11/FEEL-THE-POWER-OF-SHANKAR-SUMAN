module.exports.config = {
    name: "updates",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince S",
    description: "Updates",
    commandCategory: "Noprefix",
    usages: "(noprefix)To see the BOT UPDATES",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("I updated "+"Sofiav1"+" Bot \n\nUpdates\n\n*Simv3 = 3 in 1 command\n -del function\n -add function\n -sim\n --Credits for this command: Yan\n*Generate Photo\n -it generates any photo\n*Ai2\n -chatgpt\n -educational command\n*Google Bard\n -it generates photo\n -it is usefull like chatgpt");
api.sendMessage("If you want to notify to every update of this bot just add my creator Prince Sanel Osorio", event.threadID, event.messageID);


  }