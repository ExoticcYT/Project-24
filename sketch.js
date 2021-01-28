const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floor, ball;
var bin1, bin2; 

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	floor = new Ground(400, 600, 900, 20);
	
	ball = new Paper(200, 500, 30);

	Engine.run(engine);
	Engine.update(engine);

	bin1 = new Dustbin(700, 580, 200, 20, 20);
	//bin1.shapeColor = "red";
	bin2 = new Dustbin(800, 540, 20, 100, 20);
	//bin2.shapeColor = "red";
	bin3 = new Dustbin(600, 540, 20, 100, 20);
	//bin3.shapeColor = "red";
}


function draw() {
  rectMode(CENTER);
  background(0);
  floor.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  //drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position, {x:85,y:-85});
	}
}