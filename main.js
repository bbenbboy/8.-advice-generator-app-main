"user strict";
const adviceNum = document.querySelector(".advice-num");
const adviceContents = document.querySelector(".advice");
const container = document.querySelector(".container");
const btn = document.querySelector(".circle");

// const renderAdvice = function (adviceData) {
//   const html = `<div class="card-advice">
//     <p>Advice #<span class="advice-num">${adviceData.id}</span></p>
//     <h2>"<span class="advice">${adviceData.advice}</span>"</h2>
//   </div> `;
//   container.insertAdjacentHTML("beforebegin", html);
// };

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
      adviceNum.textContent = `${adviceObject.id}`;
      adviceContents.textContent = `"${adviceObject.advice}"`;
    })
    .catch((err) => {
      console.log(err);
    });
};
getAdviceData();

btn.addEventListener("click", () => {
  getAdviceData();
});
