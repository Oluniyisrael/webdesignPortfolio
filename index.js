var button1 = document.getElementById('portfolioBut');
var button2 = document.getElementById('gitLink');
button1.addEventListener('click',()=>{
    document.location.href = "https://oluniyi-port.netlify.app/"
})
button2.addEventListener('click',()=>{
    document.location.href = "https://github.com/Oluniyisrael/webdesignPortfolio"
})
// document.getElementById('portfolioBut').addEventListener('click',()=>{
//     document.location.href = "https://www.google.com"
// })

// document.getElementById('portfolioBut').addEventListener('click',()=>{
//     document.location.href = "https://oluniyi-port.netlify.app/"
// })
function scrollToHome() {
    var Dest =document.getElementById('landingPage');
    Dest.scrollIntoView();
}
function scrollToWorks() {
    var Dest =document.getElementById('works');
    Dest.scrollIntoView();
}
// var home = document.getElementById('liHome')
// home.addEventListener('click', scrollTov())