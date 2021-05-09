let drawDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("flaeche");
drawDiv.style.position = " relative ";
drawDiv.style.width = "500px";
drawDiv.style.height = "400px";

let resetBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zuruek");
resetBtn.addEventListener("click", zuruek);

let newRectBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("drawRect");
newRectBtn.addEventListener("click", drawRect);

let divs: HTMLDivElement[] = [];

function zuruek(): void {
    console.log("Zuruek");
    divs.forEach(element => {
            drawDiv.removeChild(element);
        });
    divs = [];
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function drawRect(): void {
    console.log("Draw Rect");
    let rect: HTMLParagraphElement = document.createElement("div");
    rect.style.position = "absolute";
    rect.style.backgroundColor = "Indianred";
    rect.style.border = "solid";
    rect.style.borderColor = "dimgray";
    let width: number = getRandomInt(10, 400);
    let height: number = getRandomInt(10, 300);
    rect.style.width = width + "px";
    rect.style.height = height + "px";
    rect.style.top = getRandomInt(0, 400 - height) + "px";
    rect.style.left = getRandomInt(0, 500 - width) + "px";
    drawDiv.appendChild(rect);
    divs.push(rect);
}


