import React, { useState, useRef, useEffect} from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';
import './bootstrap.css';
import Users from './User';
import Users2 from './Usercopy';

 // This is a key for local storage
 const LOCAL_STORAGE_KEY = 'todoapp.todos'

function App() {
  // Use state created to dynamically create two const objects and give a default value and provides a function to update it
  const [todos, setTodos] = useState([]);
  // const [users, setUsers] = useState([]);
  const todoNameRef = useRef();
  const todoDesRef = useRef();

  // useEffect(() => {
  //   fetch('http://localhost:5000/')
  //   .then(res => res.json())
  //   .then(Users_list => setUsers({Users_list: Users_list, da_id: null}, () => 
  //   console.log(Users_list)));
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:5000/')
  //   .then(res => res.json())
  //   .then(Users_list => setUsers({Users_list: Users_list, da_id: null}, () => 
  //   console.log(Users_list)));
  // }, [users]);


  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  };

    // Listen for button submit attempt
  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value
    const des = todoDesRef.current.value
    if (name === '' || des === '') return
    // The update state function takes the previous state - we use the list concat feature here to extend todo list 
    // We also use uuidv4 to generate a random key for the Id of the todo.
    setTodos(Prevtodo => {
      return [...Prevtodo, {id: uuidv4(), name: name, des: des, complete: false}]
        })
        todoNameRef.current.value = null
        todoDesRef.current.value = null
    };

    // function RemoveTodo() {
    //   setTodos([]);
    // }  

  return ( 
    //fragement used instead of div to separate text

<body>  
    <div class="row">
      <div class="col"/>
      <div class="col m-5 p-1 bg-Indigo">
        <div class=" p-2 container">
          <h5 class="text-white bg-primary p-1 rounded text-center">Create user</h5>
          <div class=" bg-white shadow-lg bg-white rounded container">
            <div class="row">
              <div class="col" />
              <div class="col" />
            </div>
            <div class="row">
              <div class="col m-2">
                <div class="p-2 color-secondary">
                  <label>Forename</label>
                  <input class="form-control" placeholder="Enter Forename" ref={todoNameRef} type="text" />
                </div>            
              </div>
            </div>
            <div class="row">
              <div class="col m-2">
                <div class="p-2 color-secondary">
                  <label>Surname</label>
                  <input class="form-control" placeholder="Enter Surname" ref={todoDesRef} type="text"/>
                </div>           
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="p-2"> 
                  <button class="btn btn-primary btn-sm btn-block" onClick={handleAddTodo}>Create user</button>
                  <button class="btn btn-primary btn-sm btn-block" onClick={Users.say_hello}>Dirty</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col p-2 m-2 color-secondary">
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div class="col"/>
    </div>
  <ToDoList todos={todos} toggleTodo={toggleTodo} />
  <Users />
</body>
  );  
}

export default App;
