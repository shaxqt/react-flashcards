import styled from 'styled-components/macro'

const GridStyled = styled.div`
  display: grid;
  grid-auto-flow: ${props => props.autoFlow || 'column'};
  grid-gap: ${props => props.gridGab || '10px'};
`
export default GridStyled
