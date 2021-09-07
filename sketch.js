const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var ball;
var left;
var right;
var top_wall;

var button1;
var button2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  button1 = createImg('right.png')
  button1.size(50,50);
  button1.position(220,30);
  button1.mouseClicked(hForce);

  button2 = createImg('up.png')
  button2.size(50,50);
  button2.position(20,30);
  button2.mouseClicked(vForce);

  ground = new Ground(200,590,400,20);
  left = new Ground(-100,200,400,400);
  right = new Ground(500,200,400,400);
  top_wall = new Ground(200,-190,400,20);

  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background("black");

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  right.show();
  left.show();
  top_wall.show();
  Engine.update(engine);
}

function hForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}