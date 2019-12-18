import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import "../styles/App.css";
import EmbeddedGist from './EmbeddedGist';

class BST extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "This is the message for data structures"
        }
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Link to="/datastructures"><Navbar.Brand>Data Structures</Navbar.Brand></Link>
                        <Nav className="mr-auto">
                            <Nav.Link active="true" href="#home">BST</Nav.Link>
                            <Nav.Link href="#features">Heapsort</Nav.Link>
                            <Nav.Link href="#pricing">Linked List</Nav.Link>
                        </Nav>
                </Navbar>
                <Jumbotron>
                    <h1>Hello, world! Welcome to Data Structures.</h1>
                    <p>This is a simple review guide for Data Structures. It covers the material that will be final exam.</p>
                    <p>
                        <Link to="/datastructures/bst"><Button variant="primary">Primary</Button></Link>
                    </p>
                </Jumbotron>
                    <div className="contentContainer">
                        <section className="contentbst">
                            <h1>Constructor</h1>
                            <p>The constructor for the binary search tree data structure is trivial, just set the root to 0 or NULL.</p>
                            <EmbeddedGist gist="/soundestmammal/52db60ca7a2b48db24c1d986ac7159d6" file="bst_constructor.cpp"></EmbeddedGist>
                            <h1>Destructor</h1>
                            <h2>Background</h2>
                            <p>Each time we insert a node into the BST, we create the node dynamically on the heap. To free up memory for a BST, we must call delete on each node. The order in which we call delete on the nodes is important. This will be accomplished by doing a Post Order Traversal.</p>
                            <p>A Post Order Traversal is a Depth First Search Traversal (DFS) where the algorithm traverses both the left and right children before processing the node. The traversal can be done easily using recursion.</p>
                            <p>The first step in using recursion is to identify the base case. The base case is when the function no longer calls itself again recursively and returns out of the current function scope. The base case for this algorithm is when the node we are traversing is NULL. This will occur when we over-traverse the graph. In other words, we will recursively call removeAndReclaimNode over and over until we call it on the left child that points to NULL. At this point, we will call removeAndReclaimNode on the right child.</p>
                            <p>The last node to be deleted is going to be the root node, and it will only be deleted after the left and right subtrees have been deleted. This is important to avoid any memory leaks.</p>
                            <p>Danger: If we call delete on the root, we will leak a ton of memory. This is because we would have lost the pointer to the tree.</p>
                            <EmbeddedGist gist="/soundestmammal/52db60ca7a2b48db24c1d986ac7159d6" file="bst_removeAndReclaimNode.cpp"></EmbeddedGist>
                            <p>I use a helper function to write the recursion and call removeAndReclaimNode in the destructor. After freeing up all the memory in the BST, the last step is to set the root to NULL.</p>
                            <EmbeddedGist gist="/soundestmammal/52db60ca7a2b48db24c1d986ac7159d6" file="bst_destructor.cpp"></EmbeddedGist>
                            <h1>Copy Constructor</h1>
                            <p>Similar to the destructor, the copy constructor requires that we traverse the entire tree. However, the type of traversal is a Pre Order Traversal. This is when we process the current node we are at before processing it’s children. This matches up with intuition, the first node that we would like to copy is the root. Only after creating the root, we can dynamically create nodes that will fit in to be left and right children to the root. This process will continue on recursively.</p>
                            <p>Since, we only want to call the copy constructor once, I will factor out a function that we can use to recursively copy the tree. As always to use recursion, we must identify the base case. The base case for this algorithm is when the node we are copying is NULL.</p>
                            <p>Unlike in the destructor, once difference with the copy constructor is that the helper function we are using for the recursion has a return type of bstNode*. When we hit the base case, we will return 0.</p>
                            <p>If the node we wish to copy is not NULL, that means it is a valid node that we must copy to the new tree. The algorithm for copying the node is the following. </p>
                            <h2>Steps for creating a copy of a bstNode:</h2>
                            <ol>
                                <li>Create a pointer of type bstNode. In this case we will call it newNode.</li>
                                <li>Inside of the try block, attempt to create a bstNode on the heap, passing in the data of the current node we are copying into the constructor.</li>
                                <li>Open up a catch block, if we are unable to allocate memory, return 0.</li>
                            </ol>
                            <p>At this point, we have created a node, but it is not connected to our tree. We also have not set the left or right children of this bstNode. In order to copy over the children, we will use call copyTree on the left and then right children of the copyNode. After the recursion is over, we return newNode.</p>
                            <EmbeddedGist gist="/soundestmammal/52db60ca7a2b48db24c1d986ac7159d6" file="bst_copyTree.cpp"></EmbeddedGist>
                            <p>Since we did all of the “heavy lifting” in the copyTree function, the only thing we must do inside of the copy constructor is call copyTree, and set the return value to the root. Voila!</p>
                            <EmbeddedGist gist="/soundestmammal/52db60ca7a2b48db24c1d986ac7159d6" file="bst_copyConstructor.cpp"></EmbeddedGist>
                            <h1>Operator =</h1>
                            <p>Since the bst is a linked structure and we have already written the copy constructor, we can use a copy/swap technique to easily implement operator =</p>
                            <h2>Four steps to do copy/swap for operator =</h2>
                            <ol>
                                <li>Create a temp pointer of type bstNode and store the address of root.</li>
                                <li>Assign the address of copyMe.root to root.</li>
                                <li>Assign the address of temp (holding root’s address) to copyMe.root.</li>
                                <li>Return *this</li>
                            </ol>
                            <h1>Insert</h1>
                            <p>: Recall that our BST Nodes store data of type std::string. We will now discuss the insert method for the BST.</p>
                            <h2>Rules</h2>
                            <ul>
                                <li>We do not allow duplicates.</li>
                                <li>There is only ONE correct spot for the node to go</li>
                            </ul>
                            <p></p>
                            <EmbeddedGist gist="/soundestmammal/52db60ca7a2b48db24c1d986ac7159d6" file="bst_insert.cpp"></EmbeddedGist>

                            <EmbeddedGist gist="/soundestmammal/52db60ca7a2b48db24c1d986ac7159d6" file="bst_postOrderTraversal.cpp"></EmbeddedGist>
                            <EmbeddedGist gist="/soundestmammal/52db60ca7a2b48db24c1d986ac7159d6" file="bst_printToStream.cpp"></EmbeddedGist>
                        </section>
                    </div>
            </div>
        );
    }
}

export default BST;

// <script src="https://gist.github.com/soundestmammal/52db60ca7a2b48db24c1d986ac7159d6.js"></script>