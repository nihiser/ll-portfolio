import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Header, SEO, BlockSvg } from '../components'

const Content = styled.div`
  grid-column: 2/ span 3;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
`

const ContentHeader = styled.h1`
  color: #1F262D;
  font-size: 34px;
  line-height: 55px;
  margin-bottom: 0;
  padding-top: 50px;
`

const About = styled.div`
  grid-column: 6 / -1;
  grid-row: 1 / 3;
  background: black;
  padding: 3rem 4rem;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.xltablet}) {
    grid-column: 5 / -1;
    grid-row: 1 / 4;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    grid-row: -1;
    padding: 3.125rem 0 2rem 0;
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr 50px;
    grid-column-gap: 30px;
  }
`

const Biography = styled.p`
  font-family: 'SuisseIntl';
  font-size: 26px;
  color: white;
  position: absolute;
  bottom: 0;
  line-height: 40px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: relative;
  }
`

const BiographyWrapper = styled.div`
  height: 100%;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    margin: 0 2rem;
  }
`

const BioFont = styled.span`
  font-family: 'SuisseWorks';
`

const BioLink = styled.a`
  color: #5052FF;
  text-decoration: none;
`

const ArrowLogo = styled.div`
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
        <ArrowLogo />
      </Header>
      <Content>
        <ContentHeader>Selected client work</ContentHeader>
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

        <ContentHeader>Personal projects</ContentHeader>
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
      <BlockSvg />
      <About>
        <BiographyWrapper>
          <Biography>
            Hey! I'm Lauren, a <BioFont>designer</BioFont> and cook based in Dayton, OH.
            In the past I've been a <BioFont>product designer</BioFont>, cheese connoisseur, and seamstress.
            These days, I make pasta and research <BioFont>North Korea</BioFont> in my free time. 
            Click <BioLink href="mailto:laurenalandes@gmail.com">here</BioLink> to speak to me!
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
