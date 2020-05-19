
var red;
var green;
var blue;
var object;



function setup() {
  
  createCanvas(1200,800);
  
 red= createSprite(100,200,400,600);
 red.shapeColor = "green";
 red.debug = true;

 green= createSprite(400,200,400,600);
 green.shapeColor = "red";
 green.debug = true;

 blue= createSprite(700,200,400,600);
 blue.shapeColor = "blue";
 blue.debug = true;


 object= createSprite(200,200,100,100);
 object.shapeColor = "white";
 object.debug = true;


}

function draw() {
  
  background(0,0,0);
  
  object.x = mouseX; 
  object.y = mouseY;

  
  if(object.x-red.x<object.width/2+red.width/2
    && red.x-object.x<object.width/2+red.width/2
    && object.y-red.y<object.height/2+red.height/2
    && red.y-object.y<object.height/2+red.height/2){
    red.shapeColor = "red";
}
  else{
  red.shapeColor = "black";
}


  if(object.x-green.x<object.width/2+green.width/2
    && green.x-object.x<object.width/2+green.width/2
    && object.y-green.y<object.height/2+green.height/2
    && green.y-object.y<object.height/2+green.height/2){
    green.shapeColor = "green";
}
  else{
  green.shapeColor = "black";
}


 if(object.x-blue.x<object.width/2+blue.width/2
    && blue.x-object.x<object.width/2+blue.width/2
    && object.y-blue.y<object.height/2+blue.height/2
    && blue.y-object.y<object.height/2+blue.height/2){
    blue.shapeColor = "blue";
}
  else{
  blue.shapeColor = "black";
}  

drawSprites();
}


