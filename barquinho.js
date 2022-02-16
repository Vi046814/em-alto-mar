var mar,barco,barcoA;
var marImage;
function preload(){

  marImage = loadImage("sea.png");

  barcoA = loadAnimation("ship-1.png","ship-4.png","ship-3.png","ship-2.png");
  
}

function setup(){
  createCanvas(500,500);

mar = createSprite(250,250,20,20);
mar.addImage("fundo",marImage);
mar.scale = 0.4;

barco = createSprite(250,280,80,30);
barco.addAnimation("navegar",barcoA);
barco.scale = 0.3;

}

function draw() {
  background("blue");
    drawSprites();

 
}
