let hearts = [];
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colors = ["#edbba8", "#e66f3c", "#c6b6d5", "#f1d147", "#a4cd98", "#95accb"];
}

function draw() {
  background("#e5e1dc");
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].display();
    hearts[i].fall();
  }

  for (let i = 0; i < hearts.length; i++) {
    if (hearts[i].y > height + 20) {
      hearts.splice(i, 1);
    }
  }
}

function mouseDragged() {
  hearts.push(new Heart(mouseX, mouseY));
}
