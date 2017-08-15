import React, { Component } from 'react'
import Footer from '../../components/generics/main-footer/Footer'
import Header from '../../components/generics/main-header/Header'
import AddEstateUser from '../../components/add-estate-user/AddEstateUser'
import AddEstateInfo from '../../components/add-estate-info/AddEstateInfo'
import t from '../../translations'

class AddEstate extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <AddEstateUser />
        <AddEstateInfo />
        <Footer />
      </div>
    )
  }
}

export default AddEstate
