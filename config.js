const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURpZE5Cc1dkVGE2Smt1MXcycXhDdnlwcFhqazVHSnBERjIrT3hmRjkxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnVCYktIVXZjbjZIaWdOeG83NkV0RTdpQnA0VUJ2MHYrSU1HMFlnOVd3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSnluekJMYjBkWnRxV1U2RjVhMEp6eFgxRGN1N3JuSW5rWTdqdVJUckhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHakRvOEt1ZnpqTW9Ma1VqekhQYVNsZGtMdjgrMnlTMXRYa0NJbytLeUJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPZzkySEFXbysxb2Noa3pIWHdMNTFMOFBnbURsZTU3b1cxcTVKd3BJRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFKb1ZOWkY0Vjl3dkllOERNV1FKTDZVQko2aS9ZNDd4cFlXUno5QmZpbWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU42ZzJLeTZpZGM5eUprRUlUNHlDNGZsczliK3pheGpmQ1VQc0pkTXJGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicm9SdCs2dWFUY1BwV0VxSDNwZ3N4SGo4QmJybkdaQ29yaTl0enZGaG4wOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhwZzUvTTNsZE5SRDlDbnp2UlMrYnZNR1lOVERoOWVDQ1NERmVFck82M1lVZXJGSlc5cEFnZmVyaWZjcWltcHgzcTJlNmc5dlBDaDFPU1dDbE9YWkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6Ii9CTWtDUlZGS1RIaWtORDBUNTRlWGdrVnMyS1VQako1N0Q2cGJjTjh2ZUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVXWEc0M0ZMIiwibWUiOnsiaWQiOiI5MjM0NzgzNTE4OTk6NTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoieW91ciB2b3J0ZXgiLCJsaWQiOiIxNDYxNDEwNjA1NzUyNjU6NTBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOenlodVVERUlMRnpNY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5dUt4TDFzTGlkNmVnL0tqK3Q4OFlBaFNBZHMzT1ZUL3pTSHhYMkhLOEdnPSIsImFjY291bnRTaWduYXR1cmUiOiJKdnVqQldZbDg2WDVkUGtmYjRpZ25HK0hBTnVleCtuOFNWbzJySDNuUFRIRGVpS1pNS3lFVHJkUHhMcmFRRkRIRjJRQlp5ak14dkR3ZjhlOHJtU0JBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNlBicUlDVWhCQmtKeXRvRSt5Ym1zN2s5QytjZEp3cUNjazhYNzVXRGRpcDlaNVAwZGx3NFpoRGtCNWRMWE9uR1UvZjNpR2hsSk40WUJadXoxQ1F3QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0NzgzNTE4OTk6NTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmJpc1M5YkM0bmVub1B5by9yZlBHQUlVZ0hiTnpsVS84MGg4VjloeXZCbyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYwNzY0NTUwLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUoxZiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW ʏᴏᴜʀ ᴠᴏʀᴛᴇx 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "VORTEX-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ʏᴏᴜʀ ᴠᴏʀᴛᴇx",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "+923478351899",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ʏᴏᴜʀ ᴠᴏʀᴛᴇx",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʏᴏᴜʀ ᴠᴏʀᴛᴇx*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "+923478351899",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "true",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
