import React from 'react'

import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,

    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import {     faGithub } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
display: flex;
justify-content: space-around;
align-items: center;
height: 40px;
width: 100vw;
background-color: #86a3b8;
`
const StyledInfoWrapper = styled.div`
display: flex;
color: #537FE7;
padding: 3px;
transition: 0.5s linear;
&:hover {
    transform: scale(1.2)


`
const StyledPersonalInfo = styled.p`
color: white;
margin-left: 15px;

`
const Styleda = styled.a`
color: white;
text-decoration: none;
`

const Footer = () => {
    return (
    <StyledFooter>
        <StyledInfoWrapper>
            <FontAwesomeIcon icon={faUser}/>
            <StyledPersonalInfo>Hubert Koniecko</StyledPersonalInfo>
        </StyledInfoWrapper>
        <StyledInfoWrapper>
            <FontAwesomeIcon icon={faPhone}/>
            <StyledPersonalInfo>+48 507 935 234</StyledPersonalInfo>
        </StyledInfoWrapper>
        <StyledInfoWrapper>
            <FontAwesomeIcon icon={faGithub}/>
            <StyledPersonalInfo><Styleda href="https://github.com/Hubsoon96">https://github.com/Hubsoon96</Styleda></StyledPersonalInfo>
        </StyledInfoWrapper>

    </StyledFooter>)
}

export default Footer