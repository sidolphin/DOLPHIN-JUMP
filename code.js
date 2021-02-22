var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9d91c047-7fee-45af-ab9e-d00cfabc69e4","aefcca34-c2fc-4c8a-bb09-c764f76b847f","ea17c40b-fec9-479d-a76c-422964016a9a","680c9eab-279f-4478-95ae-de278ea5dc9c","a46f291b-e18e-41c5-942c-2d0f04e2c308","2dc53689-9588-479f-b5d4-88888d1e7635","31124340-74b3-465f-b1b7-7a54706ddefb","ae867c4c-9752-4821-bf37-66f4e0ea9295","39420ce6-f0ae-43ca-be3e-4b43b0451161","8db51a85-245a-43e5-a15a-e5adf32d58d2","55a5e702-6c63-46cf-a54f-b388e6030234"],"propsByKey":{"9d91c047-7fee-45af-ab9e-d00cfabc69e4":{"name":"dolphin","sourceUrl":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/9d91c047-7fee-45af-ab9e-d00cfabc69e4.png","frameSize":{"x":512,"y":276},"frameCount":1,"looping":true,"frameDelay":4,"version":"SCdI2.UEoj6DPAZv2b9vOEP5kU2hDt53","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":276},"rootRelativePath":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/9d91c047-7fee-45af-ab9e-d00cfabc69e4.png"},"aefcca34-c2fc-4c8a-bb09-c764f76b847f":{"name":"ground2","sourceUrl":null,"frameSize":{"x":400,"y":385},"frameCount":1,"looping":true,"frameDelay":12,"version":"uixBlONcMJxIamcIMgJHPbrMWFuypwUB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":385},"rootRelativePath":"assets/aefcca34-c2fc-4c8a-bb09-c764f76b847f.png"},"ea17c40b-fec9-479d-a76c-422964016a9a":{"name":"loop.PNG","sourceUrl":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/ea17c40b-fec9-479d-a76c-422964016a9a.png","frameSize":{"x":152,"y":470},"frameCount":1,"looping":true,"frameDelay":4,"version":"ax1KrNqHxTRYomLu16SIk_pHvRk.r_ET","loadedFromSource":true,"saved":true,"sourceSize":{"x":152,"y":470},"rootRelativePath":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/ea17c40b-fec9-479d-a76c-422964016a9a.png"},"680c9eab-279f-4478-95ae-de278ea5dc9c":{"name":"shark","sourceUrl":null,"frameSize":{"x":600,"y":334},"frameCount":1,"looping":true,"frameDelay":12,"version":"hBnLPDibGZVR1CbtrdPGtsKrXlq7adDP","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":334},"rootRelativePath":"assets/680c9eab-279f-4478-95ae-de278ea5dc9c.png"},"a46f291b-e18e-41c5-942c-2d0f04e2c308":{"name":"win","sourceUrl":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/a46f291b-e18e-41c5-942c-2d0f04e2c308.png","frameSize":{"x":418,"y":597},"frameCount":1,"looping":true,"frameDelay":4,"version":"NpfEnmEODypNvFIj.Rq78mi4trQ15GOU","loadedFromSource":true,"saved":true,"sourceSize":{"x":418,"y":597},"rootRelativePath":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/a46f291b-e18e-41c5-942c-2d0f04e2c308.png"},"2dc53689-9588-479f-b5d4-88888d1e7635":{"name":"restart","sourceUrl":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/2dc53689-9588-479f-b5d4-88888d1e7635.png","frameSize":{"x":659,"y":379},"frameCount":1,"looping":true,"frameDelay":4,"version":"InUNAFEMoNrOhf837VL4gkRGNqsqUNBn","loadedFromSource":true,"saved":true,"sourceSize":{"x":659,"y":379},"rootRelativePath":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/2dc53689-9588-479f-b5d4-88888d1e7635.png"},"31124340-74b3-465f-b1b7-7a54706ddefb":{"name":"over","sourceUrl":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/31124340-74b3-465f-b1b7-7a54706ddefb.png","frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"O8RuflnOeA8WN22txuy4iIf.G_UjiWGo","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/31124340-74b3-465f-b1b7-7a54706ddefb.png"},"ae867c4c-9752-4821-bf37-66f4e0ea9295":{"name":"star2","sourceUrl":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/ae867c4c-9752-4821-bf37-66f4e0ea9295.png","frameSize":{"x":497,"y":502},"frameCount":1,"looping":true,"frameDelay":4,"version":"6KBVvK1AgPjWFwyU90g2d9AOCpdgHvEK","loadedFromSource":true,"saved":true,"sourceSize":{"x":497,"y":502},"rootRelativePath":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/ae867c4c-9752-4821-bf37-66f4e0ea9295.png"},"39420ce6-f0ae-43ca-be3e-4b43b0451161":{"name":"star3","sourceUrl":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/39420ce6-f0ae-43ca-be3e-4b43b0451161.png","frameSize":{"x":691,"y":361},"frameCount":1,"looping":true,"frameDelay":4,"version":"p.ZQ1hYa7wWpW82QbWc_ADHVlU0C3Qvn","loadedFromSource":true,"saved":true,"sourceSize":{"x":691,"y":361},"rootRelativePath":"assets/v3/animations/b4NM0LR_QtO3VLBKl6ZJkUtvUwgZofxNsC-W-nm9a6Y/39420ce6-f0ae-43ca-be3e-4b43b0451161.png"},"8db51a85-245a-43e5-a15a-e5adf32d58d2":{"name":"star4","sourceUrl":null,"frameSize":{"x":691,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"xGLkg1RqMex6Grl17DncxS7NPJjj_1xj","loadedFromSource":true,"saved":true,"sourceSize":{"x":691,"y":400},"rootRelativePath":"assets/8db51a85-245a-43e5-a15a-e5adf32d58d2.png"},"55a5e702-6c63-46cf-a54f-b388e6030234":{"name":"star1","sourceUrl":null,"frameSize":{"x":691,"y":361},"frameCount":1,"looping":true,"frameDelay":12,"version":"KHPPJ7oqAg0W7uxfM9DAFOnnNg45fhiN","loadedFromSource":true,"saved":true,"sourceSize":{"x":691,"y":361},"rootRelativePath":"assets/55a5e702-6c63-46cf-a54f-b388e6030234.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState="play";
var score;
var obstacleGroup=createGroup();

var starGroup=createGroup();
var ground = createSprite(200,200,400,400);
ground.setAnimation("ground2");
ground.scale=1.9  ;             
ground.x = ground.width /3;

var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;



var dolphin = createSprite(200,200,40,100);
dolphin .setAnimation("dolphin");


dolphin .setCollider("circle",0,0,170);
dolphin .scale = 0.2;
dolphin.x = 70;

var gameOver = createSprite(250,100);
var restart = createSprite(75,100);       
gameOver.setAnimation("over");
gameOver.scale = 0.5;
restart.setAnimation("restart");
restart.scale = 0.3;
var win = createSprite(200,280);
win.setAnimation("win");
win.scale = 0.4;

gameOver.visible = false;    
restart.visible = false;
win.visible = false;
 var score = 0;

function draw() {
   background("white");  
    
    
//console.log(score)
   if (gameState ==="play"){
     ground.velocityX = -2;
     
      if (ground.x < 200){
        ground.x = ground.width/2;
      }
      
      if(keyDown("space")&&  dolphin.y>= 59 ){
          dolphin.velocityY = -12 ;
 playSound("assets/zapsplat_nature_water_drip_single_small_001_61523.mp3");
 
   
                    
      }
         
     dolphin.velocityY = dolphin.velocityY + 0.8;
     dolphin.collide(invisibleGround);
     
    if(starGroup.isTouching(dolphin)){
        score=score+10;
         playSound("assets/zapsplat_bells_small_hand_bell_ring_in_water_weird_cartoon_tone_001_61906.mp3");
    }
     for(var i=0;i<starGroup.length;i++){
     if(starGroup.get(i).isTouching(dolphin)){
       starGroup.get(i).destroy();
     }
   }
   
   
    spawnstar();
    spawnObstacles();
    
    
    if(dolphin.isTouching(obstacleGroup)){
      gameState ="end";
      playSound( "assets/zapsplat_explosion_big_heavy_distorted_62676.mp3");
    }
  }   
  
  if(gameState==="end"){
    gameOver.visible = true;
    restart.visible = true;
    win.visible = true;
    ground.velocityX = 0;
    dolphin.velocityY = 0;
   
     
    obstacleGroup.setVelocityXEach(0);
    starGroup.setVelocityXEach(0);
    
     obstacleGroup.setLifetimeEach(-1);
    
    starGroup.setLifetimeEach(-1);
  }
  if(mousePressedOver(restart)) {
    reset();
  }
  
  
   drawSprites();
   fill(0)
   textSize(24)
   text("Score: "+ score, 250, 35);
  
}

function reset(){
  gameState = "play";
  
  gameOver.visible = false;
  restart.visible = false;
   win.visible = false;
  obstacleGroup.destroyEach();

  starGroup.destroyEach();
  dolphin.setAnimation("dolphin");
  
  score = 0;
  
}

function spawnObstacles() {
  if(World.frameCount % 70 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -6;
    
  obstacle.y=randomNumber(400,10);
    obstacle.setAnimation("shark");
    obstacle.setCollider("rectangle",0,0,250,150);
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.3; 
    obstacle.lifetime = 70;
    obstacleGroup.add(obstacle)
  }
}

function spawnstar() {
  
   
 if(World.frameCount%60===00){
   
  
  var star=createSprite(400,320,40,10);
  var rand = randomNumber(1,4);
  star.setAnimation("star" + rand);
  
  star.scale=0.09;
  star.velocityX=-5;
  star.lifetime = 204;
  
  star.y=randomNumber(400,10);
  
  
 
  
  star.depth=dolphin.depth;
  
  dolphin.depth=dolphin.depth +1;
  console.log(dolphin.depth);
   console.log(star.depth);
   starGroup.add(star)
   
    
     
 } 
 
  
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
