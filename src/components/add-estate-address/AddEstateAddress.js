import React, { Component } from 'react'
import t from '../../translations'
import './addestateaddress.scss'

class AddEstateAddress extends Component {
  constructor() {
    super()

    this.state = {
      readyState: false,
      readyClass: false,
      address: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
  }

  handleSubmit() {
    this.setState({
      readyClass: true
    })

    setTimeout(() => {
      this.setState({
        readyState: true
      })
    }, 2200)
  }

  handleEdit() {
    this.setState({
      readyClass: false,
      readyState: false
    })
  }

  updateAddress(event) {
    this.setState({
      address: event.target.value
    })
  }

  render() {
    const {
      readyState,
      readyClass,
      address
    } = this.state

    const {
      active
    } = this.props

    let activeClass = active ? '' : 'not-active'

    const animationClass = readyClass ? 'start-animation' : ''

    return (
      <div className="add-estate-address__wrapper">
        <div className={`${animationClass} address__wrapper`}>
          <div className={`shallow-block ${activeClass}`} />
          <h3 className='address__title'>Адрес на имота</h3>
          <div>
            Адрес за сега:
            <input type='text' onChange={this.updateAddress} value={address} />
          </div>
          <div className='address-btn__wrapper'>
            <button onClick={this.handleSubmit} className='btn btn-big btn-blue'>Продължи</button>
          </div>
        </div>
        {!!readyState ? (
          <div className='ready-state'>
            <p>Адресът е записан! Продължете със следващата стъпка!</p>
            <span onClick={this.handleEdit}>Промени</span>
          </div> ) : null
        }
      </div>
    )
  }
}

export default AddEstateAddress
