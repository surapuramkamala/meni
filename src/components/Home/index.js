import {Component} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'

import {AppHomeContainer, HomeContainer, LeftSection} from './styledComponents'
import Header from '../Header'

import Navigation from '../Navigation'

class Home extends Component {
  handleClick = () => {
    console.log('handleClick')
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, changeActiveTab, activeTab} = value
          const themeColor = isDarkTheme ? '#000000' : '#ffffff'
          const textColor = isDarkTheme ? '#ffffff' : '#000000'
          const activeTabBg = isDarkTheme ? '#424242' : '#e2e8f0'
          return (
            <>
              <AppHomeContainer bgColor={themeColor}>
                <Header />
                <HomeContainer>
                  <LeftSection>
                    <Navigation />
                  </LeftSection>
                </HomeContainer>
              </AppHomeContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
