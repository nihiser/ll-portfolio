import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper } from '../components'

const Content = styled.div`
  grid-column: 1/span 4;
  padding: 1rem;
`

const About = styled.div`
  grid-column: 5 / span 2;
  background: black;
  padding: 3rem 4rem;
  position: relative;
`

const Biography = styled.p`
  color: white;
  position: absolute;
  bottom: 0;
  line-height: 1.5;
`

const BiographyWrapper = styled.div`
  height: 100%;
  position: relative;
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Wrapper>
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
        <BiographyWrapper>
          <Biography>
            Hey! I'm Lauren, a designer and cook based in Dayton, OH.
            In the past I've been a product designer, cheese connoisseur, and seamstress.
            These days, I make pasta and research North Korea in my free time.
          </Biography>
        </BiographyWrapper>
      </About>
    </Wrapper>
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
