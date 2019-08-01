import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import SEO from './SEO'
import theme from '../../config/theme'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  ::selection {
    color: ${props => props.theme.colors.bg};
    background: ${props => props.theme.colors.primary};
  }
  html {
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: ${props => props.theme.baseFontSize};
    h1 {
      font-size: 3.052rem;
    }
    h2 {
      font-size: 2.441rem;
    }
    h3 {
      font-size: 1.953rem;
    }
    h4 {
      font-size: 1.563rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 2.488rem;
      }
      h2 {
        font-size: 2.074rem;
      }
      h3 {
        font-size: 1.728rem;
      }
      h4 {
        font-size: 1.444rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.grey.dark};
  }

  .PostContentWrapper *:not(.PostImageWrapper){
    grid-column: 2 / -1
  }
  
  img {
    height: 100%;
    width: 100%;
  }

  a {
    color: #1F262D;

    &:hover {
      color: #5052FF
    }
  }
  
  .PostImageWrapper {
    grid-column: 1 / -1
  }

`


const Layout = ({ children, customSEO }) => {
  return (
    <MDXProvider 
      components={{
        wrapper: ({ children, ...props }) => {
          return (
          React.Children.map(children, (child, i) => {
            let element = child.props.children
            if (!element.props) {
              return child
            } else if (element.props.mdxType == "img"){
              return (
                <div className="PostImageWrapper">
                  <img className="PostImage" src={element.props.src} alt={element.props.alt}/>
                </div>
              )
            }
            else {
              return child
            }
          })
          )
        },
      }}>
      <ThemeProvider theme={theme}>
        <>
          {!customSEO && <SEO />}
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    </MDXProvider>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
