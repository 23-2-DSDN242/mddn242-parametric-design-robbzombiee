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
  let SquareSize = letterData["SquareSize"];
  let SquareX = letterData["SquareX"]
  let SquareY = letterData["SquareY"]

  let RectangleX = letterData["RectangleX"]
  let RectangleY = letterData["RectangleY"]
  let RectangleWidth = letterData["RectangleWidth"]
  let RectangleHeight = letterData["RectangleHeight"]


  // draw two circles
  // MainShapes
  noStroke();
  fill("#B32E2E")
  rect(RectangleX, RectangleY, RectangleWidth,RectangleHeight);
  
  fill(darkBlue);
  square(SquareX, SquareY, SquareSize);


  //SubShapes

  //Default

  //A//

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["SquareSize"]    = map(percent, 0, 100, oldObj["SquareSize"], newObj["SquareSize"]);
  new_letter["SquareX"]    = map(percent, 0, 100, oldObj["SquareX"], newObj["SquareX"]);
  new_letter["SquareY"]    = map(percent, 0, 100, oldObj["SquareY"], newObj["SquareY"]);

  new_letter["RectangleX"]    = map(percent, 0, 100, oldObj["RectangleX"], newObj["RectangleX"]);
  new_letter["RectangleY"]    = map(percent, 0, 100, oldObj["RectangleY"], newObj["RectangleY"]);
  new_letter["RectangleWidth"]    = map(percent, 0, 100, oldObj["RectangleWidth"], newObj["RectangleWidth"]);
  new_letter["RectangleHeight"]    = map(percent, 0, 100, oldObj["RectangleHeight"], newObj["RectangleHeight"]);


  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
