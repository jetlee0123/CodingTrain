let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 40); //constructorの引数(width,height,radius)
  bubble2 = new Bubble(400, 200, 20);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

//class=設計図
//constructor=instanceを作成(new class)した時点で実行されるメソッド(関数)のこと
//constructorの引数には、new class_nameの引数が入る
class Bubble {
  constructor(unicorn, fluffy, rainbow) { /
    this.x = unicorn;
    this.y = fluffy;
    this.r = rainbow;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r*2);
  }
}

// function show() {
// }

// function move() {
// }