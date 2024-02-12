/**
 * Objective: get base, height of a triangle. Calculate the area by usiing the provided formula. and then display
 * step -1: get base value of the triangel
 * spep-2: added and id in the base input field
 * step-3: use getElementId to access the input field
 * step-4: get value from the input field. (value in string now )
 * step-5: convert the value to a number. use perseFloat
 * 
 */


function calculateTriangleArea(){
    // get triangle base value
   const triangleBaseInput = document.getElementById('triangle-base')
   const triangleBasetext = triangleBaseInput.value;
   const base = parseFloat(triangleBasetext)
   console.log( base)

//    get triangle height value
    const triangelHieghtInput = document.getElementById('triangle-height')
    const triangelHeightText = triangelHieghtInput.value;
    const heihgt = parseFloat(triangelHeightText)
    console.log(  heihgt)

    //  calculate triangle area
    const area = 0.5 * base * heihgt;
    console.log('area of the triangle', area)

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area

}