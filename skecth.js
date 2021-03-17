 var man;
 var bullet;
 let img;
 let ammo = [];
 let button;
 var canvasX = 500;
 var canvasY = 400;
 let sira;



 function setup() {
   createCanvas(canvasX, canvasY);
   this.pos = createVector(10, height - 50);
   img = loadImage('b21super.png');
   img2 = loadImage('bullte.png');
   img3 = loadImage('battle.jpg');
   man = new Person(img);
   button = createButton('restart');
   button.position(canvasX / 2, man.pos.y + 55);
   button.mousePressed(restart);
   for (var i = 0; i < 10100; i = i + 5) {
     ammo[i] = new
     Bullet(img2, random(300, 10000), random(15, (canvasY - 20)));

   }

 }


 

 function restart() {
   man.pos.x = 10;
   man.pos.y = 350;
  


 }


 function draw() {

   if (man.pos.x <= -10 && man.pos.x >= -11000) {
     fill(0, 0, 0);
     rect(0, 0, canvasX, canvasY);
     fill(255, 0, 0);
     textSize(50);
     text('Game Over', canvasX / 3 - 15, 220);
     textSize(50);

   } else {
     background(img3);
 


     if (keyIsDown(65)) {
       man.vel.x = 1;
     }


     if (keyIsDown(68)) {
       man.vel.x = 3;
     }

     if (keyIsDown(83)) {
       man.pos.y += 3;
     }
     if (keyIsDown(87)) {
       man.pos.y -= 3;
     }

     translate(-man.pos.x, 0);

     man.update();
     man.edges();
     man.display();

     if (man.pos.x <= -11000) {
       fill(255, 255, 255)
       rect(man.pos.x, 0, canvasX, canvasY)
       sira = createButton('start');
       sira.position(man.pos.x + 100, man.pos.y - 50);
       sira.mousePressed(restart);
       man.vel.x = 0
       fill(0, 0, 0)
       textSize(25)
       text('Press the spacebar to jump', man.pos.x + 10, 240)
       text('Press the left mouse button to glide', man.pos.x + 90, 160)

     }





     for (var i = 0; i < 10100; i = i + 60) {

       ammo[i].update();
       ammo[i].display();
       man.hit(ammo[i]);

     }
     man.endless(ammo[i]);

   }

 }

