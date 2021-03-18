
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,hammer;
var rubber,engine,world;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

   ground = new Ground(400,700,800,50);
   //ground.shapeColor = ("red");

   hammer = new Hammer(200,120,120,50);
   //hammer.shapeColor = ("yellow");
   
   rubber = new Rubber(300,450,70);
    
}


function draw(){
	background("blue");
	Engine.update(engine);
	//rectMode(CENTER);
	//shape(390, 0,380, 10, 390, 20,400,10);
    hammer.display();
	ground.display();
	rubber.display();
 
}



