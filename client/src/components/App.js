import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


//import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';
// import Dashboard from './Dashboard';
// import UrbanEcon from './UrbanEcon';
// import ChapterOne from './ChapterOne';

// class App extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <div className='homepage is-preload'>
//                     <div id="page-wrapper">
//                         <div id="header">
//                             <Header />
//                         </div>
//                         <Main />
//                         <Footer />
//                     </div>
                    
//                 </div>
//             </BrowserRouter>
            
//         );
//     }
// }

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <p>Hey! My name is Rob and this is my portfolio! Stay tuned to check out the latest from me! This should trigger a change...</p>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
