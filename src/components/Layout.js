import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import SEO from './SEO'
import theme from '../../config/theme'
import Fonts from './Fonts'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SuisseIntl";
    font-style: normal;
    font-weight: 100;
    src: local("Suisse Intl"), local("Suisse-Intl"), url(${Fonts.SuisseIntl}) format("woff");
  }

  @font-face {
    font-family: "SuisseWorks";
    font-style: normal;
    font-weight: 100;
    src: local("Suisse Works"), local("Suisse-Works"), url(${Fonts.SuisseWorks}) format("woff");
  }

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

  html {
    font-family: 'SuisseIntl';
    font-size: ${props => props.theme.baseFontSize};
    
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 16px;
    }
  }
  
  p {
    margin: 0 0 1.5rem 0;
    font-size: 18px;
    line-height: 28px;
  }

  h1,  {
    font-weight: 100;
  }

  .PostContentWrapper *:not(.PostImageWrapper) {
    grid-column: 2 / -1;

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      grid-column: 1 / -1;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  
  img {
    height: 100%;
    width: 100%;
    
    &..PostImage {
      width: 100%;
      margin: 0 !important;
    }
  }

  a {
    font-family: 'SuisseWorks';
    color: #1F262D;

    &:hover {
      color: #5052FF
    }
  }
  
  .PostImageWrapper {
    grid-column: 1 / -1
    margin-top: 1.5rem;
    margin-bottom: 3.125rem;
    margin: 1.5rem 0 3.125rem 0;

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
