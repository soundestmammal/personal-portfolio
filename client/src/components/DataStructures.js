import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/App.css";

class DataStructures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "This is the message for data structures"
        }
    }

    render() {
        return (
            <div>
                  <Navbar bg="dark" variant="dark">
                    <Link to="/datastructures"><Navbar.Brand>Data Structures</Navbar.Brand></Link>
                        <Nav className="mr-auto">
                            <Link to="/datastructures/bst"><Nav.Link>BST</Nav.Link></Link>
                            <Link to="/datastructures/heapsort"><Nav.Link>Heapsort</Nav.Link></Link>
                            <Link to="/datastructures/linkedlist"><Nav.Link>Linked List</Nav.Link></Link>
                        </Nav>
                </Navbar>
                <Jumbotron>
                    <h1>Hello, world! Welcome to Data Structures.</h1>
                    <p>This is a simple review guide for Data Structures. It covers the material that will be on final exam.</p>
                    <p>
                        <Link to="/datastructures/bst"><Button variant="primary">Primary</Button></Link>
                    </p>
                </Jumbotron>
                <div className="makerow">
                <Card bg="dark" text="white" style={{ width: '18rem'}}>
                <Card.Img variant="top" src="https://miro.medium.com/max/1424/1*F8MmBnUQyOA8-Rajg69nSQ.png" />
                    <Card.Body>
                        <Card.Title>Binary Search Trees</Card.Title>
                        <Card.Text>
                        Click here to learn about the Binary Search Tree Data Structure.
                        </Card.Text>
                        <Link to="/datastructures/bst"><Button variant="warning">Click here to learn</Button></Link>
                    </Card.Body>
                </Card>
                <Card bg="dark" text="white" style={{ width: '18rem'}}>
                <Card.Img variant="top" src="https://www.geeksforgeeks.org/wp-content/uploads/MinHeapAndMaxHeap.png" />
                    <Card.Body>
                        <Card.Title>Heapsort</Card.Title>
                        <Card.Text>
                        Click here to learn about the Heapsort Algorithm.
                        </Card.Text>
                        <Link to="/datastructures/heapsort"><Button variant="primary">Click here to learn!</Button></Link>
                    </Card.Body>
                </Card>
                <Card bg="dark" text="white" style={{ width: '18rem'}}>
                <Card.Img variant="top" src="data:image/png;base64,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" />
                    <Card.Body>
                        <Card.Title>Linked Lists</Card.Title>
                        <Card.Text>
                        Click here to learn about the Linked List Data Structure.
                        </Card.Text>
                        <Link to="/datastructures"><Button variant="danger">Don't click this button!</Button></Link>
                    </Card.Body>
                </Card>
                </div>
            </div>
            
        );
    }
}

export default DataStructures;