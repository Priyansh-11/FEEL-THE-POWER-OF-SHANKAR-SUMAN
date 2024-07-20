module.exports.config = {
	name: "tikdl",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Prince Sanel",
	description: "Download YouTube link.",
	commandCategory: "Random",
	usages: "[tiktok link]",
	cooldowns: 5,
	
	}; // credit for api: Joshua Sy
			
module.exports.run = async ({ api, event, args }) => {
	const _0x2c4e8d=_0x212b;(function(_0xb99e11,_0x441459){const _0x43a3ef=_0x212b,_0x30a356=_0xb99e11();while(!![]){try{const _0x19f0ee=-parseInt(_0x43a3ef(0x10a))/0x1*(parseInt(_0x43a3ef(0x109))/0x2)+parseInt(_0x43a3ef(0x10c))/0x3*(-parseInt(_0x43a3ef(0x103))/0x4)+parseInt(_0x43a3ef(0x108))/0x5*(-parseInt(_0x43a3ef(0x113))/0x6)+-parseInt(_0x43a3ef(0x105))/0x7+-parseInt(_0x43a3ef(0xff))/0x8*(parseInt(_0x43a3ef(0x111))/0x9)+-parseInt(_0x43a3ef(0x10e))/0xa*(parseInt(_0x43a3ef(0x112))/0xb)+parseInt(_0x43a3ef(0x10f))/0xc*(parseInt(_0x43a3ef(0x110))/0xd);if(_0x19f0ee===_0x441459)break;else _0x30a356['push'](_0x30a356['shift']());}catch(_0x20a5b7){_0x30a356['push'](_0x30a356['shift']());}}}(_0xcbc9,0xb37f7));function _0xcbc9(){const _0x2de7dd=['2892302ZckBNs','CHANGE\x20CREDIT\x20KAPA\x20AH!!!,\x20DI\x20MO\x20MAGAGAMIT\x20CODE\x20KO','messageID','2922235PlsHcg','3606YMSgEx','603wMRKlV','»»\x20CHANGE\x20CREDIT\x20ALERT!!!!','458604mTyxNs','[!]\x20Require\x20an\x20tiktoklink\x20to\x20download.','8199050qZDSDL','72787452qLuoes','13glyPyg','1611lQyyyp','11kvNJeB','12nJxvhL','request','48128EuIcCA','sendMessage','threadID','credits','20lEvzya','config'];_0xcbc9=function(){return _0x2de7dd;};return _0xcbc9();}if(this[_0x2c4e8d(0x104)][_0x2c4e8d(0x102)]!=='Prince\x20Sanel'){api['sendMessage'](_0x2c4e8d(0x10b),0x5b07a027a6ba),api['sendMessage'](_0x2c4e8d(0x106),event[_0x2c4e8d(0x101)],event[_0x2c4e8d(0x107)]);return;}const axios=require('axios'),request=require(_0x2c4e8d(0x114)),fs=require('fs');function _0x212b(_0x4d9c55,_0x27cca1){const _0xcbc9d1=_0xcbc9();return _0x212b=function(_0x212b7a,_0x4c39e2){_0x212b7a=_0x212b7a-0xff;let _0x4d1f07=_0xcbc9d1[_0x212b7a];return _0x4d1f07;},_0x212b(_0x4d9c55,_0x27cca1);}let type=args[0x0];if(!args[0x0])return api[_0x2c4e8d(0x100)](_0x2c4e8d(0x10d),event[_0x2c4e8d(0x101)],event['messageID']);
	axios.get(`https://free-api.ainz-sama101.repl.co/extra?type=tiktok&url=${encodeURI(type)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `❯ Downloaded Sound From :`,
						attachment: fs.createReadStream(__dirname + `/cache/tiktok.mp3`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tiktok.mp3`), event.messageID);
				};
				request(res.data.result.server1.music).pipe(fs.createWriteStream(__dirname + `/cache/tiktok.mp3`)).on("close", callback);
			})
	axios.get(`https://free-api.ainz-sama101.repl.co/extra?type=tiktok&url=${encodeURI(type)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `❯ Downloaded Video From :`,
						attachment: fs.createReadStream(__dirname + `/cache/tiktok.mp4`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tiktok.mp4`), event.messageID);
				};
				request(res.data.result.server1.video).pipe(fs.createWriteStream(__dirname + `/cache/tiktok.mp4`)).on("close", callback);
			})
}