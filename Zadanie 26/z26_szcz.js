function circumfrence(a, b, h) {
    a1 = Math.abs((a - b) / 2);
    c1 = h*h + a1*a1;
    return a + b + (c1 * 2);
}
function area(a, b, h) {
    return ((a+b) * h) / 2;
}