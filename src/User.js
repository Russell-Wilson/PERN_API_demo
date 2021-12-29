import React, { Component } from 'react';
import './bootstrap.css';


class Users extends Component {
    constructor() {
        super();
        this.state = {
            Users_list:[],
            da_id: null
        };
    }   
    set_id(id) {
        this.setState({Users_list:this.state.Users_list.filter(user => user.user_id !== id), da_id:id}, () => {
        var id = this.state.da_id;
        fetch('http://localhost:5000/remove', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({user_id:id})
            })
        });
    } 

    add_user(id) {
        this.setState({Users_list:this.state.Users_list.filter(user => user.user_id !== id), da_id:id}, () => {
        var id = this.state.da_id;
        fetch('http://localhost:5000/remove', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({user_id:id})
            })
        });
    } 

    componentDidMount() {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(Users_list => this.setState({Users_list}, () => 
        console.log(Users_list)));
    }
  
render () {
    return (
        <>
        <div>
        </div>
        {this.state.Users_list.map((user => ( 
        <div>
        <div class="container"> 
            <div class="row m-8">
                <div class="col"/>
                <div class="col">
                    <div class=" p-2 container">
                        <h5 class="text-white bg-primary p-1 rounded text-center">User</h5>
                        <div class=" bg-white shadow-lg bg-white rounded container">
                            <div class="row">
                                <div class="col">
                                    <label><b>Forename:</b> {user.firstname} </label>
                                    <label><b>Surname:</b> {user.surname} </label>
                                </div>
                            </div>
                            <div class="row p-2">
                                <div class="col"> 
                                <br/>
                                <button class="btn btn-primary btn-sm btn-block" onClick={() => this.set_id(user.user_id)}>Delete user</button>
                                </div>  
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="col"/>
            </div>
        </div>
    </div>
        )))}
    </>
    );
    }
}


export default Users;