module.exports.config = {
	name: "coupledp",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Prince Sanel",
	description: "Random Couple Dp",
	commandCategory: "fun",
	usages: "[noprefix]",
	cooldowns: 1,
	
	}; // Credits fot the api:chard api

module.exports.run = async ({ api, event, args }) => {
	const axios = require("axios");
	const fs = require("fs");
	const request = require("request");
	try {
	axios.get(`https://nguyen-chard-api.joshuag06.repl.co/api/randomgambar/couplepp`).then(res => {
		let callback = function () {
					api.sendMessage({
						body: `Boy:`,
						attachment: fs.createReadStream(__dirname + `/cache/cdp.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cdp.jpg`), event.messageID);
				};
				request(res.data.result.male).pipe(fs.createWriteStream(__dirname + `/cache/cdp.jpg`)).on("close", callback);
		let callback = function () {
					api.sendMessage({
						body: `Girl:`,
						attachment: fs.createReadStream(__dirname + `/cache/cdp1.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cdp1.jpg`), event.messageID);
				};
				request(res.data.result.female).pipe(fs.createWriteStream(__dirname + `/cache/cdp1.jpg`)).on("close", callback);
			})
	} catch (error) return api.sendMessage("An error occured while fetching the api", event.threadID, event.messageID);
}