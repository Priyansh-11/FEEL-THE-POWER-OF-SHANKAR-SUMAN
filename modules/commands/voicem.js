const fs = require("fs");
const axios  = require("axios");
const { createReadStream, unlinkSync  } = require("fs");
const { resolve } = require("path");

module.exports.midoriya = {
   name: "voicem",
   desc: "Make bot talk",
   usages: "[ru, en, tl, ko, ja, in]",
   prefix: true,
   permission: false,
   Coded_by: "Deku"
};

exports.botStart = async function({ api, event, input }){
  if (!input[0]) return api.sendMessage("Missing input", event.threadID, event.messageID);
  var content = (event.type == "message_reply") ? event.messageReply.body : input.join(" ");
  var languageToSay = (["ru", "en", "ko", "ja", "tl"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : "tl";
  var msg = (languageToSay != "tl") ? content.slice(3, content.length) : content;
  const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
  const { data } = await axios.get(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`, {
    responseType: "arraybuffer"
  });
  fs.writeFileSync(path, Buffer.from(data, "utf-8"));
  return api.sendMessage({ attachment: createReadStream(path)}, event.threadID, () => unlinkSync(path));
};

/*module.exports.midoriya = {
   name: "say",
   desc: "Make bot talk",
   usages: "[ru, en, tl, ko, ja, in]",
   prefix: true,
   permission: false,
   Coded_by: "Deku"
}
exports['botStart'] = async function({api, event, input}){
  if (!input[0]) return api.sendMessage("Missing input", event.threadID, event.messageID)
var content = (event.type == "message_reply") ? event.messageReply.body : input.join(" ");
		var languageToSay = (["ru", "en", "ko", "ja", "tl"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : "tl";
		var msg = (languageToSay != "tl") ? content.slice(3, content.length) : content;
		const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
		const audio = (await axios.get(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`, {
  responseType: "arraybuffer"
})
).data
fs.writeFileSync(path, Buffer.from(audio, "utf-8"));
		return api.sendMessage({ attachment: createReadStream(path)}, event.threadID, () => unlinkSync(path));
}*