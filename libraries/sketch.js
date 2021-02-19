//variables
var roomImg, roomImg2;
var room1, room2, room3;
var gameState = 0;
var questionState = 0;
var button, buttonImg;
var o1, o2, o3;
var o1Img, o2Img, o3Img;
var bg1, bg2;
var a1, a2, a3, a4;
var musicScore = 0;
var alpha1, alpha2, alpha3, alpha4, strip;
var stripImg, alpha1Group, alpha2Group, alpha3Group, alpha4Group;
var musicN = 30;
var retry, next, nextImg, retryImg;
var spideyState = 0;
var ship1, ship2, ship3, ship4, smship, kingShip, web;
var fire1, fire2, fire3, fire4;
var web2, webGroup, invisibleBlock, shipGroup, ships;
var spaceImg, smshipImg, smshipImg2, ship1Img, ship2Img, fireImg, webImg, blastImg; 
var car, carImg, barrier, barrierImg, barrierGroup, groundImg, fuel, fuelImg, fuelGroup, trackImg, track;
var depressionLevel, happy, happyImg, sad, sadImg, retry1;
var accidentNumber = 3;
var quiz, quizImg1;
var quizState = 0;
var qo1, qo2, qo3, qo4;
var qo1Img, qo2Img, qo3Img, qo4Img;
var question1, question1Img, quiz, quizImg;
var quizScore = 0;
var question2Img, q2q1,q2q2,q2q3,q2q4, question3Img, question4Img, question5Img;
var tips, howToPlay, tipsImg, htpImg;
var q3q1, q3q2, q3q3, q3q4;
var ssScore = 0, tipsBg;
var back, backImg;
var aSound, dSound, sSound, wSound;
var missileBlast, shipBlast, missileLaunch;
var fireButton, move1, move2, move3, move4;
var aImg, wImg, dImg, sImg;
var left, right, up, down, fireButtonImg, display;
var accelerateImage, brake;
var totalScore;

function preload()
{


    buttonImg = loadImage("images/gs0/game.png");
    o1Img = loadImage("images/button/musicb.png");
    o2Img = loadImage("images/button/videogb.png");
    o3Img = loadImage("images/button/mangob.png");

    a1 = loadImage("images/music/a.png");
    a2 = loadImage("images/music/d.png");
    a3 = loadImage("images/music/s.png");
    a4 = loadImage("images/music/w.png");

    stripImg = loadImage("images/music/musicStrip.png");
    nextImg = loadImage("images/button/next.png");
    retryImg = loadImage("images/button/retry.png");

    spaceImg = loadImage("images/videogame/space1.png");
    smshipImg = loadImage("images/videogame/smship.png");
    smshipImg2 = loadImage("images/videogame/smshipup.png");
    ship1Img = loadImage("images/videogame/ship1.png");
    ship2Img = loadImage("images/videogame/ship2down.png");
    webImg = loadImage("images/videogame/web.png");
    fireImg = loadImage("images/videogame/fire.png");

    trackImg = loadImage("images/car/track.jpg");
    carImg = loadImage("images/car/car2.png");
    groundImg = loadImage("images/car/ground.png");
    barrierImg = loadImage("images/car/policecar.png");
    fuelImg = loadImage("images/car/fuel.png");

    happyImg = loadImage("images/gs1/smily.png");
    sadImg = loadImage("images/gs1/sad1.png");



    tipsImg = loadImage("images/gs0/tips.png");
    htpImg = loadImage("images/gs0/htp.png");



    tipsBg = loadImage("images/background/depressedTips.png");
    backImg = loadImage("images/button/back.png");

    aSound = loadSound("sounds/music/asound.mp3");
    dSound = loadSound("sounds/music/dsound.wav");
    sSound = loadSound("sounds/music/ssound.wav");
    wSound = loadSound("sounds/music/wsound.wav");

    missileBlast = loadSound("sounds/videoGame/missileBlast.mp3");    
    shipBlast = loadSound("sounds/videoGame/shipBlast.mp3");
    missileLaunch = loadSound("sounds/videoGame/missileLaunch.mp3");

    aImg = loadImage("images/button/a.png");
    wImg = loadImage("images/button/w.png");
    dImg = loadImage("images/button/d.png");
    sImg = loadImage("images/button/s.png");

    left = loadImage("images/button/left.png");
    right = loadImage("images/button/right.png");
    up = loadImage("images/button/up.png");
    down = loadImage("images/button/down.png");

    fireButtonImg = loadImage("images/button/fire.png");
    accelerateImage = loadImage("images/button/accelerate.png");
    brake = loadImage("images/button/brake.png");
}


