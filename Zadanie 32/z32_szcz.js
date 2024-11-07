function pociag(ile_wagonow,rodzaj,pendolino) {
    this.ile_wagonow=ile_wagonow;
    this.rodzaj=rodzaj;
    this.pendolino=pendolino;
}

pociag.prototype.wypisz = function () {
    alert(this.ile_wagonow + ' ' + this.rodzaj + ' ' + this.pendolino);
};
var pociag1 = new pociag(20, "pasazerski", true);
var pociag2 = new pociag(15, "towarowy", false);

pociag1.wypisz(); 
pociag2.wypisz();
document.write("dostęp do właściwości"+"<br>");

document.write("Pociag pierwszy"+" "+pociag1.ile_wagonow+" "+pociag1.rodzaj+" "+pociag1.pendolino);