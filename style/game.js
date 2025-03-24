const kataBenar = "hati";
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const resultMessage = document.getElementById("resultMessage");
const nextButton = document.getElementById("nextButton");

checkButton.addEventListener("click", () => {
    let jawaban = guessInput.value.toLowerCase();
    
    if (jawaban === kataBenar) {
        resultMessage.textContent = "Selamat! Jawaban benar!";
        resultMessage.style.color = "green";
        resultMessage.classList.add("blink");

        document.body.style.backgroundColor = "#c3f7c3";
        setTimeout(() => {
            document.body.style.backgroundColor = "#f4f4f4";
        }, 1000);

        // Tambahkan efek daun jatuh
        for (let i = 0; i < 10; i++) {
            createFallingLeaf();
        }

        setTimeout(() => {
            nextButton.classList.remove("hidden");
        }, 2000); 
    } else {
        resultMessage.textContent = "Coba lagi!";
        resultMessage.style.color = "red";

        guessInput.classList.add("shake");
        setTimeout(() => {
            guessInput.classList.remove("shake");
        }, 300);
    }
});

nextButton.addEventListener("click", () => {
    window.location.href = "secret.html";
});

// Fungsi untuk membuat efek daun jatuh
function createFallingLeaf() {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");
    document.body.appendChild(leaf);

    let startX = Math.random() * window.innerWidth;
    let duration = Math.random() * 3 + 2;

    leaf.style.left = '${startX}px';
    leaf.style.animation = 'fall ${duration}s linear';

    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}