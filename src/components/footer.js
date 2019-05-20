import React, { Component } from 'react';
import '../App.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<footer id='footer' className="fixed-bottom p-2">
            <div className="icons text-center">
                <a href="https://www.xing.com/profile/Zoya_Ebrahimi/cv"><i className="fab fa-xing-square"></i></a>
                <a href="https://github.com/ZoyaEbrahimi"><i className="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/zoya-ebrahimi-7b3899164/"><i className="fab fa-linkedin"></i></a>

            </div><br />
            <h6 className='text-center'>Zoya Ebrahimi<i className="far fa-copyright"></i>2019</h6>
        </footer>);
    }
}

export default Footer;