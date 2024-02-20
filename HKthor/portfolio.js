const project = document.getElementById("project");
const mainProject = document.getElementById("main-project");

function imgproject() {
    const projectLocal = JSON.parse(localStorage.getItem("data-project")) || [];
    let newElement = ""; 

    for (let i = 0; i < projectLocal.length; i++) {
        const project1 = projectLocal[i];
        newElement += `
            <img src="${project1.url}" alt="Project Image">
        `;
    }
    project.innerHTML = newElement;
}

imgproject();
function renderproject() {
    const projectLocal = JSON.parse(localStorage.getItem("data-project")) || [];
    let newElement = "";

    for (let i = 0; i < projectLocal.length; i++) {
        const project2 = projectLocal[i];
        newElement += `
        <div class="content-six">
        <div class="img-div">
        <img src="${project2.url}" alt=""  style ="width: 375px;
        height: 260px;"/>
      </div>
      <h3>${project2.name}</h3>
      <p style="width: 314px; height: 130px; margin-left: 42px; overflow: scroll;">
        ${project2.link}
      </p>
      <p style="padding: 10px 0; margin-left: 25px">
        <strong>Tags:</strong>
        <span style="font-size: 15px"
          >${project2.tags}
        </span>
      </p>
      <div class="text-div">
        <div>
          <img src="../img/Group.png" style="padding-right: 10px" />
          <p><a href="#">Live Preview</a></p>
        </div>
        <div>
          <img
            src="../img/akar-icons_github-fill.png"
            style="padding-right: 10px"
          />
          <p><a href="#">View Code</a></p>
          </div>
        </div>
      </div>
    </div>
            
        `;
    }
    mainProject.innerHTML = newElement;
}
renderproject();
