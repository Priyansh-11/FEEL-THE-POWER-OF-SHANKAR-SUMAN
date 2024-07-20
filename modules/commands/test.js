module.exports.config = {
  name: "test",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Prince Sanel",
  description: "",
  commandCategory: "Random",
  usages: "",
  cooldowns: 5,
};
module.exports.run = async ({ api, event, args, Currencies }) {
    const axios = require("axios");
    const fs = require("fs");
    const request = require("request");
	try {
		const res = await axios.get(`https://api.kenliejugarap.com/rankupgif/rankup.php?fbid=${senderID}`, { responseType: 'stream' });
            const writer = fs.createWriteStream(gifPath);
            response.data.pipe(writer);
        let callback = function () {
					api.sendMessage({
						body: `Welcome ${}`,
						attachment: fs.createReadStream(__dirname + `/cache/welcome.gif`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/welcome.gif`), event.messageID);
				};
				request(encodeURI(res)).pipe(fs.createWriteStream(__dirname + `/cache/welcome.gif`)).on("close", callback);
			})
	} catch (err) {
		return api.sendMessage(
			"An error occured",
			event.threadID
		);
	}
}