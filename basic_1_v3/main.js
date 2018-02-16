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
  duck = loadImage('assets/duck.png');
  mcqueen = loadImage('assets/lightning.png');
}


// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// runs every frame
function draw() {
  background(167,140,250);

// we are setting a "for loop" 
  //the fill is (R,G,B)

  for (var i=0; i<100; i++) {
      fill(100 + i*20, 255-i*10, 0);
      //textSize(i*2)
      //text('cool', i*10, i*10);
      ellipse(i*30, i*30, 160, 160);
      image(mcqueen, 100+i*10, 200);
  }


  fill(155, 255, 255);

  rotate(.2);

  // https://p5js.org/reference/#/p5/rect
  //rect(130, 120, 55, 55);
  //rect(100, 100, 55, 55);
  //rect(70, 160, 55, 55);

  // https://p5js.org/reference/#/p5/fill
  fill(255, 204, 0);

  // https://p5js.org/reference/#/p5/ellipse

  //ellipse(0, 0, 280, 280);

  fill(255, 100, 0);
  
  rotate(0.1);
  rect(200, 180, 55, 55);
  resetMatrix();

  // get the center x and y coordinates
  [centerX, centerY] = [width/2, height/2];

  // rendering text
  fill(0, 255, 0);
  textSize(100);
  text('word', centerX, centerY);

  // render the image at x=125, y=200
  //image(duck, 125, 200);
  image(mcqueen, 100, 50); 
}




// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
