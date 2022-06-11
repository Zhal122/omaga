const fs = require("fs")
const chalk = require("chalk")

//Others
global.owner = ['6283816171576','6283816171576']
global.nomerowner = "6283816171576"
global.ownername = "ZhaaLL"
global.namebot = "ZhaaLLBOT"
global.sessionName = "session"
global.log0 = fs.readFileSync("./media/image/thumb.jpg")
global.qris = fs.readFileSync("./media/image/qris.jpg")
global.fonts = "© ZhaaLL"

//Exif
global.packname = "ZhaaLL"
global.author = "ZhaaLL"

//Message
global.mess = {
success: '*Success!*',
admin: '*Fitur Khusus Admin Group!*',
botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
owner: '*Fitur Khusus Owner Bot*',
group: '*Fitur Digunakan Hanya Untuk Group!*',
private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
bot: '*Fitur Khusus Pengguna Nomor Bot*',
wait: '*Silahkan Menunggu!*',
ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}

//Pengguna
global.rkyt = []

//Limit
global.limitawal = {
premium: "Infinity",
free: 30
}

//Pembatas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})