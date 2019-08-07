import React from "react"
import styled from 'styled-components'

const SvgWrapper = styled.div`
  position: relative;
  height: 100%;
`

const StyledSVG = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: -30px;

  @media (max-width: ${props => props.theme.breakpoints.xltablet}) {
    display: none;
  }
`

const BlockSvg = () => (
  <SvgWrapper>
    <StyledSVG width="111px" height="618px" viewBox="0 0 111 618">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Portfolio" transform="translate(-849.000000, -295.000000)">
          <g id="Group" transform="translate(849.000000, 295.000000)">
          <rect id="Rectangle" fill="#BDBEFF" x="0" y="222" width="111" height="396"></rect>
          <rect id="Rectangle" fill="#7C7DFF" x="0" y="111" width="111" height="111"></rect>
          <circle id="Oval" fill="#2427FF" cx="55.5" cy="55.5" r="55.5"></circle>
          </g>
        </g>
      </g>
    </StyledSVG>
  </SvgWrapper>
)

export default BlockSvg;