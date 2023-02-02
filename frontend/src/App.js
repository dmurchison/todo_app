import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TodoView from './components/TodoListView';



function App() {

  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // Read all tasks
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
    .then(res => {
      setTodoList(res.data);
    })
  });

  // Add task to list
  const addToHandler = () => {
    axios.post('http://localhost:8000/api/todo', {
      title: title,
      description: desc
    })
    .then(res => {
      setTodoList([...todoList, res.data]);
    })
  };


  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Enter your task</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <span className="mt-1">
                  <input 
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' 
                    onChange={event => setTitle(event.target.value)} 
                    placeholder='My Title' 
                  />
                </span>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <span className="mt-1">
                  <textarea
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={event => setDesc(event.target.value)}
                    placeholder='My Description'
                  />
                </span>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={addToHandler}
                >
                  Submit Task
                </button>
              </div>

            </form>
          </div>
        </div>
      <div className="overflow-hidden rounded-md bg-white shadow">
        <TodoView todoList={todoList} />
      </div>

      <h6 className='card text-dark bg-warning py-1 mb-0'>Copyright 2022, All rights reserved &copy;</h6>
      </div>
    </>
  )
}

export default App;



//   return (
//     <div className='container mx-auto bg-gray-200 rounded-xl shadow' style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}}>
//       <h1 className='card text-white bg-primary mb-1' styleName="max-width: 20rem">Task Manager</h1>
//       <h6 className='card text-white bg-primary mb-3'>FastApiReactMongodb - FARM</h6>
//       <div className='card-body'>
//         <h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>
//         <span className='card-text'>
//           <input className='mb-2 form-control titleIn' onChange={event => setTitle(event.target.value)} placeholder='Title' />
//           <input className='mb-2 form-control desIn' onChange={event => setDesc(event.target.value)} placeholder='Description' />
//           <button className='btn btn-outline-primary mx-2 mb-3' onClick={addToHandler} style={{'borderRadius':'50px', 'font-weight':'bold'}}>Add Task</button>
//         </span>

    //     <h5 className='card text-white bg-dark mb-3'>Your Tasks</h5>
    //     <div>
    //       <TodoView todoList={todoList} />
    //     </div>
    //   </div>
    //   <h6 className='card text-dark bg-warning py-1 mb-0'>Copyright 2022, All rights reserved &copy;</h6>
    // </div>
//   );
// }