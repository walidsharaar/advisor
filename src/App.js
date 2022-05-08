import React from "react";
import './App.css';
import axios from 'axios';

class App extends React.Component{

    state={
        advice:''
    };
    componentDidMount(){
        console.log('Component did amount')
    }
    render(){
        return(
            <h1>App</h1>

        );

    }
}

export default App;