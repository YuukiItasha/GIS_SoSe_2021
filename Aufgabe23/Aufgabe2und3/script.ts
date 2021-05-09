namespace Aufgabe2und3 {
    export class Posibility {
        name: string;
        type: number;
        link: string;

        constructor(_name: string, _type: number, _link: string) {
            this.name = _name;
            this.type = _type;
            this.link = _link;
            if (this.type == 0) {
                posibilityOben.push(this);
            } else if (this.type == 1) {
                posibilityMitte.push(this);
            } else if (this.type == 2) {
                posibilityUnten.push(this);
            }

        }
    }

    export interface Selected {
        top: Posibility;
        middle: Posibility;
        bottom: Posibility;
    }

    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "" ) {
        let imageOben: HTMLImageElement = <HTMLImageElement>document.getElementById("imgOben");
        let imageMitte: HTMLImageElement = <HTMLImageElement>document.getElementById("imgMitte");
        let imageUnten: HTMLImageElement = <HTMLImageElement>document.getElementById("imgUnten");

        window.addEventListener("load", loadImages);

        function loadImages(): void {
            imageOben.src = selectedElements.oben.link;
            imageMitte.src = selectedElements.mitte.link;
            imageUnten.src = selectedElements.unten.link;
            console.log(selectedElements);
        }

        let btEditOben: HTMLImageElement = <HTMLImageElement>document.getElementById("btOben");
        btEditOben.addEventListener("click", openDetailOben);
        let btEditMitte: HTMLImageElement = <HTMLImageElement>document.getElementById("btMitte");
        btEditMitte.addEventListener("click", openDetailMitte);
        let btEditUnten: HTMLImageElement = <HTMLImageElement>document.getElementById("btUnten");
        btEditUnten.addEventListener("click", openDetailUnten);

        function openDetailOben(): void {
            window.open("oben.html", "_self");
            console.log("Open Detail Oben");
        }
        function openDetailMitte(): void {
            window.open("mitte.html", "_self");
            console.log("Open Detail Mitte");
        }
        function openDetailUnten(): void {
            window.open("unten.html", "_self");
            console.log("Open Detail Unten");
        }
    }

}