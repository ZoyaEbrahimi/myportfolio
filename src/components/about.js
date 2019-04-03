import React, { Component } from 'react';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='about' className='d-flex justify-content-between'>

                <div className='textAbout'><div className='mt-5'><h3>About me</h3><p>I come from Iran and i worked there as a journalist. After a few years in Germany I started 12 months of training to learn web development . I want to make a connection between media and web development in the future.
I have learned HTML4, CSS3, Scss, less, JavaScript, JQuery, Bootstrap, ReactJS, ReduxJS, NodeJS, ExpressJs, MongoDB(MoongooseJS,Mlab) and can work with Linux, Github, Trello, Scrum, Postman, npm, nvm and Visual Studio.
I am better educated in the following areas: Webdesign, Css, JavaScript, Bootstrap and React.</p></div></div>

                <div className='skills '>
                    <div className='mt-5'>
                        <h3>My Skills</h3>
                        <ul id="skill">
                            <li><span class="bar graphic-design"></span><h3>Html // Css</h3></li>
                            <li><span class="bar html-css"></span><h3>JavaScript</h3></li>
                            <li><span class="bar jquery"></span><h3>ReactJs</h3></li>
                            <li>
                                <span class="bar wordpress"></span><h3>NodeJs</h3></li>

                        </ul>
                    </div>
                </div>

            </div>);
    }
}

export default About;