module.exports.config = {
    name: "gname",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "Predict the your gender based in your name.",
    commandCategory: "random",
    usages: "[name]",
    cooldowns: 2,
};
module.exports.run = async function({ api, event, args }) {
const axios = require("axios");
let { messageID, threadID, senderID, body } = event;
const response = args.join(" ");
if (!args[0]) return api.sendMessage("Wrong Format.. \n"+global.config.PREFIX+this.config.name+"Name", threadID, messageID);
try {
const res = await axios.get(`https://api.genderize.io?name=${response}`);
var respond = res.data.gender;
var respond1 = res.data.name;
var respond2 = res.data.probability;
api.sendMessage("Gender: "+respond+"\nName: "+respond1+"\nProbability: "+respond2, threadID , messageID);
} catch (error) {
api.sendMessage("An error occurred while making the API request.", threadID , messageID);
}
};