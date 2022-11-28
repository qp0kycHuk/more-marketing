
import Inputmask from "inputmask";
import getSupportedEvents from "./functions/getSupportedEvents";

const init = (cover) => {
  const inputs = cover.querySelectorAll('[type="tel"]');
  const im = new Inputmask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
  im.mask(inputs);

  inputs.forEach(element => {
    element.inputmask.option({ onBeforeMask: phoneValueHandler, })
    if(getSupportedEvents().type !== 'touch'){
      element.addEventListener('input', inputHandler)

    }
  });
}

function phoneValueHandler(value) {
  let processedValue = value.replace(/\D/g, '');

  if (isUnCorrect(processedValue)) {
    processedValue = processedValue.substr(1)
  }

  return processedValue;
}


function inputHandler(event) {
  let processedValue = event.target.value.replace(/\D/g, '');

  if (isUnCorrect(processedValue)) {
    processedValue = processedValue.substr(1)
  }

  event.target.value = processedValue
}

function isUnCorrect(value) {
  return (value[0] == '8' && value[1] == '9') || value[0] == '7'
}

export default { init }