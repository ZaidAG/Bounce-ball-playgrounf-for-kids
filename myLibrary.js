function isTouching(object1,object2){
    maxiumDistance=(object1.width+object2.width)/2;
    ultraDistance=(object1.height+object2.height)/2;
   distanceToTheLeft=object2.x-object1.x;
   distanceToTheRight=object1.x-object2.x;
   distanceToTheUp=(object2.y-object1.y);
   distanceToTheDown=(object1.y-object2.y);
  
   if((distanceToTheLeft<maxiumDistance)&&(distanceToTheRight<maxiumDistance)&&(distanceToTheUp<ultraDistance)&&(distanceToTheDown<ultraDistance)){
    return true;
   }else{
    return false;
   }
  }
  function bounceOff(object3,object4){
    if (object3.x - object4.x < object4.width/2 + object3.width/2
      && object4.x - object3.x < object4.width/2 + object3.width/2) {
        object3.velocityX = object3.velocityX * (-1);
    object4.velocityX = object4.velocityX * (-1);
  }
  if (object3.y - object4.y < object4.height/2 + object3.height/2
    && object4.y - object3.y < object4.height/2 + object3.height/2){
      object3.velocityY = object3.velocityY * (-1);
    object4.velocityY = object4.velocityY * (-1);
  }
  }