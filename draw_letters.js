/* these are optional special variables which will change the system */
var systemBackgroundColor = "#2e4482"; // background color of night sky.
var systemLineColor = "#FFFFFF"; // set system line color to white
var systemBoxColor = "#00c800";

// colour variables
const moonColour = "#e5e5e5";
const moonspotColour = "#c2c2c2";
const starlightColour  = "#ffe85e";
const starColour  = "#FFFFFF";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  // variables
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


  angleMode(DEGREES); // change angle mode to degrees

// stars background
  noStroke()
  fill(starColour); // set stars to white color
  circle(10, 10, 4);
  circle(30, 30, 3);
  circle(50, 12, 5);
  circle(90, 12, 5);
  circle(88, 40, 4);
  circle(15, 50, 4);
  circle(18, 130, 4);
  circle(30, 140, 3);
  circle(60, 30, 4);
  circle(60, 60, 3);
  circle(90, 190, 4);
  circle(40, 185, 4);
  circle(70, 160, 4);
  circle(10, 160, 4);
  circle(11, 100, 4);
  circle(90, 130, 4);

  // end of stars background
  
  // main moon arc
  noStroke();
  fill(moonColour); // set moon arc to grey
  arc(50,100,50,50,arcStart,arcEnd);

  //moonspots circle shapes
  fill(moonspotColour); // set moonspot circles to light grey color
  circle(moonspot1X, moonspot1Y, 10);
  circle(moonspot2X, moonspot2Y, 5);
  circle(moonspot3X, moonspot3Y, 15);

// starlight arc shape
  fill(starlightColour);
  arc(circX, circY, circSize, circSize, circStart,circEnd);

  // starlight rectangle rotation
push();
fill(starlightColour); // set starlight rectangle to yellow
  translate(rectX,rectY); // set  rectangle origin to rectx,recty
  rotate(rectRotate); // rorate rectange to rectrotate value
  rectMode(CENTER); // get center to rectangle
  rect(0,0,rectWidth,rectHeight); // create starlight rectangle
pop();

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
  "ABBABBAB",
  "CAB?CAB?",
  "BAAAAAAA"
]
