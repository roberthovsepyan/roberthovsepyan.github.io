import React from 'react';
import styled from 'styled-components';

import GitHubIcon from '../icons/github_icon.svg';

const Wrapper = styled.div`
    background: #263238;
    font-size: 14px;
    text-align: center;
    padding: 5% 10% 3% 10%;
    color:  #8c8c8c;
`;

const LinkWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 30px;
    height: 25px;
    border-radius: 20px;
    padding-top: 3px;
    background: #37474F;
    cursor: pointer;
    
    &:hover {
        background: #455A64;
    }
`;

const GitHubLink = styled.a`
    text-decoration: none;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <p>Сделано мной © 2018.</p>
            <LinkWrapper>
            <GitHubLink href='https://github.com/roberthovsepyan' target='_blank'>
                <img src={GitHubIcon} width='20' height='20' alt='github_icon'/>
            </GitHubLink>
            </LinkWrapper>
        </Wrapper>
    );
};