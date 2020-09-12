var mo, fo, ob1, ob2, ob3;

function setup() {
  createCanvas(1200,800);
  mo = createSprite(400, 200, 80, 30);
  mo.shapeColor = "pink";
  fo = createSprite(600, 400, 50, 80);
  fo.shapeColor = "purple"; 
  fo.velocityX = 1;
  fo.velocityY = 1;
  ob1 = createSprite(300, 200, 50, 50);
  ob1.velocityX = 1;
  ob1.velocityY = 1;
  ob2 = createSprite(200, 200, 50, 50);
  ob3 = createSprite(100, 200, 50, 50);
}

function draw() {
  background("black");  
  mo.x = World.mouseX;
  mo.y = World.mouseY;
  
  if(istouching(mo, ob2)) {
  mo.shapeColor = "blue";
  ob2.shapeColor = "yellow"; 
  }
  else {
  mo.shapeColor = "pink";
  ob2.shapeColor = "purple";
  }

  (bounceoff(mo, ob1)); 
  

  drawSprites();
}


