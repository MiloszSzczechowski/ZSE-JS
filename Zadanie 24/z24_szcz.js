x1 = prompt("Podaj x1=");
x2 = prompt("Podaj x2=");
div = document.getElementById("div");

y1 = 3 * Math.pow(x1, (6/8));
y2 = (2 * Math.cos((x1 * Math.PI) / 180)) + (3 * Math.sin((x1 * Math.PI) / 180));
y3 = (Math.cbrt(Math.pow(x1, 5) + 2 * (Math.pow(x2, 4))) * Math.abs(x1 - x2));

div.innerHTML += `x1=${x1}  x2=${x2} <br>`;
div.innerHTML += `x1=${x1}  x1=${((x1 * Math.PI) / 180).toFixed(2)} <br>`;
div.innerHTML += `y1 = ${y1.toFixed(2)} <br>`
div.innerHTML += `y2 = ${y2.toFixed(2)} <br>`;
div.innerHTML += `y3 = ${y3.toFixed(2)} <br>`;