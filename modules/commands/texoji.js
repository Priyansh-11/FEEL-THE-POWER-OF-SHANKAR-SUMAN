const axios = require('axios')

module.exports.config = {
     name: "texoji",
     version: "1.0",
     hasPermssion: 0,
     credits: "sensui/mod by Prince sanel",
     description: "texoji fun",
  usePrefix: true,
     commandCategory: "fun",
  usages: "[emoji]-[text]",
     cooldowns: 0
};
//Credits sensui for api
module.exports.run = async function ({ api, event, args }) {
 const content = args.join(" ").split("-").map(item => item = item.trim());
let emoji = encodeURI(content[0])
let text = encodeURI(content[1])
if (!args[0])
    return api.sendMessage("Wrong format!\nUse "+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);
  try {
    const ge = await axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/fun/texoji?emoji=${emoji}&text=${text}`);
    const ga = ge.data.textresult;
    api.sendMessage(`${ga}`, event.threadID, event.messageID);
  } catch(error) {
    console.error(error);
api.sendMessage("error", event.threadID, event.messageID)
    
  }
};