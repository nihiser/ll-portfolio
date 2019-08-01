import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Header, SEO } from '../components'

const Content = styled.div`
  grid-column: 2/span 3;
`

const About = styled.div`
  grid-column: 6 / -1;
  grid-row: 1 / 3;
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

const Arrow = styled.div`
  width: 0px;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid black;
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Wrapper>
     <SEO postPath="/" />
      <Header>
        <Arrow />
      </Header>
      <Content>
        <h1>Selected client work</h1>
        {posts.map(post => 
        ( post.frontmatter.type == 'work' &&
          <Article
            title={post.frontmatter.title}
            category={post.frontmatter.category}
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
              category={post.frontmatter.category}
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
          category
          designURL
          type
        }
      }
    }
  }
`
