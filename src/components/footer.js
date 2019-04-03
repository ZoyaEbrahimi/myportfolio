import React, { Component } from 'react';
import '../App.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<footer id='footer' className='fixed-bottom p-2'><div className='icons text-center'><i class="fab fa-xing-square"></i><i class="fab fa-github-square"></i><i class="fab fa-linkedin"></i><i class="fab fa-facebook"></i></div><br />
            <h6 className='text-center'>Zoya Ebrahimi<i class="far fa-copyright"></i>2019</h6>
        </footer>);
    }
}

export default Footer;