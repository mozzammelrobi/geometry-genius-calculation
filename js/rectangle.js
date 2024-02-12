

function rectangleAreaCalculate(){
    // get rectangle length
   const lengthInput = document.getElementById('rectangle-length')
//    console.log(lengthInput.value)
    const lengthText = lengthInput.value 
    const length = parseFloat(lengthText)
    console.log(length)

    // get rectangle width
    const widthInput = document.getElementById('rectangle-width')
    // console.log(widthInput)
    const widthText = widthInput.value
    const width = parseFloat(widthText)
    console.log(width)

    // calcutate rectangle area
    const area = length * width;
    console.log(area)

    // display rectangle area 
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area
}