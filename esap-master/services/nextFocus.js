let exports = {};

const inputQuery = "input[type='text']:not([disabled])" + ",textarea:not([disabled])" + ",input[type='number']:not([disabled])" ;

exports.nextInput = (event) => {
  const inputs = Array.from(
  document.querySelectorAll(inputQuery));

  const index = inputs.indexOf(event.target);

  if (index < inputs.length && inputs[index + 1]) {
    inputs[index + 1].focus();
    document.getElementById("btnFocusOut").click();
  }
};

exports.getIndex = (event) => {
  const inputs = Array.from(
  document.querySelectorAll(inputQuery));

  let nextIndex = inputs.indexOf(event.target)
 
  var delayInMilliseconds = 0.5;
  setTimeout(() => {
    nextDropDown(nextIndex);
  }, delayInMilliseconds);

  return inputs.indexOf(event.target);
};

function nextDropDown(nextIndex) {
  const inputs = Array.from(
    document.querySelectorAll(inputQuery));
  
    const index = nextIndex;
    let currenctIndex = index;
  
    if (index < inputs.length && inputs[index + 1]) {
      inputs[index + 1].focus();
      currenctIndex = index;
     
      document.getElementById("btnFocusOut").click();
      return currenctIndex;
    }
}

export default exports;