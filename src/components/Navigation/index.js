import {NavBar, NavItemsContainer} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const Navigation = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeActiveTab, activeTab} = value
      const themeColor = isDarkTheme ? '#000000' : '#ffffff'
      const textColor = isDarkTheme ? '#ffffff' : '#000000'
      const activeTabBg = isDarkTheme ? '#424242' : '#e2e8f0'

      return (
        <>
          <NavBar>
            <NavItemsContainer>rajesh</NavItemsContainer>
          </NavBar>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Navigation
