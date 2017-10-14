import React, { Component } from 'react'

class InputWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      position: props.position,
      value: '',
      online: false,
      type: 'default'
    }
  }

  inputChange(event) {
    const {
      position
    } = this.state

    this.setState({
      value: event.target.value
    })
    this.props.inputChange(event, position)
  }

  selectChange(event) {
    const {
      position
    } = this.state

    this.setState({
      type: event.target.value
    })

    this.props.selectChange(event, position)
  }

  checkboxChange(event) {
    const {
      online,
      position
    } = this.state

    this.setState({
      online: !online
    })

    this.props.checkboxChange(event, position)
  }

  render() {
    const {
      inputClass,
      indicator,
      selectChange
    } = this.props

    const {
      value,
      online
    } = this.state

    return (
      <div className='admin__input-wrapper'>
        <span>{indicator}</span>
        <input onChange={(event) => this.inputChange(event)} type='text' className={inputClass} value={value} />
        {selectChange ?
          <select onChange={(event) => this.selectChange(event)}>
            <option value='default'> default </option>
            <option value='range-input'> range-input </option>
            <option value='range'> range </option>
            <option value='checkbox'> checkbox </option>
          </select>
          : null
        }

        <input onChange={(event) => this.checkboxChange(event)} type='checkbox' checked={online} />
      </div>
    )
  }
}

export default InputWrapper
