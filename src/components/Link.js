import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

const forwardsAnimation = keyframes`
    from {
        width: 200px;
        color: black; 
    }
    to {
        width: 220px;
        color: #ffe066;
        background: #263238;
    }
`;

const backwardsAnimation = keyframes`
    from {
        width: 220px;
        color: #ffe066;
        background: #263238;
    }
    
    to {
        width: 200px;
        color: black;
        background: #ffe066;
    }
`;

export default class Link extends Component {
    constructor () {
        super();
        this.state = {
            hover: false
        }
    };

    handleMouseEnter = () => {
        this.setState({
            hover: true
        });
    };

    handleMouseLeave = () => {
        this.setState({
            hover: false
        })
    };

    render () {
        const LinkWrapper = styled.a`
            width: 200px;
            padding: 10px;
            border-radius: 25px;
            border: 2px solid #263238;
            text-decoration: none;
            color: black;
            margin-bottom: 25px;
            animation: ${this.state.hover? `${forwardsAnimation} 0.5s forwards` : `${backwardsAnimation} 0.5s forwards`};
        `;
        return (
            <LinkWrapper target='_blank' href={this.props.url} onMouseEnter={this.handleMouseEnter}
                         onMouseLeave={this.handleMouseLeave}>
                {this.props.children}
            </LinkWrapper>
        );
    };
}