//成果物1)ピンボールゲーム
//bubbleをn個出して全部消すまでのタイムを競う
//タイムに応じてランクが決める

// bubblesを個別にバラバラに動かす
// 追加：カウントダウン機能を搭載
// 追加：残り時間によってランクを分ける
// 追加：bubblesを画像に置き換え
// 追加：マウスカーソルを他の画像にする
// 【済】追加：bubblesが空になったらメッセージ

let bubbles = [];
let speedX = 5;
let speedY = 3;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < random(10); i++){
    let x = random(width);
    let y = random(height);
    let r = random(20,30);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++){
    if (bubbles[i].contains(mouseX,mouseY)) {
      bubbles.splice(i,1)
      console.log("length",bubbles.length)
      if (bubbles.length == 0){
        alert('Clear!')
      }
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX,mouseY)){
      bubbles[i].changeColor();
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor() {
    this.brightness = 255;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    if (this.x > width || this.y > height){
      speedX = random(-5);
      speedY = random(-3);
    } else if (this.x < 0 || this.y < 0) {
      speedX = random(5);
      speedY = random(3);
    }
    this.x = this.x + speedX;
    this.y = this.y + speedY;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}