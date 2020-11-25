const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Ground;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

box1=new box(200,300,50,50);
box2=new box(240,200,50,100);     
Ground=new ground(200,height,400,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    Ground.display();
    box1.display();
    box2.display();
}