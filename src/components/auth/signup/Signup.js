import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { signup } from '../../../actions/authentication'
import * as ACTIONS from '../../../actions'

import './signup.scss'

class Signup extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      name: '',
      familyName: '',
      password: ''
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

  submit() {
    const {
      email,
      name,
      familyName,
      password
    } = this.state
    console.log(this.props)
    this.props.actions.signup()
  }

  render() {
    const {
      email,
      name,
      familyName,
      password
    } = this.state

    const {
      openLogin
    } = this.props

    return (
      <div className='signup_wrapper'>
        <div className='input-wrapper'>
          <label>
            Email:
            <input type='email' value={email} onChange={this.changeEmail} />
          </label>
        </div>
        <div className='input-wrapper'>
          <label>
            Име:
            <input type='text' value={name} onChange={this.changeName} />
          </label>
        </div>
        <div className='input-wrapper'>
          <label>
            Фамилия:
            <input type='text' value={familyName} onChange={this.changeFamilyName} />
          </label>
        </div>
        <div className='input-wrapper'>
          <label>
            Парола:
            <input type='password' value={password} onChange={this.changePassword} />
          </label>
        </div>

        <div className='signup__btn-wrapper'>
          <button className='btn btn-big btn-blue' onClick={() => this.submit()}>Регистрирай ме!</button>
          <button className='signup__login-btn' onClick={() => openLogin()}>Имате регистрация?</button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // return {
  //   isMobile: state.app.isMobile
  // }

  return {}
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap


  // return {
  //   signup: () => dispatch(signup())
  // }
  // return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
