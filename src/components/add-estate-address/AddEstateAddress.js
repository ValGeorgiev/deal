import React, { Component } from 'react'
import t from 'translations'
import GoogleMap from '../google-map/GoogleMap'
import HomeMap from '../home-map/HomeMap'
import './addestateaddress.scss'

class AddEstateAddress extends Component {
  constructor() {
    super()

    this.state = {
      readyState: false,
      readyClass: false,
      address: '',
      region: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
  }

  selectRegion(that, { name }) {
    const {
      region
    } = this.state

    if (region === name) {
      d3.select(that).attr('id', '')
      this.setState({
        region: ''
      })
    } else {
      let selected = document.getElementById('selected')

      if (selected !== null) {
        selected.id = ''
      }

      this.setState({
        region: name
      })
      d3.select(that).attr('id', 'selected')
    }
  }

  componentDidMount() {
    initMaps(this.selectRegion.bind(this))
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
      address,
      region
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
            <HomeMap />
            <GoogleMap region={region} />
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
