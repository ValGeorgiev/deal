import React, { Component } from 'react'
import t from '../../../translations'
import DealModal from '../deal-modal/DealModal'
import Signup from '../../auth/signup/Signup'
import Login from '../../auth/login/Login'
import './header.scss'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      openLogin: false,
      openSignup: false
    }
    this.openLogin = this.openLogin.bind(this)
    this.openSignup = this.openSignup.bind(this)
  }

  openLogin() {
    this.setState({
      openLogin: true
    })
  }

  closeLogin() {
    this.setState({
      openLogin: false
    })
  }

  openSignup() {
    this.setState({
      openSignup: true
    })
  }

  closeSignup() {
    this.setState({
      openSignup: false
    })
  }

  closeSignupOpenLogin() {
    this.setState({
      openSignup: false,
      openLogin: true
    })
  }

  closeLoginOpenSignup() {
    this.setState({
      openSignup: true,
      openLogin: false
    })
  }

  render() {
    let { openLogin, openSignup } = this.state
    return (
      <div className="header_wrapper">
        <span>Logo</span>

        <div className="header_wrapper__login-section">
          <a className="header_wrapper__login-section__login" onClick={this.openLogin} href="javascript:void(0);">
            {t('login')}
          </a>
          <DealModal
            header="Login"
            open={openLogin}
            size='small'
            onClose={() => this.closeLogin()}
          >
            <Login openSignup={() => this.closeLoginOpenSignup()} />
          </DealModal>

          <a className="header_wrapper__login-section__signup" onClick={this.openSignup} href="javascript:void(0);">
            {t('sign.up')}
          </a>
          <DealModal
            header='Регистрация'
            open={openSignup}
            size='medium'
            onClose={() => this.closeSignup()}
          >
            <Signup openLogin={() => this.closeSignupOpenLogin()} />
          </DealModal>
        </div>

      </div>
    )
  }
}

export default Header
