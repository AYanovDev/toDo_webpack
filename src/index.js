import { List } from "./list";
import { Project } from "./project";
import "./template.css";

function getProjects() {
  if (localStorage.getItem("projects")) {
    const projects = JSON.parse(localStorage.getItem("projects"));
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
const list = new List(projects);
list.render();

let addProject = document.querySelector(".add_project");
addProject.addEventListener("click", () => {
  let newProject = new Project(prompt("What's your next project?: "));
  projects.push(newProject);
  localStorage.setItem("projects", JSON.stringify(projects));
  list.render();
});

// last selected project needs to stay selected
// Default must be selected if none are
// styling
// removing projects/to-do's
