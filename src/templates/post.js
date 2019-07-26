import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout, Wrapper, Header, SEO } from '../components'
import config from '../../config'

const Content = styled.article`
  grid-column: 5 / -1;
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`

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
          <Title>{post.title}</Title>
          <PostContent>
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
