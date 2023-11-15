function TodoItem2() {
  return (
    <div className="container text-start">
      <div className="row todo-row">
        <div className="col-6">Go to Collage</div>
        <div className="col-4">4/10/2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;