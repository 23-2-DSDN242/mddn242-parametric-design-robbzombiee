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
  let size2 = letterData["size"];
  let size3 = letterData["size"];
  let pos2x = 75  + letterData["offsetx"];
  let pos2y = 180 + letterData["offsety"];

  // draw two circles
  noStroke();
  fill(darkBlue);
  square(50, 150, 75);
  fill(lightBlue);
  ellipse(pos2x, pos2y, size2, size2);
  square(90, 200, size3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
