import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import "react-bootstrap/dist/react-bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            < div id='project' className='d-flex justify-content-between' >
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/myImages/calculator" />
                    <Card.Body>
                        <Card.Title>Javascript Calculator</Card.Title>
                        <Card.Text>
                            This is my first Js Calculator
                        </Card.Text>
                        <a href="/calculator/index.html" target="_blank"><Button variant="primary">My Calculator</Button></a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/myImages/todolist.jpg" style={{height: '300px'}}/>
                    <Card.Body>
                        <Card.Title>To Do List</Card.Title>
                        <Card.Text>
                            This is my first to do list.
                        </Card.Text>
                        <a href="/todolist/main.html"target="_blank"><Button variant="primary">My To Do</Button></a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/myImages/project03.jpeg" style={{height: '300px'}}/>
                    <Card.Body>
                        <Card.Title>JQuery Timer</Card.Title>
                        <Card.Text>
                            This is my first Timer.
                        </Card.Text>
                        <a href="/timer/main.html"target="_blank">
                        <Button variant="primary">My Timer</Button></a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/myImages/project04.jpg"/>
                    <Card.Body>
                        <Card.Title>Current Weather</Card.Title>
                        <Card.Text>
                            This is My Current Weather.
                        </Card.Text>
                        <a href="/weather/main.html"target="_blank">
                        <Button variant="primary">My Weather</Button></a>
                    </Card.Body>
                </Card>
            </div >
        )

    }
}

export default Projects;