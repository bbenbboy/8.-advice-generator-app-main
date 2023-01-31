"user strict";
const adviceNum = document.querySelector(".advice-num");
const adviceContents = document.querySelector(".advice");
const container = document.querySelector(".container");

const renderAdvice = function (adviceData) {
  const html = `<div class="card-advice">
    <p>Advice #<span class="advice-num">${adviceData.id}</span></p>
    <h2>"<span class="advice">${adviceData.advice}</span>"</h2>
  </div> 
  <div class="divider">
          <img src="/images/pattern-divider-desktop.svg" alt="" />
        </div>
        <div class="image-container">
          <div class="circle">
            <img src="/images/icon-dice.svg" alt="" />
          </div>
        </div>`;
  container.insertAdjacentHTML("beforeend", html);
};

const getAdviceData = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      //   console.log(response);
      return response.json();
    })
    .then((adviceData) => {
      //   console.log(adviceData);
      const adviceObject = adviceData.slip;
      //   console.log(adviceObject);
      renderAdvice(adviceObject);
    })
    .catch((err) => {
      console.log(err);
    });
};
getAdviceData();
