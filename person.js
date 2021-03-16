
function Person(img) {
  img = loadImage('spitfiregood.png')
  this.pos = createVector(10, height - 50);
  this.vel = createVector(3, 0);
  this.acc = createVector(0, 0);
  this.pic = img;
  var ded = 0;
  var highScore = 500;


  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }


  this.display = function() {
    fill(25, 150, 30);
    stroke(255);
    image(this.pic, this.pos.x + 20, this.pos.y - 9, 100, 60);
    textSize(18)
    text('Deaths: ' + ded, this.pos.x + (canvasX-100), 20)
    var score = this.pos.x-300;

       if (score >= 9745){  
 score = (highScore + score)
      }
    if (score > highScore) {highScore=score}
    text('Score: '+score,this.pos.x+(canvasX-120), 40)
     text('High Score: '+highScore,this.pos.x+(canvasX-160), 60)

      }

  this.hit = function(ammo) {
    if ((ammo.pos.x >= (this.pos.x + 5) && ammo.pos.x <= (this.pos.x + 100)) && (ammo.pos.y >= (this.pos.y + 3) && ammo.pos.y <= (this.pos.y + 50))) {
      ammo.pos.y = -400;

      this.pos.x = (0 - 11000);
      ded++;
    }



  }
  this.endless = function(ammo) {
    
    if (this.pos.x >= 10050) {
      this.pos.x = 10;
     
    }
  }
  this.edges = function() {
    if (this.pos.y > height - 50) {
      this.vel.y *= 0;
      this.pos.y = height - 50;
    }

    if (this.pos.y < 10) {
      this.vel.y = 0;
      this.pos.y = 10;
    }
  }



}
