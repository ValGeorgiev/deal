import React, { Component } from 'react'
import t from 'translations'
import GoogleMap from '../google-map/GoogleMap'
import HomeMap from '../home-map/HomeMap'
import './addestateaddress.scss'

class AddEstateAddress extends Component {
  constructor() {
    super()

    this.state = {
      address: '',
      region: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
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

  }

  updateAddress(event) {
    this.setState({
      address: event.target.value
    })
  }

  render() {
    const {
      address,
      region
    } = this.state

    const {
      active
    } = this.props

    let activeClass = active ? '' : 'not-active'

    return (
      <div className="add-estate-address__wrapper">
        <div className='address__wrapper'>
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
      </div>
    )
  }
}

export default AddEstateAddress
