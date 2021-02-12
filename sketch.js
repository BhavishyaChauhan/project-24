
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var boxline1,boxline2,boxline3;
var body1,body2,body3;
var leftwall,rightwall,bottom;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,610,800,10)

	paper=new Paper(200,400,70,70)

	dustbin=new Bucket(700,556,100,100)
	
	var options={
		isStatic: true,
		restitution: 1,
		friction: 3,
		density: 1
	}

	
	leftwall=Bodies.rectangle(650,560,10,100,options)
	World.add(world,leftwall)

	rightwall=Bodies.rectangle(750,560,10,100,options)
	World.add(world,rightwall)

	bottom=Bodies.rectangle(700,610,100,10,options)
	World.add(world,bottom)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  rect(leftwall.position.x,leftwall.position.y,10,100)
  rect(rightwall.position.x,rightwall.position.y,10,100)
  rect(bottom.position.x,bottom.position.y,100,10)


  Engine.update(engine)

  paper.display(); 
  ground.display();
  dustbin.display(); 
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:230,y:-230})
	}
}


