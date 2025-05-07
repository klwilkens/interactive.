let gif;
let stripes;
let song;
let songStarted = false;

function setup() {
   createCanvas(windowWidth,windowHeight);
}


function preload(){
  gif = loadImage('assets/slide4gif.gif');
  stripes = loadImage('assets/stripes.png');
}



function draw() {
  background(stripes);
  image(gif,400, 150);
  

}



function mousePressed() {
 
  if (!songStarted) {
    song.play();
    songStarted = true;
  }
} 