const axios = require("axios");
module.exports.config = {
    name: "advice",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "Random Advice",
    usePrefix: true,
    commandCategory: "Random",
    usages: "[noprefix]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args}) {
	var { threadID, messageID } = event;
	try {
		const res = await axios(`https://sensui-useless-apis.codersensui.repl.co/api/fun/advice`);
		api.sendMessage(`»» Advice:\n「 ${res.data.advice} 」`, threadID, messageID);
	} catch (error) {
		api.sendMessage(error, threadID, messageID);
	}
}