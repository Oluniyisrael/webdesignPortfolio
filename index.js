var button1 = document.getElementById('portfolioBut');
var button2 = document.getElementById('gitLink');
var button3 = document.getElementById('currencyBtn');
var button4 = document.getElementById('gitLinkCur');
var button5 = document.getElementsByClassName('cardButton')[4];
var button6 = document.getElementsByClassName('cardButton')[5];
button1.addEventListener('click',()=>{
    document.location.href = "https://oluniyi-port.netlify.app/"
})
button2.addEventListener('click',()=>{
    document.location.href = "https://github.com/Oluniyisrael/webdesignPortfolio"
})
button3.addEventListener('click',()=>{
    document.location.href = "https://izzyconverter.netlify.app/"
})
button4.addEventListener('click',()=>{
    document.location.href = "https://github.com/Oluniyisrael/currencyConverter"
})
button5.addEventListener('click',()=>{
    document.location.href += "notYetDone.html"
})
button6.addEventListener('click',()=>{
    document.location.href += "notYetDone.html"
})
function scrollToHome() {
    var Dest =document.getElementById('landingPage');
    Dest.scrollIntoView();
}
function scrollToWorks() {
    var Dest =document.getElementById('works');
    Dest.scrollIntoView();
}