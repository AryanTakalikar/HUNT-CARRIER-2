var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var boy, boyimg;
var stones;


function preload(){

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stone(100,460,23);
	

	attach=new Throw(stones.body,{x:100,y:465});

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;

	Engine.run(engine);
  
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

}

function draw() {
  rectMode(CENTER);
  background("grey");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("black");
  textSize(18);
  


  drawSprites();

  stones.display();
  dground.display();
 

}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){

	if(lstones.body.position.x- package.body.position.x <package.diametre + lstones.diametre
		&& package.body.position.x - package.body.position.x  < package.diametre + lstones.diametre
		&&lstones.body.position.y -package.body.position.y < package.diametre + lstones.diametre
		&& package.body.position.y - lstones.body.position.y < package.diametre + lstones.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}		

	function keyPressed() {
		if (keyCode === DOWN_ARROW) {
		   Matter.Body.setStatic(packageBody,false);
		   
		 }
		}