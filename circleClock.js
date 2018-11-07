
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  let  h = hour();
  let  m = minute();
  let  s = second();
  
  /*
  fill(255);
  text(h + ":" + m + ":" + s, 300, 300);*/
  
  noFill();
  strokeWeight(30);
  
  stroke(255, 100, 150);
  let secondEnd = map(s, 0, 60, 0, 360); 
  arc(width/2, height/2, width-100, height-100, -90, secondEnd - 90);
  
  stroke(150, 100, 255);
  let minuteEnd = map(m, 0, 60, 0, 360);
  arc(width/2, height/2, width-170, height-170, -90, minuteEnd-90);
  
  stroke(150, 255, 100);
  let hourEnd = map( h, 0, 12, 0, 360);
  arc(width/2, height/2, width-240, height-240, -90, hourEnd-90);
}
