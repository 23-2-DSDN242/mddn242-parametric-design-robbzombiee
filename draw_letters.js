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

  let imageX = letterData["imageX"];
  let imageY = letterData["imageY"];

  let circX = letterData["circX"];
  let circY = letterData["circY"];
  let circSize = letterData["circSize"]

  let rectX = letterData["rectX"]
  let rectY = letterData["rectY"]
  let rectWidth = letterData["rectWidth"]
  let rectHeight = letterData["rectHeight"]
  let rectRotate = letterData["rectRotate"]

  let triX = letterData["triX"]
  let triY = letterData["triY"]
  let triHeight = letterData["triHeight"]
  let triWidth = letterData["triWidth"]


  // draw two circles
  // MainShapes
  noStroke()
  fill("#ffe234");
  circle(10, 10, 10);
  rect(50,5,10,10);

  //A//
  angleMode(DEGREES);
  
  noStroke();
  fill("#e5e5e5")
  arc(50,100,50,50,arcStart,arcEnd);

  fill("#c2c2c2")
  circle(34, 100, 10);
  circle(50, 110, 5);

  fill("#ffe234");
  circle(circX, circY, circSize);

push();
fill("#ffe234");
  translate(rectX,rectY);
  rotate(rectRotate);
  rectMode(CENTER);
  rect(0,0,rectWidth,rectHeight);
pop();


triangle(100 + triX ,20 + triY+ triHeight,90 + triX -triWidth,40 + triY ,110 + triX+triWidth,40 + triY);
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

new_letter["rectX"]    = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
new_letter["rectY"]    = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
new_letter["rectWidth"]    = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
new_letter["rectHeight"]    = map(percent, 0, 100, oldObj["rectHeight"], newObj["rectHeight"]);
new_letter["rectRotate"]    = map(percent, 0, 100, oldObj["rectRotate"], newObj["rectRotate"]);

new_letter["triX"]    = map(percent, 0, 100, oldObj["triX"], newObj["triX"]);
new_letter["triY"]    = map(percent, 0, 100, oldObj["triY"], newObj["triY"]);
new_letter["triHeight"]    = map(percent, 0, 100, oldObj["triHeight"], newObj["triHeight"]);
new_letter["triWidth"]    = map(percent, 0, 100, oldObj["triWidth"], newObj["triWidth"]);

new_letter["imageX"]    = map(percent, 0, 100, oldObj["imageX"], newObj["imageX"]);
new_letter["imageY"]    = map(percent, 0, 100, oldObj["imageY"], newObj["imageY"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
