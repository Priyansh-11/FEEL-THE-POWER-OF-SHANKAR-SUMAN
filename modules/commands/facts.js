const axios = require("axios");
module.exports.config = {
    name: "facts",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "Random Facts",
    usePrefix: true,
    commandCategory: "Random",
    usages: "[noprefix]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args}) {
	var { threadID, messageID } = event;
	try {
		const res = await axios(`https://sensui-useless-apis.codersensui.repl.co/api/fun/facts`);
		api.sendMessage(`»» Facts:\n»» ${res.data.fact} ««`, threadID, messageID);
	} catch (error) {
		api.sendMessage(error, threadID, messageID);
	}
}