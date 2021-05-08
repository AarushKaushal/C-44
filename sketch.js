const World=Matter.World;
const Engine=Matter.Engine;
const Bodies= Matter.Bodies;
var bg, bgImg;
var bird, birdImg;
var invisibleground;
function preload(){
  bgImg = loadImage("bg.png");
  birdImg = loadImage("bird.png");
}
function setup(){
  var canvas =createCanvas(1800,900);
  engine = Engine.create();
  world = engine.world;
  //bg= createSprite(900,0,1800,900);
  //bg.addImage(bgImg);
  //bg.scale=4;
  //bg.velocityX=-4;
  //bird = createSprite(700,450,10,10);
  //bird.addImage(birdImg);
  invisibleground =new Ground(900,900,1800,10);
  bg= new Background(900,450,1800,900);
  //bird.setCollider("circle",0,-11,90);
  //bird.debug=true
}
function draw(){
  Engine.update(engine);
  /*if(bg.x<0){
    bg.x=bg.width/2
  }
  if(keyDown("space")){
    bird.velocityY=-20;
  } 
  bird.velocityY=bird.velocityY+2;
  bird.collide(invisibleground);*/
  invisibleground.display();
  bg.display();
  //drawSprites();
}