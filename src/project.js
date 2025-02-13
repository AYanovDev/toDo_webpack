export class Project {
  #to_dos;

  constructor(name) {
    this.name = name;
    this.#to_dos = this.#getTodos();
  }

  #renderTodos() {
    let renderableTodos = this.#to_dos.map((to_do) => {
      let renderedTodo = document.createElement("p");
      renderedTodo.textContent = to_do;
      return renderedTodo;
    });
    let content_div = document.querySelector(".contents");
    content_div.append(...renderableTodos);
  }

  #getTodos() {
    if (localStorage.getItem("todo" + this.name)) {
      let romTodos = JSON.parse(localStorage.getItem("todo" + this.name));
      return romTodos;
    } else {
      let romTodos = ["Here go the things you need to do."];
      return romTodos;
    }
  }

  renderContent() {
    // add new to-do section
    let add_todo = document.createElement("button");
    add_todo.textContent = "Add a to-do to the list";
    let content_div = document.querySelector(".contents");
    content_div.innerHTML = "";
    content_div.append(add_todo);

    add_todo.addEventListener("click", () => {
      let new_todo = prompt("Write what needs to be done here: ");
      let renderedTodo = document.createElement("p");
      renderedTodo.textContent = new_todo;
      content_div.append(renderedTodo);
      this.#to_dos.push(new_todo);
      localStorage.setItem("todo" + this.name, JSON.stringify(this.#to_dos));
    });

    this.#renderTodos();

    // load to-dos from memory section
    // let memTodos = this.#getTodos();
    // memTodos.map((item) => {
    //   content_div.append(item);
    // });
    // document.querySelector(".contents").textContent = this.name;
  }
}
