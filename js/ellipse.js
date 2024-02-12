function ellipseAreaColculation(){
    const ellipseInputA = document.getElementById('ellipse-input-a')
    const ellipseInputAtext = ellipseInputA.value 
    const aInput = parseFloat(ellipseInputAtext)
    console.log(aInput)

    // get second input
    // const ellipseInputB = document.getElementById('ellipse-input-b'){
    //     const bInputText = ellipseInputB.value
    //     const bValue = parseFloat(bInputText)
    //     console.log(bValue)
    // }

    const inputOne = document.getElementById('ellipse-input-b')
    const inputOneText = inputOne.value
    const valueTwo = parseFloat(inputOneText)
    console.log( valueTwo)

    // ellipse area calculation
    const area = 3.14159265359 * aInput * valueTwo;
    console.log('ellipse area value', area)
    
    // display ellipse area calculation
    const ellipseAreaDisplay = document.getElementById('ellipse-displaly')
    ellipseAreaDisplay.innerText = area
}