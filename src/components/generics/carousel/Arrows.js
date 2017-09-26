import React, { PureComponent } from 'react'

export class NextArrow extends PureComponent {

  render() {
    const {
      className,
      style,
      onClick
    } = this.props

    return (
      <div
        className={className}
        style={{...style}}
        onClick={onClick}
      ></div>
    )
  }
}

export class PrevArrow extends PureComponent {

  render() {
    const {
      className,
      style,
      onClick
    } = this.props

    return (
      <div
        className={className}
        style={{...style}}
        onClick={onClick}
      ></div>
    )
  }
}
