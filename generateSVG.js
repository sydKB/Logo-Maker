// Generates text to be added to logo.txt file 
function generateSVG(data) {
  //var shapeName = JSON.parse(JSON.stringify(data.logoShape).toLowerCase());
  var shapeText;

  if(`${data.logoShape}` === "Circle") {
    shapeText = `<circle cx="180" cy="180" r="80" fill="${data.shapeColor}" />`;
  } else if (`${data.logoShape}` === "Triangle") {
    shapeText = `<polygon points="180,50 274,214 86,214" fill="${data.shapeColor}" />`;
  } else if (`${data.logoShape}` === "Square") {
    shapeText = `<rect x="100" y="100" width="160" height="160" fill="${data.shapeColor}" />`;
  } else {
    console.error("Must select a shape");
  }

  return `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 

    ${shapeText}

    <text x="180" y="180" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>

  </svg>
  `
  ;
}

module.exports = generateSVG;