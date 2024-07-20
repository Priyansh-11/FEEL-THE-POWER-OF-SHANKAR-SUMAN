module.exports.config = {
    name: "paste",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel Osorio",
    description: "Paste an code from pastebin",
    usePrefix: true,
    commandCategory: "Random",
    usages: "[pblink]",
    cooldowns: 0,
};
module.exports.run = async function ({ api, event, args }) {
	const axios = require('axios');
	const text = args[0];
	var urlR = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    var url = text.match(urlR);
	if (!url[0]) return api.sendMessage("[!] Need an Pastebin link to proceed", event.threadID, event.messageID);
	const res = await axios.get(url[0]);
	api.sendMessage(`${res.data}`, event.threadID, event.messageID);
}