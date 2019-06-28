import React, {Component} from 'react';
import {AsyncStorage} from 'AsyncStorage';
import axios from 'axios';
import { Link } from "react-router-dom";


class Login extends Component{
    state = {
        'email':'',
        'password':''
    }

    handleSubmit(){
        axios.post('http://192.168.0.19:3000/auth', {email:this.state.email,password:this.state.password})
        .then(async function(result){
            console.log(result.data.token);
            
            await AsyncStorage.setItem('token', result.data.token);
        })
        .catch(function(e){
            console.log(e);
            
        })
    }


    async componentDidMount(){
        const value = await AsyncStorage.getItem('token');
        if(value != null){
            this.props.history.push('/home')
        }
    }

    render(){
        return(
            <div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={(event)=>{this.setState({email:event.target.value})}}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        value={this.state.password}
                        onChange={(event)=>{this.setState({password:event.target.value})}}
                    />
                </div>
                <button className="btn" onClick={()=>this.handleSubmit()}>
                    submit
                </button>
            </div>
        )
    }
}

export default Login;