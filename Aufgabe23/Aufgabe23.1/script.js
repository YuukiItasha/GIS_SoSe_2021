"use strict";
let drawDiv = document.getElementById("flaeche");
drawDiv.style.position = " relative ";
drawDiv.style.width = "500px";
drawDiv.style.height = "400px";
let resetBtn = document.getElementById("zuruek");
resetBtn.addEventListener("click", zuruek);
let newRectBtn = document.getElementById("drawRect");
newRectBtn.addEventListener("click", drawRect);
let divs = [];
function zuruek() {
    console.log("Zuruek");
    divs.forEach(element => {
        drawDiv.removeChild(element);
    });
    divs = [];
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function drawRect() {
    console.log("Draw Rect");
    let rect = document.createElement("div");
    rect.style.position = "absolute";
    rect.style.backgroundColor = "Indianred";
    rect.style.border = "solid";
    rect.style.borderColor = "dimgray";
    let width = getRandomInt(10, 400);
    let height = getRandomInt(10, 300);
    rect.style.width = width + "px";
    rect.style.height = height + "px";
    rect.style.top = getRandomInt(0, 400 - height) + "px";
    rect.style.left = getRandomInt(0, 500 - width) + "px";
    drawDiv.appendChild(rect);
    divs.push(rect);
}
//# sourceMappingURL=script.js.map