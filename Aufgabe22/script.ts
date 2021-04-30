// Aufgabe 1 a)

let y: number = Math.min(2, 4, 7, 9, 16, 1);
console.log(y);


// Aufgabe 1 a andere möglichkeit (bisschen ausgetestet)

var a: number = 10, b: number = 20, c: number = 16, d: number = 45, e: number = 7;
var x: number = Math.min(a, b, c, d, e);

console.log(x); 

// Aufgabe 1 b)


function isEven(x: number): boolean {
    return x % 2 === 0;
  }        
  
console.log(isEven(50)); // gerade 

console.log(isEven(75)); // ungerade 

console.log(isEven(-1)); // ungerade  

// Begründung für Ergebnis von -1: Bei Minus 1 kommt ungerade heraus
// Grund hierfür: der Modulo kann auch Minus zahlen berechnen: hier -1%2 = -1, isEven sieht es dann als 1 an


// Aufgabe 1 c)

interface Student {
    name: string;
    studiengang: string;
    alter: number;
  }

function creatStudent(_name: string, _studiengang: string, _alter: number): Student {
    let student: Student = {
        name: _name, studiengang: _studiengang, alter: _alter
    };
    return(student);
}


let s1: Student = {
      name: "Noah", studiengang: "OMB", alter: 18
  };

let s2: Student = {
    name: "Heinz", studiengang: "OMB", alter: 28
};

let s3: Student = {
    name: "Gustav", studiengang: "MKB", alter: 21
};

let studentArray: Student[] = [];
studentArray.push(s1);
studentArray.push(s2);
studentArray.push(s3);
studentArray.push(creatStudent("Detlef", "MIB", 19));

console.log(s1.alter);
console.log(s2.name);
console.log(s3.studiengang);  

function showInfo(s: Student): void {
    console.log(s.name);
    console.log(s.studiengang);
    console.log(s.alter);
}

showInfo(s1);
showInfo(s2);
showInfo(s3);
showInfo(studentArray[3]);