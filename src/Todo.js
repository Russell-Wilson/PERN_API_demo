import React from 'react'


export default function todo({todo,  toggleTodo}) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    };
    
    return (
        <div>
            <div class="container"> 
                <div class="row m-8">
                    <div class="col"/>
                    <div class="col">
                        <div class=" p-2 container">
                            <h5 class="text-white bg-primary p-1 rounded text-center">{todo.name}</h5>
                            <div class=" bg-white shadow-lg bg-white rounded container">
                                <div class="row">
                                    <div class="col">
                                        <label><b>Todo name:</b> {todo.name}</label>
                                        <label><b>Todo description:</b> {todo.des} </label>
                                        <label><b>Completed: </b><input type="checkbox" checked={todo.complete} onChange={handleTodoClick} /></label>
                                    </div>
                                    <div class="col"/>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="col"/>
                </div>
            </div>
        </div>
    )
}
