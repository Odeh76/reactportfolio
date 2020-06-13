import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Spring} from 'react-spring';
import {FadeAnimationNav} from '../pages/Projects';
export default class Navbar extends Component {
    render() {
        return (
            <FadeAnimationNav>
            <NavStyle>
                <Router>
            <nav className="nav-bar">
                <ul>
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/resume"><li>Resume</li></Link>
                </ul>
            </nav>
            </Router>
            </NavStyle>
            </FadeAnimationNav>
        )
    }
}

export const NavStyle = styled.nav`
    
    text-align: center;
    width: 100%;
    height: 20vh;
    padding: 1rem;
    align-items: center;
    color: var(--lightGray);
    background: var(--whiteMain);

    ul {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1rem;
        align-items: center;
        text-align: center;
        list-style: none;
    }

    ul li {
        padding-right: 30px;
        padding-left: 30px;
        color: var(--lightGray);
    }

    nav ul li:hover {
        transition: smooth ease-in-out 0.2s;
        font-weight: 500;
        cursor: pointer;
        color: var(--lightGray);
        outline: 0 !important;
    }
`