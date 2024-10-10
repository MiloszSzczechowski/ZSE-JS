function pole_szczechowski() {
    let a= parseFloat(document.getElementById('dlugosc').value);
    let b= a*a;
    document.getElementById("nazwa").innerHTML ="Pole kwadratu= "+b.toFixed(2)+" cm^2";
}
function obwod_szczechowski() {
    let a= parseFloat(document.getElementById('dlugosc').value);
    let b= 4*a;
    document.getElementById("nazwa").innerHTML ="Obwód kwadratu= "+b.toFixed(2)+" cm";
}