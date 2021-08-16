var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c1fa5099-6f96-4651-9066-bf34f2d0cd08","eb0b10e8-0851-410f-94aa-75ce55365bcb","ff9e48ca-e555-481b-a334-b08b75483104","15a30ac7-d036-4e4f-9d23-40fc9e476913","ca2154ec-e892-42e8-8c69-23bb4ba77199","3051cc82-5c1f-4ce5-b474-fb368cfc42e6","f8edf5eb-fe40-4c5c-adc3-131b5cb7fc1d","7f4e13d4-4b30-428e-a22d-54f168705e40","7d035776-afd2-47f0-bdc0-a46bbc1b976c","075e073c-8a89-40c3-9fb9-9b267b488214","f13d6179-cf68-47c2-8aee-d05132b0723e","dde1220e-2d4c-41b0-a0c1-173a3eef44e8","d3adf32a-949a-4a7d-908d-dda3ad19e0bd","ea224579-ae41-49ae-80b4-92b8bc72d8d2","73fe56b1-3cb7-47cf-a495-9f9af1c1da35","9781cb9a-bc7f-426d-81d7-bf10f4dd7bab","e1ac08ed-d5be-4dad-86ed-e72791be2d73","8112c62e-082a-4d96-b614-cb7f825b7698","1aac14ee-e455-4c4b-a9bc-fd9104f3812b"],"propsByKey":{"c1fa5099-6f96-4651-9066-bf34f2d0cd08":{"name":"texture_11_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"N7f424.cKo19tIw4RerusJlQKc9x4_cP","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/c1fa5099-6f96-4651-9066-bf34f2d0cd08.png"},"eb0b10e8-0851-410f-94aa-75ce55365bcb":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"},"ff9e48ca-e555-481b-a334-b08b75483104":{"name":"yas2.png_1","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"DTlqHz9jkL7K2RkkUWYJcJLzUE21ya0E","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/ff9e48ca-e555-481b-a334-b08b75483104.png"},"15a30ac7-d036-4e4f-9d23-40fc9e476913":{"name":"blue_hoodie_hands_in_hoodie_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oHutRKHvMqtbkZzU3Q93li3zFkemFiPq/category_people/blue_hoodie_hands_in_hoodie.png","frameSize":{"x":137,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"oHutRKHvMqtbkZzU3Q93li3zFkemFiPq","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":137,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oHutRKHvMqtbkZzU3Q93li3zFkemFiPq/category_people/blue_hoodie_hands_in_hoodie.png"},"ca2154ec-e892-42e8-8c69-23bb4ba77199":{"name":"blue_dress_arm_behind_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LLfev4GLhYHy2MafwjezPxMUwgyffblr/category_people/blue_dress_arm_behind.png","frameSize":{"x":122,"y":381},"frameCount":1,"looping":true,"frameDelay":2,"version":"LLfev4GLhYHy2MafwjezPxMUwgyffblr","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":381},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LLfev4GLhYHy2MafwjezPxMUwgyffblr/category_people/blue_dress_arm_behind.png"},"3051cc82-5c1f-4ce5-b474-fb368cfc42e6":{"name":"brown_sweater_hand_in_pocket_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png","frameSize":{"x":126,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png"},"f8edf5eb-fe40-4c5c-adc3-131b5cb7fc1d":{"name":"blue_shirt_hands_behind_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MesNu2ZiuhY9vAovUeL3Vzq.MZgpRfKD/category_people/blue_shirt_hands_behind.png","frameSize":{"x":136,"y":386},"frameCount":1,"looping":true,"frameDelay":2,"version":"MesNu2ZiuhY9vAovUeL3Vzq.MZgpRfKD","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":386},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MesNu2ZiuhY9vAovUeL3Vzq.MZgpRfKD/category_people/blue_shirt_hands_behind.png"},"7f4e13d4-4b30-428e-a22d-54f168705e40":{"name":"blue_hoodie_backpack_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png","frameSize":{"x":119,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png"},"7d035776-afd2-47f0-bdc0-a46bbc1b976c":{"name":"blue_skirt_hand_behind_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TSnqXo2lg9WOcKH11dh4Pi63HZpojCbu/category_people/blue_skirt_hand_behind.png","frameSize":{"x":155,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"TSnqXo2lg9WOcKH11dh4Pi63HZpojCbu","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":155,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TSnqXo2lg9WOcKH11dh4Pi63HZpojCbu/category_people/blue_skirt_hand_behind.png"},"075e073c-8a89-40c3-9fb9-9b267b488214":{"name":"brown_sweater_hands_in_pockets_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Y5N4Tt_21f8aWDAE9zR6K7n137NxqecC/category_people/brown_sweater_hands_in_pockets.png","frameSize":{"x":123,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"Y5N4Tt_21f8aWDAE9zR6K7n137NxqecC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":123,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Y5N4Tt_21f8aWDAE9zR6K7n137NxqecC/category_people/brown_sweater_hands_in_pockets.png"},"f13d6179-cf68-47c2-8aee-d05132b0723e":{"name":"green_shirt_one_arm_crossed_1","sourceUrl":"assets/api/v1/animation-library/gamelab/mu4y9wHym.md7dourxlOW2.aYA1vODrc/category_people/green_shirt_one_arm_crossed.png","frameSize":{"x":109,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"mu4y9wHym.md7dourxlOW2.aYA1vODrc","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":109,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mu4y9wHym.md7dourxlOW2.aYA1vODrc/category_people/green_shirt_one_arm_crossed.png"},"dde1220e-2d4c-41b0-a0c1-173a3eef44e8":{"name":"grey_shirt_hand_behind_1","sourceUrl":"assets/api/v1/animation-library/gamelab/x6w_emoXGjnybFknZvuVw8FfklMJ7.4./category_people/grey_shirt_hand_behind.png","frameSize":{"x":155,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"x6w_emoXGjnybFknZvuVw8FfklMJ7.4.","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":155,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/x6w_emoXGjnybFknZvuVw8FfklMJ7.4./category_people/grey_shirt_hand_behind.png"},"d3adf32a-949a-4a7d-908d-dda3ad19e0bd":{"name":"blue_shirt_ball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/to.BxxB_nG2Yh2OClpPzC6VZkmT1m7sQ/category_people/blue_shirt_ball.png","frameSize":{"x":125,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"to.BxxB_nG2Yh2OClpPzC6VZkmT1m7sQ","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/to.BxxB_nG2Yh2OClpPzC6VZkmT1m7sQ/category_people/blue_shirt_ball.png"},"ea224579-ae41-49ae-80b4-92b8bc72d8d2":{"name":"black_haori_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk/category_people/black_haori.png","frameSize":{"x":150,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk/category_people/black_haori.png"},"73fe56b1-3cb7-47cf-a495-9f9af1c1da35":{"name":"726841-200.png_1","sourceUrl":"assets/v3/animations/IJGD_hV0b1Gwgt8sa-vOfWuq-khtVtrD2ONSs8hRXp8/73fe56b1-3cb7-47cf-a495-9f9af1c1da35.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"ejFnGqoqAk1pd6CoMtEQ_dtFe7zSoh3p","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/IJGD_hV0b1Gwgt8sa-vOfWuq-khtVtrD2ONSs8hRXp8/73fe56b1-3cb7-47cf-a495-9f9af1c1da35.png"},"9781cb9a-bc7f-426d-81d7-bf10f4dd7bab":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"u3JnnNqih2qF9ovzLOmZvUoVYPwjcVXG","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9781cb9a-bc7f-426d-81d7-bf10f4dd7bab.png"},"e1ac08ed-d5be-4dad-86ed-e72791be2d73":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"m8jMWptiD8tQUPWQJp019S3acVQTd.kK","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e1ac08ed-d5be-4dad-86ed-e72791be2d73.png"},"8112c62e-082a-4d96-b614-cb7f825b7698":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZhTLFlkDCfRlIXguj78m3gnUGXJ6fL9v","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8112c62e-082a-4d96-b614-cb7f825b7698.png"},"1aac14ee-e455-4c4b-a9bc-fd9104f3812b":{"name":"gradient_15_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7sYC8PslcLJGgu.y2HZfYLRHsCFyPUY1/category_backgrounds/gradient_15.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"7sYC8PslcLJGgu.y2HZfYLRHsCFyPUY1","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7sYC8PslcLJGgu.y2HZfYLRHsCFyPUY1/category_backgrounds/gradient_15.png"}}};
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

var win = createSprite(200, 200);
win.setAnimation("animation_1");
win.scale = 1.5;
win.visible = false;
var lose = createSprite(200, 200);
lose.setAnimation("animation_2");
lose.visible = false;
lose.scale = 1.5;
var chance = 5;
var bg = createSprite(200, 230);
var retry = createSprite(205, 250, 10, 10);
retry.setAnimation("animation_3");
retry.visible = false;
var score = 0;
var superMan = createSprite(26, 32, 200, 200);
var gameState = "PLAY"
superMan.debug = true
superMan.setCollider('circle',0,0,10)
superMan.setAnimation("yas2.png_1");
superMan.scale = 0.18;
bg.setAnimation("gradient_15_1");
var npc1 = createSprite(30, 120, 10, 10);
npc1.setAnimation("blue_hoodie_hands_in_hoodie_1")
npc1.scale = 0.1
var npc2 = createSprite(222, 316, 10, 10);
npc2.setAnimation("blue_dress_arm_behind_1");
npc2.scale = 0.1;
var npc3 = createSprite(222, 64, 10, 10);
npc3.setAnimation("brown_sweater_hand_in_pocket_1");
npc3.scale = 0.1;
var npc4 = createSprite(119, 221, 1, 1);
npc4.setAnimation("blue_shirt_hands_behind_1");
npc4.scale = 0.1;
var npc5 = createSprite(320, 115, 1, 1);
npc5.setAnimation("blue_hoodie_backpack_1");
npc5.scale = 0.1;
var npc6 = createSprite(223, 139, 1, 1);
npc6.setAnimation("blue_skirt_hand_behind_1");
npc6.scale = 0.1;
var npc7 = createSprite(277, 216, 1, 1);
npc7.setAnimation("green_shirt_one_arm_crossed_1");
npc7.scale = 0.1;
var npc8 = createSprite(28, 316, 1, 1);
npc8.setAnimation("grey_shirt_hand_behind_1");
npc8.scale = 0.1;
var rect1 = createSprite(50, 50, 10, 100);
var rect2 = createSprite(100, 50, 100, 10);
var rect3 = createSprite(100, 100, 10, 100);
var rect4 = createSprite(50, 200, 100, 10);
var rect5 = createSprite(150, 200, 10, 100);
var rect6 = createSprite(50, 173, 10, 45);
var rect7 = createSprite(100, 250, 110, 10);
var rect8 = createSprite(200, 100, 100, 10);
var rect9 = createSprite(200, 150, 10, 100);
var rect10 = createSprite(50, 275, 10, 50);
var rect11 = createSprite(50, 350, 100, 10);
var rect12 = createSprite(100, 325, 10, 60);
var rect13 = createSprite(150, 300, 10, 110);
var rect14 = createSprite(200, 350, 100, 10);
var rect15 = createSprite(250, 300, 10, 110);
var rect16 = createSprite(300, 368, 10, 45);
var rect17 = createSprite(250, 50, 10, 110);
var rect18 = createSprite(250, 250, 100, 10);
var rect19 = createSprite(300, 300, 100, 10);
var rect20 = createSprite(350, 323, 10, 55);
var rect21 = createSprite(350, 250, 10, 100);
var rect22 = createSprite(370, 200, 50, 10);
var rect23 = createSprite(350, 150, 100, 10);
var rect24 = createSprite(350, 100, 10, 100);
var rect25 = createSprite(250, 150, 10, 100);
var rect26 = createSprite(325, 200, 50, 10);
var rect27 = createSprite(300, 50, 110, 10);
var boundry1 = createSprite(200, 0, 400, 20);
boundry1.shapeColor = "red";
var boundry2 = createSprite(400, 200, 20, 400);
boundry2.shapeColor = "red";
var boundry3 = createSprite(200, 400, 400, 20);
boundry3.shapeColor = "red";
var boundry4 = createSprite(0, 200, 20, 400);
boundry4.shapeColor = "red";
var exit = createSprite(395, 175, 10, 55);
exit.shapeColor = "yellow";
rect1.shapeColor = "red";
  rect2.shapeColor = "red";
  rect3.shapeColor = "red";
  rect4.shapeColor = "red";
  rect5.shapeColor = "red";
  rect6.shapeColor = "red";
  rect7.shapeColor = "red";
  rect8.shapeColor = "red";
  rect9.shapeColor = "red";
  rect10.shapeColor = "red";
  rect11.shapeColor = "red";
  rect12.shapeColor = "red";
  rect13.shapeColor = "red";
  rect14.shapeColor = "red";
  rect15.shapeColor = "red";
  rect16.shapeColor = "red";
  rect17.shapeColor = "red";
  rect18.shapeColor = "red";
  rect19.shapeColor = "red";
  rect20.shapeColor = "red";
  rect21.shapeColor = "red";
  rect22.shapeColor = "red";
  rect23.shapeColor = "red";
  rect24.shapeColor = "red";
  rect25.shapeColor = "red";
  rect26.shapeColor = "red";
  rect27.shapeColor = "red";
function draw() {
  background(rgb(252, 186, 3));
  createEdgeSprites();
 textSize(22);
 fill("black");
  text("SCORE: "+score, 276, 25);
  superMan.collide(edges);
  if(gameState == "PLAY"){
     if (superMan.isTouching(exit) && score<80) {
       lose.visible = true;
       bg.destroy();
       playSound("assets/category_music/gameover.mp3", false);
     }
     if (superMan.isTouching(exit) && score>=80) {
       console.log("game over")
       win.visible=true;
       bg.destroy()
       playSound("assets/category_loops/vibrant_game_musical_the_end_approaching_loop_1.mp3", false);
     }
     if (keyWentDown("right")) {
    superMan.velocityX = 4;
    superMan.velocityY = 0;
  }
  if (keyWentDown("left")) {
    superMan.velocityX = -4;
    superMan.velocityY = 0;
  }
  if (keyWentDown("up")) {
    superMan.velocityY = -4;
    superMan.velocityX = 0;
  }
  if (keyWentDown("down")) {
    superMan.velocityY = 4;
    superMan.velocityX = 0;
  }
  if(rect7.isTouching(superMan) || rect1.isTouching(superMan) || rect2.isTouching(superMan) || rect3.isTouching(superMan) || rect4.isTouching(superMan) || rect5.isTouching(superMan) || rect6.isTouching(superMan) || rect8.isTouching(superMan) || rect9.isTouching(superMan) || rect10.isTouching(superMan)) {
    chance = chance -1;
    console.log (chance)
     playSound("assets/category_pop/puzzle_game_menu_silly_01.mp3", false);
  
  }
  if(rect11.isTouching(superMan) || rect12.isTouching(superMan) || rect13.isTouching(superMan) || rect14.isTouching(superMan) || rect15.isTouching(superMan) || rect16.isTouching(superMan) || rect17.isTouching(superMan) || rect18.isTouching(superMan) || rect19.isTouching(superMan) || rect20.isTouching(superMan)) {
    chance = chance -1;
    console.log (chance)
  playSound("assets/category_pop/puzzle_game_menu_silly_01.mp3", false);
  }
  if(rect21.isTouching(superMan) || rect22.isTouching(superMan) || rect23.isTouching(superMan) || rect24.isTouching(superMan) || rect25.isTouching(superMan) || rect26.isTouching(superMan) || rect27.isTouching(superMan)) {
    chance = chance -1;
    console.log (chance)
  playSound("assets/category_pop/puzzle_game_menu_silly_01.mp3", false);
  }
  if(chance == 0){
    gameState = "END";
  }
  }
  else if(gameState == "END"){
    //console.log("gameover!");
    retry.visible = true;
    superMan.velocityX = 0
    superMan.velocityY = 0
  }
  if(superMan.isTouching(npc1)){
    destroyNpc(npc1)
    playSound("assets/category_collect/retro_game_coin_pickup_8.mp3", false);
  }
  
  else if(superMan.isTouching(npc2)){
    destroyNpc(npc2)
    playSound("assets/category_collect/retro_game_coin_pickup_8.mp3", false);
  }
  
  else if(superMan.isTouching(npc3)){
    destroyNpc(npc3)
    playSound("assets/category_collect/retro_game_coin_pickup_8.mp3", false);
  }
  
  else if(superMan.isTouching(npc4)){
    destroyNpc(npc4)
    playSound("assets/category_collect/retro_game_coin_pickup_8.mp3", false);
  }
  
  else if(superMan.isTouching(npc5)){
    destroyNpc(npc5)
    playSound("assets/category_collect/retro_game_coin_pickup_8.mp3", false);
  }
  
  else if(superMan.isTouching(npc6)){
     destroyNpc(npc6)
     playSound("assets/category_collect/retro_game_coin_pickup_8.mp3", false);
  }
  
  else if(superMan.isTouching(npc7)){
    destroyNpc(npc7)
    playSound("assets/category_collect/retro_game_coin_pickup_8.mp3", false);
  }
  
  else if(superMan.isTouching(npc8)){
    destroyNpc(npc8)
    playSound("assets/category_collect/retro_game_coin_pickup_8.mp3", false);
  }
  if (mousePressedOver(retry)) {
    reset()
    retry.visible=false
  }
 
  drawSprites();
}
function destroyNpc(npc){
  npc.destroy()
  score=score+10
}
function reset() {
  superMan.x = 30;
  superMan.y = 122;
  chance =3;
  gameState = "PLAY";
  
  
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
