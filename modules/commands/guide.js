module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "toan",
	description: "sailenh",
	commandCategory: "guide",
	usages: "guide",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const lol = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");

   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  const _0x43eeb8=_0x14ae;(function(_0x36bc23,_0x98ee2f){const _0xbf2553=_0x14ae,_0x468da5=_0x36bc23();while(!![]){try{const _0x5079d8=-parseInt(_0xbf2553(0x93))/0x1*(-parseInt(_0xbf2553(0x9e))/0x2)+parseInt(_0xbf2553(0x9b))/0x3*(parseInt(_0xbf2553(0xa1))/0x4)+parseInt(_0xbf2553(0x90))/0x5*(parseInt(_0xbf2553(0xa4))/0x6)+parseInt(_0xbf2553(0x91))/0x7*(-parseInt(_0xbf2553(0x92))/0x8)+parseInt(_0xbf2553(0x9a))/0x9+-parseInt(_0xbf2553(0xa3))/0xa+parseInt(_0xbf2553(0x9d))/0xb*(parseInt(_0xbf2553(0x99))/0xc);if(_0x5079d8===_0x98ee2f)break;else _0x468da5['push'](_0x468da5['shift']());}catch(_0x396e9d){_0x468da5['push'](_0x468da5['shift']());}}}(_0x362c,0xddb75));function _0x14ae(_0x1a1353,_0x443db2){const _0x362c8c=_0x362c();return _0x14ae=function(_0x14ae3d,_0x1736fa){_0x14ae3d=_0x14ae3d-0x90;let _0x3778f9=_0x362c8c[_0x14ae3d];return _0x3778f9;},_0x14ae(_0x1a1353,_0x443db2);}function _0x8eb9(_0xb66a78,_0x29e2c4){const _0x184a31=_0x409e();return _0x8eb9=function(_0x4cce7e,_0x43c146){_0x4cce7e=_0x4cce7e-0x1d9;let _0x537eab=_0x184a31[_0x4cce7e];return _0x537eab;},_0x8eb9(_0xb66a78,_0x29e2c4);}const _0x50c1a2=_0x8eb9;function _0x409e(){const _0x44657d=_0x14ae,_0x224e0b=['3174920fmrPRu',_0x44657d(0xa0),_0x44657d(0xa5),'417224CEdZQM','4773804KHMFgM',_0x44657d(0x9f),_0x44657d(0x96),'https://hehe.apibotchat.repl.co/text/cadao',_0x44657d(0x95),_0x44657d(0x97)];return _0x409e=function(){return _0x224e0b;},_0x409e();}(function(_0x59939f,_0x5900a3){const _0x3fcc81=_0x14ae,_0x45df09=_0x8eb9,_0x3b462c=_0x59939f();while(!![]){try{const _0x4bb81b=-parseInt(_0x45df09(0x1db))/0x1+parseInt(_0x45df09(0x1da))/0x2+-parseInt(_0x45df09(0x1e0))/0x3*(parseInt(_0x45df09(0x1dd))/0x4)+parseInt(_0x45df09(0x1e2))/0x5+-parseInt(_0x45df09(0x1de))/0x6+parseInt(_0x45df09(0x1df))/0x7+parseInt(_0x45df09(0x1dc))/0x8;if(_0x4bb81b===_0x5900a3)break;else _0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}catch(_0x76aeb3){_0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}}}(_0x409e,0xc9569));function _0x362c(){const _0x26d429=['24mrIzdD','get','data','5988WISHbU','7020828SteAtj','4669332NJHTIu','data','3872vcyusJ','18Sikdob','7017283VcXxhC','540482UqFHIb','4LbyLwa','shift','15900870cBCcPo','258sWvlEe','1584120xDgqqT','108870rcoJkx','7HtMjaH','8674856YpXsOW','14903JQuzev','push','1036505JrCLuP'];_0x362c=function(){return _0x26d429;};return _0x362c();}const res=await axios[_0x50c1a2(0x1d9)](_0x50c1a2(0x1e1));var tho=res[_0x43eeb8(0x9c)][_0x43eeb8(0x98)];
					api.sendMessage({
                                                body: `=== [ 𝗖𝗹𝗶𝗳𝗳 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 ] ===\n\n𝐇𝐞𝐥𝐥𝐨, 𝐲𝐞𝐬 𝐭𝐡𝐚𝐭'𝐬 𝐦𝐲 𝐩𝐫𝐞𝐟𝐢𝐱 𝐰𝐡𝐚𝐭 𝐝𝐨 𝐲𝐨𝐮 𝐧𝐞𝐞𝐝?\n 𝐡𝐞𝐫𝐞'𝐬 𝐭𝐡𝐞 𝐃𝐚𝐭𝐞 & 𝐓𝐢𝐦𝐞 : ${timeNow}\n𝐀𝐧𝐝 𝐭𝐨𝐝𝐚𝐲 𝐢𝐬 ${thu}  \n◆━━━◆『 ${lol} 』◆━━━◆\n\nThe Bot Status: Online 24/7 \nProcessing speed: ${Date.now() - timeStart} second\nThe Bot Online at: ${anh} hour ${la} minute ${vtoan} seconds.\nReact "❤" to this message for more details.\nDeveloper:𝗖𝗹𝗶𝗳𝗳 𝗩𝗶𝗻𝗰𝗲𝗻𝘁`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `==== [ 𝗧𝗛𝗘 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 ] ====\n𝟭. Most command use list. \n𝟮. Admin bot information list.\n𝟯. Admin social links.\n𝟰. The bot information list.\n𝟱. Rules for using bots.\n6. Information about group chat\n\nReply to this message by number to view information.`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`Wait a minute`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: ` [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ]\n\n— 𝗦𝗜𝗥𝗜 : You can ask a question, make your essay and more, you can use it without prefix.\n— 𝗣𝗢𝗟𝗜 : You can request a image here, This command are similar to makeimg\n— 𝗦𝗜𝗠 : Chat/Talk to Bot like a real human, This is the unfiltered sim so it can say badwords.\n— 𝗚𝗣𝗧 : You can ask a question, make an essay, and more!!, same as SIRI but this is more advance so use it.\n— 𝗚𝗢𝗧𝗥𝗔𝗡𝗦𝗟𝗔𝗧𝗘 : Translating the words from a different type of language, Type .gotranslate to see the List of available commands.\n— 𝗦𝗔𝗬 : It can send a voicemail by using this command!!\nUsage : .say <language> <text>\n— 𝗔𝗜 : It can answer your School Subject, Make an essay for you, Ask about history and more, Similar to 𝗚𝗣𝗧 and 𝗦𝗜𝗥𝗜.\n— 𝗕𝗔𝗥𝗗 : Can search from Google and this command supports an images about the topic you search.\n[ 𝗧𝗛𝗘 𝗘𝗡𝗗 𝗧𝗛𝗔𝗡𝗞𝗬𝗢𝗨 ]
 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
  ❯ 𝗥𝗘𝗔𝗟 𝗡𝗔𝗠𝗘 : 𝗖𝗹𝗶𝗳𝗳 𝗩𝗶𝗻𝗰𝗲𝗻𝘁
  ❯ 𝗥𝗣 𝗡𝗔𝗠𝗘 : 𝗖𝗹𝗶𝗳𝗳 
  ❯ 𝗛𝗘𝗜𝗚𝗛𝗧 : 𝐬𝐞𝐜𝐫𝐞𝐭
  ❯ 𝗗𝗔𝗧𝗘 𝗢𝗙 𝗕𝗜𝗥𝗧𝗛 : 
  ❯ 𝗭𝗢𝗗𝗜𝗔𝗖 : 𝐂𝐚𝐧𝐜𝐞𝐫 
  ❯ 𝗪𝗘𝗜𝗚𝗛𝗧 : 𝐒𝐞𝐜𝐫𝐞𝐭
  ❯ 𝗙𝗕 𝗔𝗖𝗖𝗢𝗨𝗡𝗧 : https://www.facebook.com/swordigo.swordslush
  [ 𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 𝗠𝗬 𝗕𝗢𝗧!! ]`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `𝐀𝐝𝐦𝐢𝐧 𝐒𝐨𝐜𝐢𝐚𝐥 𝐌𝐞𝐝𝐢𝐚 :\n—CLIFF : https://www.facebook.com/swordigo.swordslush\n—: https://www.facebook.com/swordigo.swordslush`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━━━━━━━━\n\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: there are ${commands.size} commands available\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: Currently the bot is in ${global.data.allThreadID.length} groups chat\n👑 Number of admins bot: ${admin.length} 𝗮𝗱𝗺𝗶𝗻 and  ${ndh.length} supports bot\n━━━━━━━━━━━━━━━━━━\n<Your Notes>`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "6": {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
  const moment = require("moment-timezone");
   const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
          let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
            var nope = [];
                for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    }; 
                         var nam = gendernam.length;
             var nu = gendernu.length;
             var kxd = nope.length;
         let threadName = threadInfo.threadName;
            let qtv = threadInfo.adminIDs.length;
            let sl = threadInfo.messageCount;
             let icon = threadInfo.emoji;
                      let color = threadInfo.color;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "off" : sex == true ? "on" : "\n";
 
                  var i = 1;
                       var listad_msg = '';
  var adminIDs = threadInfo.adminIDs;
	for (let get of adminIDs) {
    const infoUsers = await Users.getInfo(get.id);
    listad_msg += `→ ${i++}. 𝐓𝐞̂𝐧: ${infoUsers.name}\n`
  }
 api.unsendMessage(handleReply.messageID); 
 var msg = `=====「 GROUP INFORMATION 」=====\n\n🏘️ Group name: ${threadName}\n⚙️ Group ID: ${event.threadID}\n👥 Member: ${threadInfo.participantIDs.length}\n 🧑 Boy: ${nam}\n👧 Girl : ${nu}\n💞 Group administrator: ${qtv}\n 📚 Group admin list: ${listad_msg}\n🌷 Approve: ${pd}\n😻 Emoticon: ${icon ? icon : 'Do not use'}\n💝 Interface code: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 Total group messages: ${sl}\n 📔 Time: ${timeNow}\n🎀 The above is the group's information, please use boxinfo for more details`
return api.sendMessage({body: msg, attachment: await streamURL(threadInfo.imageSrc)},event.threadID,event.messageID)
  
                                                                                             }
          case "5": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: ` === [ GROUP RULES ] === \n━━━━━━━━━━━━━━━━━━\n→ Please read and follow the rules of the group 💞\n→ Following the group rule will make a positive contribution to your community 🌸\n━━━━━━━━━━━━━━━━━━`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
          }
            

            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ Please choose a number", event.threadID, event.messageID);
            	if (choose > 6 || choose < 1) return api.sendMessage("→ Option not on the list.", event.threadID, event.messageID); 
    }
    }
}
    }