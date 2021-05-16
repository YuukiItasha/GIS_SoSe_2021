"use strict";
var Aufgabe24;
(function (Aufgabe24) {
    Aufgabe24.parts = {
        head: [
            { image: "./img/heads/1.png", origin: "asuna1", art: 0 },
            { image: "./img/heads/2.png", origin: "asuna2", art: 1 },
            { image: "./img/heads/3.png", origin: "asuna3", art: 2 }
        ],
        torso: [
            { image: "./img/torsos/1.png", origin: "asuna1", art: 0 },
            { image: "./img/torsos/2.png", origin: "asuna2", art: 1 },
            { image: "./img/torsos/3.png", origin: "asuna3", art: 2 }
        ],
        leg: [
            { image: "./img/legs/1.jpeg", origin: "asuna1", art: 0 },
            { image: "./img/legs/2.jpeg", origin: "asuna2", art: 1 },
            { image: "./img/legs/3.jpeg", origin: "asuna3", art: 2 }
        ]
    };
    let loaded = ["", "", ""];
    Aufgabe24.current = getJSONcontent();
    function getJSONcontent() {
        let content = JSON.parse(Aufgabe24.createJSON2);
        console.log(content);
        return content;
    }
    Aufgabe24.asunahead = Aufgabe24.current.head;
    Aufgabe24.asunatorso = Aufgabe24.current.torso;
    Aufgabe24.asunaleg = Aufgabe24.current.leg;
    Aufgabe24.ausgewaehlt = { head: undefined, torso: undefined, leg: undefined };
    let nextbutton = document.getElementById("naechsterTeil");
    nextbutton.addEventListener("button", movePageforeward);
    let pervbutton = document.getElementById("vorherigerTeil");
    pervbutton.addEventListener("button", movePagebackward);
    let htmlImgs = [];
    window.addEventListener("load", windowLoaded);
    function movePageforeward() {
        switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
            case " ":
                window.open("head.html", "_self");
                break;
            case "index.html":
                window.open("head.html", "_self");
                break;
            case "head.html":
                window.open("torso.html", "_self");
                break;
            case "torso.html":
                window.open("leg.html", "_self");
                break;
            case "leg.html":
                window.open("end.html", "_self");
                break;
            default:
                console.log("Auf der Endseite");
        }
    }
    function movePagebackward() {
        switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
            case "end.html":
                window.open("leg.html", "_self");
                break;
            case "leg.html":
                window.open("torso.html", "_self");
                break;
            case "torso.html":
                window.open("head.html", "_self");
                break;
            case "head.html":
                window.open("index.html", "_self");
                break;
            default:
                console.log("Auf der Startseite");
        }
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "index.html" || window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "") {
        let headbutton = document.getElementById("head");
        headbutton.addEventListener("button", openhead);
        let torsobutton = document.getElementById("torso");
        torsobutton.addEventListener("button", opentorso);
        let legbutton = document.getElementById("leg");
        legbutton.addEventListener("button", openleg);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) != "index.html") {
            let backbutton = document.getElementById("back");
            backbutton.addEventListener("button", openmain);
        }
        function openhead() {
            window.open("head.html", "_self");
        }
        function opentorso() {
            window.open("torso.html", "_self");
        }
        function openleg() {
            window.open("leg.html", "_self");
        }
        function openmain() {
            window.open("index.html", "_self");
        }
        showPreview();
    }
    function windowLoaded() {
        console.log(Aufgabe24.ausgewaehlt);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "head.html") {
            let flaeche = document.getElementById("flaeche");
            Aufgabe24.asunahead.forEach(asunapart => {
                let img = document.createElement("img");
                img.src = asunapart.origin;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("button", function () {
                    selectImage(img, asunapart);
                });
            });
            showPreview();
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "torso.html") {
            let flaeche = document.getElementById("flaeche");
            Aufgabe24.asunatorso.forEach(asunapart => {
                let img = document.createElement("img");
                img.src = asunapart.origin;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("button", function () {
                    selectImage(img, asunapart);
                });
            });
            showPreview();
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "leg.html") {
            let flaeche = document.getElementById("flaeche");
            Aufgabe24.asunaleg.forEach(asunapart => {
                let img = document.createElement("img");
                img.src = asunapart.origin;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("button", function () {
                    selectImage(img, asunapart);
                });
            });
            showPreview();
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "end.html") {
            let flaeche = document.getElementById("flaeche_end");
            if (sessionStorage.getItem("asuna1") != null) {
                let imgtop = document.createElement("img");
                let teil1 = JSON.parse(sessionStorage.getItem("asuna1"));
                imgtop.src = teil1.origin;
                flaeche.appendChild(imgtop);
            }
            if (sessionStorage.getItem("asuna2") != null) {
                let imgmid = document.createElement("img");
                let teil2 = JSON.parse(sessionStorage.getItem("asuna2"));
                imgmid.src = teil2.origin;
                flaeche.appendChild(imgmid);
            }
            if (sessionStorage.getItem("asuna3") != null) {
                let imgbot = document.createElement("img");
                let teil3 = JSON.parse(sessionStorage.getItem("asuna3"));
                imgbot.src = teil3.origin;
                flaeche.appendChild(imgbot);
            }
        }
    }
    function selectImage(img, asunapart) {
        if (asunapart.art == 0) {
            Aufgabe24.ausgewaehlt.head = asunapart;
            let speicher1 = { head: undefined, torso: undefined, leg: undefined };
            speicher1.head = asunapart;
            loaded[0] = asunapart.origin;
            sessionStorage.setItem("asuna1", JSON.stringify(asunapart));
        }
        else if (asunapart.art == 1) {
            Aufgabe24.ausgewaehlt.torso = asunapart;
            let speicher3 = { head: undefined, torso: undefined, leg: undefined };
            speicher3.head = asunapart;
            loaded[1] = asunapart.origin;
            sessionStorage.setItem("asuna2", JSON.stringify(asunapart));
        }
        else if (asunapart.art == 2) {
            Aufgabe24.ausgewaehlt.leg = asunapart;
            let speicher3 = { head: undefined, torso: undefined, leg: undefined };
            speicher3.head = asunapart;
            loaded[2] = asunapart.origin;
            sessionStorage.setItem("asuna3", JSON.stringify(asunapart));
        }
        img.className += "selected";
        htmlImgs.forEach(pic => {
            if (pic != img) {
                pic.classList.remove("selected");
            }
        });
        console.log(loaded);
        console.log(Aufgabe24.ausgewaehlt);
    }
    function showPreview() {
        let prev = document.getElementById("preview");
        if (sessionStorage.getItem("asuna1") != null) {
            let imghead = document.createElement("img");
            let teil1 = JSON.parse(sessionStorage.getItem("asuna1"));
            imghead.src = teil1.origin;
            prev.appendChild(imghead);
        }
        if (sessionStorage.getItem("asuna2") != null) {
            let imgtorso = document.createElement("img");
            let teil2 = JSON.parse(sessionStorage.getItem("asuna2"));
            imgtorso.src = teil2.origin;
            prev.appendChild(imgtorso);
        }
        if (sessionStorage.getItem("asuna3") != null) {
            let imgleg = document.createElement("img");
            let asuna3 = JSON.parse(sessionStorage.getItem("asuna3"));
            imgleg.src = asuna3.origin;
            prev.appendChild(imgleg);
        }
    }
})(Aufgabe24 || (Aufgabe24 = {}));
//# sourceMappingURL=data.js.map