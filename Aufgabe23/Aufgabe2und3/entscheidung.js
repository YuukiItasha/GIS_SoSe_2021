"use strict";
var Aufgabe2und3;
(function (Aufgabe2und3) {
    let selected;
    let htmlImgs = [];
    let path = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    window.addEventListener("load", loadContent);
    function loadContent() {
        if (path == "oben.html") {
            selected = Aufgabe2und3.selectedElements.oben;
            addDetailWindow(Aufgabe2und3.posibilityOben);
        }
        else if (path == "mitte.html") {
            addDetailWindow(Aufgabe2und3.posibilityMitte);
        }
        else if (path == "unten.html") {
            selected = Aufgabe2und3.selectedElements.unten;
            addDetailWindow(Aufgabe2und3.posibilityUnten);
        }
    }
    function addDetailWindow(images) {
        let divToAdd = document.getElementById("imgDetailSec");
        images.forEach(img => {
            let imgElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.className += "detailImg";
            imgElement.src = img.link;
            if (img == selected) {
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function () {
                setSelected(img, imgElement);
            });
            divToAdd.appendChild(imgElement);
        });
    }
    function setSelected(img, imgElement) {
        selected = img;
        imgElement.className += " selectedImage";
        console.log("selected: " + img.name);
        htmlImgs.forEach(htmlImgs => {
            if (htmlImgs != imgElement) {
                htmlImgs.classList.remove("selectedImage");
            }
        });
    }
    let btSpeichern = document.getElementById("btSpeichern");
    btSpeichern.addEventListener("click", speichernSelection);
    let btAbbruch = document.getElementById("btAbbruch");
    btAbbruch.addEventListener("click", abbruchSelection);
    function speichernSelection() {
        if (path == "oben.html") {
            Aufgabe2und3.selectedElements.oben = selected;
        }
        else if (path == "mitte.html") {
            Aufgabe2und3.selectedElements.mitte = selected;
        }
        else if (path == "unten.html") {
            Aufgabe2und3.selectedElements.unten = selected;
        }
        window.open("index.html", "_self");
        console.log("selected " + selected.name);
    }
    function abbruchSelection() {
        window.open("index.html", "_self");
        console.log("abbruch");
    }
})(Aufgabe2und3 || (Aufgabe2und3 = {}));
//# sourceMappingURL=entscheidung.js.map