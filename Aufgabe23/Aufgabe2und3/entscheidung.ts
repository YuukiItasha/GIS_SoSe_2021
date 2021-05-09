namespace Aufgabe2und3 {
    let selected: Posibility;
    let htmlImgs: HTMLImageElement[] = [];
    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);

    window.addEventListener("load", loadContent);

    function loadContent(): void {
        if (path == "oben.html") {
            selected = selectedElements.oben;
            addDetailWindow(posibilityOben);
        } else if (path == "mitte.html") {
            addDetailWindow(posibilityMitte);
        } else if (path == "unten.html") {
            selected = selectedElements.unten;
            addDetailWindow(posibilityUnten);
        }
    }

    function addDetailWindow(images: Posibility[]): void {
        let divToAdd: HTMLImageElement = <HTMLImageElement>document.getElementById("imgDetailSec");
        images.forEach(img => {
            let imgElement: HTMLImageElement = document.createElement("img");
            htmlImgs.push(imgElement);
            imgElement.className += "detailImg";
            imgElement.src = img.link;
            if (img == selected) {
                setSelected(img, imgElement);
            }
            imgElement.addEventListener("click", function(): void {
                setSelected(img, imgElement);
            });
            divToAdd.appendChild(imgElement);
        });
    }
    function setSelected(img: Posibility, imgElement: HTMLImageElement): void {
        selected = img;
        imgElement.className += " selectedImage";
        console.log("selected: " + img.name);
        htmlImgs.forEach(htmlImgs => {
            if (htmlImgs != imgElement) {
                htmlImgs.classList.remove("selectedImage");
            }
        });
    }
    let btSpeichern: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btSpeichern");
    btSpeichern.addEventListener("click", speichernSelection);
    let btAbbruch: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btAbbruch");
    btAbbruch.addEventListener("click", abbruchSelection);

    function speichernSelection(): void {
        if (path == "oben.html") {
            selectedElements.oben = selected;
        } else if (path == "mitte.html") {
            selectedElements.mitte = selected;
        } else if (path == "unten.html") {
            selectedElements.unten = selected;
        }
        window.open("index.html", "_self");
        console.log("selected " + selected.name);
    }

    function abbruchSelection(): void {
        window.open("index.html", "_self");
        console.log("abbruch");
    }
}