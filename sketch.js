const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var boy, launcherObj;

var stone;

var mango1, mango2, mango3, mango4, mango5;

var tree;

var ground;

function preload() {
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 475, width, 10);
	
	tree = new Tree(650, 245, 300, 480);

	mango1 = new Mango(545, 145, 20);
	mango2 = new Mango(640, 110, 20);
	mango3 = new Mango(750, 160, 20);
	mango4 = new Mango(675, 50, 20);
	mango5 = new Mango(650, 180, 20);

	stone = new Stone(130, 375, 30);

	launcherObj = new Launcher(stone.body, {x: 130, y: 375});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);

  background(235);

  Engine.update(engine);

  image(boy, 100, 320, 150, 200);

  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();

  launcherObj.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);

  drawSprites();
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	launcherObj.fly();
}

function detectollision(lstone, lmango) {
	mangoBodyPosition=lmango.body.position
  	stoneBodyPosition=lstone.body.position
  
  	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance <= lmango.r + lstone.r) {
  	  Matter.Body.setStatic(lmango.body, false);
    }
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 130, y: 375});
		launcherObj.attach(stone.body);
	}
}