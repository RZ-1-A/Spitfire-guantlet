class Bullet {

   constructor(img,bulletx,bullety) {
    let img2 = loadImage('bullte.png')
    this.pos = createVector(bulletx, bullety);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.pic = img2;


  }


  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    fill(25, 150, 30);
    stroke(255);
  
    image(this.pic, this.pos.x, this.pos.y, 15, 4);
  }

//    edges() {
//     if (this.pos.y > height-50) {
//       this.vel.y *= -0;
//       this.pos.y = height-50;
//     }

//  }
}
