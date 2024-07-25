//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(109, 173, 247); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
let bottomBlade = 80; //60 and above
let topBlade = 30; //less than 40
let point = 10; //more than topblade
let pomelSize = 20;

fill(256,256,256);
stroke(256, 256, 256);
  beginShape()
  vertex(50,0);
  vertex(50,200);
  vertex(0,200);
  vertex(0,0);
  endShape(CLOSE);

  beginShape();
  vertex(100,200);
  vertex(200,100);
  vertex(200,200);
  endShape(CLOSE);

  strokeWeight(1);
  fill (130,130,130);
  stroke(0,0,0);

  //blade
  if (bottomBlade - topBlade > 50){
  beginShape();
  vertex(80, bottomBlade);
  //add notch on left side if blade
  vertex(80, 50);
  vertex(85, 45);
  vertex(80, 40);
  vertex(80, topBlade);
  vertex(100, point);
  vertex(120, topBlade);
  //add notch on right side if blade
  vertex(120, 60);
  vertex(118, 64);
  vertex(120, 68);
  vertex(120, bottomBlade);
  endShape(CLOSE);
  }
  else{
    rect(80,topBlade, 40, bottomBlade-topBlade);
    line(70,topBlade, 130,topBlade);
  }
  


  //crossguard
  fill(252, 187, 88);
  beginShape();
  vertex(60,bottomBlade);
  vertex(78,bottomBlade+20);
  vertex(122,bottomBlade+20);
  vertex(140,bottomBlade);
  endShape(CLOSE);
  rect (78, bottomBlade-5, 44, 5);

  //handle
  fill(120, 36, 17);
  //rect(90, bottomBlade+20, 20, 40);
  beginShape();
  vertex(90, bottomBlade+20);
  vertex(90, bottomBlade+40);
  vertex(100, bottomBlade+60);
  vertex(110, bottomBlade+40);
  vertex(110, bottomBlade+20);
  endShape(CLOSE);

  //pomel
  fill(252, 187, 88);
  ellipse(100, bottomBlade+60, pomelSize, pomelSize);
}
