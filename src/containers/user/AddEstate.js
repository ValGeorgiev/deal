import React, { Component } from 'react'
import Footer from '../../components/generics/main-footer/Footer'
import Header from '../../components/generics/main-header/Header'
import AddEstateUser from '../../components/add-estate-user/AddEstateUser'
import t from '../../translations'

class AddEstate extends Component {
  constructor(props) {
    super(props)
    console.log(window.location)
  }

  render() {
    return (
      <div>
        <Header />
        <AddEstateUser />
        <Footer />
      </div>
    )
  }
}

export default AddEstate
