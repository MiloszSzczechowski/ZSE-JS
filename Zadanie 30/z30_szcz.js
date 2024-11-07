let pociag = {
    ile_wagonow: 20,
    rodzaj: "pasazerski",
    pendolino: false,
    Pociag_wyswietl_szczechowski: function () {
        document.write(this.ile_wagonow + ' wagonow ' + this.rodzaj)
    }
}

pociag.Pociag_wyswietl_szczechowski();