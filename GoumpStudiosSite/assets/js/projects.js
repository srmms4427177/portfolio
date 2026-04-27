const projects = [
  {
    youtubeId: "joh7TkhA3NE",
    title: "Clash Rivals",
    category: "Anime Strategy Game",
    desc: "Anime Clash Royale style game with units, arenas, strategies and abilities."
  },
  {
    youtubeId: "mH73x0CZeRk",
    title: "Zak Horror Game",
    category: "Horror Game",
    desc: "Horror gameplay with atmosphere and immersive mechanics."
  },
  {
    youtubeId: "aLsM2eM1QKY",
    title: "Combat System 1",
    category: "Combat System",
    desc: "Hitboxes, cooldowns, damage and responsive gameplay."
  },
  {
    youtubeId: "Z1MouSz6ExA",
    title: "Combat System 2",
    category: "Advanced Combat",
    desc: "Advanced combat with improved structure and effects."
  },
  {
    youtubeId: "5zs8QwPWUG8",
    title: "Egg Hatching",
    category: "Pet System",
    desc: "Egg opening system with rewards and animations."
  },
  {
    youtubeId: "Zi2M_e6gN2A",
    title: "Forsaken System",
    category: "Gameplay System",
    desc: "Gameplay system inspired by Forsaken."
  },
  {
    youtubeId: "yOOACL-Qwh8",
    title: "Custom Rig System",
    category: "Gameplay System",
    desc: "Custom rig walking system."
  },
  {
    youtubeId: "FDGScEEdeFI",
    title: "Fears to Fathom System",
    category: "Horror System",
    desc: "Gameplay system inspired by Fears to Fathom."
  },
  {
    youtubeId: "FDGScEEdeFI",
    title: "Booth System",
    category: "Gameplay System",
    desc: "Booth System inspired by Pls Donate."
  },
  {
    youtubeId: "hng_2TCFjCM",
    title: "Custom FPS System",
    category: "Shooter System",
    desc: "Cartoon FPS System."
  },
  {
    youtubeId: "1Nnk0q7heGY",
    title: "Backrooms",
    category: "Horror System",
    desc: "This is a Backrooms game."
  }
];

const container = document.getElementById("projects-container");
const modal = document.getElementById("video-modal");
const iframe = document.getElementById("project-video");
const closeBtn = document.getElementById("close-video");

projects.forEach((project, index) => {
  const card = document.createElement("article");

  card.className = "project-card";
  if (index === 0) card.classList.add("featured");

  const hasVideo = project.youtubeId && project.youtubeId.trim() !== "";

  card.innerHTML = `
    <div class="video-wrapper">
      ${
        hasVideo
          ? `<img 
              class="youtube-thumb"
              src="https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg"
              alt="${project.title}"
            >`
          : `<div class="fake-video"></div>`
      }
    </div>

    <div class="play-circle">
      <span>${hasVideo ? "▶" : "Soon"}</span>
    </div>

    <div class="project-content">
      <span class="project-category">${project.category}</span>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <span class="play-project">${hasVideo ? "Click to Watch" : "Video Coming Soon"}</span>
    </div>
  `;

  if (hasVideo) {
    card.addEventListener("click", () => {
      iframe.src = `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`;
      modal.classList.add("active");
      document.body.classList.add("modal-open");
    });
  } else {
    card.classList.add("disabled");
  }

  container.appendChild(card);
});

function closeVideo() {
  iframe.src = "";
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