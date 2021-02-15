var bgimg,bg,database,hotballonimg,hotballon,position
function preload(){
bgimg=loadImage("pro-C35 images/bg.png")
hotballonimg=loadImage("pro-C35 images/Hot Air Ballon-02.png")
}

function setup() {
  database=firebase.database();
  
  createCanvas(1000,800);
  
  bg=createSprite(400,200)
  bg.addImage("bg",bgimg)
  hotballon=createSprite(200,200,10,10)
  hotballon.addImage(hotballonimg)
}

function draw() {
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('hotballon/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}

    
 