import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import t from 'translations'
import DealModal from '../deal-modal/DealModal'
import Signup from 'components/auth/signup/Signup'
import Login from 'components/auth/login/Login'
import { overwriteLocalStorage } from 'scripts/storage'
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
    this.logout = this.logout.bind(this)
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.user) {
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

  logout() {
    const {
      actions
    } = this.props

    window.localStorage.clear()
    actions.logout()
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

    let {
      favourites
    } = this.props

    user = _.isEmpty(user) ? this.props.user : user

    if (!favourites && user.favourites) {
      favourites = user.favourites
    }

    return (
      <div className="header_wrapper">
        <Link to='/'>Logo</Link>
        {
          loggedUser && user ? (
            <div>
              Здравей, {user.firstName} {user.lastName}

              <Link to={`/favourites/${user.favID}`}>Любими {favourites.length}</Link>
              <button onClick={this.logout}>Изход</button>
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
  user: {
    favourites: []
  }
}

const mapStateToProps = (state) => {

  return {
    user: state.user.user,
    favourites: state.favourites.favourites
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
