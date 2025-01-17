function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Provide feedback based on the user's answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else if (userAnswer) {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
