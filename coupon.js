var cpnBtn = document.getElementById('cpnBtn');
var cpnCode = document.getElementById('cpnCode');

cpnBtn.onclick = function(){
    navigator.clipboard.writeText(cpnCode.innerHTML);
    cpnBtn.innerHTML = 'COPIED';
    //window.open("https://vaticpro.com/?sca_ref=3559290.eaFXOYkPjd");
    setTimeout(function(){
        cpnBtn.innerHTML  = 'COPY CODE';
        }, 3000);
}
