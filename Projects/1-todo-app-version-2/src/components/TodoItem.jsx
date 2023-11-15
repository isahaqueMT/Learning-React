function TodoItem ({itemName, itemDate}){


return (
  <div className="container text-start">
  <div className="row todo-row">
    <div className="col-6">{itemName}</div>
    <div className="col-4">{itemDate}</div>
    <div className="col-2">
      <button type="button" className="btn btn-danger todo-btn">
        Delete
      </button>
    </div>
  </div>
  </div>
);

}

export default TodoItem;