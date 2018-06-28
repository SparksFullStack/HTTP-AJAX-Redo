import React, { Component } from 'react';
import "./AddFriend.css";
import axios from 'axios';

export default class AddFriend extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            age: "",
            email: "",
        }
    }

    handleUpdateForms = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    metaPosting = event => {
        this.props.handlePost(this.state.name, this.state.age, this.state.email);
        this.setState({
            name: "",
            age: "",
            email: "",
        })
    }

    render(){
        return(
            <div className="addFriend">
            <h2 className="addFriend__header">Add a New Friend</h2>
                <form className='addFriend__form'>
                    <div className="addFriend__form__input">
                        <input className='addFriend__form__input' name="name" placeholder="Enter a name" value={this.state.name} onChange={this.handleUpdateForms} />
                        <input className='addFriend__form__input' name="age" placeholder="Enter an age" value={this.state.age} onChange={this.handleUpdateForms} />
                        <input className='addFriend__form__input' name="email" placeholder="Enter an email" value={this.state.email} onChange={this.handleUpdateForms} />
                    </div>
                    <br />
                    <div className="addFriend__form__button">
                        <input type="button" value="Add Friend" onClick={this.metaPosting} />
                    </div>
                </form>

            </div>
        )
    }
}