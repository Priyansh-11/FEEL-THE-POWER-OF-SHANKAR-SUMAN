module.exports.config = {
	name: "logo",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "Prince Sanel",
	description: "Logo Maker",
  usePrefix: true,
	commandCategory: "fun",
	usages: "[logostyle] [Text]",
	cooldowns: 1,
	
	}; // Credits fot the api:Sensui

module.exports.run = async ({ api, event, args }) => {
	const req1 = {
	"blackpink":"https://textpro.me/create-a-blackpink-logo-decorated-with-roses-online-free-1080.html",
	"dragon":"https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html",
	"3dneon":"https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
	"galaxyneon":"https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",
	"liquidmetal":"https://textpro.me/create-3d-liquid-metal-text-effect-1112.html",
	"naruto":"https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html",
	"cloud":"https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
	"blackpink2":"https://textpro.me/create-blackpink-logo-style-online-1001.html",
	"artpaper":"https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
	"blueglass":"https://textpro.me/blue-glass-text-effect-908.html",
	"orangeglass":"https://textpro.me/orange-glass-text-effect-911.html",
	"greenhorror":"https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
	"greenneon":"https://textpro.me/green-neon-text-effect-874.html",
	"futureneon":"https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
	"neon":"https://textpro.me/neon-text-effect-online-879.html"
	} // You can add your logo style if you want.
	// If any problem of this command please contact Prince Sanel Osorio
	const arrayInfo = ["blackpink","dragon","3dneon","galaxyneon","liquidmetal","naruto","cloud","blackpink2","artpaper","blueglass","orangeglass","greenhorror","greenneon","futureneon","neon"];
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	let type = args[0].toLowerCase();
    let name = args.slice(1).join(" ");
	if (!args[0]) return api.sendMessage("[!] Need a logo style to proceed.\nUse "+global.config.PREFIX+this.config.name+" help", event.threadID, event.messageID);
    const page = parseInt(name) || 1;
    const numberOfOnePage = 10;
    let i = 0;
    let msg = "";
    arrayInfo.sort((a, b) => a.data - b.data);
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
   const siu = `Logo Style List\n`;
   const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
   for (let item of returnArray) msg += `『 ${i++} 』${item} \n`;
   const text = `𝐏𝐀𝐆𝐄 「${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}」\n\nCommand Format:\n${global.config.PREFIX}logo {style} {text}`;
   if (type == "help") return api.sendMessage(siu+msg+text, event.threadID, event.messageID);
   axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=${encodeURI(req1[type])}&text=${encodeURI(name)}`).then(res => {
		let callback = function () {
					api.sendMessage({
						body: `»» Logo Created:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
}