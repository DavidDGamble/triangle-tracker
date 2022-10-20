//Business Logic

function isTriangle(triSide1, triSide2, triSide3) {
  if (triSide1 + triSide2 <= triSide3 || triSide1 + triSide3 <= triSide2 || triSide3 + triSide2 <= triSide1) {
    return false;
  } else { 
    return true;
  }
}

function figureItOut(triSide1, triSide2, triSide3) {  
  if (triSide1 === triSide2 && triSide1 === triSide3) {
    return "Equilateral";
  } else if (triSide1 === triSide2 || triSide1 === triSide3 || triSide2 === triSide3) {
    return "Isosceles";
  } else if (triSide1 !== triSide2 && triSide2 !== triSide3 && triSide1 !== triSide3) {
    return "Scalene";
  }
}

//User Interface Logic
window.addEventListener("load" , function(){
  let form = document.querySelector("form");
  form.addEventListener("submit" , handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  const side1 = parseInt(document.getElementById("side1").value);
  const side2 = parseInt(document.getElementById("side2").value);
  const side3 = parseInt(document.getElementById("side3").value);
  const test = isTriangle(side1, side2, side3);
  let output;
  if (test) {
    output = figureItOut(side1, side2, side3);
  } else {
    output = "not a triangle";
  }

  document.getElementById("output").innerText = output;
}