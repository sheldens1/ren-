  // Logika game
  const button = document.getElementById("mystery-btn");
  const message = document.getElementById("message");
  const secretButton = document.getElementById("secret-btn");

  if (button && message && secretButton) {
      let words = ["Aku", "punya", "sesuatu", "untuk", "kamu", "Reni..."];
      let index = 0;
      message.textContent = ""; // Bersihkan pesan sebelumnya

      button.addEventListener("click", function() {
          if (index < words.length) {
              message.textContent += words[index] + " ";
              index++;
              button.style.left = Math.random() * 80 + "vw";
              button.style.top = Math.random() * 80 + "vh";
          } else {
              button.style.display = "none";
              secretButton.style.display = "block";
          }
      });
  }