function istouching(ob1, ob2) {
    if (ob1.x - ob2.x < ob1.width/2 + ob2.width/2 && ob2.x - ob1.x < ob1.width/2 + ob2.width/2 && 
     ob1.y - fo.y < ob1.height/2 + ob2.height/2 && ob2.y - ob1.y < ob1.height/2 + ob2.height/2)  {
    return true;
    } else {
    return false;    
    }
    }
    
    function bounceoff(mo, fo) {
      if (mo.x - fo.x < mo.width/2 + fo.width/2 && fo.x - mo.x < mo.width/2 + fo.width/2) {
      mo.velocityX = mo.velocityX*(-1);
      fo.velocityX = fo.velocityX*(-1);   
      } 
      if( mo.y - fo.y < mo.height/2 + fo.height/2 && fo.y - mo.y < mo.height/2 + fo.height/2) {
      mo.velocityY = mo.velocityY*(-1);
      fo.velocityY = fo.velocityY*(-1);
      }
      }