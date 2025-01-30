export class Project {
  constructor(name, to_dos = []) {
    this.name = name;
    this.to_dos = to_dos;
  }
  renderContent() {
    document.querySelector(".contents").textContent = this.name;
  }
}
