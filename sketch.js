const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 100,
  "offsetx": 75,
  "offsety": 50,
  "offset2x": 15,
  "offset2y": 135,
  "offset3x": 135,
  "offset3y": 135,
  "offset4x": 75,
  "offset4y": 10,
  
}

const letterB = {
  "size": 140,
  "offsetx": 75,
  "offsety": 50,
  "offset2x": 15,
  "offset2y": 15,
  "offset3x": 75,
  "offset3y": 140,
  "offset4x": 135,
  "offset4y": 15,
}

const letterC = {
  "size": 105,
  "offsetx": 100,
  "offsety": 75,
  "offset2x": 15,
  "offset2y": 15,
  "offset3x": 15,
  "offset3y": 135,
  "offset4x": 140,
  "offset4y": 75,
}

const backgroundColor  = "##FFFFFF";
const strokeColor      = "#03045e";

const darkBlue  = "#B0e2ef";
const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(0);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offset2x"];
  let pos3y = posy + letterData["offset2y"];
  let pos4x = posx + letterData["offset3x"];
  let pos4y = posy + letterData["offset3y"];
  let pos5x = posx + letterData["offset4x"];
  let pos5y = posy + letterData["offset4y"];
  let pos6x = posx + letterData["offset5x"];
  let pos6y = posy + letterData["offset5y"];

  // draw two circles
  fill(darkBlue);
  square(posx, posy, 150,10);
  print(posx,posy)
  fill("#000000");
  triangle(pos3x,pos3y,pos4x,pos4y,pos5x,pos5y)
  fill(lightBlue);
  ellipse(pos2x, pos2y, size2 - 70, size2 - 80);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
