import React, { Component } from 'react'
import t from 'translations'
import { connect } from 'react-redux'
import EstatesItem from '../estates-item/EstatesItem'
import Loading from 'components/generics/loading/Loading'
import './estates.scss'

class Estates extends Component {
  constructor() {
    super()
  }

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
              <EstatesItem estate={estate} />
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
        <div className='estate_grid__wrapper'>
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


export default connect(mapStateToProps)(Estates)
