import React, {Component} from 'react';

import Joi from 'joi-browser'
import Form from "./common/form";

import * as userService from '../services/userService'

class RegisterForm extends Form {

    state={
        data:{username:'',password:'',name:''},
        errors:{username:'',password:'',name:''},
    };
    // username = React.createRef();

    // componentDidMount(){
    //     this.username.current.focus();
    // }


    schema={
        username:Joi.string().email({ minDomainAtoms: 2 }).required().label("Username"),
        password:Joi.string().min(5).required().label("Password"),
        name:Joi.string().required().label("Name"),
    };

    doSubmit= async ()=>{
        console.log("Registered");
        await userService.register(this.state.data)
    };

    render(){

        return(
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name", "name")}
                    {/*<Input name="password" value={data.password} label="Password" onChange={this.handleChange} error={errors.password}/>*/}
                    {this.renderButton("Register")}

                </form>
            </div>
        );

    }

    // render() {
    //     return (
    //         <div>
    //             <h1>Login</h1>
    //             <form onSubmit={this.handleSubmit}>
    //                 <div className="form-group">
    //                     <label htmlFor="username">Username</label>
    //                     {/*<input ref={this.username} id="username" type="text" className="form-control"/>*/}
    //                     <input value={this.state.data.username} onChange={this.handleChange} name="username" id="username" type="text" className="form-control"/>
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="password">Password</label>
    //                     <input value={this.state.data.password} onChange={this.handleChange} name="password" id="password" type="password" className="form-control"/>
    //                 </div>
    //                 <button className="btn btn-primary">Login</button>
    //             </form>
    //         </div>
    //     );
    // }



}

export default RegisterForm;