const Engine=Matter.Engine 
const World=Matter.World
const Bodies=Matter.Bodies

var MyEngine, MyWorld, ground;
var ball,ball2;

function setup() 
{
createCanvas(400,400);
MyEngine=Engine.create(); 

MyWorld=MyEngine.world  
var options= 
{
  isStatic: true
}
ground=Bodies.rectangle(200,390,400,20,options)
World.add(MyWorld,ground);
console.log(ground)
//console.log(object.position.x)
//console.log(object.position.y)
var ball_Options=
{
  restitution:1.2,
  density:0.5,
  friction: 0.3
}

ball=Bodies.circle(200,100,25,ball_Options);
World.add(MyWorld,ball);

ball2=Bodies.circle(300,100,30,{restitution:1.2});
World.add(MyWorld,ball2);

}

function draw() 
{
  background("lightblue");  
  Engine.update(MyEngine);
  rectMode(CENTER)
  fill("green");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,25,35);
  fill("red");
  ellipse(ball2.position.x,ball2.position.y,30,35);
}
