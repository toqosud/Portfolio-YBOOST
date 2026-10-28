let projects = [
    {
        name: "Projet RED",
        body: `<p>Le projet RED etait un projet de développement en golang.</p>`
    },
];

const url = "https://bdslafeypzkdyejefkds.supabase.co/rest/v1/";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkc2xhZmV5cHprZHllamVma2RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxODc3MTAsImV4cCI6MjEwODc2MzcxMH0.1p494QxXyZnt_f-eraG3zbzhIrYwUWhLxSD2rTQ8_i8";

const Project = []; 

let accordeon = document.querySelector("#accordionExample");
let htmlContent = "";

for(let i = 0; i < projects.length; i++) {
    let currentProject = projects[i];
    console.log(currentProject);
    htmlContent += `<div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}"
          aria-expanded="true" aria-controls="collapse${i}">
          ${currentProject.name}
        </button>
      </h2>
      <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            ${currentProject.body}
        </div>
      </div>
    </div>`;
}

accordeon.innerHTML = htmlContent;s