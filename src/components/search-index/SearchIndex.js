import React, { Component } from 'react'
import * as ACTIONS from 'actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { getQuery } from 'libs/deal-query'
import _ from 'lodash'

class SearchIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 10,
      start: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      actions
    } = this.props

    const {
      search
    } = nextProps

    const {
      start,
      count
    } = this.state

    actions.getEstates({
      type: getQuery(nextProps.location.search),
      count,
      start
    })

    actions.getRefinementsByType(search.type)
  }

  componentWillMount() {

    const {
      start,
      count
    } = this.state

    const {
      actions,
      location,
      search
    } = this.props

    if(_.isEmpty(search)) {
      actions.setDefaultIndex()
    }

    actions.getOnlineCategories()

    actions.getEstates({
      type: getQuery(location.search),
      count,
      start
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('search')
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  const props = {
    search: state.search.index
  }
  return props
}

const mapDispatchToProps = (dispatch) => {

  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex))
