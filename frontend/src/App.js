import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoView from './components/TodoListView';



function App() {

  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // Read all tasks
  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks')
    .then(res => {
      setTodoList(res.data);
    })
  });


  const addToHandler = () => {
    axios.post('http://localhost:8000/api/tasks', {
      title: title,
      description: desc
    })
    .then(res => {
      setTodoList([...todoList, res.data]);
    })
  };


  return (
    <div className='App list-group-item justify-content-center align-items-center mx-auto' style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}}>
      <h1 className='card text-white bg-primary mb-1' styleName="max-width: 20rem">Task Manager</h1>
      <h6 className='card text-white bg-primary mb-3'>FastApiReactMongodb - FARM</h6>
      <div className='card-body'>
        <h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>
        <span className='card-text'>
          <input className='mb-2 form-control titleIn' onChange={event => setTitle(event.target.value)} placeholder='Title' />
          <input className='mb-2 form-control desIn' onChange={event => setDesc(event.target.value)} placeholder='Description' />
          <button className='btn btn-outline-primary mx-2 mb-3' onClick={addToHandler} style={{'borderRadius':'50px', 'font-weight':'bold'}}>Add Task</button>
        </span>

        <h5 className='card text-white bg-dark mb-3'>Your Tasks</h5>
        <div>
          <TodoView todoList={todoList} />
        </div>
      </div>
      <h6 className='card text-dark bg-warning py-1 mb-0'>Copyright 2022, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;

