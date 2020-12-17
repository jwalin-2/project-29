var stone
var ground

function setup(){

createCanvas(800,800);

ground=createSprite(400,750,900,10);

stone=new Stone(100,400,50,50);

block1=createSprite(400,400,20,30);
block2=createSprite(440,400,20,30);
block3=createSprite(480,400,20,30);
block4=createSprite(520,400,20,30);
block5=createSprite(560,400,20,30);
block6=createSprite(600,400,20,30);
block7=createSprite(640,400,20,30);
block9=createSprite(440,350,20,30);
block10=createSprite(480,350,20,30);
block11=createSprite(520,350,20,30);
block12=createSprite(560,350,20,30);
block13=createSprite(600,350,20,30);
block14=createSprite(480,300,20,30);
block15=createSprite(520,300,20,30);
block16=createSprite(560,300,20,30);
block17=createSprite(520,250,20,30);
}


function draw(){



drawSprites();

}

function mouceDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
