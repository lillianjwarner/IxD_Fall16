function setup() {
  createCanvas(900,750);
  //colorMode(HSB, 360,100,100);
  //frameRate(.5);

}

function draw(){
  background (0);
  
  
  for(var x = 25; x <= width; x += 50){
    for(var y = 25; y <= height; y += 50){
      stroke(255);
      //fill(200,random(75,100),random(25,100))
      ellipse(x, y, 50, 50);
      stroke(255);
      fill(0);
      ellipse(x, y, 35, 35);
      
      //circles
    }
  }
}
