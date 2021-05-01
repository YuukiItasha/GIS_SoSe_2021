"use strict";
// Aufgabe 1 a)
let y = Math.min(2, 4, 7, 9, 16, 1);
console.log(y);
// Aufgabe 1 a andere möglichkeit (bisschen ausgetestet)
var a = 10, b = 20, c = 16, d = 45, e = 7;
var x = Math.min(a, b, c, d, e);
console.log(x);
// Aufgabe 1 b)
function isEven(x) {
    return x % 2 === 0;
}
console.log(isEven(50)); // gerade 
console.log(isEven(75)); // ungerade 
console.log(isEven(-1)); // ungerade  
function creatStudent(_name, _studiengang, _alter) {
    let student = {
        name: _name, studiengang: _studiengang, alter: _alter
    };
    return (student);
}
let s1 = {
    name: "Noah", studiengang: "OMB", alter: 18
};
let s2 = {
    name: "Heinz", studiengang: "OMB", alter: 28
};
let s3 = {
    name: "Gustav", studiengang: "MKB", alter: 21
};
let studentArray = [];
studentArray.push(s1);
studentArray.push(s2);
studentArray.push(s3);
studentArray.push(creatStudent("Detlef", "MIB", 19));
console.log(s1.alter);
console.log(s2.name);
console.log(s3.studiengang);
function showInfo(s) {
    console.log(s.name);
    console.log(s.studiengang);
    console.log(s.alter);
}
showInfo(s1);
showInfo(s2);
showInfo(s3);
showInfo(studentArray[3]);
// Aufgabe 2 a 
function backwards(input) {
    let barr = [];
    for (let i = input.length - 1; i >= 0; i--) {
        barr[i] = input[input.length - i - 1];
    }
    return barr;
}
// Aufgabe 2 b)
function join(...input) {
    let zarray = [];
    let varray = 0;
    input.forEach(array => {
        for (let i = 0; i < array.length; i++) {
            zarray[varray] = array[i];
            varray++;
        }
    });
    return zarray;
}
// Aufgabe 2 c)
function split(input, number1, number2) {
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    let index = 0;
    for (let i = number1; i <= number2; i++) {
        arr[index] = input[i];
        i++;
    }
    return arr;
}
// Aufgabe 
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
//console.log(split(arr, 2, 0));     // Bonus c)
//console.log(split(arr, -1, 2));    // Bonus c)
//console.log(split(arr, 0, 7));     // Bonus c)
//Aufgabe 3 a)
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
// Wiese Test mit Gradient erschaffen
let wiese = context.createLinearGradient(200, 0, 500, 0);
wiese.addColorStop(0, "green");
//Himmel
context.fillStyle = "lightblue";
context.fillRect(0, 0, 800, 600);
context.fillStyle = wiese;
context.fillRect(1, 300, 500, 100);
// Haus unten 
context.lineWidth = 10; // dicke der Hauslinie
context.fillStyle = "rosybrown";
context.fillRect(200, 186, 150, 110);
context.strokeRect(200, 186, 150, 110); //Rechteck Haus
context.fillStyle = "tan"; //Farbe Tür
context.fillRect(250, 231, 40, 60); // Tür + ausfüllen
context.lineWidth = 4; // Linien dicke der Tür umrandung
context.strokeRect(250, 231, 40, 65); // Umrandung Tür
// Haus Dach
context.beginPath();
context.lineWidth = 10; // Dicke Dreiecklinien
context.fillStyle = "tan";
context.moveTo(175, 180); //Dreiecklinie links x,y
context.lineTo(275, 100); //Dreicklinie rechts
context.lineTo(375, 180); //Dreiecklinie unten
context.fill();
context.closePath();
context.stroke();
// Wolken Monster
context.beginPath();
context.fillStyle = "lightcyan";
context.moveTo(70, 60);
context.bezierCurveTo(30, 80, 30, 130, 90, 100); // unten
context.bezierCurveTo(100, 140, 110, 160, 160, 110); // unten
context.bezierCurveTo(180, 130, 250, 100, 190, 70); // rechts -> gegen Uhrzeigersinn
context.bezierCurveTo(180, 60, 210, 20, 160, 40);
context.bezierCurveTo(150, 1, 120, 20, 110, 30);
context.bezierCurveTo(60, 5, 50, 20, 70, 60);
context.fill();
context.closePath();
context.lineWidth = 5;
context.strokeStyle = "blue";
context.stroke();
// Wolken Augen
context.fillStyle = "black"; //Farbe Augen
context.fillRect(120, 40, 15, 15); // 
context.fillRect(150, 55, 15, 15);
// Wolken Mund
context.beginPath();
context.moveTo(120, 60);
context.bezierCurveTo(80, 120, 150, 90, 150, 80);
context.strokeStyle = "black";
context.stroke();
// Mond
context.beginPath();
context.strokeStyle = "whitesmoke";
context.arc(395, 60, 40, 0, 2 * Math.PI);
context.fillStyle = "whitesmoke";
context.fill();
context.stroke();
// Baum
context.beginPath();
context.lineWidth = 20;
context.moveTo(100, 220);
context.lineTo(100, 300);
context.strokeStyle = "Brown";
context.stroke();
context.beginPath();
context.strokeStyle = "darkgreen";
context.arc(100, 200, 30, 0, 2 * Math.PI);
context.fillStyle = "darkgreen";
context.fill();
context.stroke();
//Blume
context.beginPath();
context.lineWidth = 8;
context.moveTo(420, 260);
context.lineTo(420, 300);
context.strokeStyle = "green";
context.stroke();
context.beginPath();
context.strokeStyle = "red";
context.arc(410, 250, 7, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();
context.stroke();
context.beginPath();
context.strokeStyle = "red";
context.arc(410, 270, 7, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();
context.stroke();
context.beginPath();
context.strokeStyle = "red";
context.arc(430, 250, 7, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();
context.stroke();
context.beginPath();
context.strokeStyle = "red";
context.arc(430, 270, 7, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();
context.stroke();
context.beginPath();
context.strokeStyle = "black";
context.arc(420, 260, 4, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();
context.stroke();
// Aufgabe 3b
/*
class Rechteck {
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    maxWidth: number = 500;
    maxHeight: number = 400;

    constructor() {
        this.x1 = this.getRandom(0, this.maxWidth);
        this.y1 = this.getRandom(this.x1, this.maxWidth);
        this.x2 = this.getRandom(0, this.maxHeight);
        this.y2 = this.getRandom(this.y1, this.maxWidth);
    }

    getRandom(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    drawRect(): void {
   
        context.beginPath();
        context.fillStyle = "purple";
        context.fillRect(this.x1, this.y1, this.x2, this.y2);
        context.fill();
        context.closePath();
        context.restore();

        
    }

}
*/
class Rechteck {
    constructor() {
        this.maxWidth = 500;
        this.maxHeight = 400;
        this.x = this.getRandomInt(0, this.maxWidth);
        this.xx = this.getRandomInt(this.x, this.maxWidth);
        this.y = this.getRandomInt(0, this.maxHeight);
        this.yy = this.getRandomInt(this.y, this.maxHeight);
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    drawRect() {
        context.beginPath();
        context.fillStyle = "violet";
        context.strokeStyle = "violet";
        context.lineWidth = 10;
        context.moveTo(this.x, this.y);
        context.lineTo(this.xx, this.y);
        context.lineTo(this.xx, this.yy);
        context.lineTo(this.x, this.yy);
        context.closePath();
        context.stroke();
        context.fill();
        context.closePath();
    }
}
let rechteck = [new Rechteck()];
for (const viereck of rechteck) {
    viereck.drawRect();
}
//# sourceMappingURL=script.js.map