const fs = require("fs");
module.exports.config = {
	name: "ganda",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Jonell Magallanes", 
	description: "pogi walang prefix yan",
	commandCategory: "No command marks needed",
	usages: "pogi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pogi")==0 || (event.body.indexOf("Pogi")==0 || (event.body.indexOf("cge na")==0 || (event.body.indexOf("sge na")==0)))) {
		var msg = {
				body: "pogi cge na🤭 your always  on 🕺 my 🕺 mind 🕺 thats  how 🕺 much 🕺 i 🕺 care 🕺 i cat 🕺 think 🕺 of 🕺 a 🕺 time 🕺 that 🕺 you 🕺 werent 🕺 here 🕺 i 🕺 know 🕺 that 🕺 be 🕺 lying 🕺 if 🕺 i 🕺 didnt 🕺 want 🕺 you 🕺 here 🕺 cause 🕺 baby 🕺im 🕺 inlove 🕺 and 🕺 why 🕺 cant 🕺 you 🕺 just 🕺 live 🕺 here",
				attachment: fs.createReadStream(__dirname + `/noprefix/pogi.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}