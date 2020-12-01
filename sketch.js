
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);
   path=createSprite(400, 180, 800, 10)
   bask1=createSprite(530, 115, 15, 100)
   bask2=createSprite(651, 168, 250, 15)
   bask3=createSprite(772, 115, 15, 100)
   ball=createSprite(50, 150, 30, 30)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 background(0)
  path.shapeColor="yellow"
  bask1.shapeColor="white"
  bask2.shapeColor="white"
  bask3.shapeColor="white"
  ball.shapeColor="lightblue"
  
  
  drawSprites();
  ball.x=ball.mouseX
 
}



