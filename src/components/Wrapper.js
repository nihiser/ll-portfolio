import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr 50px;
  grid-template-rows: 50px auto;
  grid-column-gap: 30px;
  height: 100vh;
`

export default Wrapper
