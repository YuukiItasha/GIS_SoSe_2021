"use strict";
var Aufgabe2und3;
(function (Aufgabe2und3) {
    class Posibility {
        constructor(_name, _type, _link) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                Aufgabe2und3.posibilityOben.push(this);
            }
            else if (this.type == 1) {
                Aufgabe2und3.posibilityMitte.push(this);
            }
            else if (this.type == 2) {
                Aufgabe2und3.posibilityUnten.push(this);
            }
        }
    }
    Aufgabe2und3.Posibility = Posibility;
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "") {
        let bildOben = document.getElementById("bildOben");
        let bildMitte = document.getElementById("bildMitte");
        let bildUnten = document.getElementById("bildUnten");
        window.addEventListener("load", loadImages);
        function loadImages() {
            bildOben.src = Aufgabe2und3.selectedElements.oben.link;
            bildMitte.src = Aufgabe2und3.selectedElements.mitte.link;
            bildUnten.src = Aufgabe2und3.selectedElements.unten.link;
            console.log(Aufgabe2und3.selectedElements);
        }
        let btEditOben = document.getElementById("btOben");
        btEditOben.addEventListener("click", openDetailOben);
        let btEditMitte = document.getElementById("btMitte");
        btEditMitte.addEventListener("click", openDetailMitte);
        let btEditUnten = document.getElementById("btUnten");
        btEditUnten.addEventListener("click", openDetailUnten);
        function openDetailOben() {
            window.open("oben.html", "_self");
            console.log("Open Detail Oben");
        }
        function openDetailMitte() {
            window.open("mitte.html", "_self");
            console.log("Open Detail Mitte");
        }
        function openDetailUnten() {
            window.open("unten.html", "_self");
            console.log("Open Detail Unten");
        }
    }
})(Aufgabe2und3 || (Aufgabe2und3 = {}));
//# sourceMappingURL=script.js.map