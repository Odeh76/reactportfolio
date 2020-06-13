import React, { Component } from 'react'
import styled from 'styled-components';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
            <footer>
                <div className="icon-container">
                    <FaGithub />
                    <FaLinkedinIn />
                </div>
            </footer>
            </FooterStyle>
        )
    }
}

export const FooterStyle = styled.footer`
    width: 100%;
    height: 10vh;

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.5rem;
    }
`