function setup()
{
    createCanvas(800, 800);

    //Sprites
    room1 = createSprite(680, 145, 180, 140);
    //room1.addImage(roomImg);
    room1.visible = false;

    
    room2 = createSprite(675, 685, 180, 140);
   // room2.addImage(roomImg2);
    room2.visible = false;

    
    room3 = createSprite(425, 685, 180, 140);
    //room3.addImage(roomImg2);
    room3.visible = false;

    //sprite for start button
    button = createSprite(300, 300, 50, 30);
    button.scale = 0.7;
    button.addImage(buttonImg);

    back = createSprite(1000, 70, 50, 50);
    back.addImage(backImg);
    back.visible = false;
    back.scale = 0.18;

    // sprites for options
    o1 = createSprite(400, 550, 50, 30);
    o1.addImage(o1Img);
    o1.scale = 0.7;
  
    o2 = createSprite(200, 550, 50, 30);
    o2.addImage(o2Img);
    o2.scale = 0.7;
  
    o3 = createSprite(600, 550, 50, 30);
    o3.addImage(o3Img);
    o3.scale = 0.7;
    o1.visible = false;
    o2.visible = false;
    o3.visible = false;

    //sprites and group for music game
    strip = createSprite(400, 400, 800, 50);
    strip.depth = 1;
    strip.scale = 0.8;
    strip.addImage(stripImg);
    strip.visible = false;

    alpha1Group = new Group();
    alpha2Group = new Group();
    alpha3Group = new Group();
    alpha4Group = new Group();

    //sprites for video game
    ship1 = createSprite(300, 750, 50, 50);
    ship1.visible = false;
    ship1.scale = 0.6;
    ship1.addImage(ship1Img);

    ship2 = createSprite(500, 750, 50, 50);
    ship2.visible = false;
    ship2.scale = 0.6;
    ship2.addImage(ship1Img);

    next = createSprite(900, 500, 50, 50);
    next.addImage(nextImg)
    next.scale = 0.3;

    smship = createSprite(400, 50, 50, 50);
    smship.visible = false;
    smship.addImage(smshipImg);
    smship.scale = 0.7;

    web = createSprite(400, 50, 10, 20);
    web.visible = false;
    web.scale = 0.2;
    web.addImage(webImg);
    
    fire1 = createSprite(400, 50, 10, 20);
    fire1.visible = false;
    fire1.scale = 0.2;
    fire1.addImage(fireImg);
   
    fire2 = createSprite(400, 50, 10, 20);
    fire2.visible = false;
    fire2.scale = 0.2;
    fire2.addImage(fireImg);
    
    fire3 = createSprite(400, 50, 10, 20);
    fire3.visible = false;
    fire3.scale = 0.2;
    fire3.addImage(fireImg);
    
    fire4 = createSprite(400, 50, 10, 20);
    fire4.visible = false;
    fire4.scale = 0.2;
    fire4.addImage(fireImg);

    fire1.y = ship1.y;
    fire1.x = ship1.x-30;
    fire2.y = ship1.y;
    fire2.x = ship1.x+30;
    fire3.y = ship2.y;
    fire3.x = ship2.x-30;
    fire4.y = ship2.y;
    fire4.x = ship2.x+30;

    retry = createSprite(1005, 450, 50, 50);
    retry.addImage(retryImg);
    retry.visible = false;
    invisibleBlock = createSprite(400, 400, 800, 20);
    invisibleBlock.visible = false;

    webGroup = new Group();
    shipGroup = new Group();

    
    track = createSprite(400,-displayHeight*3.2,displayWidth, displayHeight*5);
    track.addImage(trackImg);
    track.visible = false;
    track.scale = 1.09;

    car = createSprite(1000, 600, 50, 20);
   // car.scale = 0.2;  
    car.addImage(carImg);

    barrierGroup = new Group();
    fuelGroup = new Group();

    depressionLevel = createSprite(145, 80, 150, 20);
    depressionLevel.shapeColor = "#5ca08e";
    depressionLevel.depth = track.depth+10;
    

    happy = createSprite(240, 80, 30, 30);
    happy.scale = 0.03;
    happy.addImage(happyImg);
    happy.depth = track.depth+10;

    sad = createSprite(47, 80, 30, 30);
    sad.scale = 0.1;
    sad.addImage(sadImg);
    sad.depth = track.depth+10;

    
    retry1 = createSprite(1005, 450, 50, 50);
    retry1.addImage(retryImg);
    retry1.visible = false;


    tips = createSprite(300, 500, 50, 50);
    tips.addImage(tipsImg);
    tips.scale = 0.7;

    howToPlay = createSprite(500, 500, 50, 50);
    howToPlay.addImage(htpImg);
    howToPlay.scale = 0.7;

    fireButton = createSprite(1000, 600, 50, 50);
    move1 = createSprite(1000, 600, 50, 50);
    move2 = createSprite(1000, 525, 50, 50);
    move3 = createSprite(1000, 675, 50, 50);
    move4 = createSprite(1000, 600, 50, 50);
    
    fireButton = createSprite(1000, 600, 50, 50);
    fireButton.addImage(fireButtonImg);
    display = createSprite(400, 400, 800, 800);
    display.visible = false;
}

