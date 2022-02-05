function setup(){
canvas = createCanvas(500, 370);
background("white");
}

function clearCanvas(){
    background("white");
}

function draw(){
    strokeWeight(13);  //Sets Stroke Weight To 13
    stroke(0); //Sets Stroke Colour To Black
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}