import React, { Component } from 'react'
import t from '../../../translations'
import DealModal from '../deal-modal/DealModal'
import './header.scss'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
    this.openLogin = this.openLogin.bind(this)
  }

  openLogin() {
    this.setState({
      open: true
    })
  }

  render() {
    let { open } = this.state
    return (
      <div className="header_wrapper">
        <span>Logo</span>

        <div className="header_wrapper__login-section">
          <a className="header_wrapper__login-section__login" onClick={this.openLogin} href="javascript:void(0);">
            {t('login')}
          </a>
          <DealModal header="Login" open={open} size='small'>
            <div> test </div>
          </DealModal>
          <a className="header_wrapper__login-section__signup" href="javascript:void(0);">
            {t('sign.up')}
          </a>
        </div>

      </div>
    )
  }
}

export default Header
