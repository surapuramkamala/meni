// styledComponents.js

import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  max-height: 40px;
  align-items: center;
  padding: 30px;
`

export const NextWatchLogoCardNav = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`

export const NextWatchLogo = styled.img`
  max-width: 200px;
`

export const LightProfileLogoutCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Profile = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 23px;
  margin-right: 25px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => props.Color};
  font-size: 20px;
  font-family: 'Roboto';
  border: ${props => props.boderColor} solid 1px;
  border-radius: 5px;
  padding: 5px;
`

export const LightProfileLogoutCardSmaldives = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutButtonSmall = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  border: #ffffff solid 1px;
  border-radius: 5px;
  padding: 5px;
  border: none;
`
