module.exports.config = {
	name: "waifu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Prince Sanel",
	description: "Random Anime Waifu Pics",
	commandCategory: "Random",
	usages: "[noprefix]",
	cooldowns: 5,
	
	}; // credit for api: Prince Sanel
			
module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	try {
	axios.get(`https://mainapi.princemc166.repl.co/api/waifu`).then(res => {
	let callback = function () {
					api.sendMessage({
						body:`Waifu:`,
						attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`)).on("close", callback);
			})
	} catch (error) {
		api.sendMessage("An error occured while fetching the api", event.threadID, event.messageID);
	}
}