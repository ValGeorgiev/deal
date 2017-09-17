import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import t from 'translations'

import './signup.scss'

class Signup extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      name: '',
      familyName: '',
      password: '',
      error: null
    }

    this.changeEmail = this.changeEmail.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeFamilyName = this.changeFamilyName.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  changeName(event) {
    this.setState({
      name: event.target.value
    })
  }

  changeFamilyName(event) {
    this.setState({
      familyName: event.target.value
    })
  }

  changePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  validateSignupForm(callback) {
    const {
      email,
      name,
      familyName,
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

    if (name.trim().length === 0 || familyName.trim().length === 0) {
      callback({
        message: 'The names are mandatory!'
      })
      return
    }

    callback(null)
    return
  }

  submit() {
    const {
      email,
      name,
      familyName,
      password
    } = this.state

    this.validateSignupForm((err) => {
      if (!err) {
        this.props.actions.signup({
          email,
          name,
          familyName,
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
      name,
      familyName,
      password,
      error
    } = this.state

    const {
      openLogin,
      _error
    } = this.props

    return (
      <div className='signup_wrapper'>
        <div className='input-wrapper'>
          <label>
            {t('sign.up.email')}
            <input type='email' value={email} onChange={this.changeEmail} />
          </label>
        </div>
        <div className='input-wrapper'>
          <label>
            {t('sign.up.name')}
            <input type='text' value={name} onChange={this.changeName} />
          </label>
        </div>
        <div className='input-wrapper'>
          <label>
            {t('sign.up.family.name')}
            <input type='text' value={familyName} onChange={this.changeFamilyName} />
          </label>
        </div>
        <div className='input-wrapper'>
          <label>
            {t('sign.up.password')}
            <input type='password' value={password} onChange={this.changePassword} />
          </label>
        </div>
        {!!error || !!_error ? (
          <div className='error-wrappper'>
            <p>{error || _error}</p>
          </div>
          ) : null
        }

        <div className='signup__btn-wrapper'>
          <button className='btn btn-big btn-blue' onClick={() => this.submit()}>{t('sign.up.register.me')}</button>
          <button className='signup__login-btn' onClick={() => openLogin()}>{t('sign.up.you.have.registration')}</button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    _error: state.user.message
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
