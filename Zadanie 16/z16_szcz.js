let a = parseInt(prompt("Podaj A"));
let b = parseInt(prompt("Podaj B"));
let r = Math.pow(a+b, 3);

document.write(
    `(${a} + ${b})^3 = ${a}^3 + 3*((${a})^2)*(${b}) + 3*(${a})*((${b})^2) + ${b}^3 = ${r}`.fontcolor("darkblue").fontsize(50)
)