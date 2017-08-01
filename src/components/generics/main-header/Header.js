import React, { Component } from 'react'
import t from '../../../translations'
import DealModal from '../deal-modal/DealModal'
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
            <div> test </div>
          </DealModal>

          <a className="header_wrapper__login-section__signup" onClick={this.openSignup} href="javascript:void(0);">
            {t('sign.up')}
          </a>
          <DealModal
            header='Sign up'
            open={openSignup}
            size='small'
            onClose={() => this.closeSignup()}
          >
            <div> test </div>
          </DealModal>
        </div>

      </div>
    )
  }
}

export default Header
