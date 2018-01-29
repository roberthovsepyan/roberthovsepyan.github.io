import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { animateScroll as scroll } from 'react-scroll';

import Intro from './components/Intro';
import Skills from './components/Skills';
import LearnMore from './components/LearnMore';
import {Projects} from './components/Projects';


export default class App extends Component {

    scrollMore = () => {
        const element = ReactDOM.findDOMNode(this.refs.skills);
        scroll.scrollMore(element.getBoundingClientRect().top);
    };

    render() {
        return (
            <div>
                <Intro>
                    <LearnMore handleClick={this.scrollMore}/>
                </Intro>
                <Skills ref='skills'/>
                <Projects/>
            </div>
        );
    }
}


