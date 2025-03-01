export class List {
  constructor(projects) {
    this.projects = projects;
    // retrieve selected project from storage
    // find selected project in the projects array and render it
    let romSelected = localStorage.getItem("selected") || '"default"'; //
    this.projects.forEach((project) => {
      if (JSON.stringify(project.name) == romSelected) {
        project.renderContent();
      }
    });
  }
  render() {
    let buttonList = this.projects.map((project) => {
      let listButton = document.createElement("button");
      listButton.textContent = project.name;
      listButton.addEventListener("click", () => {
        project.renderContent();
        localStorage.setItem("selected", JSON.stringify(project.name));
      });
      return listButton;
    });
    let listElement = document.querySelector(".project_list");
    listElement.innerHTML = "";
    listElement.append(...buttonList);
  }
}
