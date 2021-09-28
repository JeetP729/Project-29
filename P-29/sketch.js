const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height,1200,20);
    ground1 = new Ground(600,300,300,15);
    ground2 = new Ground(1000,200,300,15);
    //1st line 
    block1 = new Block(520,250,40,45);
    block2 = new Block(560,250,40,45);
    block3 = new Block(600,250,40,45);
    block4 = new Block(640,250,40,45);
    block5 = new Block(680,250,40,45);
    
    //2nd line
    block6 = new Block2(660,205,40,45);
    block7 = new Block2(620,205,40,45);
    block8 = new Block2(580,205,40,45);
    block9 = new Block2(540,205,40,45);
    //3rd line
    block10 = new Block3(640,160,40,45);
    block11 = new Block3(600,160,40,45);
    block12 = new Block3(560,160,40,45);
    //4th line
    block13 = new Block4(620,115,40,45);
    block14 = new Block4(580,115,40,45);
    //5th line
    block15 = new Block5(600,60,40,45);

    //2nd ground's 1st line
    block16 = new Block(1000,150,40,45);
    block17 = new Block(960,150,40,45);
    block18 = new Block(920,150,40,45);
    block19 = new Block(1040,150,40,45);
    block20 = new Block(1080,150,40,45);
    //2nd ground's 2nd line
    block21 = new Block3(1000,105,40,45);
    block22 = new Block3(960,105,40,45);
    block23 = new Block3(1040,105,40,45);
    //2nd ground's 3rd line
    block24 = new Block5(1000,60,40,45);

    //polygon = new Polygon(600,height,40,40);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    
    slingShot = new Slingshot(this.ball,{x:200,y:200});


}

function draw(){
    background(56,44,44); 
    Engine.update(engine);

    strokeWeight(2);
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    
    ground.display();
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    //polygon.display();

    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingShot.fly();
}
