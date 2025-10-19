const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09VY3l3b0tVMDdMTGhqWDVFMjhJbWdmeTRDbCszZXRHUEJnVG1nQ0gxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzQ4NDRLd1BpYUVYNnJwRVZCZGxGNWlrRmtQRitLU2hWcWdjWUNudjFocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDS3RVK3NhZUtlZE82eEhPbkFFWGQ3aHdSZUIzMnBiVk5JS3VvQ0ovc2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQXpxcUNYeHB2dThRcXBPdDE4bENReDdVTHlGRFlOR1U1WFpvUnNWeFVnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNEVzF6aWJRVkVaOTNNbGxrcUV2UFNCVGVMdjErK1dETUIvMXQ3enRGRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ6WldEclVubWdJd0NsM3NWMjNPdEdBN1h0SmNocGNQZlNkVzRRVkRhVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT095LzZpbGJRdVU1Uld2WmpaVnkrM0ZZVXgyTnJSOGFiMFk3cFJxRkhVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2ZiOUU2R1E3VWZ4MjNnQTdOL1FLRGtVbmFQQ0NqMkI5dWxGNWkrRllFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ5UkZrWnNCK2xIekFaNXo3Qnh0b095YS95TnZQa0tEUFZVUk5XK21xcmNabG1GY1NOQWR1K0psVUJwU3BRYmhoQVlaN3ZucGh5eER0VUdXb0tHSEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6IkR1OFdWZjdSL0FoSUhKZjY1dWl1cFEvUnFLQ3E2K0RMZ3d2TlpKZy8zRjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzE0MDI3NzczQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MzdENkJDQjQ4NUMxQzc0OTdGNEVCNDFGM0I1N0Y1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjA4OTgxOTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkM3NFI1VjhFIiwibWUiOnsiaWQiOiI5MjMzMTQwMjc3NzM6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOGqfCdkJPwnZCHJ9i5IPCThqnqr63qr63wlqSN8J2Qg/CdkITwnZCC8J2QhPCdkI3wnZCTIPCdkJHwnZCA8J2QifCdkI/wnZCO8J2QjvCdkJPwk4aqIOOAhs2OIOKKuSDiirkg8JOGqfCdkJLwnZCH8J2QgPCdkIzEq9af4Y2dzZzEq+KkuPCThqrqqr4iLCJsaWQiOiIxNDY1NDkxNDk1NzMxOTk6MTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRGpNUkNPMmRUSEJoZ0NJQUFvQUE9PSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvU0ZpOWtuL01WMm1YcDRVT2tGWU5UVjBkM0paa2Y0TjZNK1JETjd6ZDIwPSIsImFjY291bnRTaWduYXR1cmUiOiJmRHg2dm9tR3JCcmVwV0k4bU5HNzlwRTE3YUhpVHorNjBkT2xYcUtWS2IzNUl2aGhFK3FFM3ZhR2hTZ2VxNFlRL1NaY25QaEpzTUoxUEUwQ3dHNUlDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZGwyNklIZk12ZVNVM1V0KzBPR1l0anplMHl6L3pVZU1qbmtqeVgyMTA4RCt5aTZkVjlnaTVReXlPZndFQkk0NWtyZytsRjRkWEwvS01UYzAxTXJFRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMTQwMjc3NzM6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUVoWXZaSi96RmRwbDZlRkRwQldEVTFkSGR5V1pIK0RlalBrUXplODNkdCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYwODk4MTk1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUo3OSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
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
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Sʜᴀʙᴀɴ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
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
DEV: process.env.DEV || "923059395959",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
