var bob=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(173, 209, mouseX);
  fill(209, 178, 128);
  noStroke(0);
  rect(2,0,60,500);
  rect(100,0,60,500);
  rect(200,0,60,500);
  rect(300,0,60,500);
  noStroke(0);
  fill(240, 141, 141,bob);
  ellipse(mouseX,mouseY,50,50);
if (mouseX>200)
  {bob=0;}
  else
  {bob=bob+5;}

}
