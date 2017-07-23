import React, { Component } from 'react'

class DealModal extends Component {
  constructor(props) {
    super(props)

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    console.log('close')
  }

  render() {
    let {
      header,
      children
    } = this.props

    return (
      <div className='modal'>
        <div className='modal__wrapper'>
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
