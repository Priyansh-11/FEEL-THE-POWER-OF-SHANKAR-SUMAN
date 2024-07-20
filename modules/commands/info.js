module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //fix by Choru tiktokers
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/H2E0nDE.jpg"];
/*FIXING API MESSANGE*/
var callback = () => api.sendMessage({body:`

========𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡========

𝗕𝗢𝗧 𝗡𝗔𝗠𝗘: ${global.config.BOTNAME}

𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡: ${global.config.OWNER}

𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫: ${global.config.PREFIX}

𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥: ${global.config.OWNER}

=============𝗨𝗣𝗧𝗜𝗠𝗘=============

𝗧𝗢𝗗𝗔𝗬 𝗜𝗦: ${juswa} 

𝗥𝗨𝗡𝗡𝗜𝗡𝗚: ${hours}:${minutes}:${seconds}.

✫𝗗𝗢𝗡𝗧 𝗦𝗣𝗔𝗠 𝗧𝗛𝗘 𝗕𝗢𝗧.`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };