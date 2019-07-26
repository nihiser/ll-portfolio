import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper } from '../components'

const ContentWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(6, 1fr [col-start]);
`

const Content = styled.div`
  grid-column: 1/span 4;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const About = styled.div`
  grid-column: 5 / span 2;
  background: black;
  padding: 0 3rem;
`

const Biography = styled.p`
  color: white;
  display: table-cell;
  vertical-align: bottom;
  height: 95vh;
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <ContentWrapper>
      <Content>
        <h1>Selected client work</h1>
        {posts.map(post => 
        ( post.frontmatter.type == 'work' &&
          <Article
            title={post.frontmatter.title}
            slug={post.fields.slug}
            key={post.fields.slug}
          />
          )
        )}
        <hr></hr>
        <h1>Personal projects</h1>
        {posts.map(post => 
          ( post.frontmatter.type == 'project' &&
            <Article
              title={post.frontmatter.title}
              slug={post.fields.slug}
              key={post.fields.slug}
            />
            )
          )}
      </Content>
      <About>
          <Biography>
            Hey! I'm Lauren, a designer and cook based in Dayton, OH.
            In the past I've been a product designer, cheese connoisseur, and seamstress.
            These days, I make pasta and research North Korea in my free time.
          </Biography>
      </About>
    </ContentWrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          type
        }
      }
    }
  }
`
