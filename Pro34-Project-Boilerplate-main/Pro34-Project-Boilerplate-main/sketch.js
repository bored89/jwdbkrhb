
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hydro;
var mario;
var score = 0;
var man1
var man1image

function preload (){
man1image = loadAnimation ("1man.png","2man.png","3man.png","4man.png","5man.png","6man.png","7man.png","8man.png")
}

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  player = new box (50, 350, 85,85) 
  man1 = createSprite (50,350,85,85)
  man1.setAnimation (man1image);
}


function draw() 
{
  
  Engine.update(engine);
  player.show ()

  
}

