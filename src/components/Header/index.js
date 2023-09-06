import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import {MdExitToApp, MdMenu} from 'react-icons/md'

import {FaMoon} from 'react-icons/fa'

import {
  NavContainer,
  NextWatchLogoCardNav,
  NextWatchLogo,
  LightProfileLogoutCard,
  Profile,
  LogoutButton,
  LightProfileLogoutCardSmaldives,
  LogoutButtonSmall,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const nextWatchLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const nextWatchdark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const imgProfileUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeActiveTab, activeTab} = value
      const LogoUrl = isDarkTheme ? nextWatchdark : nextWatchLight
      const textColor = isDarkTheme ? '#ffffff' : '#000000'
      const activeTabBg = isDarkTheme ? '#424242' : '#00306e'
      const boderColor = isDarkTheme ? '#424242' : '#00306e'
      return (
        <NavContainer>
          <NextWatchLogoCardNav>
            <NextWatchLogo src={LogoUrl} alt="website logo" />
          </NextWatchLogoCardNav>
          <LightProfileLogoutCard>
            {isDarkTheme ? (
              <BsBrightnessHigh size={25} color="white" />
            ) : (
              <BsMoon size={25} color="red" />
            )}
            <Profile src={imgProfileUrl} alt="website logo" />
            <LogoutButton
              type="button"
              Color={activeTabBg}
              boderColor={boderColor}
            >
              Logout
            </LogoutButton>
          </LightProfileLogoutCard>
          <LightProfileLogoutCardSmaldives>
            <FaMoon color="red" />
            <MdMenu
              color="red"
              style={{marginRight: '10px', marginLeft: '20px', height: '25px'}}
            />
            <LogoutButtonSmall type="button">
              <MdExitToApp color="red" />
            </LogoutButtonSmall>
          </LightProfileLogoutCardSmaldives>
        </NavContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
