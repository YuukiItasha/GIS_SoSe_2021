"use strict";
var Aufgabe2und3;
(function (Aufgabe2und3) {
    Aufgabe2und3.posibilityOben = [];
    Aufgabe2und3.posibilityMitte = [];
    Aufgabe2und3.posibilityUnten = [];
    let path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    let bild1Oben = new Aufgabe2und3.Posibility("asuna1 - Oben", 0, path + "Bilder/Oben/asuna1_oben.jpg");
    let bild1Mitte = new Aufgabe2und3.Posibility("asuna1 - Mitte", 1, path + "Bilder/Mitte/asuna1_mitte.jpg");
    let bild1Unten = new Aufgabe2und3.Posibility("asuna1 - Unten", 2, path + "Bilder/Unten/asuna1_unten.jpg");
    Aufgabe2und3.selectedElements = { oben: Aufgabe2und3.posibilityOben[0], mitte: Aufgabe2und3.posibilityMitte[0], unten: Aufgabe2und3.posibilityUnten[0] };
    let bild2Oben = new Aufgabe2und3.Posibility("asuna2 - Oben", 0, path + "Bilder/Oben/asuna2_oben.jpg");
    let bild2Mitte = new Aufgabe2und3.Posibility("asuna2 - Mitte", 1, path + "Bilder/Mitte/asuna2_mitte.jpg");
    let bild2Unten = new Aufgabe2und3.Posibility("asuna2 - Unten", 2, path + "Bilder/Unten/asuna2_unten.jpg");
    let bild3Oben = new Aufgabe2und3.Posibility("asuna3 - Oben", 0, path + "Bilder/Oben/asuna3_oben.jpg");
    let bild3Mitte = new Aufgabe2und3.Posibility("asuna3 - Mitte", 1, path + "Bilder/Mitte/asuna3_mitte.jpg");
    let bild3Unten = new Aufgabe2und3.Posibility("asuna3 - Unten", 2, path + "Bilder/Unten/asuna3_unten.jpg");
})(Aufgabe2und3 || (Aufgabe2und3 = {}));
//# sourceMappingURL=data.js.map