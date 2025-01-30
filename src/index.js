import { List } from "./list";
import { Project } from "./project";
import "./template.css";
class ToDo {
  constructor(title, description, dueDate, prioriity) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.prioriity = prioriity;
  }
}

function getProjects() {
  if (localStorage.getItem("projects")) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
    let renderableProjects = projects.map((project) => {
      return new Project(project.name);
    });
    return renderableProjects;
  } else {
    const projects = [new Project("default")];
    return projects;
  }
}

const projects = getProjects();
const list = new List(projects); // create an if statement to verify that the memory is not empty
list.render();

// if (localStorage.getItem("projects")) {
//   const projects = JSON.parse(localStorage.getItem("projects"));
//   console.log(projects);
//   let renderableProjects = projects.map((project) => {
//     return new Project(project.name);
//   });
//   const list = new List(renderableProjects); // create an if statement to verify that the memory is not empty
//   list.render();
// } else {
//   const projects = [new Project("default")];
//   const list = new List(projects); // create an if statement to verify that the memory is not empty
//   list.render();
//   localStorage.setItem("projects", JSON.stringify(projects));
// }
// const projects = JSON.parse(localStorage.getItem("projects"));
// // const projects = [new Project("default")];
// // localStorage.setItem("projects", JSON.stringify(projects));
// const list = new List(projects); // create an if statement to verify that the memory is not empty
// list.render();

let addProject = document.querySelector(".add_project");
addProject.addEventListener("click", () => {
  let newProject = new Project(prompt("What's your next project?: "));
  projects.push(newProject);
  localStorage.setItem("projects", JSON.stringify(projects));
  //   list.projects = projects; // added by chatGPT
  list.render();
});
