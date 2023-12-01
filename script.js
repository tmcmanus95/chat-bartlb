const inputField = document.querySelector("#input-field");
const submitButton = document.querySelector("#submit-button");
const responseArea = document.querySelector("#response-area");

function getQuestion() {
  if (inputField.value) {
    const question = inputField.value;
    const prevQuestion = document.createElement("h4");
    const you = document.createElement("h5");
    prevQuestion.textContent = question;
    you.textContent = "You";
    you.classList.add("you");
    responseArea.appendChild(you);
    responseArea.appendChild(prevQuestion);
    inputField.value = "";
    setTimeout(iWouldPreferNotTo, 300);
  }
}

function iWouldPreferNotTo() {
  const chatBartLB = document.createElement("h5");
  const nah = document.createElement("h4");
  chatBartLB.textContent = "ChatBartLB";
  chatBartLB.classList.add("chatBartLB");
  nah.textContent = "I would prefer not to.";
  responseArea.appendChild(chatBartLB);
  responseArea.appendChild(nah);
}

submitButton.addEventListener("click", getQuestion);
