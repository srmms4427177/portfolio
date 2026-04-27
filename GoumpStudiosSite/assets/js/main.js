const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Mensagem enviada! Depois você pode ligar isso no backend com Node.js.");
});

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((card) => {
  const video = card.querySelector("video");

  card.addEventListener("mouseenter", () => {
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();

  });
});