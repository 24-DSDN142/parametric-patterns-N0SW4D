//your parameter variables go here!
let topBlade = 40; //top of the blade for sword 1
let topBladeB = 30; //top of the blade for sword 2
let pomelSize = 15; //size of the pomel on the bottom of the swords
let bottomBlade = 130; //bottom of the blade for sword 1
let bottomBladeB = 130; //bottom of the blade for sword 2
let x = 50; //x value used for the square grid background
let squSize = 50; //square size for the repeating square grid background
let lineW = 0; //line width
let rust = 0; //Controls the rust of the blade for sword 1 which changes colour and adds defects

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
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
  if(col%2){
    fill(15, 117, 64); //if col is even make green
  }
  else{
    fill(157, 174, 191); //else make grey
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

  //stroke weight and colour
  strokeWeight(lineW);
  stroke(0,0,0);

  //sword 1
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
  if (bottomBlade - topBlade > 50){
  
  //left side of blade
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


  //colour based on rust level for right side of blade
  if (rust == 0){
    fill(94,94,94);
  }
  else if (rust >=1 && rust <3 ){
    fill(99, 60, 31);
  }
  else{
    fill(112, 50, 3);
  }

  //right side of blade
  beginShape();
  vertex(75, point);
  vertex(95, topBlade);
  vertex(95, bottomBlade);
  vertex(75,bottomBlade);
  endShape(CLOSE);

  }
  //else if its less than 50 and less than 2 rust level it pierces the canvas
  else if (bottomBlade - topBlade <= 50 && rust < 2){

    //left side of blade
    rect(55,topBlade, 40, bottomBlade-topBlade);

    //colour based on rust right side
    if (rust == 0){
      fill(94,94,94);
    }
    else {
      fill(99, 60, 31);
    }

    //right side of blade
    rect(75,topBlade, 20, bottomBlade-topBlade);

    //slice in canvas 
    strokeWeight(1);
    line(50,topBlade, 100,topBlade);
    strokeWeight(lineW);
  }

  //else if its less than 50 and 2 or greater rust level the blade is shattered
  else if (bottomBlade - topBlade <= 50 && rust >= 2) {
    
    //left side of blade
    beginShape();
    vertex (55, bottomBlade);
    vertex (55, topBlade+5);
    vertex (60, topBlade);
    vertex (62, topBlade+3);
    vertex (67, topBlade);
    vertex (71, topBlade+5);
    vertex (75, topBlade+2);
    vertex (75, bottomBlade);
    endShape(CLOSE);

    //colour based on rust for right side
    if (rust >=1 && rust <3 ){
      fill(99, 60, 31);
    }
    else{
      fill(112, 50, 3);
    }

    //right side of blade
    beginShape();
    vertex(75, topBlade+2);
    vertex(80, topBlade+2);
    vertex(86, topBlade);
    vertex(90, topBlade+3);
    vertex(95, topBlade);
    vertex(95, bottomBlade);
    vertex(75, bottomBlade);
    endShape(CLOSE);
  }
  
  //crossguard
  fill(252, 187, 88); //golden colour
  beginShape();
  vertex(35,bottomBlade);
  vertex(53,bottomBlade+20);
  vertex(97,bottomBlade+20);
  vertex(115,bottomBlade);
  endShape(CLOSE);
  rect (53, bottomBlade-5, 44, 5);
  fill(110, 88, 29);
  //shadows
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
  fill (59, 57, 53); //dark grey colour for blade
  //blade
  //if blade is greater than 50 make it normal
  if (bottomBladeB - topBladeB > 50){
    
    //left side of blade
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
  
    //right side of blade
    fill(38, 37, 33); //slightly darker for shadow
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

    //else have it pierce the canvas
    else{
      //left side of blade
      rect(205,topBladeB, 40, bottomBladeB-topBladeB);
      fill(38, 37, 33);//slightly darker for shadow
      //right side of blade
      rect(225,topBladeB, 20, bottomBladeB-topBladeB);

      //slice in canvas
      strokeWeight(1);
      line(195,topBladeB, 255,topBladeB);
      strokeWeight(lineW);
    }
  
    //crossguard
    fill(173, 0, 0); //red
    beginShape();
    vertex(185,bottomBladeB);
    vertex(203,bottomBladeB+20);
    vertex(247,bottomBladeB+20);
    vertex(265,bottomBladeB);
    endShape(CLOSE);
    rect (203, bottomBladeB-5, 44, 5);
    fill(94, 0, 0);
    //shadows
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
    //only shiney if no rust
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
