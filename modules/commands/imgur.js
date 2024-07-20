module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Deku",
    description: "imgur upload",
    commandCategory: "imgur",
    usages: "[reply to image]",
    cooldowns: 5
};
 
module.exports.run = async ({ api, event }) => {
const axios = require('axios');
var link = event.messageReply.attachments[0].url || args.join(" ");
    if(!link) return api.sendMessage('Please reply to image.', event.threadID, event.messageID)
const res = await axios.get(`https://sim.ainz-project.repl.co/others/imgur?link=${encodeURIComponent(link)}`);    
var result = res.data.uploaded.image;
    return api.sendMessage(result, event.threadID, event.messageID);
 
}