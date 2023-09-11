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
  let size = letterData["size"];
  let aposx1 = letterData["aposx1"]
  let aposx2 = letterData["aposx2"]


  // draw two circles
  fill(darkBlue);
  square(0, 0, size);

  //A //
  
  strokeWeight(2);
  line(50 + aposx1,0,0 + aposx2,200);
  line(50,0,100,200);
  

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["aposx1"]    = map(percent, 0, 100, oldObj["aposx1"], newObj["aposx1"]);
  new_letter["aposx2"]    = map(percent, 0, 100, oldObj["aposx2"], newObj["aposx2"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
