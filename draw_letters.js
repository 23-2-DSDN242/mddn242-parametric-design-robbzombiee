/* these are optional special variables which will change the system */
var systemBackgroundColor = "#546bab";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  //stroke(strokeColor);
  //strokeWeight(4);

  // determine parameters for second circle

  //let aLengthX1 = letterData["aLengthX1"];

  let arcStart = letterData["arcStart"];
  let arcEnd = letterData["arcEnd"];

  let circX = letterData["circX"];
  let circY = letterData["circY"];
  let circSize = letterData["circSize"];
  let circStart = letterData["circStart"];
  let circEnd = letterData["circEnd"];

  let rectX = letterData["rectX"];
  let rectY = letterData["rectY"];
  let rectWidth = letterData["rectWidth"];
  let rectHeight = letterData["rectHeight"];
  let rectRotate = letterData["rectRotate"];

  let moonspot1X = letterData["moonspot1X"];
  let moonspot1Y = letterData["moonspot1Y"];
  let moonspot2X = letterData["moonspot2X"];
  let moonspot2Y = letterData["moonspot2Y"];
  let moonspot3X = letterData["moonspot3X"];
  let moonspot3Y = letterData["moonspot3Y"];


  // draw two circles
  // MainShapes
  noStroke()
  fill("#FFFFFF");
  circle(10, 10, 10);
  circle(30, 30, 5);
  circle(50, 12, 8);

  //A//
  angleMode(DEGREES);
  
  noStroke();
  fill("#e5e5e5")
  arc(50,100,50,50,arcStart,arcEnd);

  //moon moonspots
  fill("#c2c2c2")
  circle(moonspot1X, moonspot1Y, 10);
  circle(moonspot2X, moonspot2Y, 5);
  circle(moonspot3X, moonspot3Y, 15);

  fill("#ffe85e");
  arc(circX, circY, circSize, circSize, circStart,circEnd);

push();
fill("#ffe85e");
  translate(rectX,rectY);
  rotate(rectRotate);
  rectMode(CENTER);
  rect(0,0,rectWidth,rectHeight);
pop();

  //SubShapes

  //Default

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

new_letter["arcStart"]  = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
new_letter["arcEnd"]    = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);

new_letter["circX"]    = map(percent, 0, 100, oldObj["circX"], newObj["circX"]);
new_letter["circY"]    = map(percent, 0, 100, oldObj["circY"], newObj["circY"]);
new_letter["circSize"]    = map(percent, 0, 100, oldObj["circSize"], newObj["circSize"]);
new_letter["circStart"]    = map(percent, 0, 100, oldObj["circStart"], newObj["circStart"]);
new_letter["circEnd"]    = map(percent, 0, 100, oldObj["circEnd"], newObj["circEnd"]);

new_letter["rectX"]    = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
new_letter["rectY"]    = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
new_letter["rectWidth"]    = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
new_letter["rectHeight"]    = map(percent, 0, 100, oldObj["rectHeight"], newObj["rectHeight"]);
new_letter["rectRotate"]    = map(percent, 0, 100, oldObj["rectRotate"], newObj["rectRotate"]);

new_letter["moonspot1X"]    = map(percent, 0, 100, oldObj["moonspot1X"], newObj["moonspot1X"]);
new_letter["moonspot1Y"]    = map(percent, 0, 100, oldObj["moonspot1Y"], newObj["moonspot1Y"]);

new_letter["moonspot2X"]    = map(percent, 0, 100, oldObj["moonspot2X"], newObj["moonspot2X"]);
new_letter["moonspot2Y"]    = map(percent, 0, 100, oldObj["moonspot2Y"], newObj["moonspot2Y"]);

new_letter["moonspot3X"]    = map(percent, 0, 100, oldObj["moonspot3X"], newObj["moonspot3X"]);
new_letter["moonspot3Y"]    = map(percent, 0, 100, oldObj["moonspot3Y"], newObj["moonspot3Y"]);



  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
