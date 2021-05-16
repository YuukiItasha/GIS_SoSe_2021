namespace Aufgabe24 {
 
    export interface AsunaPart {
      image: string;
      origin: string;
      art: number;
      
      
    }
   
    export interface Selection {
      head: AsunaPart;
      torso: AsunaPart;
      leg: AsunaPart;
    }  
    export interface AllParts {
      head: AsunaPart[];
      torso: AsunaPart[];
      leg: AsunaPart[];
    }
   
 
    export let parts: AllParts = {
      head: [
        { image: "./img/heads/1.png", origin: "asuna1", art: 0 },
        { image: "./img/heads/2.png", origin: "asuna2", art: 1 },
        { image: "./img/heads/3.png", origin: "asuna3", art: 2}
      ],
      torso: [
        { image: "./img/torsos/1.png", origin: "asuna1", art: 0},
        { image: "./img/torsos/2.png", origin: "asuna2", art: 1 },
        { image: "./img/torsos/3.png", origin: "asuna3", art: 2 }
      ],
      leg: [
        { image: "./img/legs/1.jpeg", origin: "asuna1", art: 0 },
        { image: "./img/legs/2.jpeg", origin: "asuna2", art: 1 },
        { image: "./img/legs/3.jpeg", origin: "asuna3", art: 2 }
      ]
    }; 

    let loaded: string[] = ["", "", ""];

    export let current: AllParts = getJSONcontent();

    function getJSONcontent(): AllParts {
    let content: AllParts = JSON.parse(createJSON2);
    console.log(content);
    return content;
    } 

    export let asunahead: AsunaPart[] = current.head;
    export let asunatorso: AsunaPart[] = current.torso;
    export let asunaleg: AsunaPart[] = current.leg;
    export let ausgewaehlt: Selection = { head: undefined, torso: undefined, leg: undefined };
    let nextbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("naechsterTeil");
    nextbutton.addEventListener("button", movePageforeward);
    
    let pervbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("vorherigerTeil");
    pervbutton.addEventListener("button", movePagebackward);
    
    
    
    let htmlImgs: HTMLImageElement[] = [];
    window.addEventListener("load", windowLoaded);
    
    function movePageforeward (): void {
        switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
            case " ":
                window.open("head.html" , "_self");
                break;
            case "index.html":
                window.open("head.html" , "_self");
                break;
            case "head.html":
                window.open("torso.html", "_self");
                break;
            case "torso.html":
                window.open("leg.html" , "_self");
                break;
            case "leg.html":
                window.open("end.html" , "_self");
                break;
            default:
                console.log("Auf der Endseite");
        }
    }
    
    function movePagebackward (): void {
        switch (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)) {
            case "end.html":
                window.open("leg.html" , "_self");
                break;
            case "leg.html":
                window.open("torso.html" , "_self");
                break;
            case "torso.html":
                window.open("head.html" , "_self");
                break;
            case "head.html":
                window.open("index.html", "_self");
                break;
            default:
                console.log("Auf der Startseite");
        }
    } 
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "index.html" || window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "") {
        let headbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("head");
        headbutton.addEventListener("button", openhead);
        
        let torsobutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("torso");
        torsobutton.addEventListener("button", opentorso);
        
        let legbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("leg");
        legbutton.addEventListener("button", openleg);
    
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) != "index.html") {
            let backbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("back");
            backbutton.addEventListener("button", openmain);
        }
        
        function openhead(): void {
            window.open("head.html", "_self");
        }
        function opentorso(): void {
            window.open("torso.html", "_self");
        }
        function openleg(): void {
            window.open("leg.html", "_self");
        }
        function openmain(): void {
            window.open("index.html", "_self");
        }
        showPreview();
    }
    
    function windowLoaded(): void {
        console.log(ausgewaehlt);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "head.html") {
        let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
        asunahead.forEach (asunapart => {
            let img: HTMLImageElement = document.createElement("img");
            img.src = asunapart.origin;
            htmlImgs.push(img);
            flaeche.appendChild(img);
            img.addEventListener("button", function (): void {
                selectImage(img, asunapart);
            });
        });
        showPreview();
    }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "torso.html") {
            let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
            asunatorso.forEach (asunapart => {
                let img: HTMLImageElement = document.createElement("img");
                img.src = asunapart.origin;
                htmlImgs.push(img);
                flaeche.appendChild(img);
                img.addEventListener("button", function (): void {
                    selectImage(img, asunapart);
                });
            });
            showPreview();
        }
    
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "leg.html") {
                let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
                asunaleg.forEach (asunapart => {
                    let img: HTMLImageElement = document.createElement("img");
                    img.src = asunapart.origin;
                    htmlImgs.push(img);
                    flaeche.appendChild(img);
                    img.addEventListener("button", function (): void {
                        selectImage(img, asunapart);
                    });
                });
                showPreview();
            }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "end.html") {
        let flaeche: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche_end");
        if (sessionStorage.getItem("asuna1") != null) {
            let imgtop: HTMLImageElement = document.createElement("img");
            let teil1: AsunaPart = JSON.parse(sessionStorage.getItem("asuna1"));
            imgtop.src = teil1.origin;
            flaeche.appendChild(imgtop);
        }
        if (sessionStorage.getItem("asuna2") != null) {
            let imgmid: HTMLImageElement = document.createElement("img");
            let teil2: AsunaPart = JSON.parse(sessionStorage.getItem("asuna2"));
            imgmid.src = teil2.origin;
            flaeche.appendChild(imgmid);
        }
        if (sessionStorage.getItem("asuna3") != null) {
            let imgbot: HTMLImageElement = document.createElement("img");
            let teil3: AsunaPart = JSON.parse(sessionStorage.getItem("asuna3"));
            imgbot.src = teil3.origin;
            flaeche.appendChild(imgbot);
        }
        }
    }
    
    function selectImage(img: HTMLImageElement, asunapart: AsunaPart): void {
        if (asunapart.art == 0) {
            ausgewaehlt.head = asunapart;
            let speicher1: AsunaPart = {head: undefined , torso: undefined, leg: undefined};
            speicher1.head = asunapart;
            loaded[0] = asunapart.origin;
            sessionStorage.setItem("asuna1" , JSON.stringify(asunapart));
        } else if (asunapart.art == 1) {
            ausgewaehlt.torso = asunapart;
            let speicher3: AsunaPart = {head: undefined, torso: undefined, leg: undefined};
            speicher3.head = asunapart;
            loaded[1] = asunapart.origin;
            sessionStorage.setItem("asuna2" , JSON.stringify(asunapart));
        } else if (asunapart.art == 2) {
            ausgewaehlt.leg = asunapart;
            let speicher3: AsunaPart = {head: undefined, torso: undefined, leg: undefined};
            speicher3.head = asunapart;
            loaded[2] = asunapart.origin;
            sessionStorage.setItem("asuna3" , JSON.stringify(asunapart));
        }
        img.className += "selected";
        htmlImgs.forEach(pic => {
            if (pic != img) {
                pic.classList.remove("selected");
            }
        });
        console.log(loaded);
        console.log(ausgewaehlt);
    }
    
    function showPreview(): void {
        let prev: HTMLDivElement = <HTMLDivElement>document.getElementById("preview");
        if (sessionStorage.getItem("asuna1") != null) {
            let imghead: HTMLImageElement = document.createElement("img");
            let teil1: AsunaPart = JSON.parse(sessionStorage.getItem("asuna1"));
            imghead.src = teil1.origin;
            prev.appendChild(imghead);
        }
        if (sessionStorage.getItem("asuna2") != null) {
            let imgtorso: HTMLImageElement = document.createElement("img");
            let teil2: AsunaPart = JSON.parse(sessionStorage.getItem("asuna2"));
            imgtorso.src = teil2.origin;
            prev.appendChild(imgtorso);
        }
        if (sessionStorage.getItem("asuna3") != null) {
            let imgleg: HTMLImageElement = document.createElement("img");
            let asuna3: AsunaPart = JSON.parse(sessionStorage.getItem("asuna3"));
            imgleg.src = asuna3.origin;
            prev.appendChild(imgleg);
        }
    }
    }