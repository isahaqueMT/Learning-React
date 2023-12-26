import style from "./TodoAdd.module.css";

function TodoAdd() {
  return (
    <div className="container text-start">
      <div className="row todo-row">
        <div className="col-6">
          <input className={style.todoInput} type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todo-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoAdd;
