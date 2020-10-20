var fr1,mr1;


function setup() {
  createCanvas(800,400);

  fr1=createSprite(400, 200, 50, 80);
  mr1=createSprite(200,200,80,50);


}

function draw() {
  background(0);
  
  fr1.x=World.mouseX
  fr1.y=World.mouseY

if(fr1.x-mr1.x <fr1.width/2+mr1.width/2 &&
  mr1.x-fr1.x <fr1.width/2+mr1.width/2 && 
  fr1.y-mr1.y <mr1.height/2+mr1.height/2 &&
  mr1.y-fr1.y <fr1.height/2+mr1.height/2 )
{

fr1.shapeColor="red";
mr1.shapeColor="red";
}

else
{
  fr1.shapeColor="green";
  mr1.shapeColor="green";  
}

  drawSprites();
}