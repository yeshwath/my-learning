import { useEffect, useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };

  useEffect(() => {
    console.log(task);
  }, [task]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask('');
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo management Application</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler} /> &nbsp; &nbsp;
              <button type="submit">Add</button>
            </form>
            <br></br>
            {todos.map((todo, index) => (
              <div key={index}>
                <h5>
                  {todo} &nbsp;
                  <button onClick={() => deleteHandler(index)}>delete</button>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </center>
    </div>
  );
}

export default Todo;