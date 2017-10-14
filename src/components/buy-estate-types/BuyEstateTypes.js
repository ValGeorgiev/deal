import React, { Component } from 'react'
import t from 'translations'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { buildQuery } from 'libs/deal-query'
import './buyestatetypes.scss'

class BuyEstateTypes extends Component {

  returnType(type) {
    if (this.props.location.search.includes(type)) {
      return 'btn-blue'
    }
    return ''
  }

  returnCategories() {
    const {
      location,
      link,
      categories
    } = this.props

    return categories.map((category) => {
      return (
        <div key={category._id} className='type-wrapper'>
          <Link to={`${link}${buildQuery(location.search, 'type', 'apartament', true)}`}>
            <button className={`btn ${this.returnType('apartament')}`}>{category.name}</button>
          </Link>
        </div>
      )
    })
  }

  render() {
    const {
      location,
      link
    } = this.props


    return (
      <div className="buy-estate-types__wrapper">
        <div className='estate_type__wrapper'>
          { this.returnCategories() }

          <div className='type-wrapper'>
            <Link to={`${link}${buildQuery(location.search, 'type', 'house', true)}`}>
              <button className={`btn ${this.returnType('house')}`} >Къщи</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`${link}${buildQuery(location.search, 'type', 'bussiness', true)}`}>
              <button className={`btn ${this.returnType('bussiness')}`} >Бизнес имоти</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`${link}${buildQuery(location.search, 'type', 'hotel', true)}`}>
              <button className={`btn ${this.returnType('hotel')}`} >Хотели</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`${link}${buildQuery(location.search, 'type', 'faculty', true)}`}>
              <button className={`btn ${this.returnType('faculty')}`} >Производствени помещения</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`${link}${buildQuery(location.search, 'type', 'sports', true)}`}>
              <button className={`btn ${this.returnType('sports')}`} >Спортни съоръжения</button>
            </Link>
          </div>
          <div className='type-wrapper'>
            <Link to={`${link}${buildQuery(location.search, 'type', 'field', true)}`}>
              <button className={`btn ${this.returnType('field')}`} >Парцели</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

BuyEstateTypes.defaultProps = {
  categories: []
}

const mapStateToProps = (state) => {

  const props = {
    categories: state.category.categories
  }
  return props
}

export default withRouter(connect(mapStateToProps)(BuyEstateTypes))
