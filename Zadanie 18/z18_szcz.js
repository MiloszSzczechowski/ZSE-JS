function suma_szc(a, b) {
    return a + b;
}

function odejmowanie_szc(a, b) {
    return a - b;
}

function mnozenie_szc(a, b) {
    return a * b;
}

function do_kwadratu_szc(a, b) {
    return "" + a*a + " " + b*b;
}

function reszta_z_dzielenia_a_przez_b_szc(a, b) {
    return a % b;
}

var a=parseFloat(prompt("a=",""));
var b=parseFloat(prompt("b=",""));


document.write("suma="+suma_szc(a,b)+"<br>");
document.write("odejmowanie="+odejmowanie_szc(a,b)+"<br>");
document.write("mnozenie="+mnozenie_szc(a,b)+"<br>");
document.write("do kwadratu="+do_kwadratu_szc(a,b)+"<br>");
document.write("reszta z dzielenia a przez b="+reszta_z_dzielenia_a_przez_b_szc(a,b)+"<br>");