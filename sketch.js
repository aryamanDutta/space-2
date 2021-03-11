var shuttle,shuttleImage;
var block,blockImage;
var meteor,meteorImage;
var star,starImage;
var block;



function preload(){
blockImage=loadImage("images/back.jpg")
shuttleImage=loadImage("images/space_shuttle.png")
meteorimage=loadImage("images/space_meteor.png")
starImage=loadImage("images/star.jpg")
}

function setup(){
 createCanvas(1280,608);
 block=createSprite(400,400,1280,608);
 block.addImage(blockImage);
 block.scale=2;
 //block.x = block.width/2;
 block.velocityX = -4;
 
 
shuttle=createSprite(200,200);
shuttle.addImage(shuttleImage);
shuttle.scale=0.15;


 

    

}

function draw(){
    background("white");

    if (block.x < 500)
    {
     block.x = block.width/2;
    }

    drawSprites(); 
}
