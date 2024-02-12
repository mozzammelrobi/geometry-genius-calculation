function rhombusCalculation(){
    const d1Input = document.getElementById('diagonal-input-one')
    const d1InputText = d1Input.value ;
    const diagonalOne = parseFloat(d1InputText)
    // console.log(diagonalOne)

    const d2Input = document.getElementById('diagonal-input-two')
    const d2InputText = d2Input.value;
    const diagonalTwo = parseFloat(d2InputText)
    // console.log(diagonalTwo)

    // claculate Rhombus area
    const area = 0.5 * diagonalOne * diagonalTwo;
    // console.log('Rhombus calculation area', area)

    // display the area calculation
    const displayRhombusArea = document.getElementById('rhmobus-span-display')
    displayRhombusArea.innerText = area;
}