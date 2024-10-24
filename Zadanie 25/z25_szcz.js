div = document.getElementById("div");

No = prompt("Podaj No");
t = prompt("Podaj t");
t12 = prompt("Podaj T1/2");

lambda = Math.log(2) / t12
N = No * Math.pow(Math.E, -lambda * t)

div.innerHTML = `
    N0=${No}[sztuk] <br>
    t=${t}[lat] <br>
    T1/2=${t12}[lat] <br>
    Lambda=${lambda.toFixed(7)}[1/rok] <br>
    N=${N.toFixed(7)}[sztuk]
`