document.addEventListener('DOMContentLoaded', function () {
    
    // ______________________FAQ________________________

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const arrow = this.querySelector(".arrow");

            if (answer.style.display === "block") {
                answer.style.display = "none";
                arrow.style.transform = "rotate(0deg)";
            } else {
                answer.style.display = "block";
                arrow.style.transform = "rotate(90deg)";
            }
        });
    });
});