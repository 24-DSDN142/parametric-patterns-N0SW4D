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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
let bottomBlade = 60;
let topBlade = 30; //less than 40
let point = 10; //more than topblade
let pomelSize = 10;

fill (130,130,130);
strokeWeight(1);

  //blade
  beginShape();
  vertex(80, bottomBlade);
  vertex(80, 50);
  vertex(85, 45);
  vertex(80, 40);
  vertex(80, topBlade);
  vertex(100, point);
  vertex(120, topBlade);
  vertex(120, 60);
  vertex(118, 64);
  vertex(120, 68);
  vertex(120, bottomBlade);
  endShape(CLOSE);

  //crossguard
  fill(252, 187, 88);
  rect(60, bottomBlade, 80, 20);
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
