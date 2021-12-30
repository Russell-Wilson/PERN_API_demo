import React, { useState, useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './bootstrap.css';
import Users from './User';


function App() {
  // Use state created to dynamically create two const objects and give a default value and provides a function to update it

  const username = useRef();
  const usersurname = useRef();

  function create_user () {
  const first = username.current.value;
  const last = usersurname.current.value;
  fetch('http://localhost:5000/create', {
  method: 'POST',
  headers: {
      'Content-type':'application/json' 
  },
  body: JSON.stringify({firstname: first, surname: last})
    });
  username.current.value = null;
  usersurname.current.value = null;
  window.location.reload();
}; 

return ( 
//fragement used instead of div to separate text
<>
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
                  <input class="form-control" placeholder="Enter Forename" ref={username} type="text" />
                </div>            
              </div>
            </div>
            <div class="row">
              <div class="col m-2">
                <div class="p-2 color-secondary">
                  <label>Surname</label>
                  <input class="form-control" placeholder="Enter Surname" ref={usersurname} type="text"/>
                </div>           
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="p-2"> 
                  <button class="btn btn-primary btn-sm btn-block" onClick={create_user}>Create user</button>
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
  <Users />
</>  
);  
}

export default App;
