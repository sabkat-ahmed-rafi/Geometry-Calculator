function getInput(idName) {
    let userInput = document.getElementById(idName);
    let value = userInput.value;
    let newValue = parseFloat(value);
    return newValue;
}

function setResult(elementPlace, areaResult) {
    let element = document.getElementById(elementPlace);
    element.innerText = areaResult;
}

// Triangle Button code is implemented here 
document.getElementById("triangle-button").addEventListener("click", function(){
    let triangleBase = getInput("triangle-base");
    let triangleHeight = getInput("triangle-height");
    let triangleArea = 0.5 * triangleBase * triangleHeight; 
    setResult("triangle-result", triangleArea)
})
// Rectangle Button code si implemented here 
document.getElementById("rectangle-button").addEventListener("click", function(){
    let rectangleBase = getInput("rectangle-base");
    let rectangleHeight = getInput("rectangle-height");
    let rectangleArea = rectangleBase * rectangleHeight; 
    setResult("rectangle-result", rectangleArea)
})
// Parallelogram Button code is implemented here 
document.getElementById("parallelogram-button").addEventListener("click", function(){
    let parallelogramBase = getInput("parallelogram-base");
    let parallelogramHeight = getInput("parallelogram-height");
    let parallelogramArea = parallelogramBase * parallelogramHeight; 
    setResult("parallelogram-result", parallelogramArea)
})
// Rhombus Button code is implemented here 
document.getElementById("rhombus-button").addEventListener("click", function(){
    let rhombusBase = getInput("rhombus-base");
    let rhombusHeight = getInput("rhombus-height");
    let rhombusArea = 0.5 * rhombusBase * rhombusHeight; 
    setResult("rhombus-result", rhombusArea)
})
// Pentagon Button code is implemented here 
document.getElementById("pentagon-button").addEventListener("click", function(){
    let pentagonBase = getInput("pentagon-base");
    let pentagonHeight = getInput("pentagon-height");
    let pentagonArea = 0.5 * pentagonBase * pentagonHeight; 
    setResult("pentagon-result", pentagonArea)
})
// Ellipse Button code is implemented here 
document.getElementById("ellipse-button").addEventListener("click", function(){
    let ellipseBase = getInput("ellipse-base");
    let ellipseHeight = getInput("ellipse-height");
    let ellipseArea = 3.14 * ellipseBase * ellipseHeight; 
    setResult("ellipse-result", ellipseArea)
})