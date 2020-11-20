const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var object, polygon,polygonimg;

var bg = "bg1.png";

function preload(){
//polygonimg=loadImage("")
getBackgroundImg();
}

var score=0;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  //object=new Ground (400, 200, 50, 50);
  
  stand=new Ground(390,295,180,5)

  block1=new Box(300,295,30,40);
  block2=new Box(330,295,30,40);
  block3=new Box(360,295,30,40);
  block4=new Box(390,295,30,40);
  block5=new Box(420,295,30,40);
  block6=new Box(450,295,30,40);
  block7=new Box(480,295,30,40);
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);
  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(420,195,30,40);
  block16=new Box(390,155,30,40);


  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot=new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
    //if(backgroundImg)
       // background(backgroundImg);
    
       background(255,255,255); 

  text("Score  " + score, 750, 50);

  Engine.update(engine);

  //object.diaplay() 
 
  stand.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
Fill("pink")
block13.display();
block14.display();
block15.display();
block16.display();
Fill("gold")

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();


//imageMode(CENTER);
//image(polygon)

slingShot.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
