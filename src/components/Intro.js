import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
    background: #263238;
    color: white;
    text-align: center;
    font-size: 2em;
    padding: 2% 20%;
    height: 100vh;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ticking = keyframes`
    60%, 
    100% {
        visibility: hidden;
    }
`;

const AnimationWrapper = styled.span`
    animation: ${ticking} 1s infinite;
    color: #ffe066;
    font-weight: 200;
`;

const StringWrapper = styled.span`
    color: #AED581;
`;

const LetWrapper = styled.span`
    color: #B388FF;
`;

export class Intro extends Component {

    render () {
        return (
            <Wrapper>
                <div>
                    <h2>Привет, меня зовут Роберт!</h2>
                    <h2>Я начинающий Фронтенд-разработчик</h2>
                </div>
                <p>
                    <LetWrapper>let</LetWrapper> someImportantText =
                    <StringWrapper>{' "'}<AnimationWrapper>|</AnimationWrapper>{'"'}</StringWrapper>
                </p>
                {this.props.children}
            </Wrapper>
        );
    }
}

export default Intro;