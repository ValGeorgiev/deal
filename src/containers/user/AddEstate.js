import React, { Component } from 'react'
import { connect } from 'react-redux'
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

  changeActiveConfig(config) {
    this.setState(config)
  }

  render() {
    const {
      user
    } = this.props

    const {
      activeAddEstateUser,
      activeAddEstateInfo,
      activeAddEstateAddress
    } = this.state

    return (
      <div>
        <Header />
        {_.isEmpty(user) ? <AddEstateUser active={activeAddEstateUser} change={(config) => this.changeActiveConfig(config)} /> : null}
        <AddEstateInfo active={_.isEmpty(user) ? activeAddEstateInfo : true} change={(config) => this.changeActiveConfig(config)} />
        <AddEstateAddress active={activeAddEstateAddress} change={(config) => this.changeActiveConfig(config)} />
        <Footer />
      </div>
    )
  }
}

AddEstate.defaultProps = {
  user: {}
}

const mapStateToProps = (state) => {

  const props = {
    user: state.authentication.user || state.getUser.user
  }
  return props
}

export default connect(mapStateToProps)(AddEstate)
