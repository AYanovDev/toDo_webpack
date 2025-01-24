export class List {
  constructor(projects) {
    this.projects = projects;
  }
  render() {
    let buttonList = this.projects.map((project) => {
      let listButton = document.createElement("button");
      listButton.textContent = project.name;
      listButton.addEventListener("click", () => project.renderContent());
      return listButton;
    });
    let listElement = document.querySelector(".project_list");
    listElement.innerHTML = "";
    listElement.append(...buttonList);
  }
}
