import React, { Component } from 'react'
import t from 'translations'
import { connect } from 'react-redux'
import BuyEstateGridItem from '../buy-estate-grid-item/BuyEstateGridItem'
import Loading from 'components/generics/loading/Loading'
import MunicipalityMap from '../municipality-map/MunicipalityMap'
import './buyestategrid.scss'

class BuyEstateGrid extends Component {

  createChildren() {
     const {
      estates
    } = this.props

    if (estates) {
      if (estates.length === 0) {
        return (
          <div>
            Няма такива имоти!
          </div>
        )
      } else {

        return estates.map((estate) => {
          return (
            <div key={estate._id} className='col col-xs-100 col-md-50'>
              <BuyEstateGridItem estate={estate} />
            </div>
          )
        })
      }
    } else {
      return <Loading />
    }
  }

  render() {

    return (
      <div className="buy-estate-grid__wrapper col col-lg-80">
        <h3 className='grid__title'>Имоти</h3>
        <div className='buy-estate-grid__grid'>
          <MunicipalityMap />
          {this.createChildren()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  const props = {
    estates: state.estate.estates
  }
  return props
}


export default connect(mapStateToProps)(BuyEstateGrid)
