export class Project {
  #to_dos;
  #checkArr;

  constructor(name) {
    this.name = name;
    this.#to_dos = this.#getTodos();
    this.#checkArr = this.#getCheckArr();
  }

  #getCheckArr() {
    if (localStorage.getItem("check" + this.name)) {
      let romCheck = JSON.parse(localStorage.getItem("check" + this.name));
      return romCheck;
    } else {
      return this.#to_dos.map(() => false);
    }
  }

  #getToDoElement(to_do, index) {
    let renderedTodo = document.createElement("p");
    renderedTodo.textContent = to_do;
    let checkBtn = document.createElement("input");
    checkBtn.setAttribute("type", "checkbox");
    checkBtn.checked = this.#checkArr[index];
    checkBtn.addEventListener("change", () => {
      this.#checkArr[index] = checkBtn.checked;
      localStorage.setItem("check" + this.name, JSON.stringify(this.#checkArr));
    });
    let added_todo_field = document.createElement("div");
    added_todo_field.classList.add("todo_field");
    added_todo_field.append(checkBtn);
    added_todo_field.append(renderedTodo);
    return added_todo_field; // handhe checkboxes
  }

  #renderTodos() {
    let renderableTodos = this.#to_dos.map((to_do, index) =>
      this.#getToDoElement(to_do, index)
    );
    let content_div = document.querySelector(".contents");
    content_div.append(...renderableTodos);
    //
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
      let added_todo_field = this.#getToDoElement(
        new_todo,
        this.#to_dos.length
      );
      content_div.append(added_todo_field);
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
