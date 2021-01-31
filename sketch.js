var goku,gokuImg;
var ssjBluegoku,ssjBluegokuImg;
var frieza_Soldier,frieza_SoldierImg;
var bg,bgImg;
var frieza,FriezaImg;
var goldenFrieza,goldenFriezaImg;
var soldierGroup;
var FriezaGroup;
var goldenFriezaGroup;
var score = 0;

function preload(){
 gokuImg = loadImage("images/goku.png")
 ssjBluegokuImg = loadImage("images/goku Ssj-Blue.png")

 frieza_SoldierImg = loadImage("images/frieza-soldier.png")

 bgImg = loadImage("images/Background.jpg")

 FriezaImg = loadImage("images/frieza.png")
 goldenFriezaImg = loadImage("images/Golden Frieza.png")

}

function setup(){
createCanvas(displayWidth,displayHeight);
bg = createSprite(0,0,1200,800)
bg.addImage(bgImg)
bg.scale = 1.2;
bg.x = bg.width /2;
//bg.scale = 2;
bg.velocityX = -2;

goku = createSprite(50,650,10,10);
goku.addImage(gokuImg);
goku.scale= 0.2

//frieza_Soldier = createSprite();
//frieza_Soldier.addImage(frieza_SoldierImg);

soldierGroup = new Group()
//console.log(displayHeight)

FriezaGroup = new Group()

goldenFriezaGroup = new Group()

}

function draw(){
  if (bg.x < 0){
    bg.x = bg.width/2;
 
  }

  if(keyDown(UP_ARROW)){
    goku.y = goku.y -5
  }

  if(keyDown(DOWN_ARROW)){
    goku.y = goku.y +5
  }

  if(keyDown(LEFT_ARROW)){
    goku.x = goku.x -5
  }

  if(keyDown(RIGHT_ARROW)){
    if(goku.x<= displayWidth/2 ){
    goku.x = goku.x +5
    console.log(goku.x)
    console.log(bg.width/2)

    }
  }
  if(soldierGroup.isTouching(goku)){
    soldierGroup.destroyEach()
    score = score+10

  }

  if(FriezaGroup.isTouching(goku)){
    goku.addImage(ssjBluegokuImg)

    FriezaGroup.destroyEach()
    score = score+20
     
  }
  if(goldenFriezaGroup.isTouching(goku)){
    goldenFriezaGroup.destroyEach()
    goldenFriezaGroup.velocityX = 0

    textSize(100)
      stroke("Red")
      text("Earth Has Been Saved",960,540)
     
  }

  spawnEnemy();

  spawnFrieza();

  drawSprites();

  textSize(30)
  stroke("white")
  text("Score :" +score, displayWidth-200, 50 )
  


  }

function spawnEnemy(){
  if(score<80){
    if(frameCount%200===0){
      var enemy = createSprite(1920,400,10,10)
      enemy.velocityX = -20
      enemy.y = random(100,900)
      var rand = Math.round(random(1,2))
        enemy.addImage(frieza_SoldierImg)
        enemy.scale = 0.4;
        enemy.lifetime = 650
        soldierGroup.add(enemy)
  }
}

}

function spawnFrieza(){
  if(score===80){
    if(frameCount%200===0){
     frieza = createSprite(1920,400,10,10)
      frieza.velocityX = -30
      frieza.y = random(100,900)
        frieza.addImage(FriezaImg)
        frieza.scale = 0.5;
        frieza.lifetime = 650
        FriezaGroup.add(frieza)
  }
}
if(score===100){
  if(frameCount%200===0){
   goldenFrieza = createSprite(1920,400,10,10)
    goldenFrieza.velocityX = -20
    goldenFrieza.y = random(100,900)
      goldenFrieza.addImage(goldenFriezaImg)
      goldenFrieza.scale = 0.5;
      goldenFrieza.lifetime = 650
      goldenFriezaGroup.add(goldenFrieza)
      
}
}
}