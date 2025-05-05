let flowerImages = [];
let b = [];
let num = 20;
let veteran;
let song;

function preload() {
  flowerImages[0] = loadImage("assets/pinkflower.png");
  flowerImages[1] = loadImage("assets/blueflower.png");
  flowerImages[2] = loadImage("assets/brown.png");
  flowerImages[3] = loadImage("assets/stem.png");
  flowerImages[4] = loadImage("assets/purple.png");
  flowerImages[5] = loadImage("assets/twinkle.png");
  flowerImages[6] = loadImage("assets/whiteflower.png")
  veteran = loadFont("veteran.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
song = loadSound('bikesound.mp3');
  for (let i = 0; i < num; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(60, 100);
    let h = random(60, 100);
    let xs = random([-1, 1]) * random(2, 6);
    let ys = random([-1, 1]) * random(2, 6);
    b[i] = new BouncingSquare(x, y, w, h, xs, ys, random(flowerImages));
  }
}

function draw() {
  for (let i = 0; i < b.length; i++) {
    b[i].move();
    b[i].bounce();
    b[i].display();
  }
  // chat gpt prompt "how can I make sure text goes on top"
  fill(255); 
  textFont(veteran);
  textAlign(CENTER, CENTER);
  textSize(60);
  text("my garden", width / 2, 200);
  text("blooms", width / 2, 300);
  text("and  blossoms|", width / 2, 400);
}

 function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
 }
class BouncingSquare {
  constructor(x, y, w, h, xSpeed, ySpeed, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xspeed = xSpeed;
    this.yspeed = ySpeed;
    this.img = img; 
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width - this.w / 2 || this.x < this.w / 2) {
      this.xspeed *= -1;
    }
    if (this.y > height - this.h / 2 || this.y < this.h / 2) {
      this.yspeed *= -1;
    }
  }

  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);
  }
  
}