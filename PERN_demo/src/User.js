import React, { Component } from 'react';
import './bootstrap.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            Users_list:[]
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(Users_list => this.setState({Users_list}, () => console.log(Users_list)));
    }

render () {
    return (
        <>
        {this.state.Users_list.map(user => 
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
                                <div class="col"/>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="col"/>
            </div>
        </div>
    </div>
    )}; 
    </>
    )
    }
}

export default Users;