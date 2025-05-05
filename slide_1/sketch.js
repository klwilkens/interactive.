let dia = 0;
let growAmount = 1.5;
let grow = true;
let spillImg;
let table;
let veteran;
let mug;
let swirl;

function preload() {
  veteran = loadFont("veteran.ttf");
  spillImg = loadImage("spilledmug.png");
  table = loadImage("tile.png");
  swirl = loadImage("hotcoffee.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  song = loadSound('ambience.mp3');
}

function draw() {
  image(table, 0, 0, width, height);

  fill(158, 118, 86, 175); 
  noStroke();
  ellipse(width, 0, dia); 

  imageMode(CORNER); 
  image(spillImg, width - spillImg.width, 0);
  
 
  imageMode(CORNER);
  image(swirl, CORNER);
  
   let maxDia = dist(0, height, width, 0) * 2;

  if (dia > maxDia) {
    grow = false;
  }
  if (dia < 0) {
    grow = true;
  }

  dia += grow ? growAmount : -growAmount;

  fill(255); 
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont(veteran); 
  text("my ", 400, height/ 3);
   text("cup ", 450, height/2.5);
  text("overflows| ", 500, height/2);
}
  
  function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

