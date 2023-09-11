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

  let aLengthX1 = letterData["aLengthX1"];
  let aLengthY1 = letterData["aLengthY1"];

  let aLengthX2 = letterData["aLengthX2"];
  let aLengthY2 = letterData["aLengthY2"];

  let aLengthX3 = letterData["aLengthX3"];
  let aLengthY3 = letterData["aLengthY3"];





  // draw two circles
  // MainShapes

  //A//
  strokeWeight(4);
  fill("#B32E2E")
// create A//
line(95,150, aLengthX1, aLengthY1); // 95, 150, 50,50
line(50,50,aLengthX2,aLengthY2); //150
line(5,150,aLengthX3,aLengthY3);



  //SubShapes

  //Default


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
//  new_letter["SquareSize"]    = map(percent, 0, 100, oldObj["SquareSize"], newObj["SquareSize"]);

new_letter["aLengthX1"]    = map(percent, 0, 100, oldObj["aLengthX1"], newObj["alengthX1"]);
new_letter["aLengthY1"]    = map(percent, 0, 100, oldObj["aLengthY1"], newObj["alengthY1"]);

new_letter["aLengthX2"]    = map(percent, 0, 100, oldObj["aLengthX2"], newObj["alengthX2"]);
new_letter["aLengthY2"]    = map(percent, 0, 100, oldObj["aLengthY2"], newObj["alengthY2"]);

new_letter["aLengthX3"]    = map(percent, 0, 100, oldObj["aLengthX3"], newObj["alengthX3"]);
new_letter["aLengthY3"]    = map(percent, 0, 100, oldObj["aLengthY3"], newObj["alengthY3"]);





  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
