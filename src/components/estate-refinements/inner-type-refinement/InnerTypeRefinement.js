import React, { Component } from 'react'
import t from 'translations'
import './innertyperefinement.scss'

// @TODO delete this when categories/refinements are ready
const ESTATE_TYPES = {
  appartament: 'appartament',
  house: 'house',
  bussiness: 'bussiness',
  hotel: 'hotel',
  faculty: 'faculty',
  sports: 'sports',
  field: 'field'
}

class InnerTypeRefinement extends Component {
  constructor() {
    super()
  }

  createChildren(type = ESTATE_TYPES.appartament) {

    switch(type) {
      case ESTATE_TYPES.appartament: {
        return (
          <div>
            appartament
          </div>
        )
      }
      case ESTATE_TYPES.house: {
        return (
          <div>
            house
          </div>
        )
      }
      case ESTATE_TYPES.hotel: {
        return (
          <div>
            hotel
          </div>
        )
      }
      case ESTATE_TYPES.faculty: {
        return (
          <div>
            faculty
          </div>
        )
      }
      case ESTATE_TYPES.sports: {
        return (
          <div>
            sports
          </div>
        )
      }
      case ESTATE_TYPES.field: {
        return (
          <div>
            field
          </div>
        )
      }
    }
  }

  render() {
    const {
      estateType
    } = this.props

    return (
      <div className="inner-type-refinement__wrapper">
        {this.createChildren(estateType)}
      </div>
    )
  }
}

export default InnerTypeRefinement
