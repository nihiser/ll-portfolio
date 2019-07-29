import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout, Wrapper, Header, SEO } from '../components'
import config from '../../config'

const Content = styled.article`
  grid-column: 2 / -2;
`

const Title = styled.h1`
  margin-bottom: 1rem;
  display: table-cell;
  vertical-align: middle;
`

const PostContent = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`
const TitleWrapper = styled.div`
  display: table;

  .DesignLink {
    display: table-cell;
    text-align: right;
    vertical-align: middle;
  }
`

const Post = ({ pageContext: { slug }, data: { mdx: postNode } }) => {
  const post = postNode.frontmatter

  return (
    <Layout customSEO>
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} article />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <PostContent className="PostContentWrapper">
            <TitleWrapper>
              <Title>{post.title}</Title>
              { post.designURL ?  <a href={ 'http://' + post.designURL } target="_blank" className="DesignLink">{post.designURL}</a> : ''}
            </TitleWrapper>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        designURL
        date(formatString: "MM/DD/YYYY")
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`
