import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <div className='content'><h1>Zoya Ebrahimi</h1><br /><h4>Web developer & Photojournalist</h4><br /><a href='/about' className="text-dark">About me</a></div>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>

        </div>);
    }
}
export default Home;