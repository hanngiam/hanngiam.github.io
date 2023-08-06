var cpnBtn = document.getElementById('cpnBtn');
var cpnCode = document.getElementById('cpnCode');

cpnBtn.onclick = function(){
    navigator.clipboard.writeText(cpnCode.innerHTML);
    cpnBtn.innerHTML = 'COPIED';
    window.open("https://www.w3schools.com");
    setTimeout(function(){
        cpnBtn.innerHTML  = 'COPY CODE';
        }, 3000);
}