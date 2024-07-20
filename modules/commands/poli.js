module.exports.config = {
    name: "poli",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "Generate image from pollination.ai",
    usePrefix: true,
    commandCategory: "Random",
    usages: "[prompt]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args}) {
	const { createReadStream } = require("fs-extra");
	const fs = require("fs-extra");
	const axios = require("axios");
	const prompt = args.join(" ");
	const pathImg = __dirname + "/cache/poli.jpg";
	try {
		if (!args[0]) return api.sendMessage("[!] Need an prompt to proceed", event.threadID, event.messageID);
		const gifUrl = `https://image.pollinations.ai/prompt/${encodeURI(prompt)}`;
		const gifBuffer = (await axios.get(gifUrl, { responseType: "arraybuffer" })).data;

		fs.writeFileSync(pathImg, Buffer.from(gifBuffer, "utf-8"));

		api.sendMessage({
			body: `Here's your request..`,
			attachment: fs.createReadStream(pathImg)
		}, event.threadID, () => fs.unlinkSync(pathImg));
	} catch (error) {
		api.sendMessage("An error occured while fetching the api", event.threadID, event.messageID);
	}
}