  
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800) ;
  fixedRect = createSprite(400, 100, 50, 80) ;
  fixedRect.shapeColor = "green" ;
  fixedRect.debug = true ;
  movingRect = createSprite(400, 800,80,30) ;
  movingRect.shapeColor = "green" ;
  movingRect.debug = true ;

  movingRect.velocityY = -5 ;
  fixedRect.velocityY = +5 ;
}

function draw() {
  background(0,0,0) ;  

  bounceOff(object1,fixedRect) ; 

  drawSprites() ;
}

function bounceOff(object1,fixedRect) {
  if (objectect1.x - fixedRect.x < fixedRect.width/2 + object1.width/2
    && fixedRect.x - object1.x < fixedRect.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1) ;
  fixedRect.velocityX = fixedRect.velocityX * (-1) ;
}
if (object1.y - fixedRect.y < fixedRect.height/2 + object1.height/2
  && fixedRect.y - object1.y < fixedRect.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1) ;
  fixedRect.velocityY = fixedRect.velocityY * (-1) ;

}
}