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
const projects = [new Project("default")];
// localStorage.setItem("projects", JSON.stringify(projects));
const list = new List(JSON.parse(localStorage.getItem("projects")));
list.render();

let addProject = document.querySelector(".add_project");
addProject.addEventListener("click", () => {
  let newProject = new Project(prompt("What's your next project?: "));
  projects.push(newProject);
  localStorage.removeItem("projects");
  localStorage.setItem("projects", JSON.stringify(projects));
  list.projects = projects;
  list.render();
});
