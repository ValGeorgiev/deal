import React, { Component } from 'react'
import Footer from '../../components/generics/main-footer/Footer'
import Header from '../../components/generics/main-header/Header'
import AddEstateUser from '../../components/add-estate-user/AddEstateUser'
import AddEstateInfo from '../../components/add-estate-info/AddEstateInfo'
import AddEstateAddress from '../../components/add-estate-address/AddEstateAddress'
import t from '../../translations'

class AddEstate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeAddEstateUser: true,
      activeAddEstateInfo: false,
      activeAddEstateAddress: false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'add-estate')
  }

  changeActiveConfig(config) {
    this.setState(config)
  }

  render() {

    const {
      activeAddEstateUser,
      activeAddEstateInfo,
      activeAddEstateAddress
    } = this.state

    return (
      <div>
        <Header />
        <AddEstateUser active={activeAddEstateUser} change={(config) => this.changeActiveConfig(config)} />
        <AddEstateInfo active={activeAddEstateInfo} change={(config) => this.changeActiveConfig(config)} />
        <AddEstateAddress active={activeAddEstateAddress} change={(config) => this.changeActiveConfig(config)} />
        <Footer />
      </div>
    )
  }
}

export default AddEstate
