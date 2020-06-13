import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';
import Header from '../components/Header';
import { FadeAnimation } from '../pages/Projects';
export default class Home extends Component {
    render() {
        return (
            <FadeAnimation>
            <HomeStyle>
                <div className="container">
                    <div className="description">
                        <h6>Hi, my name is</h6>
                        <h1><Header /></h1>
                        <h1>I build things on the internet...</h1>
                        <p>I'm an aspiring web developer living in Mountain View, California, specializing in building websites and web applications. </p>
                        <button>Connect</button>
                    </div>
                </div>
            </HomeStyle>
            </FadeAnimation>
        )
    }
}


export const HomeStyle = styled.div`
    .container {
        display: flex;
        width: 100%;
        height: 120vh;
        margin-bottom: 1.2rem;
        text-align: center;
        justify-content: center;
    }
    
    .container .description {
        color: var(--lightGray);
        width: 100%;
        height: 50vh;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .container .description h6 {
        text-align: left;
        margin-bottom: -1rem;
    }

    .container .description h1 {
        text-align: left;
        font-weight: 330;
        font-size: 5rem;
    }

    .container .description p {
        width: 40%;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
        margin-top: 2rem;
        padding: 1rem;
        letter-spacing: 0.1rem;
    }

    .container .description button {
        text-transform: capitalize;
        font-size: 1.4rem;
        border-radius: 0.5rem;
        border: 1px solid var(--blueMain);
        padding: 0.5rem 0.5rem;
        cursor: pointer;
        display: inline-block;
        margin: 0.2rem 0.5rem 0.2rem 0.5rem;
        transition: all 0.3s ease-in;
        float: left;
        &:hover {
          background: var(--lightBlue);
          transition: all 0.3s ease-in;
        }

        &:focus {
            outline: 0;
            transition: all 0.3s ease-out;
        }
        `;
