let pociag = {
    ile_wagonow: 20,
    rodzaj: "pasazerski",
    pendolino: false,
    Pociag_wyswietl_szczechowski: function () {
        document.write(this.ile_wagonow + ' wagonow ' + this.rodzaj + ' <br>');
    }
}

pociag.konduktor = "Pawel Wohlfahrt";
pociag.Pociag_pokaz_szczechowski = function () {
    alert(this.konduktor);
}

pociag.Pociag_wyswietl_szczechowski();
