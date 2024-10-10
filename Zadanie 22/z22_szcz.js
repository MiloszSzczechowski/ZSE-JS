function pole_szczechowski(a, b) {
    return a * b;
}

function obwod_szczechowski(a, b) {
    return a*2 + b*2;
}

let a = prompt("A:");
let b = prompt("B:");

document.write(
    `<table>
        <thead>
            <td>wyprowadz_pole_szc</td>
            <td>wyprowadz_obw_szc</td>
        </thead>
        <tbody>
            <td><input name="pole" value="${pole_szczechowski(a, b)}"/></td>
            <td><input name="obw" value="${obwod_szczechowski(a, b)}"/></td>
        </tbody>
    </table>`
)