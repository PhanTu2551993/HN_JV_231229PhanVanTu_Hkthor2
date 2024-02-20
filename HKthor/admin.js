const projectName = document.querySelector("#projectname");
const form = document.querySelector("#form-input");
const imageUrl = document.querySelector("#imageurl");
const link = document.querySelector("#link");
const tags = document.querySelector("#tags");
const bodyTable = document.querySelector("#bodytable");
const btnSubmit = document.querySelector("#btn-submit");
let existingIndex = -1;
let existing = false;

function renderProject(){
    const projectLocal = JSON.parse(localStorage.getItem("data-project"))||[];
    let newElement = "";
    for(let i=0;i<projectLocal.length;i++){
        project = projectLocal[i];
        newElement += `
        <tr>
        <td>${i + 1}</td>
        <td>${project.name}</td>
        <td><img src="${project.url}" alt="Project Image" width="50" height="50"></td>
        <td style = " width :450px; overflow: auto;">${project.link}</td>
        <td>${project.tags}</td>
        <td style="text-align: center;">
            <button style=" padding: 5px 20px;
            border-radius: 7px;
            background-color: red;
            color: white;
            border: none;" onclick="editProject(${i})">Update</button>
            <button style=" padding: 5px 20px;
            border-radius: 7px;
            background-color: green;
            color: white;
            border: none;" onclick="deleteProject(${i})">Delete</button>
        </td>
    </tr>
        `
    }
    bodyTable.innerHTML = newElement;
}
renderProject();
function resetForm(){
    projectName.value = "";
    imageUrl.value = "";
    link.value = "";
    tags.value = "";
}

function deleteProject(index){
    const projectLocal = JSON.parse(localStorage.getItem("data-project"))||[]
    projectLocal.splice(index,1)
    localStorage.setItem("data-project", JSON.stringify(projectLocal));
    renderProject();
}

function editProject(index){
const projectLocal = JSON.parse(localStorage.getItem("data-project"))||[];
    projectName.value = projectLocal[index].name;
    imageUrl.value = projectLocal[index].url;
    link.value = projectLocal[index].link;
    tags.value = projectLocal[index].tags;
    existingIndex = index;
  existing = true;
  btnSubmit.textContent = "Update";
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const project = {
        id: Date.now(),
        name: projectName.value,
        url: imageUrl.value,
        link: link.value,
        tags: tags.value,
    };
    const projectLocal = JSON.parse(localStorage.getItem("data-project"))||[]
    // code update
    if (existing) {
        projectLocal[existingIndex] = project;
        existingIndex = -1;
        existing = false;
        btnSubmit.textContent = "+ New Project";
      } else {
        projectLocal.push(project);
      }
    localStorage.setItem("data-project", JSON.stringify(projectLocal));
    renderProject();
    resetForm();
});

    // function uploadImage() {
    //     const input = document.getElementById('imageUpload');
    //     let file = input.files[0];
    //     if (file) {
    //         let reader = new FileReader();
    //         reader.onload = function (e) {
    //             let imageData = e.target.result;
    //             localStorage.setItem('uploadedImageData', imageData);
    //         };
    //         reader.readAsDataURL(file);
    // }};
    // uploadImage();
