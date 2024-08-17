var questions = [
    
    {
    text: "I feel sad most of the day, almost every day.",
    answer: 1
    },
    {
    text: "I have trouble falling asleep, staying asleep, or sleeping too much.",
    answer: 1
    },
    {
    text: "I have lost interest in activities I once enjoyed.",
    answer: 1
    },
    {
    text: "I have trouble concentrating, making decisions, or remembering things.",
    answer: 1
    },
    {
    text: "I feel hopeless or pessimistic.",
    answer: 1
    },
    {
    text: "I have thoughts of death or suicide.",
    answer: 1
    },
    {
    text: "I feel tired or lack energy.",
    answer: 1
    },
    {
    text: "I feel worthless or guilty.",
    answer: 1
    },
    {
    text: "I have experienced a major loss or change recently.",
    answer: 0
    },
    {
    text: "I have been feeling anxious or worried.",
    answer: 0
    }
   ];
   
   var score = 0;
   
   // Function to display stress level result
function displayResult(stressLevel) {
    const resultSection = document.getElementById("result-section");

    let resultMessage = "";

    if (stressLevel < 3) {
        resultMessage = "Your stress level is low. Keep up the good work!";
    } else if (stressLevel >= 3 && stressLevel <= 6) {
        resultMessage = "You are experiencing moderate stress. Consider taking breaks and practicing relaxation techniques.";
    } else {
        resultMessage = "Your stress level is high. It's important to prioritize self-care and seek support if needed.";
    }

    resultSection.innerHTML = `<h2>Your Stress Level: ${stressLevel.toFixed(2)}</h2>`;
    resultSection.innerHTML += `<p>${resultMessage}</p>`;
}

// Call functions as needed
generateQuiz(); // Call this function when the page loads

function startQuiz() {
    document.getElementById("quiz").style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    document.getElementById("question").innerText = questions[0].text;
}

function submitAnswer(answer) {
    if (answer == questions[0].answer) {
        score++;
    }

    questions.shift();

    if (questions.length > 0) {
        displayQuestion();
    } else {
        const scoreElement = document.getElementById("score");
        scoreElement.innerText = "";

        // Create a button for "Keep Doing Better"
        const keepDoingBetterButton = document.createElement("button");
        keepDoingBetterButton.innerText = "Keep Doing Better";
        keepDoingBetterButton.onclick = function () {
            // Redirect to home.html when the button is clicked
            window.location.href = "home.html";
        };

        // Append the button to the score element
        scoreElement.appendChild(keepDoingBetterButton);
    }
}

