/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3e3e3";
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
  let circSize = letterData["circSize"]

  let rectX = letterData["rectX"]
  let rectY = letterData["rectY"]
  let rectWidth = letterData["rectWidth"]
  let rectLength = letterData["rectLength"]
  let rectRotate = letterData["rectRotate"]
  // draw two circles
  // MainShapes

  //A//
  angleMode(DEGREES);
  
  noStroke();
  fill("#B32E2E")
  arc(50,100,50,50,arcStart,arcEnd);

  fill("#4285F4 ")
  circle(circX, circY, circSize);


  fill("#F4B400");
  push();
  translate(rectX,rectY);
  rotate(rectRotate);
  rectMode(CENTER);
  rect(0, 0, rectWidth, rectLength);
  pop();

  //SubShapes

  //Default

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
//  new_letter["SquareSize"]    = map(percent, 0, 100, oldObj["SquareSize"], newObj["SquareSize"]);

new_letter["arcStart"]  = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
new_letter["arcEnd"]    = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);

new_letter["circX"]    = map(percent, 0, 100, oldObj["circX"], newObj["circX"]);
new_letter["circY"]    = map(percent, 0, 100, oldObj["circY"], newObj["circY"]);
new_letter["circSize"]    = map(percent, 0, 100, oldObj["circSize"], newObj["circSize"]);

new_letter["rectX"]    = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
new_letter["rectY"]    = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
new_letter["rectWidth"]  = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
new_letter["rectLength"]  = map(percent, 0, 100, oldObj["rectLength"], newObj["rectLength"]);
new_letter["rectRotate"]  = map(percent, 0, 100, oldObj["rectRotate"], newObj["rectRotate"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
