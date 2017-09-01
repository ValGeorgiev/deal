import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../../../actions'
import t from '../../../translations'
import DealModal from '../deal-modal/DealModal'
import Signup from '../../auth/signup/Signup'
import Login from '../../auth/login/Login'
import { overwriteLocalStorage } from '../../../scripts/storage'
import './header.scss'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      openLogin: false,
      openSignup: false,
      loggedUser: false,
      user: {}
    }

    this.openLogin = this.openLogin.bind(this)
    this.openSignup = this.openSignup.bind(this)
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.login) {
      this.closeLogin()

      this.setState({
        loggedUser: true,
        user: nextProps.user
      })
    }
  }

  componentWillMount() {
    const userID = window.localStorage.getItem('uid')

    if (userID) {
      this.props.actions.getUserByID(userID)
      this.setState({
        loggedUser: true
      })
    }
  }

  componentDidMount() {
    overwriteLocalStorage(() => {
      console.log('set storage')
    }, () => {
      console.log('clear storage')
      this.setState({
        loggedUser: false
      })
    })
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
    let {
      openLogin,
      openSignup,
      loggedUser,
      user
    } = this.state

    user = _.isEmpty(user) ? this.props.user : user

    return (
      <div className="header_wrapper">
        <Link to='/'>Logo</Link>

        {
          loggedUser && user ? (
            <div>
              Здравей, {user.firstName} {user.lastName}

              <Link to='/favourites'>Любими {user.favourites.length}</Link>
            </div>
          ) : (
            <div className="header_wrapper__login-section">
              <a className="header_wrapper__login-section__login" onClick={this.openLogin} href="javascript:void(0);">
                {t('login')}
              </a>
              <DealModal
                header={t('login.title')}
                open={openLogin}
                size='medium'
                onClose={() => this.closeLogin()}
              >
                <Login openSignup={() => this.closeLoginOpenSignup()} />
              </DealModal>

              <a className="header_wrapper__login-section__signup" onClick={this.openSignup} href="javascript:void(0);">
                {t('sign.up')}
              </a>
              <DealModal
                header={t('sign.up.title')}
                open={openSignup}
                size='medium'
                onClose={() => this.closeSignup()}
              >
                <Signup openLogin={() => this.closeSignupOpenLogin()} />
              </DealModal>
            </div>
          )

        }

      </div>
    )
  }
}

Header.defaultProps = {
  user: {}
}

const mapStateToProps = (state) => {

  return {
    login: state.authentication.login,
    user: state.getUser.user
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
