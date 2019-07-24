import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Title = styled.h2`
  color: blue;
`

const Article = ({ title, slug }) => {
  return (
    <article>
      <Link to={slug}>
        <Title>{title}</Title>
      </Link>
    </article>
  )
}

export default Article

Article.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}
