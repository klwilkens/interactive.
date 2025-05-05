
let hands;
let clover;
let trinkets = [];
let showTrinkets = [];
let showTrinketsX = [];
let showTrinketsY = [];
var clickCount = 0;

let handCenterX;
let handCenterY;
let handWidth;
let handHeight;
let song;
let songStarted = false;
let veteran;


function preload() {
  clover = loadImage("assets/clover.jpeg");
  hands = loadImage("assets/hands.png");
  trinkets[0] = loadImage("assets/butterfly.png");
  trinkets[1] = loadImage("assets/poppy.png");
  trinkets[2] = loadImage("assets/buttons.png");
  trinkets[3] = loadImage("assets/glow.png");
  trinkets[4] = loadImage("assets/pinkflower.png")
  trinkets[5] = loadImage("assets/heartlatte.png")
  trinkets[6] = loadImage("assets/matcha.png")
  trinkets[7] = loadImage("assets/blueflower.png")
  trinkets[8] = loadImage("assets/ladybugs.png")
  trinkets[9] = loadImage("assets/cookie.png")
  trinkets[10] = loadImage("assets/loveletter.png")
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('assets/spring.mp3');
  veteran = loadFont('veteran.ttf')
  
  handCenterX = width / 2;
  handCenterY = height - hands.height / 2;

  handWidth = hands.width;
  handHeight = hands.height;
}

function draw() {
  image(clover, 0, 0, windowWidth, windowHeight);
  imageMode(CENTER);
  image(hands, width / 2, height - hands.height / 2);
 
  for (i = 0; i< clickCount; i++){
    image(showTrinkets[i], showTrinketsX[i], showTrinketsY[i]);
  }   
  fill(255);        
  textSize(32);         
  textAlign(CENTER);  
  textFont(veteran);
  text("my hands", width / 3, 50);
  
  fill(255);        
  textSize(32);         
  textAlign(CENTER);  
  textFont(veteran);
  text("are", width/2, 100)
  text("filled...|", 600, 150)
}

function mousePressed() {
   // chat gpt "how to make a song only start on first click in p5.js"
  if (!songStarted) {
    song.play();
    songStarted = true;
  }

  // Check if clicked inside the hands area (box)
  if (mouseX > handCenterX - handWidth / 2 && mouseX < handCenterX + handWidth / 2 &&
      mouseY > handCenterY - handHeight / 2 && mouseY < handCenterY + handHeight / 2) {
    
    showTrinkets.push(random(trinkets));
    showTrinketsX.push(random(handCenterX - handWidth / 2, handCenterX + handWidth / 2));
    showTrinketsY.push(random(handCenterY - handHeight / 2, handCenterY + handHeight / 2));
    
    clickCount++;
    print(clickCount);
  }


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  handCenterX = width / 2;
  handCenterY = height - hands.height / 2;
}


