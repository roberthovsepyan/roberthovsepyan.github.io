import React, {Component} from 'react';
import styled from 'styled-components';

import ReactIcon from '../react_icon.png';

const Wrapper = styled.div`
    background: #F5F5F5;
    font-size: 1.3em;
    text-align: center;
    padding: 5% 10%;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    @media (max-width: 880px) {
        flex-direction: column;
    }
`;


const BlockWrapper = styled.div`
    display: inline-flex;
    margin: 2% 4%;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    font-size: 30px;
`;

const LogoWrapper = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: ${props => props.color};
`;

export default class Skills extends Component {
    render () {
        return (
            <Wrapper>
                <h1>Ключевые Навыки</h1>
                <ContentWrapper>
                <BlockWrapper>
                    <LogoWrapper color='#FF5722'>&lt;/&gt;</LogoWrapper>
                    <p>HTML</p>
                </BlockWrapper>
                <BlockWrapper>
                    <LogoWrapper color='#2962FF'>{'{ }'}</LogoWrapper>
                    <p>CSS</p>
                </BlockWrapper>
                <BlockWrapper>
                    <LogoWrapper color='#FBC02D'>{'({ })'}</LogoWrapper>
                    <p>JavaScript</p>
                </BlockWrapper>
                <BlockWrapper>
                    <img height='55px' width='80px' src={ReactIcon} alt='react-logo'/>
                    <br/>
                    <p>React + Redux</p>
                </BlockWrapper>
                </ContentWrapper>
            </Wrapper>
        );
    }
}