var fixedrect , movingrect;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
fixedrect=createSprite(200,200,50,60);
fixedrect.shapeColor="green";

movingrect=createSprite(250,200,50,60);
movingrect.shapeColor="green";

}

function draw() {
  background(255,255,255);  

movingrect.x=World.mouseX;
movingrect.y=World.mouseY;


if(fixedrect.width/2+movingrect.width/2 > movingrect.x-fixedrect.x  && 
  fixedrect.width/2+movingrect.width/2 > fixedrect.x-movingrect.x && 
  fixedrect.width/2+movingrect.width/2 > movingrect.y-fixedrect.y &&
  fixedrect.width/2+movingrect.width/2 > fixedrect.y-movingrect.y ){
fixedrect.shapeColor="red";
movingrect.shapeColor="red";
}
else {
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";


}




  drawSprites();
}