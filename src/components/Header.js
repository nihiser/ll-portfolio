import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.header`
  grid-column: 2 / span 2;
  margin: auto 0;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    grid-column: 1 / -1;
    margin: auto 2rem;
  }
`

const Content = styled.div`
  margin: 0 auto;
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
