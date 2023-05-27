// Generates text to be added to logo.txt file 
function generateMarkdown(data) {
  return `
  ${data.logoText} 
  ${data.textColor}
  ${data.logoShape}
  ${data.shapeColor}
  `;
}

module.exports = generateMarkdown;