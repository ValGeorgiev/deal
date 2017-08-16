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
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'add-estate')
  }

  render() {
    return (
      <div>
        <Header />
        <AddEstateUser />
        <AddEstateInfo />
        <AddEstateAddress />
        <Footer />
      </div>
    )
  }
}

export default AddEstate
