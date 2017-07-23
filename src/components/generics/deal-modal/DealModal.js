import React, { Component } from 'react'

class DealModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: this.props.open
    }

    this.closeModal = this.closeModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    })
  }

  closeModal() {
    this.setState({
      open: false
    })
  }

  render() {
    let {
      header,
      children,
      size
    } = this.props

    let {
      open
    } = this.state

    return (
      <div className={`modal ${!open ? 'hide' : ''}`}>
        <div className={`modal__wrapper ${size}`}>
          <div className='modal__wrapper__header'>
            <h3>{header}</h3>
            <span className='modal__closeBtn' onClick={this.closeModal}></span>
          </div>
          <div className='modal__body'>
            { children }
          </div>
        </div>
        <div className='modal__background' onClick={this.closeModal}></div>
      </div>
    )
  }
}

export default DealModal
