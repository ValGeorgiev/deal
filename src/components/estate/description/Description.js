import React, { PureComponent } from 'react'
import './description.scss'

class Description extends PureComponent {

  render() {
    const {
      info
    } = this.props

    return (
      <div className="description__wrapper">
        <span> {info} </span>
      </div>
    )
  }
}

export default Description
