import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 0.8em;
    font-weight: 100;
`;

export default class LearnMore extends Component {
    constructor () {
        super();
        this.state = {
            color: '#cccccc'
        };
    };

    handleClick = () => {
        this.props.handleClick();
    };

    handleMouseEnter = () => {
        this.setState({color: 'white'});
    };

    handleMouseLeave = () => {
        this.setState({color: '#cccccc'});
    };

    render () {
        const TextWrapper = styled.span`
            cursor: pointer;
            color: ${this.state.color};
        `;

        return (
            <Wrapper>
                <TextWrapper onClick={this.handleClick} onMouseEnter={this.handleMouseEnter}
                             onMouseLeave={this.handleMouseLeave}>
                    Узнать больше
                </TextWrapper>
                <br/>
                <TextWrapper onClick={this.handleClick} onMouseEnter={this.handleMouseEnter}
                             onMouseLeave={this.handleMouseLeave}>
                    ⌄
                </TextWrapper>
            </Wrapper>
        );
    }
};