import React from 'react';
import styled from 'styled-components';
import portrait from '../img/portrait.JPG';
import { FaGithub,  FaLinkedin, FaCaretRight, FaRegWindowMinimize } from "react-icons/fa";
export default function About() {
    return (
        <AboutStyle>
        <div className="container">
        <div className="image"></div>
        <div className="description">
        <p>Hi, my name is Abdullah. I'm an aspiring web developer living in Mountain View, CA.</p>
        <p>I recently graduated from San Jose State University, with a degree in Management Information Systems and I am interested in new opportunities</p>
        <p>This portfolio was built with:</p>
        <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Styled components</li>
        </ul>
        </div>
        
       
        </div>
         
        </AboutStyle>
    )
}

export const AboutStyle = styled.div`
.container {
    display: flex;
    width: 100%;
    text-align: center;
    height: 100vh;    
    }
.container h3 {
    text-align: left;
}
    .image {
        background-image: url(${portrait});
        height: 50vh;
        width: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 1rem;
        margin-right: 1rem;
        transition: all 0.4s ease-in-out;
        opacity: 0.6;
        &:hover {
            cursor: pointer;
            opacity: 1;
            transition: all 0.4s ease-in-out;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        text-transform: uppercase;
    }

    ul li {
       list-style: none;
    }

    .container .description {
        font-family: Arial, Helvetica, sans-serif;
        width: 50%;
        float: right;
        float: top;
        color: var(--lightGray);
        letter-spacing: 0.1rem;
    }
`
