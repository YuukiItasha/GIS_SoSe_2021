namespace Aufgabe24 {
    /*
    function createPartDiv(_part: AsunaPart, _index: number): HTMLDivElement {
      // wrapping div
      let div: HTMLDivElement = document.createElement("div");
      div.classList.add("asunapart");
  
      // image to be displayed
      let img: HTMLImageElement = document.createElement("img");
      img.src = _part.image;
      div.appendChild(img);
  
      // description
      let span: HTMLSpanElement = document.createElement("span");
      span.innerText = _part.origin;
      div.appendChild(span);
  
      // button
      let btn: HTMLButtonElement = document.createElement("button");
      btn.innerText = "Select";
      // Möglichkeit 1: innere Funktion
      btn.addEventListener("click", handleSelection);
  
      // Möglichkeit 2: äußere Funktion 
      btn.addEventListener("click", handleSelection2);
      btn.dataset.index = _index.toString();
  
      div.appendChild(btn);
  
      return div;
  
      // innere Funktion, welche Durch ihre Positionierung innerhalb der createPartDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
      function handleSelection(_e: Event): void {
        console.log("innere Funktion", _part);
      }
    }
  
    // äußere Funktion, welche nun anderweitig herausfinden muss, welchen Part wir gewählt haben.
    // in diesem Fall habe ich den index im heads Array auf dem Button im dataset hinterlegt.
    // Da der Button das ist, was das Event auslößt, können wir über _e.currentTarget darauf zugreifen.
    function handleSelection2(_e: Event): void {
      let target: HTMLElement = <HTMLElement> _e.currentTarget;
      let index: number = Number(target.dataset.index);
  
      console.log("äußere Funktion", part.head[index]);
    }
  
    function showPossibilities(_part: AsunaPart[]): void {
      let wrapper: HTMLDivElement = <HTMLDivElement> document.getElementById("selectionWrapper");
      for (let i: number = 0; i < _part.length; i++) {
        let div: HTMLDivElement = createPartDiv(_part[i], i);
        wrapper.appendChild(div);
      }
    }
  
    showPossibilities(part.head);
  
  }
*/

 
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
 

export let part: AllParts = {
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

export let createJSON2: string = 
            `{
             "head": [
          {
          "origin": "./img/heads/1.png",
          
        
          },
      {
          "origin": "./img/heads/2.png",
          
      },
      {
          "origin": "./img/heads/3.png",
          
      }
  ],
      "torso": [{
          "origin": "./img/legs/1.jpg",
          
      },
      {
          "origin": "./img/legs/2.jpg",
          
      },
      {
          "origin": "./img/legs/3.jpg",
          
      }
  ],
      "unten": [{
          "origin": "./img/torsos/1.jpg",
          
      },
      {
          "origin": "./img/torsos/1.jpg",
          
      },
      {
          "origin": "./img/torsos/1.jpg",
          
      }
  ]
}
`;
export let content: AllParts = JSON.parse(createJSON2);
}