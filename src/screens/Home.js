import React,{Component} from 'react';
import {AsyncStorage} from 'AsyncStorage';

class Home extends Component{
    // state = {
    //     token : ''
    // }
    async componentDidMount(){
        const token = await AsyncStorage.getItem('token')
        // this.setState({token:token})
        if(token == null ){
            alert('anda belum login')
            this.props.history.push('/login') //diganti dengan ur own navigation
        }
    }
    render(){
        return(
            <div>
                this is Home
            </div>
        )
    }
}

export default Home;