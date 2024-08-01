
function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  noLoop()

}

function draw() {
  background("#e5e1dc");
  translate(innerWidth / 2, innerHeight / 2 + 300);
  branch(140);
}
function branch(len) {
  push();
  if (len > 4) {
    strokeWeight(map(len, 10, 100, 1, 15));
    stroke(70, 40, 20);
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(random(-20, -30));
    branch(len * random(0.7, 0.9));
    rotate(random(50, 60));
    branch(len * random(0.7, 0.75));
  } else {
    var r = 220 + random(-20, 20);
    var g = 128 + random(-20, 20);
    var b = 170 + random(-20, 20);

    fill(r, g, b);
    noStroke();
    beginShape();
    for (let i = 45; i < 135; i++) {
      let rad = 15;
      let x = rad * cos(i);
      let y = rad * sin(i);
      vertex(x, y);
    }
    endShape();
  }
  pop();
}
