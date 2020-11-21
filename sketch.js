// World, Engine, Bodies
//Matter.Engine

const Engine = Matter.Engine;
// Used to create physics engine
const World =Matter.World;
//To create the physical world and add object to it
const Bodies =Matter.Bodies;
// to create physical objects that inhabit the world

var engine, world;
var object;


function setup(){
    var canvas=createCanvas(400,400);
    engine =Engine.create();
    world =engine.world;

    var options ={
        isStatic:true
    }

    object =Bodies.rectangle(200,100,50,50, options);
    World.add(world, object);
    
}
function draw(){
    background(0);
    Engine.update(engine);
    rectMode (CENTER);
    rect(object.position.x, object.position.y,50,50);
}

