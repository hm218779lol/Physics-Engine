const Engine=Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,object1
var ground
var ball
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;
  var options={
  restitution:1
  }
  object1=Bodies.rectangle(400,200,50,50,options);
  World.add(world,object1);
  var options={
  isStatic:true
  }
  ground=Bodies.rectangle(400,height,800,20,options);
  World.add(world,ground)
  var options={
  restitution:1
  }
  ball=Bodies.circle(600,100,25,options);
    World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,50,50);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50);
}