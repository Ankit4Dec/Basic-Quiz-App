document.addEventListener("DOMContentLoaded", (e) => {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-button");

  let currentQuestionIndex = 0;
  const questions = [
    {
      question: "What is that capital of France?",
      options: ["New York", "London", "Paris", "Dubai"],
      answer: "Paris",
    },
    {
      question: "What is that capital of India?",
      options: ["New Delhi", "Lucknow", "Kolkata", "Mumbai"],
      answer: "New Delhi",
    }
  ];

  function loadQuestion(questionIndex) {
    const question = questions[questionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("btn", "btn-option");
      button.onclick = () => selectOption(option);
      optionsElement.appendChild(button);
    });
  }

  function selectOption(selected) {
    const question = questions[currentQuestionIndex];
    if (selected === question.answer) {
      alert("Correct");
    } else {
      alert("Wrong");
    }
  }

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      alert("Quiz completed!");
      currentQuestionIndex = 0;
    }
    loadQuestion(currentQuestionIndex);
  });

  loadQuestion(currentQuestionIndex);
});
