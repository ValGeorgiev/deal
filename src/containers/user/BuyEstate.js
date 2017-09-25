import React, { Component } from 'react'
import * as ACTIONS from 'actions'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import Footer from 'components/generics/main-footer/Footer'
import Header from 'components/generics/main-header/Header'
import BuyEstateType from 'components/buy-estate-types/BuyEstateTypes'
import EstateRefinements from 'components/estate-refinements/EstateRefinements'
import BuyEstateGrid from 'components/buy-estate-grid/BuyEstateGrid'
import { getQuery } from 'libs/deal-query'
import t from 'translations'

class BuyEstate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 10,
      start: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const {
      actions
    } = this.props

    const {
      start,
      count
    } = this.state

    actions.getEstates({
      type: getQuery(nextProps.location.search),
      count,
      start
    })
  }

  componentWillMount() {

    const {
      start,
      count
    } = this.state

    const {
      actions,
      location
    } = this.props

    actions.getEstates({
      type: getQuery(location.search),
      count,
      start
    })
  }

  handleScroll() {
    let flag = true
    let gridWrapper = ReactDOM.findDOMNode(this.refs.grid)

    window.addEventListener('scroll', () => {
      let yScroll = window.pageYOffset + window.innerHeight
      // console.log(yScroll)
      // console.log(gridWrapper.offsetHeight)
      // console.log('-----------')
      if (flag && yScroll >= gridWrapper.offsetHeight) {
        // console.log('wtf')
        // console.log(this.state.start)
        // console.log(this.state.count)
        // console.log('++++++++++++=')
        flag = false
        this.loadMoreProducts(() => {
          flag = true
        })
      }

    })
  }

  loadMoreProducts(callback) {
    const {
      count,
      start
    } = this.state

    const {
      actions,
      location
    } = this.props

    let newStart = start + count
    console.log(' set state again ')
    this.setState({
      start: newStart
    })

    actions.getEstates({
      type: getQuery(location.search),
      count,
      start: newStart
    }, true).then(() => {
      callback()
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.handleScroll()
  }

  render() {

    return (
      <div>
        <Header />
        <BuyEstateType link='buy-estate' />
        <div ref='grid'>
          <EstateRefinements estateType={null}/>
          <BuyEstateGrid />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default withRouter(connect(null, mapDispatchToProps)(BuyEstate))
