/*document.body.oncopy = function(){ return false; };
document.body.oncut = function(){ return false; };
document.body.onpaste = function(){ return false; };
document.body.oncontextmenu = function(){ return false; };

function abc(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var exp = /[Aa-Zzñ ]/;
    var tec = String.fromCharCode(teclado);
    return exp.test(tec);
}*/

function num(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var exp = /[0-9]/;
    var tec = String.fromCharCode(teclado);
    return exp.test(tec);
}