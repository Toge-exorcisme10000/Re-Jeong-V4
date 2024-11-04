require("./database/module")

//TOGE INUMAKI 
global.storename = "Re-Jeong "
global.dana = "-"
global.qris = "https://a.top4top.io/p_319465f4i0.jpeg"


// GLOBAL SETTING
global.owner = "25767334893" //masukin no lu
global.namabot = "TOGE INUMAKI"
global.nomorbot = "25767334893" //masukin no lu
global.namaCreator = "TOGE INUMAKI"
global.linkyt = "-"
global.autoJoin = false
global.antilink = false
global.versisc = '4.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = "https://chat.whatsapp.com/F12c50enMHQGu7Mq1zLOZg"
global.imageurl = 'https://i.imgur.com/B6kDSUN.jpeg'
global.isLink = 'https://whatsapp.com/channel/0029VanJ8wqCsU9ViGHB6K1E'
global.packname = "TOGE INUMAKI"
global.author = "TOGE INUMAKI"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
