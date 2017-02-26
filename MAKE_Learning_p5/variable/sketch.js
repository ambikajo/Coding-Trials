var y;
var x;

function setup() {
    createCanvas(480, 120);
}

function draw() {
    background(0);
    for (y = 32; y <= height; y += 8){
        for (x = 12; x <= width; x += 15) {
            ellipse(x + y, y, 16 - y/10, 16 - y/10);
           
        }
    }
    
}

    

