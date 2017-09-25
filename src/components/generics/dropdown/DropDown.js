import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dropdown.scss'

class DropDown extends Component {

  createChildren() {
    const {
      items,
      itemClass,
      change
    } = this.props

    return items.map((item, index) => {
      return (
        <div key={`${item}-${index}`} className={`dropdown__item ${itemClass}`}>
          <span onClick={(item) => change(item)}>{item}</span>
        </div>
      )
    })
  }

  render() {
    const {
      wrapperClass,
      open
    } = this.props

    if (open) {
      return (
        <div className={`dropdown__wrapper ${wrapperClass}`}>
          { this.createChildren() }
        </div>
      )
    }
    return null
  }
}

export default DropDown
