const projects = [
  {
    video: "animerivals.mp4",
    title: "Clash Rivals",
    category: "Anime Strategy Game",
    desc: "Anime Clash Royale style game with units, arenas, strategies and abilities."
  },
  {
    video: "ZakHorror.mp4",
    title: "Zak Horror Game",
    category: "Horror Game",
    desc: "Horror gameplay with atmosphere, tension and immersive mechanics."
  },
  {
    video: "combat-system.mp4",
    title: "Combat System 1",
    category: "Combat System",
    desc: "Hitboxes, cooldowns, damage and responsive gameplay."
  },
  {
    video: "CombatSystem2.mkv",
    title: "Combat System 2",
    category: "Advanced Combat",
    desc: "Advanced combat with improved structure and effects."
  },
  {
    video: "EggHatching.mp4",
    title: "Egg Hatching",
    category: "Pet System",
    desc: "Egg opening system with rewards and animations."
  },
  {
    video: "ForsakenSystem.mp4",
    title: "Forsaken System",
    category: "Gameplay System",
    desc: "Gameplay system inspired by Forsaken."
  },
  {
    video: "Eggscape.mp4",
    title: "Custom Rig System",
    category: "Gameplay System",
    desc: "Custom rig walking system."
  },
  {
    video: "fears.mkv",
    title: "Fears to Fathom System",
    category: "Horror System",
    desc: "Gameplay system inspired by Fears to Fathom."
  },
  {
    video: "booth.mp4",
    title: "Booth System",
    category: "Gameplay System",
    desc: "Booth System inspired by Pls Donate."
  },
  {
    video: "CustomFPS.mp4",
    title: "Custom FPS System",
    category: "Shooter System",
    desc: "Cartoon FPS System."
  },
  {
    video: "backrooms.mp4",
    title: "Backrooms",
    category: "Horror System",
    desc: "This is a Backrooms game."
  }
];

const container = document.getElementById("projects-container");

const modal = document.getElementById("video-modal");
const modalVideo = document.getElementById("project-video");
const modalSource = modalVideo.querySelector("source");
const closeBtn = document.getElementById("close-video");

projects.forEach((project, index) => {
  const card = document.createElement("article");

  card.className = "project-card";
  if (index === 0) card.classList.add("featured");

  card.innerHTML = `
    <div class="video-wrapper">
      <video src="../assets/videos/${project.video}" autoplay muted loop playsinline></video>
    </div>

    <div class="play-circle">
      <span>▶</span>
    </div>

    <div class="project-content">
      <span class="project-category">${project.category}</span>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <span class="play-project">Click to Watch</span>
    </div>
  `;

  card.addEventListener("click", () => {
    modalSource.src = `../assets/videos/${project.video}`;
    modalVideo.load();
    modalVideo.play();
    modal.classList.add("active");
    document.body.classList.add("modal-open");
  });

  container.appendChild(card);
});

function closeVideo() {
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalSource.src = "";
  modalVideo.load();
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

closeBtn.addEventListener("click", closeVideo);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeVideo();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeVideo();
});