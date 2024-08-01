//your parameter variables go here!
let topBlade = 30; //for sword 1
let topBladeB = 40; //for sword 2
let pomelSize = 12;
let bottomBlade = 115;
let bottomBladeB = 115;
let x = 50;
let squSize = 50;
let lineW = 0;
let rust = 0;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(109, 173, 247); //Sky blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
let point = 10; //more than topblade
strokeWeight(0);

//for loop for background
for (let col=1; col<=6; col++){
  //if col is even make green
  //else make grey
  if(col%2){
    fill(15, 117, 64);
  }
  else{
    fill(157, 174, 191);
  }
  //draws alternating pattern
  rect(x*col,0,squSize, squSize);
  //draws grey line
  fill(157, 174, 191);
  rect(x*col, 50, squSize,squSize);
  //draws green line
  fill(15, 117, 64);
  rect(x*col, 100, squSize,squSize);
  //draws grey line
  fill(157, 174, 191);
  rect(x*col, 150, squSize,squSize);
}

  strokeWeight(lineW);
  stroke(0,0,0);

  //blade
  //colour based on rust level
  if (rust == 0){
    fill (130,130,130);
  }
  else if (rust >=1 && rust <3 ){
    fill(133, 99, 73);
  }
  else{
    fill(176, 88, 21);
  }

  //if the blade is longer than 50 its normal
  //else it pierces the canvas
  if (bottomBlade - topBlade > 50){
  beginShape();
  vertex(55, bottomBlade);
  
  //if the blade is to rusty give it a notch
  if (rust > 1){
    vertex(55, topBlade + 10);
    vertex(60, topBlade + 6);
    vertex(55, topBlade + 2);
  }

  vertex(55, topBlade);
  vertex(75, point);
  vertex(75,bottomBlade);
  endShape(CLOSE);

  //colour based on rust level
  if (rust == 0){
    fill(94,94,94);
  }
  else if (rust >=1 && rust <3 ){
    fill(99, 60, 31);
  }
  else{
    fill(112, 50, 3);
  }

  beginShape();
  vertex(75, point);
  vertex(95, topBlade);
  vertex(95, bottomBlade);
  vertex(75,bottomBlade);
  endShape(CLOSE);
  }
  else{
    rect(55,topBlade, 40, bottomBlade-topBlade);
    fill(94,94,94);
    rect(75,topBlade, 20, bottomBlade-topBlade);
    strokeWeight(1);
    line(50,topBlade, 100,topBlade);
    strokeWeight(lineW);
  }
  
  //crossguard
  fill(252, 187, 88);
  beginShape();
  vertex(35,bottomBlade);
  vertex(53,bottomBlade+20);
  vertex(97,bottomBlade+20);
  vertex(115,bottomBlade);
  endShape(CLOSE);
  rect (53, bottomBlade-5, 44, 5);
  fill(110, 88, 29);
  triangle(70, bottomBlade-5, 97, bottomBlade-5, 97, bottomBlade);
  triangle(53, bottomBlade, 97, bottomBlade+20, 115, bottomBlade);

  //handle
  fill(120, 36, 17);
  beginShape();
  vertex(65, bottomBlade+20);
  vertex(65, bottomBlade+40);
  vertex(75, bottomBlade+60);
  vertex(85, bottomBlade+40);
  vertex(85, bottomBlade+20);
  endShape(CLOSE);

  //pomel
  fill(252, 187, 88);
  ellipse(75, bottomBlade+60, pomelSize, pomelSize);



  //Sword 2
  fill (59, 57, 53);
  //blade
  if (bottomBladeB - topBladeB > 50){
    beginShape();
    vertex(205, bottomBladeB);
    //add notch on left side if blade
    vertex(205, 50);
    vertex(210, 45);
    vertex(205, 40);
    vertex(205, topBladeB);
    vertex(225, point);
    vertex(225,bottomBladeB);
    endShape(CLOSE);
  
    fill(38, 37, 33);
    beginShape();
    vertex(225, point);
    vertex(245, topBladeB);
    //add notch on right side if blade
    vertex(245, 60);
    vertex(243, 64);
    vertex(245, 68);
    vertex(245, bottomBladeB);
    vertex(225,bottomBladeB);
    endShape(CLOSE);
    }
    else{
      rect(205,topBladeB, 40, bottomBladeB-topBladeB);
      fill(38, 37, 33);
      rect(225,topBladeB, 20, bottomBladeB-topBladeB);
      strokeWeight(1);
      line(195,topBladeB, 255,topBladeB);
      strokeWeight(lineW);
    }
  
    //crossguard
    fill(173, 0, 0);
    beginShape();
    vertex(185,bottomBladeB);
    vertex(203,bottomBladeB+20);
    vertex(247,bottomBladeB+20);
    vertex(265,bottomBladeB);
    endShape(CLOSE);
    rect (203, bottomBladeB-5, 44, 5);
    fill(94, 0, 0);
    triangle(220, bottomBladeB-5, 247, bottomBladeB-5, 247, bottomBladeB);
    triangle(203, bottomBladeB, 247, bottomBladeB+20, 265, bottomBladeB);
  
    //handle
    fill(38, 37, 33);
    beginShape();
    vertex(215, bottomBladeB+20);
    vertex(215, bottomBladeB+40);
    vertex(225, bottomBladeB+60);
    vertex(235, bottomBladeB+40);
    vertex(235, bottomBladeB+20);
    endShape(CLOSE);
  
    //pomel
    fill(173, 0, 0);
    ellipse(225, bottomBladeB+60, pomelSize, pomelSize);


    //shine
    if (rust < 1){
  fill(256,256,256);
  beginShape();
  vertex (40,75); //(?,?)
  vertex(50,65); //(+10,-10)
  vertex(60,75); //(+10,+10)
  vertex(50,85); //(-10,+10)
  endShape(CLOSE);

  fill(256,256,256);
  beginShape();
  vertex (55,90); //(?,?)
  vertex(60,85); //(+10,-10)
  vertex(65,90); //(+10,+10)
  vertex(60,95); //(-10,+10)
  endShape(CLOSE);
   }
}
