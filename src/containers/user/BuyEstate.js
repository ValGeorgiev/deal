import React, { Component } from 'react'
import Footer from '../../components/generics/main-footer/Footer'
import Header from '../../components/generics/main-header/Header'
import BuyEstateType from '../../components/buy-estate-types/BuyEstateTypes'
import t from '../../translations'

class BuyEstate extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {

    return (
      <div>
        <Header />
        <BuyEstateType />
        <Footer />
      </div>
    )
  }
}

export default BuyEstate
