/* Date in JS */

let sana = new Date;

sana.setFullYear(2006)
sana.setMonth(5)
sana.setDate(16)

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakunui = sana.getDay();
let soat = sana.getHours();
let minut = sana.getMinutes();
let second = sana.getSeconds();
let milisekond = sana.getMilliseconds();
let vaqt = sana.getTime();
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"]
let haftakunlari = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"]

document.write(yil + " - yil " + kun + " - " + oylar[ oy ] +
    " . Haftaning " + haftakunlari [ haftakunui ] + " - kuni ")