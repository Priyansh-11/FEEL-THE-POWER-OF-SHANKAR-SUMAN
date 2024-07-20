module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "KENLIEPLAYS",
    description: "GPTGO by KENLIEPLAYS",
    commandCategory: "ai",
    usages: "[ask]",
    cooldowns: 1,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("𝖯𝗅𝖾𝖺𝗌𝖾 𝖺𝖽𝖽 𝖺 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇 𝖺𝖿𝗍𝖾𝗋 '𝖠𝗂'. 𝖥𝗈𝗋 𝖾𝗑𝖺𝗆𝗉𝗅𝖾: '𝖠𝗂 𝖶𝗁𝖺𝗍 𝗂𝗌 𝗍𝗁𝖾 𝖼𝖺𝗉𝗂𝗍𝖺𝗅 𝗈𝖿 Jimalalud?'", tid, mid);
    try {
        const res = await axios.get(`https://api.kenliejugarap.com/gptgo/?text=${content}`);
        const respond = res.data.response;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};