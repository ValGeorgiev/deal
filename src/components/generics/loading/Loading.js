import React, { PureComponent } from 'react'

class Loading extends PureComponent {
  render() {
    return (
      <div className='loading-wrapper'>
        <div className='col col-xs-100 col-md-50'>
          <div className='loading-image' />
          <div className='loading-description' />
        </div>
        <div className='col col-xs-100 col-md-50'>
          <div className='loading-image' />
          <div className='loading-description' />
        </div>
        <div className='col col-xs-100 col-md-50'>
          <div className='loading-image' />
          <div className='loading-description' />
        </div>
      </div>
    )
  }
}

export default Loading
