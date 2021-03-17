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
   img3 = loadImage('battle.png');
   man = new Person(img);
   button = createButton("Let's Go!");
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
   man.vel.x = 3
   
  


 }


 function draw() {

   
   if (man.pos.x <= -10 && man.pos.x >= -11000) {
     fill(0, 0, 0);
     rect(0, 0, canvasX, canvasY);
     fill(255, 0, 0);
     textSize(50);
     text('New Plane?', canvasX / 3 - 15, 220);
     textSize(50);

   }else if (man.pos.x<= -110000){
  fill(0,0,0)
rect(0,0,canvasX,canvasY)
    fill(255, 0, 0);
     textSize(50);
     text('The Battle Is Lost', canvasX / 5 - 15, 220);
     textSize(50);
  man.vel.y=0
  man.vel.x=0
      
}  else {
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
     // man.planes(canvasX,canvasY);

     if (man.pos.x <= -11000 && man.pos.x >= -101000) {
       fill(255, 255, 255)
       rect(man.pos.x, 0, canvasX, canvasY)
       sira = createButton('start');
       sira.position(man.pos.x + 100, man.pos.y - 50);
       sira.mousePressed(restart);
       man.vel.x = 0
       fill(0, 0, 0)
       textSize(25)
       text('W and S is up and down', man.pos.x + 10, 240)
       text('A is slow down, D is speed up', man.pos.x + 90, 160)

     }





     for (var i = 0; i < 10100; i = i + 60) {

       ammo[i].update();
       ammo[i].display();
       man.hit(ammo[i]);

     }
     man.endless(ammo[i]);

   }

 }
