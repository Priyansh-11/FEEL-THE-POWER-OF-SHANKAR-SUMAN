const axios = require("axios");
module.exports.config = {
    name: "quote",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "Random Quotes",
    usePrefix: true,
    commandCategory: "Random",
    usages: "[noprefix]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args}) {
	var { threadID, messageID } = event;
	try {
		const res = await axios(`https://sensui-useless-apis.codersensui.repl.co/api/fun/quote`);
		api.sendMessage(`»» Quotes:\n\n»» ${res.data.quote}\n»»${res.data.author} ««`, threadID, messageID);
	} catch (error) {
		api.sendMessage(error, threadID, messageID);
	}
}