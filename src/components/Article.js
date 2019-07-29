import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
`

const Title = styled.h2`
  color: blue;
`

const Category = styled.p`
  color: black;
  display: none;

  article:hover & {
    display: block;
  }
`

const Divider = styled.span`
  display: none;
  flex-grow: 1;
  border-bottom: 1px solid black;
  margin: 0 15px;

  article:hover & {
    display: block;
  }
`

const Article = ({ category, title, slug }) => {
  return (
    <article>
      <StyledLink to={slug}>
        <Title>{title}</Title>
        <Divider />
        <Category>{category}</Category>
      </StyledLink>
    </article>
  )
}

export default Article

Article.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}
