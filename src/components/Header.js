import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

const Wrapper = styled.header`
  grid-column: 1 / -1;
  background-color: blue;
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  a {
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.white};
    }
  }
`

const Header = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
)

export default Header

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
