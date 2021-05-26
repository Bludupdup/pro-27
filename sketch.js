
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground;

function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    ground1 = new Ground(1000,50,200,100);
	ground2 = new Ground(800,50,200,100);
	ground3 = new Ground(600,50,200,100);
	ground4 = new Ground(400,50,200,100);
    blob1 = new Ball(1000,300);
	blob2 = new Ball(800,300);
	blob3 = new Ball(600,300);
	blob4 = new Ball(400,300);
	sling1= new Sling(ground1.body,blob1.body);
	sling2= new Sling(ground2.body,blob2.body);
	sling3= new Sling(ground3.body,blob3.body);
	sling4= new Sling(ground4.body,blob4.body);
	
	
	
	
	
	Engine.run(engine);

}

function draw() {

  background(230);
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  
  

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(blob4.body,blob4.body.position,{x:-75,y:-75});
	}
}



