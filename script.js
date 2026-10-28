window.APP_CONFIG = {
    API_URL: "API_URL_EMPTY",
    API_KEY: "API_KEY_EMPTY"
}
function buildAccordion(containerId, prefix, items) {
    const container = document.querySelector(`#${containerId}`);
    if (!container) {
        console.error(`Élément #${containerId} introuvable dans la page.`);
        return;
    }

    let htmlContent = "";
    items.forEach((item, i) => {
        htmlContent += `
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#${prefix}${i}" aria-expanded="false" aria-controls="${prefix}${i}">
              ${item.name}
            </button>
          </h2>
          <div id="${prefix}${i}" class="accordion-collapse collapse" data-bs-parent="#${containerId}">
            <div class="accordion-body">
              ${item.body}
            </div>
          </div>
        </div>`;
    });

    container.innerHTML = htmlContent;
}

document.querySelector("#name").textContent = profile.name;
document.querySelector("#tagline").textContent = profile.tagline;
document.title = `Portfolio de ${profile.name}`;

buildAccordion("accordionProjects", "collapseProject", projects);
buildAccordion("accordionSkills", "collapseSkill", skills);