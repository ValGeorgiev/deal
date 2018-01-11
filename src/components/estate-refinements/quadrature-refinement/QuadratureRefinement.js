import React, { Component } from 'react'
import t from 'translations'
import { withRouter } from 'react-router-dom'
import { buildQuery, removeParams, parseQuery } from 'libs/deal-query'
import './quadraturerefinement.scss'

class QuadratureRefinement extends Component {
  constructor(props) {
    super(props)

    let query = parseQuery(props.location.search)

    this.state = {
      quadratureFrom: query.minq || '',
      quadratureTo: query.maxq || ''
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

    quadrature.quadratureTo = quadratureTo
    if (quadrature.quadratureFrom >= quadratureTo) {
      quadrature.quadratureTo = quadrature.quadratureFrom + 10
    }

    this.setState(quadrature)
    this.changeRefinement(quadrature)

  }

  increaseToQuadrature() {
    const {
      quadratureTo,
      quadratureFrom
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
    this.changeRefinement({
      quadratureTo: newQuadrature,
      quadratureFrom
    })

  }

  decreaseFromQuadrature() {
    const {
      quadratureFrom,
      quadratureTo
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
    this.changeRefinement({
      quadratureFrom: newQuadrature,
      quadratureTo
    })

  }

  decreaseToQuadrature() {
    const {
      quadratureTo,
      quadratureFrom
    } = this.state

    let quadrature = {}

    if (quadratureTo === '') {
      return
    } else if (quadratureTo === 10) {
      quadrature.quadratureTo = ''
    } else {
      quadrature.quadratureTo = quadratureTo - 10
    }
    quadrature.quadratureFrom = quadratureFrom
    if (quadrature.quadratureTo <= quadratureFrom) {
      if (quadratureFrom === 10 || quadratureFrom === '') {
        quadrature.quadratureFrom = ''
      } else {
        quadrature.quadratureFrom = quadratureFrom - 10
      }
    }

    this.setState(quadrature)
    this.changeRefinement(quadrature)
  }

  changeRefinement({ quadratureFrom, quadratureTo}) {
    const {
      history,
      location
    } = this.props

    let maxQuery = buildQuery(decodeURIComponent(location.search), 'maxq', quadratureTo)
    let minQuery = buildQuery(maxQuery, 'minq', quadratureFrom)

    history.push(`${location.pathname}${minQuery}`)
  }

  changeQuadratureFrom(event) {
    const {
      quadratureTo
    } = this.state
    let quadrature = {}
    quadrature.quadratureFrom = parseInt(event.target.value)
    quadrature.quadratureTo = quadratureTo

    if (quadrature.quadratureTo <= quadrature.quadratureFrom) {
      quadrature.quadratureTo =  quadrature.quadratureFrom + 10
    }
    this.setState(quadrature)
    this.changeRefinement(quadrature)
  }

  changeQuadratureTo(event) {
    const {
      quadratureFrom
    } = this.state
    let quadrature = {}
    quadrature.quadratureTo = parseInt(event.target.value)
    quadrature.quadratureFrom = quadratureFrom

    if (quadrature.quadratureTo <= quadrature.quadratureFrom) {
      quadrature.quadratureFrom = quadrature.quadratureTo <= 10 ? '' : quadrature.quadratureTo - 10
    }

    this.setState(quadrature)
    this.changeRefinement(quadrature)
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
            <input value={quadratureFrom} type='number' onChange={(event) => this.changeQuadratureFrom(event)} />
            <button onClick={this.increaseFromQuadrature} className='btn plus-button'> + </button>
          </div>
          <div className='quadrature__to'>
            <span>До:</span>
            <button onClick={this.decreaseToQuadrature} className='btn minus-button'> - </button>
            <input value={quadratureTo} type='number' onChange={(event) => this.changeQuadratureTo(event)} />
            <button onClick={this.increaseToQuadrature} className='btn plus-button'> + </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(QuadratureRefinement)
