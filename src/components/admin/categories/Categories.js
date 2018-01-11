import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as ACTIONS from 'actions'
import t from 'translations'
import './categories.scss'

class Categories extends Component {
  constructor() {
    super()
  }

  createCategories() {
    const {
      categories
    } = this.props

    return categories.map((cat) => {
      return (
        <div className='categories__item' key={cat._id}>
          <Link to={`/admin/category/${cat._id}`}>
            {cat.name}
          </Link>
          <button className='btn' onClick={() => this.deleteCategory(cat._id)}>X</button>
        </div>
      )
    })
  }

  deleteCategory(id) {
    const {
      actions
    } = this.props

    actions.deleteCategory(id)
  }

  render() {

    return (
      <div className='categories categories__wrapper'>
        {this.createCategories()}
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: []
}

const mapStateToProps = (state) => {

  return {
    categories: state.category.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
