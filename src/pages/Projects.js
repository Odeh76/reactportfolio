import React from 'react';
import styled, {keyframes} from 'styled-components';
import test1 from '../img/test1.jpg';
import {bounce} from 'react-animations';
export default function Projects() {
    return (
        <ProjectsStyle>
            
        <section>
            <h6>Things I'm building...</h6>
            <div className="projects-container">
            <FadeAnimation>
                <ul>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                    <li className="image"></li>
                </ul>
                </FadeAnimation>
            </div>
        </section>
        </ProjectsStyle>
    )
}

export const fade = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
`

export const FadeAnimation = styled.section`
    animation: ${fade} 2.5s ease-in-out;
`

export const fadeNav = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.9;
    }

    100% {
        opacity: 1;
    }
`

export const FadeAnimationNav = styled.section`
    animation: ${fadeNav} 2s ease-in;
`





export const ProjectsStyle = styled.section`
    section {
        width: 100%;
        height: 130vh;
    }

    section h6 {
    color: var(--blackMain);
    font-weight: 500;
    font-family: Arial, Helvetica, sans serif;
    padding: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-align: center;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 125vh;
        width: 93%;
        grid-gap: 2rem;
        padding: 2rem;
        margin: auto;
        border-radius: 20%;
    }

    ul li {
        align-items: center;
        text-align: center;
        justify-content: center;
        list-style: none;
        background-color: var(--lightBlue);
    }

    .image {
        background-image: url(${test1});
        transition: all ease-out 0.4s;
    }

    .image:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`
// const bounceAnimation = keyframes`${bounce}`;

// const BouncyGrid = styled.section`
//     animation: 1s ${bounceAnimation};
// `

