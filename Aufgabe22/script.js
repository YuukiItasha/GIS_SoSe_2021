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
//# sourceMappingURL=script.js.map