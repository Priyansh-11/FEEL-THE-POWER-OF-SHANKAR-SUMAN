const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "EMOTIONS-EMOJI-BOT",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "satish",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["आदत बना 🤗ली मैंने खुद को😱 तकलीफ देने की 😟,ताकि जब😣 कोई अपना तकलीफ🤫 दे तो ज्यादा तकलीफ ना हो. ❌❌" , "अजीब सी वेताबी रहती है तेरे बिना,रह भी लेते हैं और रहा भी नहीं जाता" , "लोग पूछते हैं, मैं क्या करती हू उन्हें क्या बताऊँ मौहब्बत की थी, अब रोज मरती हूँ" , "तेरा नाम और मेरा मन जिस दिन साँझा हो जाएगा मेरी धड़कन हीर तेरा दिल राँझा हो जाएगा" , "थोड़ा वक्त मिले तो,बात कर लिया करो। धडकनों का क्या पता? कब रुक जाये" , "किसी को फूलों में ना बसाओ,फूलों में सिर्फ सपने बसते है,अगर बसाना है तो दिल में बसाओ,क्यूंकि दिल में सिर्फ अपने बसते है" , "तुम मौसम की तरह बदल गए और मै फसलो की तरह बर्बाद हो गया" , "कभी रूठ ना जाना मुझे मनाना नहीं आता,कभी दूर ना जाना मुझे पास बुलाना नहीं आता,अगर तुम भूल जाओ तो वो तुम्हारी मर्जी,हमें तो भूल जाना भी नहीं आता." , "वो बेवफा है, तो क्या हुआ? मत कहो बुरा उसको , जो हुआ सो हुआ खुश रखे खुदा उसको, नजर ना आए तो तलाश में रहना... और कहीं दिख जाए तो पलट के न देखना उसको" , "माना कि तू नहीं है मेरे सामने पर तू मेरे दिल में बसता हैं,मेरे हर दुख में मेरे साथ होता है,और हर सुख में मेरे साथ हसता है." , "हम उनको भी दुआ देते है,जिनको हमारे नाम से भी नफरत है" , "वो लौट आयी है मनाने को, शायद आजमा चुकी है जमाने को" , "जान जब प्यारी थी,तब दुश्मन हजार थे…अब मरने का शौक हैं,तो कातिल नही मिलते" , "वो अब नही आयेंगे आँसू पोछने,नादान आँखों को कैसे समझाऊ" , "जख़्म इतना गहरा हैं इज़हार क्या करें,हम ख़ुद निशां बन गये ओरो का क्या करें,मर गए हम मगर खुली रही आँखे हमरी,क्योंकि हमारी आँखों को उनका इंतेज़ार हैं." , "न हो जो 😣बस मैं कभी इसका 🤝वादा नहीं करते❌कुछ लोग कह😌 कर भी दिखावा नहीं करते🙏🏻" , "मुहब्बत अधूरी ज्यादा मुकम्मल लगती है" , "उड़ जायेंगे तस्वीरों से रंगो की तरह हम,वक़्त की टहनी पर हैं परिंदो की तरह हम"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage(`${name} ये क्या भेज रहे हो 🤔🙄`, threadID);
   };

    if ((event.body.indexOf("😀") >= 0 )) {
     return api.sendMessage(`${name} सराफत से मुस्कुरा रहे हो 😀😀`, threadID, messageID);
   };

    if ((event.body.indexOf("😄") >= 0 )) {
     return api.sendMessage(`${name} चूहे जैसा मुह मत बना 😆`, threadID, messageID);
   };

    if ((event.body.indexOf("😁") >= 0 )) {
     return api.sendMessage(`${name} लगता है आज पहली बार ब्रश किया है 😁`, threadID, messageID);
   };

    if ((event.body.indexOf("😆") >= 0 )) {
     return api.sendMessage(`${name} आंख बंद करके क्यू हस रहे हो ठरकी 😆`, threadID, messageID);
   };

    if ((event.body.indexOf("😅") >= 0 )) {
     return api.sendMessage(`${name} तेरे सर से पानी क्यू टपक रहा 😅`, threadID, messageID);
   };

    if ((event.body.indexOf("😂") >= 0 )) {
     return api.sendMessage(`${name} इतनी हसी क्यू आ रही है इस हसी के पीछे क्या राज है बताओ बताओ हमसे ना सरमाओ 😂🤤`, threadID, messageID);
   };

    if ((event.body.indexOf("🤣") >= 0 )) {
     return api.sendMessage(`${name} ज्यादा मत हस, एक मुक्के मे सारे दांत तोड़ दूंगा 😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😭") >= 0 )) {
     return api.sendMessage(`${name} ️अरे यार रोते नही पागल किया हुआ है मुझे बताओ बाबू 🥺🥺🥺`, threadID, messageID);
   };

    if ((event.body.indexOf("😉") >= 0 )) {
     return api.sendMessage(`${name} ️आंख क्यूं मार रहे हो 🥺🤟`, threadID, messageID);
   };

    if ((event.body.indexOf("😗") >= 0 )) {
     return api.sendMessage(`${name} 😗😗😗😗😗😗`, threadID, messageID);
   };

    if ((event.body.indexOf("😘") >= 0 )) {
     return api.sendMessage(`${name} अये हये बाबू उम्मा उमाह 😘😘😘`, threadID, messageID);
   };

    if ((event.body.indexOf("🥰") >= 0 )) {
     return api.sendMessage(`${name} अये हये लगता है तुमको प्यार हो गया है मुझसे 🙈🙈`, threadID, messageID);
   };

    if ((event.body.indexOf("😍") >= 0 )) {
     return api.sendMessage(`${name} होंठो पर हसी 😁 आँखो मे नमी है 🤭 हर सांस कहती है 🫤 बस तेरी ही कमी है। 🤤👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥳") >= 0 )) {
     return api.sendMessage(`${name} जन्मदिन मुबारक हो 🥳🎉🧁🎁🎂🕯`, threadID, messageID);
   };

    if ((event.body.indexOf("🙃") >= 0 )) {
     return api.sendMessage(`${name} ️ओले मेला बाबू उल्टा हो गया 🧐✋`, threadID, messageID);
   };

    if ((event.body.indexOf("🙂") >= 0 )) {
     return api.sendMessage(`${name} हाये कितनी मासूम सकल है तुम्हारी 😝🤟`, threadID, messageID);
   };

    if ((event.body.indexOf("🥲") >= 0 )) {
     return api.sendMessage(`${name} ऐसे मुह बनाकर मत रो 😒`, threadID, messageID);
   };

    if ((event.body.indexOf("🥹") >= 0 )) {
     return api.sendMessage(`${name} ️अरे बाबू रोते नही चॉकलेट चाहिए 🙂 रुको मैं अभी 🍫 देता हूं लिखो ☞𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞☜`, threadID, messageID);
   };

    if ((event.body.indexOf("😋") >= 0 )) {
     return api.sendMessage(`${name} ये तोते जैसी जुबान मत दिखा 😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😛") >= 0 )) {
     return api.sendMessage(`${name} ये गंदी नियत से जुबान ना दिखा।😂😂😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😝") >= 0 )) {
     return api.sendMessage(`${name} आंखें खोल और जुबान अंदर कर वरना काट लूंगा🙊👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😜") >= 0 )) {
     return api.sendMessage(`${name} बड़ी मस्ती चढ़ी है तेको एक आंख बंद कर के गंदी जुबान दिखा रहे हो 😂😂😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😇") >= 0 )) {
     return api.sendMessage(`${name} 😇😇😇😇😇😇`, threadID, messageID);
   };

    if ((event.body.indexOf("😊") >= 0 )) {
     return api.sendMessage(`${name} 😊😊😊😊😊😊`, threadID, messageID);
   };

    if ((event.body.indexOf("☺️") >= 0 )) {
     return api.sendMessage(`${name} ☺️☺️☺️☺️☺️☺️`, threadID, messageID);
   };

    if ((event.body.indexOf("😏") >= 0 )) {
     return api.sendMessage(`${name} चल हट मेरा सामने मत इतरा टेढ़ा मुंह लेकर 😂🤟👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😌") >= 0 )) {
     return api.sendMessage(`${name} 😌😌😌😌😌😌`, threadID, messageID);
   };

    if ((event.body.indexOf("😔") >= 0 )) {
     return api.sendMessage(`${name} बाबू क्या हुआ सेड क्यूं हो मुझे बताओ जान🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😑") >= 0 )) {
     return api.sendMessage(`${name} ऐसा क्या देख लिया की मुंह के साथ आंखे भी बंद हो गया 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😐") >= 0 )) {
     return api.sendMessage(`${name} अब बोल ना 😂😂😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😶") >= 0 )) {
     return api.sendMessage(`${name} ️ओय तेरा लिप्स 👄 कहा है। 🤔👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🫡") >= 0 )) {
     return api.sendMessage(`${name} 🫡🫡🫡🫡🫡🫡`, threadID, messageID);
   };

    if ((event.body.indexOf("🤔") >= 0 )) {
     return api.sendMessage(`${name} क्या सोच रहे हो 🤨👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤫") >= 0 )) {
     return api.sendMessage(`${name} तेरी ये उंगली तेरे ही नाक में दे दिया देखो 😒😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🫢") >= 0 )) {
     return api.sendMessage(`${name} 🫢🫢🫢🫢🫢🫢`, threadID, messageID);
   };

    if ((event.body.indexOf("🤭") >= 0 )) {
     return api.sendMessage(`${name} 🤭🤭🤭🤭🤭🤭`, threadID, messageID);
   };

    if ((event.body.indexOf("🥱") >= 0 )) {
     return api.sendMessage(`${name} आजा बेबी मेले पास सो जा🙊😜👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤗") >= 0 )) {
     return api.sendMessage(`${name} पहले नहा कर आ 😂`, threadID, messageID);
   };

    if ((event.body.indexOf("🫣") >= 0 )) {
     return api.sendMessage(`${name} 🫣🫣🫣🫣🫣🫣`, threadID, messageID);
   };

    if ((event.body.indexOf("😱") >= 0 )) {
     return api.sendMessage(`${name} क्या हुआ😱 शहंशाह देख लिया क्या 😳👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤨") >= 0 )) {
     return api.sendMessage(`${name} ️️इतना मत सोचो ठरकी इंसान तेरी वाली को मै भगा ले जाऊंगा 🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("🧐") >= 0 )) {
     return api.sendMessage(`${name} तु हट मै देखता हूँ `, threadID, messageID);
   };

    if ((event.body.indexOf("😒") >= 0 )) {
     return api.sendMessage(`${name} ️️ तिरछी नज़रिया मोरी हाय हाय हाय 🙈`, threadID, messageID);
   };

    if ((event.body.indexOf("🙄") >= 0 )) {
     return api.sendMessage(`${name} ️ऊपर किया देख रहे हो मेरी जान 🙂🤟🙄`, threadID, messageID);
   };

    if ((event.body.indexOf("😮‍💨") >= 0 )) {
     return api.sendMessage(`${name} 😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨`, threadID, messageID);
   };

    if ((event.body.indexOf("😤") >= 0 )) {
     return api.sendMessage(`${name} ️🥺 मैं तो सिर्फ मजाक कर रहा था🥺. गुस्सा मत करो. एक चुम्मी लो और संत रहो बाबू 😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😠") >= 0 )) {
     return api.sendMessage(`${name} बाबू गुस्सा नही करते ना ये उम्माह अब संत हो जाओ  😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😡") >= 0 )) {
     return api.sendMessage(`${name} बाबू गुस्सा नही करते ना ये उम्माह अब संत हो जाओ  😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤬") >= 0 )) {
     return api.sendMessage(`${name} बाबू गुस्सा नही करते ब्लडप्रेशर बढ़ जाएगा जान 😘😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥺") >= 0 )) {
     return api.sendMessage(`${name} अले मेले बाबू को क्या हुआ🥺 चॉकलेट 🍫 चाहिए रुको अभी देता हु लिखो 👉chocolate👈 🍫`, threadID, messageID);
   };

    if ((event.body.indexOf("😟") >= 0 )) {
     return api.sendMessage(`${name} 😟😟😟😟😟😟`, threadID, messageID);
   };

    if ((event.body.indexOf("😥") >= 0 )) {
     return api.sendMessage(`${name} ️ क्या हुआ सेड क्यूं हो मुझे बताओ बाबू🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😢") >= 0 )) {
     return api.sendMessage(`${name} ता हुआ माय लव 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("☹️") >= 0 )) {
     return api.sendMessage(`${name} Awww 🥺`, threadID, messageID);
   };

    if ((event.body.indexOf("🙁") >= 0 )) {
     return api.sendMessage(`${name} Aww ☹️`, threadID, messageID);
   };

    if ((event.body.indexOf("🫤") >= 0 )) {
     return api.sendMessage(`${name} 🫤🫤🫤🫤🫤🫤`, threadID, messageID);
   };

    if ((event.body.indexOf("😕") >= 0 )) {
     return api.sendMessage(`${name} 😕😕😕😕😕😕`, threadID, messageID);
   };

    if ((event.body.indexOf("🤐") >= 0 )) {
     return api.sendMessage(`${name} अब तेरी आवाज आई न तो चप्पल फेक के मरूंगा 😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😰") >= 0 )) {
     return api.sendMessage(`${name} 😰😰😰😰😰😰`, threadID, messageID);
   };

    if ((event.body.indexOf("😨") >= 0 )) {
     return api.sendMessage(`${name} 😨😨😨😨😨😨`, threadID, messageID);
   };

    if ((event.body.indexOf("😧") >= 0 )) {
     return api.sendMessage(`${name} 😧😧😧😧😧😧`, threadID, messageID);
   };

    if ((event.body.indexOf("😦") >= 0 )) {
     return api.sendMessage(`${name} 😦😦😦😦😦😦`, threadID, messageID);
   };

    if ((event.body.indexOf("😮") >= 0 )) {
     return api.sendMessage(`${name} अबे मुंह बंद कर मच्छर घुस जाएगा 😂😂😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😯") >= 0 )) {
     return api.sendMessage(`${name} 😯😯😯😯😯😯`, threadID, messageID);
   };

    if ((event.body.indexOf("😲") >= 0 )) {
     return api.sendMessage(`${name} 😲😲😲😲😲😲`, threadID, messageID);
   };

    if ((event.body.indexOf("😳") >= 0 )) {
     return api.sendMessage(`${name} ऐसे आंखे फाड़ फाड़ के क्या देख रहे हो🤔👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤯") >= 0 )) {
     return api.sendMessage(`${name} तेरे सिर पर बम किसने फोड़ा 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😬") >= 0 )) {
     return api.sendMessage(`${name} 😬😬😬😬😬😬`, threadID, messageID);
   };

    if ((event.body.indexOf("😓") >= 0 )) {
     return api.sendMessage(`${name} 😓😓😓😓😓😓`, threadID, messageID);
   };

    if ((event.body.indexOf("😞") >= 0 )) {
     return api.sendMessage(`${name} 😞😞😞😞😞😞`, threadID, messageID);
   };

    if ((event.body.indexOf("😖") >= 0 )) {
     return api.sendMessage(`${name} 😖😖😖😖😖😖`, threadID, messageID);
   };

    if ((event.body.indexOf("😣") >= 0 )) {
     return api.sendMessage(`${name} 😣😣😣😣😣😣`, threadID, messageID);
   };

    if ((event.body.indexOf("😩") >= 0 )) {
     return api.sendMessage(`${name} 😩😩😩😩😩😩`, threadID, messageID);
   };

    if ((event.body.indexOf("😫") >= 0 )) {
     return api.sendMessage(`${name} 😫😫😫😫😫😫`, threadID, messageID);
   };

    if ((event.body.indexOf("😵") >= 0 )) {
     return api.sendMessage(`${name} 😵😵😵😵😵😵`, threadID, messageID);
   };

    if ((event.body.indexOf("😵‍💫") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫥") >= 0 )) {
     return api.sendMessage(`${name} 🫥🫥🫥🫥🫥🫥`, threadID, messageID);
   };

    if ((event.body.indexOf("😴") >= 0 )) {
     return api.sendMessage(`${name} So Jao Byy Gn Tc 😴🌃`, threadID, messageID);
   };

    if ((event.body.indexOf("😪") >= 0 )) {
     return api.sendMessage(`${name} अबे तेरी नोज निकल रही है 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤤") >= 0 )) {
     return api.sendMessage(`${name} लार मत टपका मेको उल्टी आ रही है 🤮🤢👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🌛") >= 0 )) {
     return api.sendMessage(`${name} 🌛🌛🌛🌛🌛🌛`, threadID, messageID);
   };

    if ((event.body.indexOf("🌜") >= 0 )) {
     return api.sendMessage(`${name} 🌜🌜🌜🌜🌜🌜`, threadID, messageID);
   };

    if ((event.body.indexOf("🌚") >= 0 )) {
     return api.sendMessage(`${name} 🌚🌚🌚🌚🌚🌚`, threadID, messageID);
   };

    if ((event.body.indexOf("🌝") >= 0 )) {
     return api.sendMessage(`${name} 🌝🌝🌝🌝🌝🌝`, threadID, messageID);
   };

    if ((event.body.indexOf("🌞") >= 0 )) {
     return api.sendMessage(`${name} 🌞🌞🌞🌞🌞🌞`, threadID, messageID);
   };

    if ((event.body.indexOf("🫠") >= 0 )) {
     return api.sendMessage(`${name} 🫠🫠🫠🫠🫠🫠`, threadID, messageID);
   };

    if ((event.body.indexOf("😶‍🌫️") >= 0 )) {
     return api.sendMessage(`${name} 😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️`, threadID, messageID);
   };

    if ((event.body.indexOf("🥴") >= 0 )) {
     return api.sendMessage(`${name} सस्ता नशा कर लिया लगता है 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥵") >= 0 )) {
     return api.sendMessage(`${name}  🥵🔥 हाय गर्मी🥵👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥶") >= 0 )) {
     return api.sendMessage(`${name} कितनी ठंडी है रे बाबा🥶🥶👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤢") >= 0 )) {
     return api.sendMessage(`${name} 🤢🤢🤢🤢🤢🤢`, threadID, messageID);
   };

    if ((event.body.indexOf("🤮") >= 0 )) {
     return api.sendMessage(`${name} कौन सा महीना चल रहा है।😂👈 `, threadID, messageID);
   };

    if ((event.body.indexOf("🤧") >= 0 )) {
     return api.sendMessage(`${name} शर्दी हो गई क्या बाबू🤧👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤒") >= 0 )) {
     return api.sendMessage(`${name} फिवर हो गया बाबू आओ मेडिसिन💊💉💉 देता हू।👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤕") >= 0 )) {
     return api.sendMessage(`${name} 🤕🤕🤕🤕🤕🤕`, threadID, messageID);
   };

    if ((event.body.indexOf("😷") >= 0 )) {
     return api.sendMessage(`${name} अरे जा न मेको भी बीमार करना है क्या 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤠") >= 0 )) {
     return api.sendMessage(`${name} 🤠🤠🤠🤠🤠🤠`, threadID, messageID);
   };

    if ((event.body.indexOf("🤑") >= 0 )) {
     return api.sendMessage(`${name} 🤑🤑🤑🤑🤑🤑`, threadID, messageID);
   };

    if ((event.body.indexOf("😎") >= 0 )) {
     return api.sendMessage(`${name} अंधे हो क्या काला चश्मा लगा के क्यू घूम रहे हो😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤓") >= 0 )) {
     return api.sendMessage(`${name} 🤓🤓🤓🤓🤓🤓`, threadID, messageID);
   };

    if ((event.body.indexOf("🥸") >= 0 )) {
     return api.sendMessage(`${name} 🥸🥸🥸🥸🥸🥸`, threadID, messageID);
   };

    if ((event.body.indexOf("🤥") >= 0 )) {
     return api.sendMessage(`${name} तेरी नाक इतनी लंबी है उसकी तो जरूरत भी नहीं पड़ेगी😂🙊👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤡") >= 0 )) {
     return api.sendMessage(`${name} 🤡🤡🤡🤡🤡🤡`, threadID, messageID);
   };

    if ((event.body.indexOf("👻") >= 0 )) {
     return api.sendMessage(`${name} 👻👻👻👻👻👻`, threadID, messageID);
   };

    if ((event.body.indexOf("💩") >= 0 )) {
     return api.sendMessage(`${name} 💩💩💩💩💩💩`, threadID, messageID);
   };

    if ((event.body.indexOf("👽") >= 0 )) {
     return api.sendMessage(`${name} 👽👽👽👽👽👽`, threadID, messageID);
   };

    if ((event.body.indexOf("🤖") >= 0 )) {
     return api.sendMessage(`${name} शर्म नहीं आती चिढ़ा रहे हो मुझे 🙁👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🎃") >= 0 )) {
     return api.sendMessage(`${name} 🎃🎃🎃🎃🎃🎃`, threadID, messageID);
   };

    if ((event.body.indexOf("😈") >= 0 )) {
     return api.sendMessage(`${name} 😈😈😈😈😈😈`, threadID, messageID);
   };

    if ((event.body.indexOf("👿") >= 0 )) {
     return api.sendMessage(`${name} 👿👿👿👿👿👿`, threadID, messageID);
   };

    if ((event.body.indexOf("👹") >= 0 )) {
     return api.sendMessage(`${name} 👹👹👹👹👹👹`, threadID, messageID);
   };

    if ((event.body.indexOf("👺") >= 0 )) {
     return api.sendMessage(`${name} 👺👺👺👺👺👺`, threadID, messageID);
   };

    if ((event.body.indexOf("🔥") >= 0 )) {
     return api.sendMessage(`${name} 🔥🔥🔥🔥🔥🔥`, threadID, messageID);
   };

    if ((event.body.indexOf("💫") >= 0 )) {
     return api.sendMessage(`${name} 💫💫💫💫💫💫`, threadID, messageID);
   };

    if ((event.body.indexOf("⭐") >= 0 )) {
     return api.sendMessage(`${name} ⭐⭐⭐`, threadID, messageID);
   };

    if ((event.body.indexOf("🌟") >= 0 )) {
     return api.sendMessage(`${name} 🌟🌟🌟🌟🌟🌟`, threadID, messageID);
   };

    if ((event.body.indexOf("✨") >= 0 )) {
     return api.sendMessage(`${name} ✨✨✨`, threadID, messageID);
   };

    if ((event.body.indexOf("💥") >= 0 )) {
     return api.sendMessage(`${name} 💥💥💥💥💥💥`, threadID, messageID);
   };

    if ((event.body.indexOf("💯") >= 0 )) {
     return api.sendMessage(`${name} 💯💯💯`, threadID, messageID);
   };

    if ((event.body.indexOf("💢") >= 0 )) {
     return api.sendMessage(`${name} 💢💢💢`, threadID, messageID);
   };

    if ((event.body.indexOf("💨") >= 0 )) {
     return api.sendMessage(`${name} 💨💨💨💨💨💨`, threadID, messageID);
   };

    if ((event.body.indexOf("💦") >= 0 )) {
     return api.sendMessage(`${name} 💦💦💦💦💦💦`, threadID, messageID);
   };

    if ((event.body.indexOf("🫧") >= 0 )) {
     return api.sendMessage(`${name} 🫧🫧🫧🫧🫧🫧`, threadID, messageID);
   };

    if ((event.body.indexOf("💤") >= 0 )) {
     return api.sendMessage(`${name} 💤💤💤`, threadID, messageID);
   };

    if ((event.body.indexOf("🕳️") >= 0 )) {
     return api.sendMessage(`${name} 🕳️🕳️🕳️🕳️🕳️🕳️`, threadID, messageID);
   };

    if ((event.body.indexOf("🎉") >= 0 )) {
     return api.sendMessage(`${name} 🎉🎉🎉🎉🎉🎉`, threadID, messageID);
   };

    if ((event.body.indexOf("🎊") >= 0 )) {
     return api.sendMessage(`${name} 🎊🎊🎊🎊🎊🎊`, threadID, messageID);
   };

    if ((event.body.indexOf("🙈") >= 0 )) {
     return api.sendMessage(`${name} आय हाय बाबू शर्मा गए 🙈🙉🙊👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🙉") >= 0 )) {
     return api.sendMessage(`${name} 🙉🙉🙉🙉🙉🙉`, threadID, messageID);
   };

    if ((event.body.indexOf("🙊") >= 0 )) {
     return api.sendMessage(`${name} 🙊🙊🙊🙊🙊🙊`, threadID, messageID);
   };

    if ((event.body.indexOf("😺") >= 0 )) {
     return api.sendMessage(`${name} 😺😺😺😺😺😺`, threadID, messageID);
   };

    if ((event.body.indexOf("😸") >= 0 )) {
     return api.sendMessage(`${name} 😸😸😸😸😸😸`, threadID, messageID);
   };

    if ((event.body.indexOf("😹") >= 0 )) {
     return api.sendMessage(`${name} बिल्ली जैसे क्यू हस रहे हो😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😻") >= 0 )) {
     return api.sendMessage(`${name} 😻😻😻😻😻😻`, threadID, messageID);
   };

    if ((event.body.indexOf("😼") >= 0 )) {
     return api.sendMessage(`${name} 😼😼😼😼😼😼`, threadID, messageID);
   };

    if ((event.body.indexOf("😽") >= 0 )) {
     return api.sendMessage(`${name} 😽😽😽😽😽😽`, threadID, messageID);
   };

    if ((event.body.indexOf("🙀") >= 0 )) {
     return api.sendMessage(`${name} 🙀🙀🙀🙀🙀🙀`, threadID, messageID);
   };

    if ((event.body.indexOf("😿") >= 0 )) {
     return api.sendMessage(`${name} 😿😿😿😿😿😿`, threadID, messageID);
   };

    if ((event.body.indexOf("😾") >= 0 )) {
     return api.sendMessage(`${name} 😾😾😾😾😾😾`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️") >= 0 )) {
     return api.sendMessage(`${name} ❤️❤️❤️❤️❤️❤️`, threadID, messageID);
   };

    if ((event.body.indexOf("🧡") >= 0 )) {
     return api.sendMessage(`${name} 🧡🧡🧡🧡🧡🧡`, threadID, messageID);
   };

    if ((event.body.indexOf("💛") >= 0 )) {
     return api.sendMessage(`${name} 💛💛💛💛💛💛`, threadID, messageID);
   };

    if ((event.body.indexOf("💚") >= 0 )) {
     return api.sendMessage(`${name} 💚💚💚💚💚💚`, threadID, messageID);
   };

    if ((event.body.indexOf("💙") >= 0 )) {
     return api.sendMessage(`${name} 💙💙💙💙💙💙`, threadID, messageID);
   };

    if ((event.body.indexOf("💜") >= 0 )) {
     return api.sendMessage(`${name} 💜💜💜💜💜💜`, threadID, messageID);
   };

    if ((event.body.indexOf("🤎") >= 0 )) {
     return api.sendMessage(`${name} 🤎🤎🤎🤎🤎🤎`, threadID, messageID);
   };

    if ((event.body.indexOf("🖤") >= 0 )) {
     return api.sendMessage(`${name} 🖤🖤🖤🖤🖤🖤`, threadID, messageID);
   };

    if ((event.body.indexOf("🤍") >= 0 )) {
     return api.sendMessage(`${name} 🤍🤍🤍🤍🤍🤍`, threadID, messageID);
   };

    if ((event.body.indexOf("♥️") >= 0 )) {
     return api.sendMessage(`${name} ♥️♥️♥️`, threadID, messageID);
   };

    if ((event.body.indexOf("💘") >= 0 )) {
     return api.sendMessage(`${name} 💘💘💘💘💘💘`, threadID, messageID);
   };

    if ((event.body.indexOf("💝") >= 0 )) {
     return api.sendMessage(`${name} 💝💝💝💝💝💝`, threadID, messageID);
   };

    if ((event.body.indexOf("💖") >= 0 )) {
     return api.sendMessage(`${name} 💖💖💖💖💖💖`, threadID, messageID);
   };

    if ((event.body.indexOf("💗") >= 0 )) {
     return api.sendMessage(`${name} 💗💗💗💗💗💗`, threadID, messageID);
   };

    if ((event.body.indexOf("💓") >= 0 )) {
     return api.sendMessage(`${name} 💓💓💓💓💓💓`, threadID, messageID);
   };

    if ((event.body.indexOf("💞") >= 0 )) {
     return api.sendMessage(`${name} 💞💞💞💞💞💞`, threadID, messageID);
   };

    if ((event.body.indexOf("💕") >= 0 )) {
     return api.sendMessage(`${name} 💕💕💕💕💕💕`, threadID, messageID);
   };

    if ((event.body.indexOf("💌") >= 0 )) {
     return api.sendMessage(`${name} 💌💌💌💌💌💌`, threadID, messageID);
   };

    if ((event.body.indexOf("💟") >= 0 )) {
     return api.sendMessage(`${name} 💟💟💟💟💟💟`, threadID, messageID);
   };

    if ((event.body.indexOf("❣️") >= 0 )) {
     return api.sendMessage(`${name} ❣️❣️❣️❣️`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️‍🩹") >= 0 )) {
     return api.sendMessage(`${name} ❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹`, threadID, messageID);
   };

    if ((event.body.indexOf("💔") >= 0 )) {
     return api.sendMessage(`${name} 💔💔💔💔💔💔`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️‍🔥") >= 0 )) {
     return api.sendMessage(`${name} ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥`, threadID, messageID);
   };

    if ((event.body.indexOf("💋") >= 0 )) {
     return api.sendMessage(`${name} 💋💋💋💋💋💋`, threadID, messageID);
   };

    if ((event.body.indexOf("🫂") >= 0 )) {
     return api.sendMessage(`${name} 🫂🫂🫂🫂🫂🫂`, threadID, messageID);
   };

    if ((event.body.indexOf("👥") >= 0 )) {
     return api.sendMessage(`${name} 👥👥👥👥👥👥`, threadID, messageID);
   };

    if ((event.body.indexOf("👤") >= 0 )) {
     return api.sendMessage(`${name} 👤👤👤👤👤👤`, threadID, messageID);
   };

    if ((event.body.indexOf("🗣️") >= 0 )) {
     return api.sendMessage(`${name} 🗣️🗣️🗣️🗣️🗣️🗣️`, threadID, messageID);
   };

    if ((event.body.indexOf("👣") >= 0 )) {
     return api.sendMessage(`${name} 👣👣👣👣👣👣`, threadID, messageID);
   };

    if ((event.body.indexOf("🧠") >= 0 )) {
     return api.sendMessage(`${name} 🧠🧠🧠🧠🧠🧠`, threadID, messageID);
   };

    if ((event.body.indexOf("🫀") >= 0 )) {
     return api.sendMessage(`${name} 🫀🫀🫀🫀🫀🫀`, threadID, messageID);
   };

    if ((event.body.indexOf("🫁") >= 0 )) {
     return api.sendMessage(`${name} 🫁🫁🫁🫁🫁🫁`, threadID, messageID);
   };

    if ((event.body.indexOf("🩸") >= 0 )) {
     return api.sendMessage(`${name} 🩸🩸🩸🩸🩸🩸`, threadID, messageID);
   };

    if ((event.body.indexOf("🦠") >= 0 )) {
     return api.sendMessage(`${name} 🦠🦠🦠🦠🦠🦠`, threadID, messageID);
   };

    if ((event.body.indexOf("🦷") >= 0 )) {
     return api.sendMessage(`${name} 🦷🦷🦷🦷🦷🦷`, threadID, messageID);
   };

    if ((event.body.indexOf("🦴") >= 0 )) {
     return api.sendMessage(`${name} 🦴🦴🦴🦴🦴🦴`, threadID, messageID);
   };

    if ((event.body.indexOf("☠️") >= 0 )) {
     return api.sendMessage(`${name} ☠️☠️☠️`, threadID, messageID);
   };

    if ((event.body.indexOf("💀") >= 0 )) {
     return api.sendMessage(`${name} 💀💀💀💀💀💀`, threadID, messageID);
   };

    if ((event.body.indexOf("👀") >= 0 )) {
     return api.sendMessage(`${name} 👀👀👀👀👀👀`, threadID, messageID);
   };

    if ((event.body.indexOf("👁️") >= 0 )) {
     return api.sendMessage(`${name} 👁️👁️👁️👁️👁️👁️`, threadID, messageID);
   };

    if ((event.body.indexOf("👄") >= 0 )) {
     return api.sendMessage(`${name} 👄👄👄👄👄👄`, threadID, messageID);
   };

    if ((event.body.indexOf("🫦") >= 0 )) {
     return api.sendMessage(`${name} 🫦🫦🫦🫦🫦🫦`, threadID, messageID);
   };

    if ((event.body.indexOf("👅") >= 0 )) {
     return api.sendMessage(`${name} 👅👅👅👅👅👅`, threadID, messageID);
   };

    if ((event.body.indexOf("👃") >= 0 )) {
     return api.sendMessage(`${name} तुम्हारी नाक इतनी लंबी क्यू है।😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👂") >= 0 )) {
     return api.sendMessage(`${name} ऐसे कान फाड़ के क्या सुन रहे हो😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🦻") >= 0 )) {
     return api.sendMessage(`${name} बहरे हो गए हो क्या जो कान में मशीन लगा के सुन रहे हो😂😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🦶") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🦵") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🦿") >= 0 )) {
     return api.sendMessage(`${name} 🦿🦿🦿🦿🦿🦿`, threadID, messageID);
   };

    if ((event.body.indexOf("🦾") >= 0 )) {
     return api.sendMessage(`${name} 🦾🦾🦾🦾🦾🦾`, threadID, messageID);
   };

    if ((event.body.indexOf("💪") >= 0 )) {
     return api.sendMessage(`${name} आ जाओ हो जाए 2,2 हाथ 💪💪`, threadID, messageID);
   };

    if ((event.body.indexOf("👍") >= 0 )) {
     return api.sendMessage(`${name} ठेंगा किसे दिखा रहे हो😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👎") >= 0 )) {
     return api.sendMessage(`${name} तुमने कभी बताया नही की तुम लूजर हो😂😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👏") >= 0 )) {
     return api.sendMessage(`${name} तालियां क्यू बजा रहे हो 🤔👈 `, threadID, messageID);
   };

    if ((event.body.indexOf("🫶") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🙌") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👐") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤲") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤝") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤜") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤛") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("✊") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👊") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫳") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫴") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫱") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫲") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤚") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👋") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🖐️") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("✋") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🖖") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤟") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤘") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("✌️") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤞") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫰") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤙") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤌") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤏") >= 0 )) {
     return api.sendMessage(`${name} इत्तू 🤏🤏 सा प्याल दे दो न बाबू😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👌") >= 0 )) {
     return api.sendMessage(`${name} सुपर 👌👌`, threadID, messageID);
   };

    if ((event.body.indexOf("🖕") >= 0 )) {
     return api.sendMessage(`${name} आई फक यू😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("☝️") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👆") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👇") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👉") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };
    if ((event.body.indexOf("👈") >= 0 )) {
     return api.sendMessage(`${name} `, threadID, messageID);
   };

    if ((event.body.indexOf("🫵") >= 0 )) {
     return api.sendMessage(`${name} उंगली किसे दिखा रहे हो🥵👈`, threadID, messageID);
   };

    if ((event.body.indexOf("✍️") >= 0 )) {
     return api.sendMessage(`${name} ✍️✍️✍️✍️✍️✍️`, threadID, messageID);
   };

    if ((event.body.indexOf("🤳") >= 0 )) {
     return api.sendMessage(`${name} शरम नही आती अकेले अकेले सेल्फी ले रहे हो😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🙏") >= 0 )) {
     return api.sendMessage(`${name} नमस्ते 🙏🙏`, threadID, messageID);
   };

    if ((event.body.indexOf("💅") >= 0 )) {
     return api.sendMessage(`${name} 💅💅💅💅💅💅`, threadID, messageID);
   };

    if ((event.body.indexOf("😃") >= 0 )) {
     return api.sendMessage(`${name} 😃😃😃😃😃😃`, threadID, messageID);
   };

    if ((event.body.indexOf("😙") >= 0 )) {
     return api.sendMessage(`${name} 😙😙😙😙😙😙`, threadID, messageID);
   };

    if ((event.body.indexOf("😚") >= 0 )) {
     return api.sendMessage(`${name} 😚😚😚😚😚😚`, threadID, messageID);
   };

    if ((event.body.indexOf("🤩") >= 0 )) {
     return api.sendMessage(`${name} सबकी आंखे होती तेरी तो सितारे है 🙂`, threadID, messageID);
   };

    if ((event.body.indexOf("🤪") >= 0 )) {
     return api.sendMessage(`${name} ये अजीबो गरीब मुह ना बना 😂 कार्टून 🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("kaise ho") >= 0 )) {
     return api.sendMessage(`${name} मैं अच्छा हूं बाबू तुम कैसे हो🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("thank") >= 0 )) {
     return api.sendMessage(`${name} मैं हूं ही इतना अच्छा की सब  लोग तारीफ करते है मेरी🥰🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("kese ho") >= 0 )) {
     return api.sendMessage(`${name} मैं ठीक हूं बाबू तुम कैसे हो🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Koi hai") >= 0 )) {
     return api.sendMessage(`${name} मैं हूं ना बाबू बोलो🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Koi h") >= 0 )) {
     return api.sendMessage(`${name} मैं हूं ना बाबू बोलो 🥰👈`, threadID, messageID);
   };

   mess = "{name}"

  if (event.body.indexOf("Emotion") >= 0 || (event.body.indexOf("emotion") >= 0)) {
    var msg = {
      body: `🔮${name}🔮\n\n𝗠𝗮𝘀𝘀𝗮𝗴𝗲💌 :- ${rand} \n\n                      ╔════•| ✿ |•════╗
                      🌹      SHANKAR         🌹
                      ╚════•| ✿ |•════╝`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }