var fixedRect , movingRect

function setup() {
  createCanvas(800,700);
  fixedRect =  createSprite(400,200,50,80);
  movingRect =  createSprite(400,600,80,30);

  fixedRect.shapeColor = "#FF69B4";
  movingRect.shapeColor = "#FF69B4";

  fixedRect.velocityY = 5
  movingRect.velocityY = -5
}

function draw() {
  background(0);



  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    &&  movingRect.x -  fixedRect.x < fixedRect.width/2 + movingRect.width/2)
    { movingRect.velocityX = movingRect.velocityX*(-1)
      fixedRect.velocityX = fixedRect.velocityX*(-1) 
    }
    
    if( fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    &&  movingRect.y -  fixedRect.y < fixedRect.height/2 + movingRect.height/2 ){
      movingRect.velocityY = movingRect.velocityY*(-1)
      fixedRect.velocityY = fixedRect.velocityY*(-1) 
    }
   
    
  drawSprites();
}