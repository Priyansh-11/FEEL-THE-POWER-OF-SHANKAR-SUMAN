module.exports.config = {
	name: "lyrics",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "Prince Sanel",
	description: "lyrics finder artist is optional",
  usePrefix: true,
	commandCategory: "fun",
	usages: "[song] by [artist]",
	cooldowns: 1,
	
	}; // Credits fot the api: Prince Osorio

module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	const req = args.join(" ").split("by");
	if (!req[0]) return api.sendMessage("[!] Need a lyrics to proceed.", event.threadID, event.messageID);
	try {
	if (req[0] && !req[1]) {
	api.sendMessage(`»» Searching ${req[0]}...\nPlease wait...`, event.threadID, event.messageID);
	axios.get(`https://mainapi.princemc166.repl.co/api/lyrics?songName=${encodeURI(req[0])}`).then(res => {
		let callback = function () {
					api.sendMessage({
						body: `»» Title: ${res.data.title}\n»» Artist: ${res.data.artist}\n\n${res.data.lyrics}`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.image).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	}
	else {
		api.sendMessage(`»» Searching ${req[0]}...\nPlease wait...`, event.threadID, event.messageID);
		axios.get(`https://mainapi.princemc166.repl.co/api/lyrics?songName=${encodeURI(req[0])}&artist=${encodeURI(req[1])}`).then(res => {
		let callback = function () {
					api.sendMessage({
						body: `»» Title: ${res.data.title}\n»» Artist: ${res.data.artist}\n\n${res.data.lyrics}`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.image).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	}
	} catch (error){
		api.sendMessage("An error occurred while fetching the Lyrics api", event.threadID, event.messageID);
	}
}