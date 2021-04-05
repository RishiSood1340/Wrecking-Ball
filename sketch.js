const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70); 
    box3 = new Box(700,320,70,70);
    box4 = new Box(920,320,70,70);
    box5 = new Box(800,320,70,70);
    box6 = new Box(800,320,70,70); 
    ground = new Ground(600,height,1200,20)
    ball1 = new ball(200,200,80,80)
    rope1 = new rope(ball1.body,{x:500,y:50})  
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground.display();
    ball1.display();
    rope1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}