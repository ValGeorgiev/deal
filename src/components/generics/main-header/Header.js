import React, { Component } from 'react'
import t from '../../../translations'
import DealModal from '../deal-modal/DealModal'
import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className="header_wrapper">
        <span>Logo</span>

        <div className="header_wrapper__login-section">
          <a className="header_wrapper__login-section__login" href="javascript:void(0);">
            {t('login')}
          </a>
          <DealModal header="Login">
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
