import React, {Component} from 'react';

import Joi from 'joi-browser'
import Form from "./common/form";

class LoginForm extends Form {

    state={
        data:{username:'',password:''},
        errors:{username:'',password:''},
    };
    // username = React.createRef();

    // componentDidMount(){
    //     this.username.current.focus();
    // }


    schema={
        username:Joi.string().required(),
        password:Joi.string().required(),
};

    doSubmit=()=>{
        console.log("submitted");
    };

render(){

    return(
        <div>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {/*<Input name="password" value={data.password} label="Password" onChange={this.handleChange} error={errors.password}/>*/}
              {this.renderButton("Login")}

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

export default LoginForm;