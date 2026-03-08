function toggleTheme(){

  const body = document.body
  const icon = document.querySelector(".theme-icon")

  if(body.getAttribute("data-theme") === "light"){
    
    body.removeAttribute("data-theme")
    icon.textContent = "🌙"

  } else {

    body.setAttribute("data-theme","light")
    icon.textContent = "☀️"

  }

}
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("fan");
  } else {
    navbar.classList.remove("fan");
  }
});
const username = "NLosse-A";

async function loadProjects() {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
  );
  const repos = await response.json();

  const container = document.getElementById("projects-grid");
  repos
    .filter((repo) => !repo.fork)
    .slice(0, 6);
  repos
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 6)
    .forEach((repo) => {
      const card = document.createElement("div");
      card.className = "card project-card";

      card.innerHTML = `
                <img class="project-image"
                src="https://opengraph.githubassets.com/1/${username}/${repo.name}"
                alt="${repo.name} preview">

                <h3>${repo.name}</h3>

                <p>${repo.description || "No description provided."}</p>

                <a href="${repo.html_url}" target="_blank">
                    View Project
                </a>
            `;

      container.appendChild(card);
    });
}

loadProjects();
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {

  menu.classList.toggle("active");

});
document.querySelectorAll(".nav-card").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});