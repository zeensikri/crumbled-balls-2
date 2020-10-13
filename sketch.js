
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject ; 
var ground;
var dustbin1,dustbin2,dustbin3 ; 
var engine,world ; 
function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;

	createCanvas(1300, 700);

   ground = new Ground(755,height,2000,20);
	
   paperObject=new paper(300,10,70);

	dustbin2 = new Dustbin(1200,700,100,20) ; 
	


  
	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(230);

  paperObject.display();
 
  ground.display();

  dustbin2.display();
  


  drawSprites();
  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}



