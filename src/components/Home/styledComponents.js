import styled from 'styled-components'

export const AppHomeContainer = styled.div`
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
`
export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1140px;
  min-height: 90vh;
  background-color: ${props => props.bgColor};
`
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
