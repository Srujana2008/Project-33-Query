function preload(){
  bg_img = loadImage("background.png");
  bunny = loadAnimation("blink_1.png", "blink_2.png", "blink_3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bunny = createSprite(width/2, height/2, 100, 100);
  bunny.addAnimation('binking', bunny);
}

function draw() {
  background(255,255,255); 
  image(bg_img, 0, 0, width, height); 
  drawSprites();
}