/*
1. What is an array?(number and string)
2. Make an array of objects(literal objects)
3. Constructor function to make objects
4. push() and splice()
5. Objects that you interact with (clicking on an object)
6. Objects that talk to each other (nested loop)
*/

var words = ["rainbow","heart","purple","friendship","love"];

var index = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  text(words[index],12,200);
}

function mousePressed() {
  index = index + 1;

  if (index == words.length) {
    index = 0;
  }
}