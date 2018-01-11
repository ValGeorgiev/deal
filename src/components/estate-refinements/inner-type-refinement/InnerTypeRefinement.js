import React, { Component } from 'react'
import t from 'translations'
import './innertyperefinement.scss'

class InnerTypeRefinement extends Component {
  constructor() {
    super()
  }

  createChildren(categories) {
    return categories.map((category) => {
      return (
        <div key={category._id}>
          <span>{category.name}</span>
        </div>
      )
    })
  }

  render() {
    const {
      categories
    } = this.props

    return (
      <div className="inner-type-refinement__wrapper">
        {this.createChildren(categories)}
      </div>
    )
  }
}

export default InnerTypeRefinement
