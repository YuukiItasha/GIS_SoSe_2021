"use strict";
// Aufgabe 1
/*function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);         //console.log = Ausgabe -> 1.Ausgabe "Alles" (deklariert zeile drüber)
    func1();
        
                            // 2.Ausgabe "Klar?" -> Deklariert im unteren Function
    console.log(x);
    console.log("Logo!");       //3.Ausgabe "Logo!"
}

a1();

function func1(): void {
    console.log("Klar?");
}



/*  Notizen zu Aufgabe 1 a)
    In Aufgabe 1 a wird
    Alles
    Klar
    Logo! ausgegeben. Das Klar wird vor Logo! ausgegegeben da func1() vor console.log("Logo!")
    angegeben ist.
    Wenn die variable x geändert wird bei let, muss man es auch bei console.log(x) ändern auf die gleiche variable.
*/
/*
    Notizen zu Aufgabe 1 b)
    Zeile ab 4 springt zu  5 6 dann zu  14 15 und wieder hoch zu 8 9


// Aufgabe 1c

function func2(): void {
    console.log("Gute!");
}

// Aufgabe 2 */
/*
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a2();


/*
    Aufgabe 2a Es wird 9 bis 1 ausgegeben. (Es wird immer eins Subtrahier).
    Es wird i am anfang als 9 deklariert und ausgegeben danach wird i immer - 1 genommen
    Es endet bei 1 da angegeben wird das i größer als 0 ist. (cut)

    Lässt man nun den Code durch den Debugger laufen, (bei mir start bei Zeile 47) Wird erst die 9 von i markiert. Springt zu
    zeile 50 -> ausgabe 9, dann zu 51 (es wird eins abgezogen) und bei 52 überprüft ob i=8 größer als 0 ist (sonst gibt es cut).
    Springt wieder zu 50, 51, 52 bis i = 0 erreicht hat. diese wird dann nicht mehr ausgegeben.
    i wird klein nebenher angezeigt und zeigt an welche zahl i gerade hat wenn man durch springt.
*/
// Augabe 3
/*
function a3(): void { //a3 statt a2
    let i: number = 9;

    do {
        console.log(x); //x statt i
        i = i - 1;
    } while( i > 0);
}

a2();*/
/*  Aufgabe 3a
 ändert man zb in Zeile 73 a2 auf a3 wird die Fehlermeldung Uncaught ReferenceError: a2 is not defined
    <anonymous> script.ts:84 ausgegeben. Daraus lässt sich schließen dass a2 nicht deklariert ist und man den fehler suchen
    muss bei den deklarationen.

    ändert man zum Beispiel in Zeile 77 i zu x gibt es auch die ausgabe dass es nicht gefunden wurde.

    Aufgabe 3b
    Gegenseitiges anschauen der Codes mit Lidia Kifle
*/
//Aufgabe 4
/*
let x: string = "Hallo"; // x -> Hallo
console.log(x);         // gibt Hallo aus
func1(x);               // gibt Bla aus da
console.log(x);         //gibt Hallo aus
func2();                //gibt Blubb aus
func3();                // gibt Test aus
console.log(x);         // Hallo wird nicht ausgegeben da x als y überschrieben wurde unten

function func1(y: string): void{ //x wird als y überschrieben und es wird ein Bla statt Hallo
    y = "Bla";
    console.log(y);
}

function func2(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void{
    x = "Test";
} */
/*
    Hallo Bla Hallo Blubb Test

    Aufgabe 4b)
    mit var, let, const deklariert -> gelten nur innerhalb der Funktion -> lokale funktion
    außerhalb entstehen globale
    und bei einer Wertzuweisung innerhalb einer Funktion, ohne dass die Variable zuvor durch var, let oder const deklariert wurde.

    Übergabeparametern: Gibt an, was eine Funktion nach einem Durchlauf weitergibt z.B. void: Die Funktion übergibt keinen Parameter.

    normale variablen = nur bestimmte datentypen (bsp string buchsstaben)
    Funktionen = mehrere funktionen und datentypen

    beide können mit variablen namen benannt werden

*/
//Aufgabe 5 a
/*let c: number = multiply(5, 8);

function multiply(_a: number, _b: number): number{
    let result: number = _a * _b;
    return result;
  }
console.log(c); */
// Aufgabe 5b
/* let c: number = max(10, 45);

function max(_a: number, _b: number): number{
    if ( _a > _b )
    return _a;
    else return _b;
        
    

    
}

console.log(c); */
//Aufgabe 5c
/*
var x = 0, i = 1;
while (i <= 100) {
   x = x + i;
   i = i + 1;
  
}

console.log(x);
*/
//Aufgabe 5d
/*
for (let i: number = 0; i < 10; i++) {
    let min: number = 1;
    let max: number = 100;
    min = Math.ceil(min);
    max = Math.floor(max);
    let r: number = Math.floor(Math.random() * (max - min)) + min;
    console.log(r);
}
*/
// Aufgabe 5e
/*console.log(factrorial(10));
function factrorial(n: number): number {
    let fuc: number = 1;
    for (let i: number = 1; i <= n; i++) {
        fuc = fuc * i;
    }
    return fuc;
}
*/
//Aufgabe 5f
/*
leapyears();
function leapyears(): void {
    let date: Date = new Date();
    let current: number = date.getFullYear();
    for (let i: number = 1900; i <= current; i++) {
        if ((i % 4) == 0 && (i % 100) != 0) {
            console.log(i);
        } else if ((i % 400) == 0) {
            console.log(i);
        }
    }
} */
//Aufgabe 6a
/*
for (var hash = "#"; hash.length <= 7 ; hash += "#"){
    console.log(hash);
    
  } */
//Aufgabe 6b & c
/*
function fizzBuzz(num){
    
    if (num % 5 == 0 && num % 3 == 0) return "fizzbuzz";
    if (num % 5 == 0) return "fizz";
    if (num % 3 == 0) return "buzz";
    return num;
    }
     
    for (var i = 1; i <= 100; i++) console.log(fizzBuzz(i));
    */
//Aufgabe 6d
/*
let size: number = 8;
let output: string = "";
for (let zeile: number = 0; zeile < size; zeile++) {
    for (let spalte: number = 0; spalte < size; spalte++) {
        if ((zeile + spalte) % 2) {
            output = output + " ";
        } else {
            output = output + "#";
        }
    }
    output += "\n";
}

*/
//Aufgabe 6e
/*
output = "";
schachbrettmod(8, 8);

function schachbrettmod(sizeZ: number, sizeS: number): void {
    for (let zeile: number = 0; zeile < sizeZ; zeile++) {
        for (let spalte: number = 0; spalte < sizeS; spalte++) {
            if ((zeile + spalte) % 2) {
                output = output + " ";
            } else {
                output = output + "#";
            }
        }
        output += "\n";
    }
    console.log(output);
}
*/ 
//# sourceMappingURL=script.js.map