function draw()
{

background("pink");
edges = createEdgeSprites();

if(gameState === 11 || gameState === 12)
{
  back.visible = true;
  back.x = 100;
}else{
  back.visible = false;
  back.x = 1000;
}
if(mousePressedOver(back))
{
  gameState = 0;
}

if(gameState === 0)
{
  o1.visible = false;
  o2.visible = false;
  o3.visible = false;
  button.visible = true;

  tips.visible = true;
  howToPlay.visible = true;
  depressionLevel.visible = false;
  happy.visible = false;
  sad.visible = false;


}
else
{

  button.visible = false;

  tips.visible = false;
  howToPlay.visible = false;
  depressionLevel.visible = true;
  happy.visible = true;
  sad.visible = true;
}

if(gameState === 1)
{
  o1.visible = true;
  o2.visible = true;
  o3.visible = true;

  o1.x = 400;
  o2.x = 200;
  o3.x = 600;

}
else if(gameState!==1 || gameState!==0)
{

  o1.x = 1000;
  o2.x = 1000;
  o3.x = 1000;
  move1.visible = true;
  move2.visible = true;
  move3.visible = true;
  move4.visible = true;

}


if(mousePressedOver(tips))
{
  background(tipsBg);
  gameState = 11;
}

if(gameState === 11)
{

  background(tipsBg);
}


ship1.bounceOff(edges[0]);
ship1.bounceOff(edges[1]);
ship2.bounceOff(edges[0]);
ship2.bounceOff(edges[1]);
//function to be executed if gameState is equal to 0 and mouse pressed of start button

 if(mousePressedOver(button))
 {
  gameState = 1;

 }
//function to be executed if gameState is equal to 1
if(gameState === 1)
{
  questionState = 1;

  background("lightGreen");
  button.visible = false; 
  
  o1.visible = true;
  o2.visible = true;
  o3.visible = true;
  
}

if(musicScore === 100)
{
  gameState = 0;
  
  strip.visible = false;
  alpha1Group.destroyEach();
  alpha2Group.destroyEach();
  alpha3Group.destroyEach();
  alpha4Group.destroyEach();
  o1.visible = true;
  o2.visible = true;
  o3.visible = true;
  o1.x = 400;
  o2.x = 200;
  o3.x = 600;

move1.visible = false;
move2.visible = false;
move3.visible = false;
move4.visible = false;
}

if(musicN<1)
{
  gameState = 15;
  
}

if(gameState === 15)
{

  strip.visible = false;
  alpha1Group.destroyEach();
  alpha2Group.destroyEach();
  alpha3Group.destroyEach();
  alpha4Group.destroyEach();

  fill("red");
  textSize(40);
  text("You Lose, Retry!", 280, 350); 
  retry.visible = true;
  retry.x = 400;
  retry.y = 420;
  
}

if(gameState === 15 && mousePressedOver(retry))
{

  musicN = 5;
  gameState = 2;
  retry.x = 1000;
}


if(gameState === 6 && mousePressedOver(retry1))
{  

  gameState = 0;
  questionState = 0;
}


if(mousePressedOver(o1) && gameState === 1)
{

  gameState = 2;
  questionState = 0;
  o1.visible = false;
  o2.visible = false;
  o3.visible = false;
}

if (mousePressedOver(o2) && gameState === 1)
{
 
  background(spaceImg);
  spideyState = 1;
  gameState = 4;
  questionState = 5;
  o1.visible = false;
  o2.visible = false;
  o3.visible = false;
  o1.x = 1000;
  o2.x = 1000; 
  o3.x = 1000;
  
  next.x = 1005;

}

if(gameState === 2)
{
  background("pink");
  music();
  
  o1.visible = false;
  o2.visible = false;
  o3.visible = false;
  
  fill("blue")
  textSize(20);
  text("Music Score: "+ musicScore, 600, 50);
  text("Press the letter keys on the keyboard when they touches the Music Strip", 100, 300);
  text("Negations left: " + musicN, 100, 50);
}






if(gameState===3 && questionState!==5)
{
  background("pink");

  strip.visible = false;
  alpha1Group.destroyEach();
  alpha2Group.destroyEach();
  alpha3Group.destroyEach();
  alpha4Group.destroyEach();

  next.x = 385;
  next.y = 400;

  fill("green");
  textSize(40);
  text("You Reached The Target!!", 180, 300);
}

if (mousePressedOver(next) && gameState === 3)
{
  questionState = 2;
  next.destroy();

}



if(gameState === 4)
{
  background(spaceImg);
if(spideyState === 1)
{
  ship1.visible = true;
  ship2.visible = true;
  smship.visible = true;

  move1.x = 100;
  move1.addImage(left);
  move1.scale = 0.2;
  move2.x = 200;
  move2.y = move1.y;
  move2.addImage(right);
  move2.scale = 0.2;
  fireButton.x = 650;
  o2.x = 1000;
  o1.x = 1000;
  o3.x = 1000;

  if(keyWentDown("f") || mousePressedOver(fireButton))
  {
    web.x = smship.x;
    web.visible = true;
    web.velocityY = 4;

    missileLaunch.play();
  }

  if(web.y>800)
  {
    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;
  }

  if(fire1.y<0)
  {
    fire1.y = ship1.y;
    fire1.x = ship1.x-30;
    missileLaunch.play();
  }

  
  if(fire2.y<0)
  {
    fire2.y = ship1.y;
    fire2.x = ship1.x+30;
    missileLaunch.play();
  }

  
  if(fire3.y<0)
  {
    fire3.y = ship2.y;
    fire3.x = ship2.x-30;
    missileLaunch.play();
  }

  
  if(fire4.y<0)
  {
    fire4.y = ship2.y;
    fire4.x = ship2.x+30;
    missileLaunch.play();
  }

  if(fire1.isTouching(web))
  {
    fire1.y = ship1.y;
    fire1.x = ship1.x-30;0

    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;

    missileBlast.play();
  }

  if(fire2.isTouching(web))
  {
    fire2.y = ship1.y;
    fire2.x = ship1.x-30;

    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;
    missileBlast.play();
  }

  if(fire3.isTouching(web))
  {
    fire3.y = ship1.y;
    fire3.x = ship1.x-30;

    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;
    missileBlast.play();
  }

  if(fire4.isTouching(web))
  {
    fire4.y = ship1.y;
    fire4.x = ship1.x-30;

    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;
    missileBlast.play();
  }

  if(fire1.isTouching(smship))
  {
    fire1.y = ship1.y;
    fire1.x = ship1.x-30;

    shipBlast.play();
    depressionLevel.width = depressionLevel.width-15;
    depressionLevel.x = depressionLevel.x-7.5;
    spideyState = 1;
  }

  if(fire2.isTouching(smship))
  {
    fire2.y = ship1.y;
    fire2.x = ship1.x-30;
    shipBlast.play();
    depressionLevel.width = depressionLevel.width-50;
    depressionLevel.x = depressionLevel.x-25;
    spideyState = 1;
  }

  if(fire3.isTouching(smship))
  {
    fire3.y = ship1.y;
    fire3.x = ship1.x-30;
    depressionLevel.width = depressionLevel.width-50;
    depressionLevel.x = depressionLevel.x-25;
    shipBlast.play();
    spideyState = 1;
  }

  if(fire4.isTouching(smship))
  {
    fire4.y = ship1.y;
    fire4.x = ship1.x-30;
    depressionLevel.width = depressionLevel.width-20;
    depressionLevel.x = depressionLevel.x-10;
    shipBlast.play();
    spideyState = 1;
  }


  if(keyWentDown("LEFT_ARROW") || mousePressedOver(move1))
  {
    smship.velocityX = -3;
  }
  if(keyWentUp("LEFT_ARROW"))
  {
    smship.velocityX = 0;
  }

  
  if(keyWentDown("RIGHT_ARROW") || mousePressedOver(move2))
  {
    smship.velocityX = 3;
  }
  if(keyWentUp("RIGHT_ARROW"))
  {
    smship.velocityX = 0;
  }

  if(keyWentDown("space"))
  {

  spaceSpidey();
  o1.visible = false;
  o2.visible = false;
  o3.visible = false;

  }

  if(web.isTouching(ship1))
  {
    shipBlast.play();
  ship1.x = 1000;
  web.x = smship.x;
  web.y = smship.y;
  web.visible = false;
  web.velocityY = 0;
  }
  
  if(web.isTouching(ship2))
  {
    shipBlast.play();
  ship2.x = 1000;
  web.x = smship.x;
  web.y = smship.y;
  web.visible = false;
  web.velocityY = 0;
  }

  if(ship1.x>900 && ship2.x>900)
  {
    spideyState = 3;
  }


}
/*
  if(spideyState === 2)
  {
    fill("red");
    textSize(40);
    text("You Lose!!", 310, 350);
 
    ship1.visible = false;
    ship2.visible = false;
    smship.visible = false;
    fire1.visible = false;
    fire2.visible = false;
    fire3.visible = false;
    fire4.visible = false;
    web.visible = false;
    retry.visible = true;

    fire1.velocityY = 0;
    fire2.velocityY = 0;
    fire3.velocityY = 0;
    fire4.velocityY = 0;
    ship1.velocityX = 0;
    ship2.velocityX = 0;

    fire1.y = ship1.y;
    fire1.x = ship1.x-30;
    fire2.y = ship1.y;
    fire2.x = ship1.x+30;
    fire3.y = ship2.y;
    fire3.x = ship2.x-30;
    fire4.y = ship2.y;
    fire4.x = ship2.x+30;

    ship1.x = 300;
    ship2.x = 500;
    smship.x = 400;
    web.velocityY = 0;
    web.x = smship.x;
    web.y = smship.y;
    smship.velocityX = 0;
    
    retry.x = 400;
  }
*/
  if(spideyState === 3)
  {

    smship.visible = false;
    web.visible = false;
    fire1.visible = false;
    fire2.visible = false;
    fire3.visible = false;
    fire4.visible = false;

    web.velocityY = 0;
    web.y = smship.y;
    web.x = smship.x;

  }



  if(spideyState === 3)
  {

  fill("green");
  textSize(35);
  text("Press Space key or tap over Screen to Continue!", 30, 380)
  }

  if(keyWentDown("space") && spideyState === 3)
  {
    spideyState = 5;
    smship.y = 750;
    smship.x = 400;
  }
  if(mousePressedOver(display) && spideyState === 3)
  {
    spideyState = 5;
    smship.y = 750;
    smship.x = 400;
  }

  if(spideyState === 5 && gameState === 4)
  {

    smship.visible = true;
    smship.addImage(smshipImg2);
    move3.x = 150;
    move4.x = 150;
    move3.y = 550;
    move4.y = 650;
    move3.addImage(up);
    move4.addImage(down);
    move3.scale = 0.2;
    move4.scale = 0.2;

    if(keyWentDown("f") || mousePressedOver(fireButton))
    {
    web2 = createSprite(400, 750, 20, 20);
    web2.x = smship.x;
    web2.y = smship.y;
    web2.velocityY = -5;
    web2.addImage(webImg);
    web2.scale = 0.2;
    webGroup.add(web2);
    missileLaunch.play();
    }

    for(var i=0; i<shipGroup.length; i++){
    if(shipGroup.isTouching(webGroup))
    {
     shipGroup.get(i).destroy();
     webGroup.destroyEach();
     shipBlast.play();
     ssScore = ssScore+10
    }
  }

    if(frameCount % 120 === 0)
    {

      ships = createSprite(random(50, 750), 0, 50, 50);
      ships.addImage(ship2Img);
      ships.velocityY = 5;
      ships.scale = 0.8;
      shipGroup.add(ships);
 
    }

    if(smship.isTouching(shipGroup))
    {

      spideyState = 1;
      shipGroup.destroyEach();
      ships.visible = false;
      depressionLevel.width = depressionLevel.width-20;
      depressionLevel.x = depressionLevel.x-10;
      shipBlast.play();
    }
 

    if(keyWentDown("LEFT_ARROW") || mousePressedOver(move1))
    {
      smship.velocityX = -3;
    }

    if(keyWentUp("LEFT_ARROW"))
    {
      smship.velocityX = 0;
    }

    if(keyWentDown("RIGHT_ARROW") || mousePressedOver(move2))
    {
      smship.velocityX = 3;
    }
  
    if(keyWentUp("RIGHT_ARROW"))
    {
      smship.velocityX = 0;
    }

    if(keyWentDown("UP_ARROW") || mousePressedOver(move3))
    {
      smship.velocityY = -3;
    }
  
    if(keyWentUp("UP_ARROW"))
    {
      smship.velocityY = 0;
    }
  
    if(keyWentDown("DOWN_ARROW") || mousePressedOver(move4))
    {
      smship.velocityY = 3;
    }
  
    if(keyWentUp("DOWN_ARROW"))
    {
      smship.velocityY = 0;
    }

    smship.collide(invisibleBlock);

    fill("red");
    textSize(25);
    text("Score: "+ssScore, 550, 50);
    text("Required Score: 100", 550, 100);
  }


  if(ssScore === 10)
  {

    gameState = 0;
    smship.visible = false;
    fireButton.visible = false;
    shipGroup.destroyEach();
    move1.visible = false;
    move2.visible = false;
    move3.visible = false;
    move4.visible = false;
  }
}
/*
  if(gameState === 7)
  {

    fill("green")
    textSize(20);
    text("You Won, Press 'Next' button for next question", 300, 350);
    next.visible = true;
    next.x = 380;
    next.y = 400;
    move1.visible = false;
    move2.visible = false;
    move3.visible = false;
    move4.visible = false;
    fireButton.visible = false;
    smship.destroy();
  }



  if(mousePressedOver(next) && gameState === 7)
  {

    questionState = 3;
  }




  if(mousePressedOver(retry) && gameState === 4)
  {
    spideyState = 1;
    smship.addImage(smshipImg);
    smship.y = 50;
    retry.x = 1005;
    smship.velocityY = 0;
    web.x = smship.x;
    web.y = smship.y;
  }

*/

/*
if(questionState === 2)
{

  background("lightGreen");
  
  o1.visible = true;
  o2.visible = true;
  o3.visible = true;
  
  textSize(20);
  fill("red");
  text("Boy wants to play which can help him improve his ability.", 160, 340);
  text("to reason and solve problem!", 310, 375);
  next.x = 950;
}

console.log(questionState);

if(questionState === 3)
{

  textSize(20);
  fill("red");
  text("Boy wants to have some better views of his city", 170, 340);
  text("What should he do?", 320, 375);
  next.x = 950;

  o1.visible = true;
  o2.visible = true;
  o3.visible = true;

  o1.x = 200;
  o1.y = 500;
  o2.x = 200;
  o2.y = 500;
  o3.x = 200;
  o3.y = 500;
}
*/
if(mousePressedOver(o3) && gameState === 1)
{
   
  gameState = 5;
  car.x = 400;

}

if(gameState === 5)
{

  car.visible = true;
  console.log(gameState);
  track.visible = true;
//  background(groundImg);
  camera.position.y = car.y;
  console.log(car.y);

  happy.y = car.y-350;
  sad.y = car.y-350;
  depressionLevel.y = car.y-350;

  
  spawnFuel();
  spawnBarriers();
  move1.addImage(accelerateImage);
  move1.x = 600;
  move1.y = car.y+200;
  move2.addImage(left);
  move3.addImage(right);
  move2.x = 200;
  move3.x = 300;
  move2.y = car.y+200;
  move3.y = car.y+200;

  move2.scale = 0.2;
  move3.scale = 0.2;
  move4.x = 540;
  move4.y = car.y+210;
  move4.addImage(brake);
  move1.scale = 0.7;
  move4.scale = 0.7;

  if(keyWentDown("LEFT_ARROW") || mousePressedOver(move2) && car.velocityY!==0)
  {
    
   car.velocityX = -4;
  }

  if(keyWentUp("LEFT_ARROW"))
  {
    car.velocityX = 0;
  }

  if(keyWentDown("RIGHT_ARROW") || mousePressedOver(move3) && car.velocityY!==0)
  {
    car.velocityX = 4;
  }

  if(keyWentUp("RIGHT_ARROW"))
  {
    car.velocityX = 0;
  }

  if(keyWentDown("UP_ARROW") || mousePressedOver(move1))
  {
    car.velocityY = -5;
  }

  if(keyWentUp("UP_ARROW") || mousePressedOver(move4))
  {

    car.velocityY = 0;
  }

 


  if(car.y>700)
  {

    gameState = 1;

  }
/*
  if(gameState === 8)
  {

    car.velocityY = 0;
    car.velocityX = 0;

    track.visible = false;
    car.visible = false;
    fuelGroup.destroyEach();
    retry.visible = true;
    retry.x = 390;
    retry.y = car.y+50;

    textSize(40);
    fill("red");
    text("You Won the Game", 300, car.y-20);
    textSize(30);
    fill("blue");
    text("Press Retry to go to Home Screen", 290, car.y+10);  
    barrierGroup.destroyEach();

  if(keyWentDown("r"))
  {

    gameState = 0;
  }
  }
*/
  

  if(car.isTouching(barrierGroup))
  {
    //gameState = 6;
    depressionLevel.width = depressionLevel.width-10;
    depressionLevel.x = depressionLevel.x-5;
    barrierGroup.destroyEach();

    accidentNumber = accidentNumber-1;

  }

  if(car.isTouching(fuelGroup))
  {

    fuelGroup.destroyEach();
    depressionLevel.width = depressionLevel.width+5;
    depressionLevel.x = depressionLevel.x+2.5;
  }

  if(accidentNumber === 0)
  {
    gameState = 1;
  }
/*
  if(gameState === 6)
  {
    console.log(gameState);
  
    car.velocityY = 0;
    car.velocityX = 0;
    barrier.velocityY = 0;
    track.visible = false;
    car.visible = false;  
    
    barrier.visible = false;
    barrierGroup.destroyEach();
    move1.visible = false;
    move2.visible = false;
    move3.visible = false;
    move4.visible = false;
    

      
    textSize(35);
    fill("red");
    text("You Lose, Retry", 300, car.position.y-100);

    retry1.visible = true;
    retry1.x = 400;
    retry1.y = car.y+200;


  }
*/
}


console.log(gameState);
drawSprites();

if(gameState === 7)
{

  fill("green")
  textSize(20);
  text("You Won, Press 'Next' button for next question", 200, 350);  
}
if(gameState === 1)
{
  textSize(20);
fill("red");
text("Do what you Like!", 310, 340);
text("Kindly read instructions for playing this Game in 'How To Play'", 150, 695);
}
}

