class Image {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.pixels = new Array(height).fill(null).map(() => new Array(width).fill([0, 0, 0]));
    }

    setPixel(x, y, r, g, b) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height ) {
           
            r = Math.max(0, Math.min(255, r));
            g = Math.max(0, Math.min(255, g));
            b = Math.max(0, Math.min(255, b));


                this.pixels[y][x] = [r, g, b];    
        } else {
            console.log("Coordinates out of bounds.");
        }
    }

    getPixel(x, y, r, g, b) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height ) {
            
            return this.pixels[y][x];
        } else {
            console.log("Coordinates out of bounds.");
            return null;
        }
    }

    display() {
        for (let row of this.pixels) {
            let rowStr = "";
            for (let pixel of row) {
                rowStr += `(${pixel[0]}, ${pixel[1]}, ${pixel[2]}) `;
            }
            console.log(rowStr);
        }
    }
}

// Example usage:
let img = new Image(5, 5);

img.setPixel(2, 2, 255, 0, 0);
img.setPixel(3, 1, 234, 343443 ,4);
img.setPixel(2, 4, 456, 4, 7)

console.log("Pixel at (2, 2):", img.getPixel(2, 2));
console.log("Pixel at (3, 1):", img.getPixel(3, 1));
console.log("Pixel at (2, 4):", img.getPixel(2, 4));

img.display();

