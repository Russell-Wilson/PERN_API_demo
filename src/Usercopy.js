import React, { Component, props } from 'react';
import './bootstrap.css';

class Users2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users_list:[]
        };
        this.sayhello = this.sayhello.bind(this);
    } 
    sayhello() {
        console.log('hello');
    };
    
render () {
    return (
        <>
        <div>
        <button class="btn btn-primary btn-sm btn-block onClick={this.sayhello}">Say hello</button>
        </div>
        </>
    );
    }
}


export default Users2;