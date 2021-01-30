const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var ball, box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   object = new Ground(200, 390, 400, 20); 
 

    ball = new Box(300, 100, 50, 60);

    box1 = new Box(280, 200, 20, 40);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);

    ball.display();
    box1.display();
    object.display();
}
