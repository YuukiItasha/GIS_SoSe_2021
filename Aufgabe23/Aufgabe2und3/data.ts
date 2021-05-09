namespace Aufgabe2und3 {
    export let posibilityOben: Posibility[] = [];
    export let posibilityMitte: Posibility[] = [];
    export let posibilityUnten: Posibility[] = [];
    
    let path: string = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
  /*
    interface ImagePart {
        imageUrl: string;
        position: string;
}    

    interface FullImages {
            imageId: string;
            oben: ImagePart;
            mitte: ImagePart;
            unten: ImagePart;
}

    const data: FullImages[] = [
    {
        imageId: "asuna1",
        oben: {
            imageUrl: "Bilder/Oben/asuna1_oben.jpg"
        }
        mitte: {
            imageUrl: "Bilder/Mitte/asuna1_mitte.jpg"
        }
        unten: {
            imageUrl: "Bilder/Unten/asuna1_unten.jpg"
        }

        imageId: "asuna2",
        oben: {
            imageUrl: "Bilder/Oben/asuna2_oben.jpg"
        }
        mitte: {
            imageUrl: "Bilder/Mitte/asuna2_mitte.jpg"
        }
        unten: {
            imageUrl: "Bilder/Unten/asuna2_unten.jpg"
        }

        imageId: "asuna3",
        oben: {
            imageUrl: "Bilder/Oben/asuna3_oben.jpg"
        }
        mitte: {
            imageUrl: "Bilder/Mitte/asuna3_mitte.jpg"
        }
        unten: {
            imageUrl: "Bilder/Unten/asuna3_unten.jpg"
        }
    }
];

function displayPart(part: ImagePart, position: string): void {
    const imageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("image-container");

    imageContainer.appendChild
} */
 
    
    let bild1Oben: Posibility = new Posibility("asuna1 - Oben", 0, path + "Bilder/Oben/asuna1_oben.jpg");
    let bild1Mitte: Posibility = new Posibility("asuna1 - Mitte", 1, path + "Bilder/Mitte/asuna1_mitte.jpg");
    let bild1Unten: Posibility = new Posibility("asuna1 - Unten", 2, path + "Bilder/Unten/asuna1_unten.jpg");
    
    export let selectedElements: Selected = {oben: posibilityOben[0], mitte: posibilityMitte[0], unten: posibilityUnten[0]};
    
   
    let bild2Oben: Posibility = new Posibility("asuna2 - Oben", 0, path + "Bilder/Oben/asuna2_oben.jpg");
    let bild2Mitte: Posibility = new Posibility("asuna2 - Mitte", 1, path + "Bilder/Mitte/asuna2_mitte.jpg");
    let bild2Unten: Posibility = new Posibility("asuna2 - Unten", 2, path + "Bilder/Unten/asuna2_unten.jpg");
    
    
    let bild3Oben: Posibility = new Posibility("asuna3 - Oben", 0, path + "Bilder/Oben/asuna3_oben.jpg");
    let bild3Mitte: Posibility = new Posibility("asuna3 - Mitte", 1, path + "Bilder/Mitte/asuna3_mitte.jpg");
    let bild3Unten: Posibility = new Posibility("asuna3 - Unten", 2, path + "Bilder/Unten/asuna3_unten.jpg");
    
    } 