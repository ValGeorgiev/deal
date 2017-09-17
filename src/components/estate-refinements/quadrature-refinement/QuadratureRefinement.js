import React, { Component } from 'react'
import t from 'translations'
import './quadraturerefinement.scss'

class QuadratureRefinement extends Component {
  constructor() {
    super()
    this.state = {
      quadratureFrom: '',
      quadratureTo: ''
    }

    this.increaseFromQuadrature = this.increaseFromQuadrature.bind(this)
    this.increaseToQuadrature = this.increaseToQuadrature.bind(this)
    this.decreaseFromQuadrature = this.decreaseFromQuadrature.bind(this)
    this.decreaseToQuadrature = this.decreaseToQuadrature.bind(this)
  }

  increaseFromQuadrature() {
    const {
      quadratureFrom,
      quadratureTo
    } = this.state
    let quadrature = {}

    if (quadratureFrom === '') {
      quadrature.quadratureFrom = 10
    } else {
      quadrature.quadratureFrom = quadratureFrom + 10
    }

    if (quadrature.quadratureFrom >= quadratureTo) {
      quadrature.quadratureTo = quadrature.quadratureFrom + 10
    }

    this.setState(quadrature)
  }

  increaseToQuadrature() {
    const {
      quadratureTo
    } = this.state
    let newQuadrature = null

    if (quadratureTo === '') {
      newQuadrature = 10
    } else {
      newQuadrature = quadratureTo + 10
    }

    this.setState({
      quadratureTo: newQuadrature
    })
  }

  decreaseFromQuadrature() {
    const {
      quadratureFrom
    } = this.state

    let newQuadrature = null

    if (quadratureFrom === '') {
      return;
    } else if (quadratureFrom === 10) {
      newQuadrature = ''
    } else {
      newQuadrature = quadratureFrom - 10
    }

    this.setState({
      quadratureFrom: newQuadrature
    })
  }

  decreaseToQuadrature() {
    const {
      quadratureTo,
      quadratureFrom
    } = this.state

    let quadrature = {}

    if (quadratureTo === '') {
      return;
    } else if (quadratureTo === 10) {
      quadrature.quadratureTo = ''
    } else {
      quadrature.quadratureTo = quadratureTo - 10
    }

    if (quadrature.quadratureTo <= quadratureFrom) {
      if (quadratureFrom === 10 || quadratureFrom === '') {
        quadrature.quadratureFrom = ''
      } else {
        quadrature.quadratureFrom = quadratureFrom - 10
      }
    }

    this.setState(quadrature)
  }

  render() {
    const {
      quadratureTo,
      quadratureFrom
    } = this.state

    return (
      <div className="quadrature__refinement__wrapper">
        <h4>Квадратура: </h4>
        <div className='quadrature__inner__wrapper'>
          <div className='quadrature__from'>
            <span>От:</span>
            <button onClick={this.decreaseFromQuadrature} className='btn minus-button'> - </button>
            <input value={quadratureFrom} type='number' />
            <button onClick={this.increaseFromQuadrature} className='btn plus-button'> + </button>
          </div>
          <div className='quadrature__to'>
            <span>До:</span>
            <button onClick={this.decreaseToQuadrature} className='btn minus-button'> - </button>
            <input value={quadratureTo} type='number' />
            <button onClick={this.increaseToQuadrature} className='btn plus-button'> + </button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuadratureRefinement
