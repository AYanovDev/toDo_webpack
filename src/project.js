export class Project {
  constructor(name) {
    this.name = name;
  }
  renderContent() {
    document.querySelector(".contents").textContent = this.name;
  }
}
