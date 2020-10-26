import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Introduction from '../Introduction';
import MyWork from '../MyWork';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('Testing the App component', () => {
    it('renders the Introduction component', () => {
        const wrapper = shallow(<App></App>);
        expect(wrapper.contains(<Introduction />)).toEqual(true);
    });
     
    it('renders the MyWork component', () => {
        const wrapper = shallow(<App></App>);
        expect(wrapper.contains(<MyWork />)).toEqual(true);
        })
    
    it('renders the footer component', () => {
        const wrapper = shallow(<App></App>);
        expect(wrapper.contains(<Footer />)).toEqual(true);
    })
})