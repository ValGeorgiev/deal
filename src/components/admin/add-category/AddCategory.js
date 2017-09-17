import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import _ from 'lodash'

import './addcategory.scss'

class InputWrapper extends PureComponent {

  render() {
    const {
      inputClass,
      indicator,
      inputValue,
      inputChange,
      checkboxChange
    } = this.props

    return (
      <div className='input-wrapper'>
        <span>{indicator}</span>
        <input onChange={(event) => inputChange(event)} value={inputValue.name} type='text' className={inputClass} />
        <input onChange={(event) => checkboxChange(event)} type='checkbox' checked={inputValue.online} />
      </div>
    )
  }
}

class AddCategory extends Component {
  constructor() {
    super()

    this.state = {
      categoryName: '',
      innerCategories: initializeArrayWithObjects(10),
      refinements: initializeArrayWithObjects(10)
    }

    this.submit = this.submit.bind(this)
  }

  changeInput(type, value, index) {
    let _state = {}

    _state[type] = this.state[type]
    _state[type][index].name = value

    this.setState(_state)
  }

  changeCheckbox(type, value, index) {
    let _state = {}

    _state[type] = this.state[type]
    _state[type][index].online = value

    this.setState(_state)
  }

  submit() {
    const {
      categoryName,
      innerCategories,
      refinements
    } = this.state

    const {
      actions
    } = this.props

    if (categoryName !== '') {
      actions.addCategory({
        categoryName,
        innerCategories,
        refinements
      })
    }
  }

  changeCategoryName(event) {
    this.setState({
      categoryName: event.target.value
    })
  }

  render() {
    const {
      categoryName,
      innerCategories,
      refinements
    } = this.state

    return (
      <div className='add-category add-category__wrapper'>
        <div>
          <h2> Category Name: </h2>
          <input onChange={(event) => this.changeCategoryName(event)} value={categoryName} type='text' className='add-category__name' />
        </div>
        <div>
          <h4> Inner Categories: </h4>
          <div className='col col-xs-100 col-md-50'>
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 0)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 0)} inputValue={innerCategories[0]} indicator='0:' inputClass='add-category__inner_categories_0' />
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 1)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 1)} inputValue={innerCategories[1]} indicator='1:' inputClass='add-category__inner_categories_1' />
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 2)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 2)} inputValue={innerCategories[2]} indicator='2:' inputClass='add-category__inner_categories_2' />
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 3)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 3)} inputValue={innerCategories[3]} indicator='3:' inputClass='add-category__inner_categories_3' />
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 4)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 4)} inputValue={innerCategories[4]} indicator='4:' inputClass='add-category__inner_categories_4' />
          </div>
          <div className='col col-xs-100 col-md-50'>
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 5)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 5)} inputValue={innerCategories[5]} indicator='5:' inputClass='add-category__inner_categories_5' />
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 6)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 6)} inputValue={innerCategories[6]} indicator='6:' inputClass='add-category__inner_categories_6' />
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 7)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 7)} inputValue={innerCategories[7]} indicator='7:' inputClass='add-category__inner_categories_7' />
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 8)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 8)} inputValue={innerCategories[8]} indicator='8:' inputClass='add-category__inner_categories_8' />
            <InputWrapper inputChange={(event) => this.changeInput('innerCategories', event.target.value, 9)} checkboxChange={(event) => this.changeCheckbox('innerCategories', event.target.checked, 9)} inputValue={innerCategories[9]} indicator='9:' inputClass='add-category__inner_categories_9' />
          </div>
        </div>
        <div>
          <h4> Refinements: </h4>
          <div className='col col-xs-100 col-md-50'>
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 0)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 0)} inputValue={refinements[0]} indicator='0:' inputClass='add-category__refinements_0' />
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 1)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 1)} inputValue={refinements[1]} indicator='1:' inputClass='add-category__refinements_1' />
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 2)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 2)} inputValue={refinements[2]} indicator='2:' inputClass='add-category__refinements_2' />
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 3)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 3)} inputValue={refinements[3]} indicator='3:' inputClass='add-category__refinements_3' />
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 4)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 4)} inputValue={refinements[4]} indicator='4:' inputClass='add-category__refinements_4' />
          </div>
          <div className='col col-xs-100 col-md-50'>
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 5)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 5)} inputValue={refinements[5]} indicator='5:' inputClass='add-category__refinements_5' />
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 6)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 6)} inputValue={refinements[6]} indicator='6:' inputClass='add-category__refinements_6' />
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 7)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 7)} inputValue={refinements[7]} indicator='7:' inputClass='add-category__refinements_7' />
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 8)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 8)} inputValue={refinements[8]} indicator='8:' inputClass='add-category__refinements_8' />
            <InputWrapper inputChange={(event) => this.changeInput('refinements', event.target.value, 9)} checkboxChange={(event) => this.changeCheckbox('refinements', event.target.checked, 9)} inputValue={refinements[9]} indicator='9:' inputClass='add-category__refinements_9' />
          </div>
        </div>
        <button className='btn btn-blue' onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }

  return actionMap
}

function initializeArrayWithObjects(count) {
  let array = []

  for (let i = 0; i < count; i++) {
    let obj = new Object()
    obj.name = ''
    obj.online = true

    array.push(obj)
  }
  return array
}

export default connect(null, mapDispatchToProps)(AddCategory)
