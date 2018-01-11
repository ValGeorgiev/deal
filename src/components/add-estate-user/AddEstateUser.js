import React, { Component } from 'react'
import Login from '../auth/login/Login'
import t from 'translations'
import './addestateuser.scss'

class AddEstateUser extends Component {
  constructor() {
    super()

    this.state = {
      readyState: false,
      readyClass: false
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    const {
      change
    } = this.props

    this.setState({
      readyClass: true
    })

    setTimeout(() => {
      this.setState({
        readyState: true
      })
      change({
        activeAddEstateUser: false,
        activeAddEstateInfo: true,
        activeAddEstateAddress: false
      })
    }, 2200)
  }

  render() {
    const { readyState, readyClass } = this.state

    const {
      active
    } = this.props

    let activeClass = active ? '' : 'not-active'

    const animationClass = readyClass ? 'start-animation' : ''

    return (
      <div className='add-estate-user__wrapper'>
        <div className={`${animationClass} user__wrapper`}>
          <div className={`shallow-block ${activeClass}`} />
          <div className='user__login'>
            <h3>Влезте в профила си!</h3>
            <div className='input-wrapper'>
              <label>
                {t('login.email')}
                <input type='email' />
              </label>
            </div>
            <div className='input-wrapper password'>
              <label>
                {t('login.password')}
                <input type='password' />
              </label>
            </div>
          </div>
          <div className='login-divider'>
            &
          </div>
          <div className='guess__login'>
            <h3>Продължете като гост - въведете email и две имена.</h3>
            <div className='input-wrapper email'>
              <label>
                Email:
                <input type='email' />
              </label>
            </div>
            <div className='input-wrapper'>
              <label>
                Names:
                <input type='text' />
              </label>
            </div>
          </div>
          <div className='user-estate-buttons'>
            <button className='btn btn-blue btn-big' onClick={this.handleLogin}>Вход</button>
          </div>
        </div>
        {!!readyState ? (
          <div className='ready-state'>
            <p>Здравейте, Валентин Георгиев. Може да продължите със следващите стъпки!</p>
          </div> ) : null
        }
      </div>
    )
  }
}

export default AddEstateUser
