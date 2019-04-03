import React, { Component } from 'react';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='about' className='d-flex justify-content-between'>

                <div className='textAbout'><div className='mt-5'><h3>About me</h3><p>I come from Iran and worked there as a journalist. After successfully completing a bachelor's degree as a translator for Italian, in 2012 I started my journalistic work at the specialist journal for medical technology Sanatdarman in Teheran, where I first worked as a photographer and specialist translator from English. After completing my journalistic education at Sanatdarman, I took over the responsibility for planning and conducting interviews and image reports during trade fair visits at home and abroad. It was also my job to examine texts for stylistics, grammar and professional correctness. Now i am in Germanynear three yeras and i can speak Gemany.I started to learn Web developing and this is my first work as a Web developer! I want make a connection between Media and Web developing in the future.</p></div></div>

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