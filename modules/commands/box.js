module.exports.config = {
	name: "box",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HungCho (Khánh Milo Fix)",
    description: "Group chat settings.",
	commandCategory: "Group",
	usages: "[name/emoji/admin/image/info]",
	cooldowns: 1,
	dependencies: {
		"request":"",
		"fs-extra":""
}
};

module.exports.run = async({api, event, args}) => {
	const fs = global.nodemodule["fs-extra"];
	const request = global.nodemodule["request"];
	 if (args.length == 0) return api.sendMessage(`You can use:\n?box emoji [icon]\n\n?box name [box name to change]\n\n?box image [rep any image that needs to be set as box image]\n\n? box admin [tag] => it will give qtv to the person tagged\n\n?box info => All information of the group !
`, event.threadID, event.messageID);


	if (args[0] == "name") {
var content = args.join(" ");
var c = content.slice(4, 99) || event.messageReply.body;
api.setTitle(`${c } `, event.threadID);
 }
	if (args[0] == "emoji") {
const name = args[1] || event.messageReply.body;
api.changeThreadEmoji(name, event.threadID)

 }
if(args[0] == "me"){
	 if (args[1] == "admin") {
		const threadInfo = await api.getThreadInfo(event.threadID)
		const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
		if(!find) api.sendMessage("BOT needs to throw admin to use ?", event.threadID, event.messageID)
	  else if(!global.config.ADMINBOT.includes(event.senderID)) api.sendMessage("Cunt powers ?", event.threadID, event.messageID)
     else api.changeAdminStatus(event.threadID, event.senderID, true);
     }
} 
if (args[0] == "admin") {

if (args.join().indexOf('@') !== -1){
	 namee = Object.keys(event.mentions)}
else namee = args[1]
if (event.messageReply) {namee = event.messageReply.senderID}

const threadInfo = await api.getThreadInfo(event.threadID)
const findd = threadInfo.adminIDs.find(el => el.id == namee);
const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
const finddd = threadInfo.adminIDs.find(el => el.id == event.senderID);

if (!finddd) return api.sendMessage("You're not a box admin?", event.threadID, event.messageID);
if(!find) {api.sendMessage("Do not throw admins using cock ?", event.threadID, event.messageID)}
if (!findd) {api.changeAdminStatus(event.threadID, namee, true);}
else api.changeAdminStatus(event.threadID, namee, false)
 }

if (args[0] == "image") {

if (event.type !== "message_reply") return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(`You must reply to a certain audio, video, or photo`, event.threadID, event.messageID);
	 var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));	
      return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      };
if (args[0] == "info") {
		var threadInfo = await api.getThreadInfo(event.threadID);
		let threadMem = threadInfo.participantIDs.length;
	var gendernam = [];
	var gendernu = [];
	var nope = [];
	for (let z in threadInfo.userInfo) {
		var gioitinhone = threadInfo.userInfo[z].gender;

		var nName = threadInfo.userInfo[z].name;

		if (gioitinhone == 'MALE') {
			gendernam.push(z + gioitinhone);
		} else if (gioitinhone == 'FEMALE') {
			gendernu.push(gioitinhone);
		} else {
			nope.push(nName);
		}
	}
	var nam = gendernam.length;
	var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	var listad = '';
	var qtv2 = threadInfo.adminIDs;
	for (let i = 0; i < qtv2.length; i++) {
const infu = (await api.getUserInfo(qtv2[i].id));
const name = infu[qtv2[i].id].name;
		listad += '•' + name + '\n';
	}
	let sex = threadInfo.approvalMode;
	var pd = sex == false ? 'tắt' : sex == true ? 'bật' : 'Kh';
	var pdd = sex == false ? '❎' : sex == true ? '✅' : '⭕';
	 var callback = () =>
				api.sendMessage(
					{
						body: `name: ${threadName}\nID Box: ${id}\n${pdd}approve: ${pd}\nEmoji: ${icon}\n-Information:\nTotal ${threadMem} member\n👨‍🦰boy: ${nam} member \n👩‍🦰girl: ${nu} member\n\n🕵️‍♂️with ${qtv} Administrators include:\n${listad}\Total number of messages: ${sl} tin.`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());

	}	  
}