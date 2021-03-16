 var man;
 var bullet;
 let img;
 let ammo = [];
 let button;
var canvasX = 500;
var canvasY = 400;



 function setup() {
   createCanvas(canvasX, canvasY);
   this.pos = createVector(10, height - 50);
   img = loadImage('b21super.png');
   img2 = loadImage('bullte.png');
   img3 = loadImage('battle.jpg');
   man = new Person(img);
   button = createButton('restart');
   button.position(canvasX/2, man.pos.y + 55);
   button.mousePressed(restart);
   for (var i = 0; i < 10100; i = i + 5) {
     ammo[i] = new
     Bullet(img2, random(300, 10000), random(10, 380));
   }


 }


 function keyPressed() {
   if (key == ' ') {
     let jump = createVector(0, -4);
     man.applyForce(jump)
   }
 }

 function restart() {
   man.pos.x = 10;
   man.pos.y = 350
   

 }

 function draw() {

   if (man.pos.x <= -10) {
     fill(0, 0, 0);
     rect(0, 0, canvasX, canvasY);
     fill(255, 0, 0);
     textSize(50);
     text('Game Over', canvasX/3-15, 220);
     textSize(50);

   } else {
     background(img3);
     if (mouseIsPressed) {
       man.vel.y = 0.04;


     } else {
       var gravity = createVector(0, 0.1);
       man.applyForce(gravity);

     }


     translate(-man.pos.x, 0);


    // text(man.pos.x, man.pos.x , man.pos.y )

     man.update();
     man.edges();
     man.display();

     for (var i = 0; i < 10100; i = i + 60) {

       ammo[i].update();
       ammo[i].display();
       //  ammo[i].edges();
       man.hit(ammo[i]);

     }
    man.endless(ammo[i]);
     
   }

 }
