var wall,thickness;
var line1,line2,line3,line4;
var bullet1,bullet2,bullet3,bullet4;
var speed1,weight1;
var speed2,weight2;
var speed3,weight3;
var speed4,weight4;

var fbullet,fwall

function setup() {
  createCanvas(1600,800);
  thickness = random(22,83);
  speed1 = random(223,321);
  weight1 = random(30,52);

  speed2 = random(223,321);
  weight2 = random(30,52);

  speed3= random(223,321);
  weight3 = random(30,52);

  speed4 = random(223,321);
  weight4 = random(30,52);
  

  wall = createSprite(1300, 400,thickness, 800);

  line1 = createSprite(800,50, 1600,50);
  line2 = createSprite(800,250,1600,50);
  line3 = createSprite(800,450,1600,50);
  line4 = createSprite(800,650,1600,50);

  line1.shapeColor = "white";
  line2.shapeColor = "white";
  line3.shapeColor = "white";
  line4.shapeColor = "white";
  
  line1.depth = 1;
  line2.depth = 1;
  line3.depth = 1;
  line4.depth = 1;

  wall.depth = 2;
  
  wall.shapeColor = "black";

  bullet1 = createSprite(100,150,65,30);
  bullet2 = createSprite(100,350,65,30);
  bullet3 = createSprite(100,550,65,30);
  bullet4 = createSprite(100,750,65,30);

  bullet1.shapeColor = "black";
  bullet2.shapeColor = "black";
  bullet3.shapeColor = "black";
  bullet4.shapeColor = "black";

  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  bullet4.velocityX = speed4;

  bullet1.depth = 5;
  bullet2.depth = 5;
  bullet3.depth = 5;
  bullet4.depth = 5;
  
}

function draw() {
  background("yellow");
  
  if(hasCollided(bullet1,wall)){
    bullet1.velocityX = 0;
    var damage1 = 0.5 * weight1 * speed1 * speed1 / (thickness*thickness*thickness);

    if(damage1<50 && damage1 > 10){
      bullet1.shapeColor = "red";
    }

    if(damage1<10){
      bullet1.shapeColor="blue";
    }

    if(damage1>=50){
      bullet1.shapeColor = "green";
    }

  }

  if(hasCollided(bullet2,wall)){
    bullet2.velocityX = 0;
    var damage2 = 0.5 * weight3 * speed2 * speed2 / (thickness*thickness*thickness);

    if(damage2<50 && damage2 > 10){
      bullet2.shapeColor = "red";
    }

    if(damage2<10){
      bullet2.shapeColor="blue";
    }

    if(damage2>=50){
      bullet2.shapeColor = "green";
    }

  }

  if(hasCollided(bullet3,wall)){
    bullet3.velocityX = 0;
    var damage3 = 0.5 * weight3 * speed3 * speed3 / (thickness*thickness*thickness);

    if(damage3<50 && damage3 > 10){
      bullet3.shapeColor = "red";
    }

    if(damage3<10){
      bullet3.shapeColor="blue";
    }

    if(damage3>=50){
      bullet3.shapeColor = "green";
    }
  }

  if(hasCollided(bullet4,wall)){
    bullet4.velocityX = 0;
    var damage4 = 0.5 * weight4 * speed4 * speed4 / (thickness*thickness*thickness);

    if(damage4<50 && damage4 > 10){
      bullet4.shapeColor = "red";
    }

    if(damage4<10){
      bullet4.shapeColor="blue";
    }

    if(damage4>=50){
      bullet4.shapeColor = "green";
    }

  }



  console.log(damage1);
  console.log(damage2);
  console.log(damage3);
  console.log(damage4);


  drawSprites();
}

