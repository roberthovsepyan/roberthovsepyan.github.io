import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const Wrapper = styled.div`
    background-color: #ffe066;
    font-size: 1.3em;
    text-align: center;
    padding: 5% 10%;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    font-size: 21px;
    flex-wrap: wrap;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        font-size: 17px;
    }
`;

const BlockWrapper = styled.div`
    display: inline-flex;
    margin: 2% 4%;
    align-items: center;
    flex-direction: column;
    width: 280px;
    justify-content: space-between;
`;


export const Projects = () => {

        return (
            <Wrapper>
                <h1>Персональные Проекты</h1>
                <ContentWrapper>
                    <BlockWrapper>
                        <h2>TaskSimple</h2>
                        <p>Минималистичный таск-менеджер, использующий технологию Drag & Drop.</p>
                        <BlockWrapper>
                            <Link url='https://roberthovsepyan.github.io/tasksimple-v2/#/'>Демонстрация</Link>
                            <Link url='https://github.com/roberthovsepyan/tasksimple-v2'>Код</Link>
                        </BlockWrapper>
                    </BlockWrapper>
                    <BlockWrapper>
                        <h2>Yoda: Lyrics Master</h2>
                        <p>Найди слова своей любимой песни и посмотри как произнес бы их Йода!
                            Использует MusixMatch и Yodaspeak API.</p>
                        <BlockWrapper>
                            <Link url='https://roberthovsepyan.github.io/yoda-lyrics-master/#/'>Демонстрация</Link>
                            <Link url='https://github.com/roberthovsepyan/yoda-lyrics-master'>Код</Link>
                        </BlockWrapper>
                    </BlockWrapper>
                    <BlockWrapper>
                        <h2>React Game</h2>
                        <p>Небольшая веселая игра, построенная на React.</p>
                        <BlockWrapper>
                            <Link url='https://roberthovsepyan.github.io/react-game/'>Демонстрация</Link>
                            <Link url='https://github.com/roberthovsepyan/react-game'>Код</Link>
                        </BlockWrapper>
                    </BlockWrapper>
                    <BlockWrapper>
                        <h2>Digital Keyboard</h2>
                        <p>Играй на различных инструментах с помощью своей клавиатуры!</p>
                        <BlockWrapper>
                            <Link url='https://roberthovsepyan.github.io/digital-keyboard/'>Демонстрация</Link>
                            <Link url='https://github.com/roberthovsepyan/digital-keyboard'>Код</Link>
                        </BlockWrapper>
                    </BlockWrapper>
                </ContentWrapper>
            </Wrapper>
        );
};