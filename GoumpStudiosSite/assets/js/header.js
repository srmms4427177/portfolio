// =========================
// LOAD HEADER
// =========================
async function loadHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  const path = window.location.pathname;
  const isPages = path.includes("/pages");

  const file = isPages
    ? "../assets/components/header.html"
    : "assets/components/header.html";

  const res = await fetch(file);

  if (!res.ok) {
    console.error("Erro ao carregar header");
    return;
  }

  const data = await res.text();
  header.innerHTML = data;

  initContactLink(); // ativa o comportamento do botão
}

// =========================
// CONTACT NAVIGATION
// =========================
function initContactLink() {
  const contactLink = document.querySelector(".nav-contact");
  if (!contactLink) return;

  contactLink.addEventListener("click", function (e) {
    const isIndex =
      window.location.pathname === "/" ||
      window.location.pathname.includes("index.html");

    if (!isIndex) {
      // vai pro index com âncora
      e.preventDefault();
      window.location.href = "../index.html#contato";
    } else {
      // já está no index → scroll suave
      e.preventDefault();
      const section = document.getElementById("contato");
      if (section) {
        section.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
}

// =========================
// INIT
// =========================
loadHeader();