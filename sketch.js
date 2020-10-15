var moveTheBall,fixTheBall,rect12,rect11
function setup() {
  createCanvas(800,400);
  moveTheBall=createSprite(400, 200, 50, 50);
  fixTheBall=createSprite(400, 200, 50, 50);
  moveTheBall.shapeColor="purple";
  fixTheBall.shapeColor="brown";
  rect12=createSprite(300,200,60,60);
  rect11=createSprite(100,200,60,60);
  rect12.shapeColor="yellow";
  rect11.shapeColor="green";
  rect12.velocityX=-3;
}

function draw() {
  background(0,0,0);
  moveTheBall.x=World.mouseX;  
  moveTheBall.y=World.mouseY; 

  if(isTouching(moveTheBall,fixTheBall)){
    moveTheBall.shapeColor="pink";
    fixTheBall.shapeColor="pink";
  }else{
    moveTheBall.shapeColor="purple";
  fixTheBall.shapeColor="brown";
  }
  bounceOff(rect12,rect11);

 drawSprites();
}
