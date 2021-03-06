// TODO
// - coordinate system
// - ellipses and other shapes
// - fills, strokes
// - text
// - images
// - positioning
// - rotation

// runs before everything
// use to load assets
var duck;
var mcqueen;
function preload() {
  // // load an image

}


// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// runs every frame
function draw() {
  background(239, 240, 242);


  fill(0, 0, 0);
    strokeWeight(20);
    line(0,0,2000,0);
    line(0,120,2000,120);
    line(0,320,2000,320);
    line(0,600,2000,600);
    line(0,780,2000,780);

    line(160,0,160,2000);
    line(320,0,320,2000);
    line(600,0,600,2000);
    line(900,0,900,2000);

  fill(255, 42, 0);
      strokeWeight(1);
      rect(170,130,140,180)
    
  fill(0,46,255);
  rect(610, 130, 280, 180);


  fill(255,242, 0);
   strokeWeight(20);
    rect(160, 500, 160, 100);


  //rotate(.2);

  // https://p5js.org/reference/#/p5/rect
  //rect(130, 120, 55, 55);
  //rect(100, 100, 55, 55);
  //rect(70, 160, 55, 55);

  // https://p5js.org/reference/#/p5/fill


  // https://p5js.org/reference/#/p5/ellipse

  //ellipse(0, 0, 280, 280);


  resetMatrix();

  // get the center x and y coordinates
  [centerX, centerY] = [width/2, height/2];

  // rendering text
  //fill(0, 255, 0);
  //textSize(100);
  //text('word', centerX, centerY);

  // render the image at x=125, y=200
  //image(duck, 125, 200);
  //image(mcqueen, 100, 50); 
}




// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