function music()
{
  strip.visible = true;

  if(frameCount%59 === 0)
  {
    
    alpha1 = createSprite(random(50, 750), 0, 20, 20);
    alpha1.scale = 0.1;
    alpha1.addImage(a1);
    alpha1.velocityY = 2;
    alpha1.depth = strip.depth+1;
    alpha1Group.add(alpha1);

  }
  if(frameCount%79 === 0)
{
    alpha2 = createSprite(random(50, 750), 0, 20, 20);
    alpha2.addImage(a2);
    alpha2.scale = 0.1;
    alpha2.depth = strip.depth+1;
    alpha2.velocityY = 2;
    alpha2Group.add(alpha2);

}
  if(frameCount%89 === 0)
  {
    alpha3 = createSprite(random(50, 750), 0, 20, 20);
    alpha3.scale = 0.1;
    alpha3.depth = strip.depth+1;
    alpha3.addImage(a3);
    alpha3.velocityY = 2;
    alpha3Group.add(alpha3);
  }
    if(frameCount%97 === 0)
    {
    alpha4 = createSprite(random(50, 750), 0, 20, 20);
    alpha4.addImage(a4);
    alpha4.scale = 0.1;    
    alpha4.depth = strip.depth+1;
    alpha4.velocityY = 2;
    alpha4Group.add(alpha4);
    }
move1.x = 50;
move2.x = 125;
move3.x = 125;
move4.x = 200
 o2.x = 1000;
 o1.x = 1000;
 o3.x = 1000;
 move1.addImage(aImg);
 move2.addImage(wImg);
 move3.addImage(sImg);
 move4.addImage(dImg);

if(keyWentDown("a") || mousePressedOver(move1) && alpha1Group.isTouching(strip))
{
  musicScore = musicScore+5;
  aSound.play();

}
else if(keyWentDown("a") || mousePressedOver(move1))
{
  musicN = musicN-1
  depressionLevel.width = depressionLevel.width-1;
  depressionLevel.x = depressionLevel.x-0.5;
}
    
if(keyWentDown("d") || mousePressedOver(move4) && alpha2Group.isTouching(strip))
{
  musicScore = musicScore+5;
  dSound.play();

}
else if(keyWentDown("d") || mousePressedOver(move4))
{
  musicN = musicN-1
  depressionLevel.width = depressionLevel.width-1;
  depressionLevel.x = depressionLevel.x-0.5;
  
}
    

if(keyWentDown("s") || mousePressedOver(move3) && alpha3Group.isTouching(strip))
{
  musicScore = musicScore+5;
  sSound.play();

}
else if(keyWentDown("s") || mousePressedOver(move3))
{
  musicN = musicN-1
  depressionLevel.width = depressionLevel.width-1;
  depressionLevel.x = depressionLevel.x-0.5;
}
    

if(keyWentDown("w") || mousePressedOver(move2) && alpha4Group.isTouching(strip))
{
  musicScore = musicScore+5;
  wSound.play();

}
else if(keyWentDown("w") || mousePressedOver(move2))
{
  musicN = musicN-1
  depressionLevel.width = depressionLevel.width-1;
  depressionLevel.x = depressionLevel.x-0.5;
} 

}

function spaceSpidey()
{

  ship1.visible = true;
  ship2.visible = true;
  smship.visible = true;

  ship1.velocityX = -3;
  ship2.velocityX = 3;

  fire1.velocityY = -4;
  fire2.velocityY = -4;
  fire3.velocityY = -4;
  fire4.velocityY = -4;

  fire1.visible = true;
  fire2.visible = true;
  fire3.visible = true;
  fire4.visible = true;

}
 
function ssretry()
{
  fire1.visible = true;
  fire2.visible = true;
  fire3.visible = true;
  fire4.visible = true;
}

function spawnBarriers()
{

  if(frameCount % 40 === 0 && car.y<450)
  {

    barrier = createSprite(car.position.x, car.position.y - 600, 50, 50);
    barrier.velocityY = 7;
    barrier.addImage(barrierImg);

    barrierGroup.add(barrier);
  }
}

function spawnFuel()
{

  if(frameCount % 400 === 0)
  {

    fuel = createSprite(random(150, 650), car.position.y - 600, 50, 50);
    fuel.addImage(fuelImg);
    fuel.scale = 0.15;
    fuelGroup.add(fuel);
  }
}