import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import './App.css'

import NxtWatchContext from './context/NxtWatchContext'

class App extends Component {
  state = {
    activeTab: 'Home',
    isDarkTheme: false,
    savedVideos: [],
  }

  // Define changeActiveTab, toggleTheme, and addVideo methods here

  render() {
    const {activeTab, isDarkTheme, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          changeActiveTab: this.changeActiveTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          savedVideos,
          activeTab,
          isDarkTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
