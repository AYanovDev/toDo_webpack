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
const projects = [new Project("default"), new Project("test")];
const list = new List(projects);
list.render();

let addProject = document.querySelector(".add_project");
addProject.addEventListener("click", () => {
  let newProjectName = new Project(prompt("What's your next project?: "));
  projects.push(newProjectName);
  list.render();
});
