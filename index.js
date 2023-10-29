let section1W = document.querySelector('.results');
let number1S = document.querySelector('.result-score');
let resultadoR = document.querySelector('.resultado');
let estadoR = document.querySelector('.result-rank');
let resultadoM = document.querySelector('.resultado-ms2');
let reaction = document.querySelector('.reaction1');
let memory = document.querySelector('.memory1');
let verbal = document.querySelector('.verbal1');
let visual = document.querySelector('.visual1');
let buttonContinue = document.querySelector('.button');

window.addEventListener('load', randomValues);

buttonContinue.addEventListener('click', randomValues);

function randomValues() {
  let values = [];
  for (let i = 1; i <= 4; i++) {
    randomNumbers = Math.round(Math.random() * 100);
    values.push(randomNumbers);
  }

  values.forEach((element, index) => {
    switch (index) {
      case 0:
        reaction.innerText = element + ' / 100';
        break;
      case 1:
        memory.innerText = element + ' / 100';
        break;
      case 2:
        verbal.innerText = element + ' / 100';
        break;
      case 3:
        visual.innerText = element + ' / 100';
        break;
      default:
        'Error';
    }
  });

  const media = values.reduce((valuePrevious, currentValue) => {
    return valuePrevious + currentValue;
  });

  let resultadoFinal = Math.round(media / 4);

  if (resultadoFinal >= 75) {
    section1W.classList.add('results');
    number1S.classList.add('result-score');
    section1W.classList.remove('results-warning', 'results-danger');
    number1S.classList.remove('result-score-warning', 'result-score-danger')
    resultadoR.innerText = resultadoFinal;
    estadoR.innerText = 'Great';
    resultadoM.innerText = "You scored higher than 65% of the people who have taken these tests.";
  }

  if (resultadoFinal <= 74 && resultadoFinal > 43) {
    section1W.classList.add('results-warning');
    number1S.classList.add('result-score-warning');
    section1W.classList.remove('results', 'results-danger');
    number1S.classList.remove('result-score', 'result-score-danger');
    resultadoR.innerText = resultadoFinal;
    estadoR.innerText = 'Warning';
    resultadoM.innerText = "You scored lower than 81% of the people who have taken these tests.";

  }

  if (resultadoFinal <= 43) {
    section1W.classList.add('results-danger');
    number1S.classList.add('result-score-danger');
    section1W.classList.remove('results', 'results-warning');
    number1S.classList.remove('result-score', 'result-score-warning');
    resultadoR.innerText = resultadoFinal;
    estadoR.innerText = 'Danger';
    resultadoM.innerText = "You scored lower than 43% of the people who have taken these tests.";
  }

}