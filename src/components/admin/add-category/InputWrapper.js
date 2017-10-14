import React, { Component } from 'react'

class InputWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      position: props.position,
      value: '',
      label: '',
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

  labelChange(event) {
    const {
      position
    } = this.state

    this.setState({
      label: event.target.value
    })
    this.props.labelChange(event, position)
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
      selectChange,
      position
    } = this.props

    const {
      value,
      label,
      online
    } = this.state

    return (
      <div className='admin__input-wrapper'>
        <span>{`${position}:`}</span>
        <input onChange={(event) => this.inputChange(event)} type='text' className={inputClass} value={value} />
        <input onChange={(event) => this.labelChange(event)} type='text' className={inputClass} value={label} />
        {selectChange ?
          <select onChange={(event) => this.selectChange(event)}>
            <option value='default'> default </option>
            <option value='input'> input </option>
            <option value='range-input'> range-input </option>
            <option value='range'> range </option>
            <option value='checkbox'> checkbox </option>
            <option value='select'> select </option>
          </select>
          : null
        }

        <input onChange={(event) => this.checkboxChange(event)} type='checkbox' checked={online} />
      </div>
    )
  }
}

export default InputWrapper
