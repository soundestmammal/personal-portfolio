import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import "../styles/App.css";
import EmbeddedGist from './EmbeddedGist';
import MinHeap from '../minheap.png';
import MaxHeap from '../maxheap.png';


class Heapsort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "This is the message for data structures",
            hiddenSnippet: false
        }
    }
    handleSnippetButton = () => {
        if(this.state.hiddenSnippet) {
            this.setState({ hiddenSnippet: false });
        } else {
            this.setState({hiddenSnippet: true});
        }
    }
    showSnippet = () => {
        // Default, do not show the snippet!!!
        if(this.state.hiddenSnippet) {
            return (<EmbeddedGist gist="/soundestmammal/2aba9cc744802d2555311d4dfb8c8565" file="heapsort.cpp"></EmbeddedGist>);
            // return(<div>I will just retturn a div that has a bunch of text that has no meaning but I need it to fill up some space</div>)
        }
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Link to="/datastructures"><Navbar.Brand>Data Structures</Navbar.Brand></Link>
                        <Nav className="mr-auto">
                            <Nav.Link>BST</Nav.Link>
                            <Nav.Link active="true">Heapsort</Nav.Link>
                            <Nav.Link>Linked List</Nav.Link>
                        </Nav>
                </Navbar>
                    <div className="contentContainer">
                        <section className="contentbst">
                            <h1>Heapsort</h1>

                            <h2>Background: What is a heap?</h2>

                                <p>A heap data structure can be visualized as a nearly complete binary tree where each node of the tree corresponds to an element of the array. A nearly complete binary tree describes a binary tree with all levels filled up except possibly the lowest level, which is filled from the left up to a point (CLRS).</p>

                                <p>There are two kinds of heaps, min-heaps and max-heaps. For this implementation of heapsort, I will use the latter. In a max-heap, each parent node is greater than or equal to both the left and right child nodes.</p>
                                <div className="heapSideBySide">
                                    <div>
                                        <img src={MinHeap} width="500" alt="a min heap"></img>
                                        <h3>min-heap</h3>
                                    </div>
                                    <div>
                                        <img src={MaxHeap} width="500" alt="a max heap"></img>
                                        <h3>max-heap</h3>
                                    </div> 
                                </div>
                               
                                    
                                <h2>How to find array index for child nodes?</h2>
                                <div className="propertyHeapsort">
                                    <h3>Property 1</h3>
                                    <p>The index in the array for a given node's (n) left child can be found by 2n + 1.</p>
                                    <EmbeddedGist gist="/soundestmammal/2aba9cc744802d2555311d4dfb8c8565" file="getIndexOfLeftChild.cpp"></EmbeddedGist>
                                </div>
                                
                                <div className="properyHeapsort">
                                    <h3>Property 2</h3>
                                    <p>The index in the array for a given node's (n) right child can be found by 2n + 2.</p>
                                    <EmbeddedGist gist="/soundestmammal/2aba9cc744802d2555311d4dfb8c8565" file="getIndexOfRightChild.cpp"></EmbeddedGist>
                                </div> 

                            <h2>Description of the algorithm</h2>
                            
                            <p>Our function will be called heapsort. It will accept an array of integers to be sorted, and an integer denoting the length of the array. This version of heapsort can be broken into 3 steps.</p>
                            
                            <div className="stepsHeapsort">
                                <h3>Step 1</h3>
                                <p>Transform the array of integers into a max heap.</p>
                                <EmbeddedGist gist="/soundestmammal/2aba9cc744802d2555311d4dfb8c8565" file="step1.cpp"></EmbeddedGist>
                            </div>
                            <div className="stepsHeapsort">
                                <h3>Step 2</h3>
                                <p>Swap the max element and the last element in the HEAP and decrement the size of the heap by 1. This has the effect of removing the max item from the heap.</p>
                                <EmbeddedGist gist="/soundestmammal/2aba9cc744802d2555311d4dfb8c8565" file="step2.cpp"></EmbeddedGist>
                            </div>
                            <div className="stepsHeapsort">
                                <h3>Step 3</h3>
                                <p>Fix the heap. At this point, the root is the only out of place item. Both the left and right subtrees of the root are themselves max-heaps. The way to fix the heap is to bubble-down the out of place value that is stored in the root. I will recusively call fixOutOfOrderElement to achieve this.</p>
                                <EmbeddedGist gist="/soundestmammal/2aba9cc744802d2555311d4dfb8c8565" file="step3.cpp"></EmbeddedGist>
                            </div>

                            <h2>But how do we fix the heap?</h2>
                            <p>The height of a heap can be expressed by the number of edges from the root to the left most child node. The root of the tree does not count towards the height. A heap with 7 nodes has a height of 2. A heap with 8 nodes has a height of 3.</p>
                            <p>The name of the function for fixing the heap will be called fixOutOfOrderElement. It will accept an array, the length of the array, and an index in the array that is out of place.</p>
                            <p>The algorithm compares the out of place item to it's left and right children (if they exist). It identifies the index of the largest item of the 3 items in the subtree. </p>
                            <p>Then, I am falling asleep I will write more sometime later. Add the snippet.</p>
                            <EmbeddedGist gist="/soundestmammal/2aba9cc744802d2555311d4dfb8c8565" file="fixOutOfOrderElement.cpp"></EmbeddedGist>
                            <p>Ok, if you want to see all of the code for this algorithm, hit the button below to see a snippet of the entire code block.</p>
                            <Button variant="primary" onClick={this.handleSnippetButton}>SHOW ALL THE CODE!!!</Button>
                            {this.showSnippet()}
                        </section>
                    </div>
            </div>
        );
    }
}

export default Heapsort;