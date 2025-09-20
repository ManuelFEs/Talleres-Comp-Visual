float angle = 0;
float scale = .10;
boolean scaleTop = false;
float pos = width/2;
boolean posTop = false;

void setup() {
  size(600, 600, P3D); // P3D enables 3D rendering
}

void draw() {
  background(30);
  lights(); // Adds default lighting

  translate(pos, height/2, 0); // Move to center
  rotateX(angle);
  rotateY(angle); // Different speed for variation
  
  scale(scale);
  
  fill(0, 150, 255);
  stroke(255);
  box(200); // 3D cube with size 200
  
  if(scaleTop)
    scale += 0.01;
  else
    scale -= 0.01;
   
  if(posTop)
    pos += 3;
  else
    pos -= 3;
  
  if(pos > width)
    posTop = false;
  else if (pos < 5.2)
    posTop = true;
  
  if(scale > 2)
    scaleTop = false;
  else if (scale < 0.2)
    scaleTop = true;
    
    
  angle += 0.02; // Rotation speed
}
