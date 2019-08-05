import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  grid-column: 3 / -3;
  padding: 1.25rem 0 3.125rem;
  border-top: 1px solid #1F262D;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-column: 2 / -2;
  }

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    grid-column: 1 / -1;
    margin: 0 2rem;
  }

`

const Email = styled.div`
  grid-column: 1;
  font-size: 34px;

  a {
    text-decoration: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    grid-column: 1 / -1;
  }
`

const Social = styled.div`
  grid-column: 2;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    grid-column: 1 / -1;
  }
`

const SocialList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    text-align: right;
    font-family: 'SuisseIntl';

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      text-align: left;
      &:not(:last-child) {
        padding-bottom: 15px;
      }
    }

    a {
      font-family: 'SuisseIntl';
      text-decoration: none;
      font-size: 34px;
    }
  }
`

const EmailArrow = styled.span`
  display: inline-block;
  height: 50px;
  transform: rotate(315deg);
  width: 50px;
`

const Footer = () => {
  return (
    <Wrapper>
      <Email>
        <a href="mailto:laurenalandes@gmail.com">
          laurenalandes@<br/>
          gmail.com<br/>
          <EmailArrow>&#8600;</EmailArrow>
        </a>
      </Email>
      <Social>
        <SocialList>
          <li><a href="https://dribbble.com/laurenlandes" target="_blank">dribbble</a></li>
          <li><a href="https://www.instagram.com/internetbleu/" target="_blank">instagram</a></li>
          <li><a href="https://twitter.com/internetbleu" target="_blank">twitter</a></li>
        </SocialList>
      </Social>
    </Wrapper>
  )
}

export default Footer