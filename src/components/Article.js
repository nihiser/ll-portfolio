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
  color: #1F262D;
  font-size: 34px;
  line-height: 55px;

  &:before {
    content: "↳";
    color: #1F262D;
  }

  article:hover & {
    color: #5052FF
  }
`

const Category = styled.p`
  color: #1F262D;
  display: none;
  font-size: 14px;
  text-transform: uppercase;

  article:hover & {
    display: block;
  }
`

const Divider = styled.span`
  flex-grow: 0;
  border-bottom: 1px solid black;
  margin: 0 25px;
  transition: flex-grow 1s;

  article:hover & {
    flex-grow: 1;
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
