import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const nextWatchLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

// const nextWatchdark =
//   'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="userName" className="labelName">
          USERNAME
        </label>
        <input
          type="text"
          className="unerInput"
          id="userName"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="labelName">
          PASSWORD
        </label>
        <input
          type="password"
          className="unerInput"
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  onSubmitFailure = errormsg => {
    this.setState({errorMsg: errormsg, showSubmitError: true})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitForm = async event => {
    const {password, username} = this.state
    const userDetails = {username, password}
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    console.log(this.props)
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect path="/" />
    }
    return (
      <div className="login-bg-container">
        <form className="login-from-card" onSubmit={this.submitForm}>
          <img src={nextWatchLight} className="nextWatchLogo" alt="" />
          <div className="userInputCard">{this.renderUsernameField()}</div>

          <div className="userInputCard">{this.renderPasswordField()}</div>
          <div className="showPassword-checkBox">
            <input
              type="checkbox"
              id="ShowPassword"
              className="checkBoxInput"
            />
            <label htmlFor="ShowPassword" className="ShowPassword">
              Show Password
            </label>
          </div>

          <button className="submitButton" type="submit">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
