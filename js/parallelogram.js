function btnPallelogram(){
    /*get base of parallelogram  ----------------------*/
    // console.log('btn test')
    const baseInput = document.getElementById('parallelogram-Base-Input')
    const baseInputText = baseInput.value
    const base = parseFloat(baseInputText)
    // console.log(baseInputText)
    // console.log(base)

    /* get hight of parallelogram ------------------------ */
    const heightInput = document.getElementById('parallelogram-h-input')
    const heightInputText = heightInput.value
    const hight = parseFloat(heightInputText)
    // console.log(hight)


    /* calculate of parallelogram area */
    const area = base * hight
    // console.log('parallelogram area',area)

    /* display area */
    const parallelogramAreaCalSapn = document.getElementById('parallelogramArea')
    parallelogramAreaCalSapn.innerText = area



}