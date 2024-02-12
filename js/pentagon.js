function pentagonAreaCalculation(){
    const pentagonInputP = document.getElementById('pantagn-input-p')
    const pentagonInputPText = pentagonInputP.value 
    const pInput = parseFloat(pentagonInputPText)
    console.log(pInput)

    const pentagonInputA = document.getElementById('pantagn-input-a')
    const pentagonInputAText = pentagonInputA.value;
    const aInput = parseFloat(pentagonInputAText)
    console.log(aInput)

    // calculation 
    const area = 0.5 * pInput * aInput
    console.log('pentagon aea',area)

    // display
    const pentagonAreaDisplay = document.getElementById('pentagon-displaly')
    pentagonAreaDisplay.innerText = area
}