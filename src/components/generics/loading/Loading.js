import React, { PureComponent } from 'react'

class Loading extends PureComponent {

  render() {
    const {
      row
    } = this.props

    let gridClass = row ? '' : 'col-md-50'

    return (
      <div className='loading-wrapper'>
        <div className={`col col-xs-100 ${gridClass}`}>
          <div className='loading-image' />
          <div className='loading-description' />
        </div>
        <div className={`col col-xs-100 ${gridClass}`}>
          <div className='loading-image' />
          <div className='loading-description' />
        </div>
        <div className={`col col-xs-100 ${gridClass}`}>
          <div className='loading-image' />
          <div className='loading-description' />
        </div>
      </div>
    )
  }
}

export default Loading
