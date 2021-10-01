var imgURL = chrome.runtime.getURL("images/NinjaSauceBot.png");
const saucebot = document.getElementsByClassName("bot_column")[0];
const newbot = document.createElement('div');
newbot.innerHTML = '<img id="replace" class="bot_column2"/>';
saucebot.parentNode.replaceChild(newbot, saucebot);
document.getElementById("replace").src = imgURL;
