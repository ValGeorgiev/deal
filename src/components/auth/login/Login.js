import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from '../../../actions'
import t from '../../../translations'

import './login.scss'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      error: null
    }

    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  changePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  validateLoginForm(callback) {
    const {
      email,
      password
    } = this.state

    const regex = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/

    if (!regex.test(email)) {
      callback({
        message: 'The email is not correct!'
      })
      return
    }

    if (password.length < 5 || password.length > 20) {
      callback({
        message: 'The password is not correct!'
      })
      return
    }

    callback(null)
    return
  }

  submit() {
    const {
      email,
      password
    } = this.state

    this.validateLoginForm((err) => {
      if (!err) {
        this.props.actions.login({
          email,
          password
        })
        this.setState({
          error: null
        })
      } else {
        this.setState({
          error: err.message
        })
      }
    })
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state

    const {
      openSignup,
      _error
    } = this.props

    return (
      <div className='login_wrapper'>
        <div className='input-wrapper'>
          <label>
            {t('login.email')}
            <input type='email' value={email} onChange={this.changeEmail} />
          </label>
        </div>
        <div className='input-wrapper'>
          <label>
            {t('login.password')}
            <input type='password' value={password} onChange={this.changePassword} />
          </label>
        </div>
        {!!error || !!_error ? (
          <div className='error-wrappper'>
            <p>{error || _error}</p>
          </div>
          ) : null
        }

        <div className='login__btn-wrapper'>
          <button className='btn btn-big btn-blue' onClick={() => this.submit()}>{t('login.login')}</button>
          <button className='login__signup-btn' onClick={() => openSignup()}>{t('login.уou.dont.have.registration')}</button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    _error: state.authentication.message,
    success: state.authentication.success_message
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
