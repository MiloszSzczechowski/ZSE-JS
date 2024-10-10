function get_distance(xa, ya, xb, yb) {
    let a = xb - xa;
    let b = yb - ya;
    let c = Math.sqrt((a * a) + (b * b));

    return c;
}

function get_sides() {
    let xa = parseFloat(document.getElementById('xa').value);
    let ya = parseFloat(document.getElementById('ya').value);
    let xb = parseFloat(document.getElementById('xb').value);
    let yb = parseFloat(document.getElementById('yb').value);
    let xc = parseFloat(document.getElementById('xc').value);
    let yc = parseFloat(document.getElementById('yc').value);

    let div = document.getElementById("answears");

    div.innerHTML = "";

    div.innerHTML += `Długość boku AB: ${get_distance(xa, ya, xb, yb)} <br>`;
    div.innerHTML += `Długość boku BC: ${get_distance(xb, yb, xc, yc)} <br>`;
    div.innerHTML += `Długość boku CA: ${get_distance(xb, yb, xa, ya)} <br>`;
}