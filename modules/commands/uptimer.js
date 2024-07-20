const axios = require("axios");

module.exports.config = {
  name: "uptimer", 
  version: "1.0.0",
  hasPermission: 0,
  credits: "Prince Sanel", 
  description: "Uptime robot with 3 methods [add/delete/get] you can use uptime [help] to see more description",
  commandCategory: "Random",
  usages: "[help]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
	let { threadID, messageID, senderID } = event;
	const req = args[0].toLowerCase();
	try {
	if (!req) return api.sendMessage("Need an method to proceed in uptime", threadID, messageID);
	if (req == 'get') {
		const res = await axios.get(`https://mainapi.princemc166.repl.co/api/getuptime`);
		api.sendMessage(res.data.uptime, threadID, messageID);
		return;
	};
	if (req == 'delete') {
		if (!args[1]) return api.sendMessage("[!] Need an id to proceed", threadID, messageID);
		const res = await axios.get(`https://mainapi.princemc166.repl.co/api/deluptime?id=${encodeURI(args[1])}`);
		api.sendMessage(res.data.uptime, threadID, messageID);
		return;
	};
	if (req == 'add') {
		if (!args[2] && !args[1]) return api.sendMessage(`[!] Please provide an name and url.\nex. ${global.config.PREFIX}${this.config.name} add prince https://mainapi.princemc166.repl.co/`, threadID, messageID);
		const res = await axios.get(`https://mainapi.princemc166.repl.co/api/uptime?name=${encodeURI(args[1])}&url=${encodeURI(args[2])}`);
		api.sendMessage(res.data.uptime, threadID, messageID);
		return;
	};
	if (req == 'help') {
		api.sendMessage(`[ Uptime Help ]\n\n1. ${global.config.PREFIX}${this.config.name}uptime get \n-- To get all monitors\n\n2. ${global.config.PREFIX}${this.config.name}uptime delete <id>\n--To delete the monitor\n\n3. ${global.config.PREFIX}${this.config.name}uptime add <name> <url>\n--To add monitors in uptime\n\n--Cliff VinCent`, threadID, messageID);
		return;
	};
	} catch (error) {
		api.sendMessage("An error occured while fetching the api", threadID, messageID);
	}
}