const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground, ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

//JSON method 

var ball_options={
  //bounce
  isStatic:false,
restitution:1.2
}

//ball =Bodies.rectangle (200,200,50,50,ball_options)
ball =Bodies.circle (200,200,50,ball_options)

World.add(world,ball)


var ground_options={
  isStatic:true,
}
ground=Bodies.rectangle(200,390,400,20,ground_options)
World.add(world,ground)
}

function draw() {
  background("black");  

  Engine.update(engine);

ellipseMode(CENTER)
ellipse (this.ball.position.x ,this.ball.position.y ,100,100 )

rectMode(CENTER)
rect (this.ground.position.x ,this.ground.position.y ,400,20 )
  
}