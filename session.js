//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFLdlZ6aTlDM2dTeWtNaEtRWDhkQlNwRG82Mm9LdzA1Y1p4T0xtRUwwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVlSb0JlbUczSmluN002bnMyby8vcHdRVzBUTnptQ1d0R3JxREtkcW9SYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTk9PbmU3NW9ibmRKQjJUNFovcDBEK2U5dTNXWThldFdnK29FeUdtRVZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhdWR3SkI2Uml3UnpDS1hSR2l0TzRJRWVGS1hPaXV5N015Zms3TDR1UmhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDOFJ3Uy9EWTFBNTBpN1BUM2VpeDAyOVRQZ3dhcm1LNFlyYmJnVnVsVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVvaWQrSDVEbnJZQ1d6YnVvckZEbXZUWmVWRDdYcGhFckVRMGpldDVwVFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJtWVNoZkNnVjFJK0ZCZ0NaV24xc0hETDlTeHVLL1J4bTNvcCtBUHJYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjlwMGF0bFBRZTRWZkRXa3pJK3Q0bnU3QWpUSUVkTzlNVldWVzhOTlRDQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhnRU10cy83aG8vdjJmMEJwVlArcnQzQy9XbmhlT1NBKzRUNkJyRjNmNXNFeXdxQWpXNG5OVTd4ZzdnR0VhZ25wLzg2OG5HaHd2cVZsZmg5TVdiMUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJ6anErR29nSVdabVlQRHowdG1YcVNKYTdGMnRzQlJFUXV1RmYxbjFmSHRjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEeC1xcTJTa1NSeWJjaTV6ajhHaFRnIiwicGhvbmVJZCI6IjA2OWE0ODA5LTQ5YTEtNDAyZi05ZGMzLTBkOWEyNGRlMTkwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYb0pLNnp4TzlkM21JLyttdm9FbU1sNExNSTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejIrUk9JSEwyVmJhbTFGYUdMRW9qQnJ4TEFJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkREOEc3WkpHIiwibWUiOnsiaWQiOiI5NDc2NzI3ODUzNzoxMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjQ3NTExNjQ5NjYxMDU2OjExQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXFsdE9vRkVObXgrOFlHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQVM1aC9weGZFcVJPNjl4VENsZ1pxenFYTmhuNlBlamEydkNNbUxDM0xCUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK2ZOMGZuK215K1pEbzVHQTlVdHBDWWIwU0p4dENQUndUKzJSQUV0SGZUL0k5U2d0YmtHczNYbXJqcExHMXFKZDNQb0J2WHlaN2o5RnFKSFE5SVBUQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik91aDZQRnBteWRSSzljV1haMlZsZ3lHcEZIUm1jVVAvaFpPRndodlZWQjFEM1VwdUxodW8zSFFlZzZNWVhVWTVlbnhYUnYwVyt2d01zSzl6cmEvNEFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjcyNzg1Mzc6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUV1WWY2Y1h4S2tUdXZjVXdwWUdhczZsellaK2ozbzJ0cndqSml3dHl3VSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5NDM0OTgyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVUQyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94767278537",
  PASSWORD: 
    process.env.PASSWORD || "zeusmd",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
