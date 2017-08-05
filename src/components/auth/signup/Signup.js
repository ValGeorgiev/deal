import React, { Component } from 'react'
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

export default Signup
