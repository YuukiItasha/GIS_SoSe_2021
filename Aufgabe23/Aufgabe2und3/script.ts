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
        oben: Posibility;
        mitte: Posibility;
        unten: Posibility;
    }

    let path: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (path == "index.html" || path == "" ) {
        let bildOben: HTMLImageElement = <HTMLImageElement>document.getElementById("bildOben");
        let bildMitte: HTMLImageElement = <HTMLImageElement>document.getElementById("bildMitte");
        let bildUnten: HTMLImageElement = <HTMLImageElement>document.getElementById("bildUnten");

        window.addEventListener("load", loadImages);

        function loadImages(): void {
            bildOben.src = selectedElements.oben.link;
            bildMitte.src = selectedElements.mitte.link;
            bildUnten.src = selectedElements.unten.link;
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