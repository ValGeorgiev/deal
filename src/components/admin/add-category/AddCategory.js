import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ACTIONS from 'actions'
import _ from 'lodash'
import InputWrapper from './InputWrapper'
import './addcategory.scss'

class AddCategory extends Component {
  constructor() {
    super()

    this.state = {
      categoryName: '',
      innerCategories: [],
      innerValues: [],
      refinements: [],
      refinementsValues: []
    }

    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    this.updateInnerCategories(true)
    this.updateRefinements(true)
  }

  updateInnerCategories(init = false) {
    const {
      innerCategories,
      innerValues
    } = this.state

    let _categories = innerCategories
    let _categoriesValues = innerValues

    if (init) {

      _categories.push(<InputWrapper key={0} inputChange={(event, position) => this.changeInput('innerValues', event.target.value, position)} position={0} checkboxChange={(event, position) => this.changeCheckbox('innerValues', event.target.checked, position)} indicator='0:' inputClass='add-category__inner_categories_0' />)
      _categoriesValues.push({
        value: '',
        online: false
      })

      this.setState({
        innerCategories: _categories,
        innerValues: _categoriesValues
      })
    } else {

      _categories.push(<InputWrapper key={_categories.length} inputChange={(event, position) => this.changeInput('innerValues', event.target.value, position)} position={_categories.length} checkboxChange={(event, position) => this.changeCheckbox('innerValues', event.target.checked, position)} indicator={`${_categories.length}:`} inputClass={`add-category__inner_categories_${_categories.length}`} />)
      _categoriesValues.push({
        value: '',
        online: false
      })

      this.setState({
        innerCategories: _categories,
        innerValues: _categoriesValues
      })
    }
  }

  updateRefinements(init = false) {
    const {
      refinements,
      refinementsValues
    } = this.state

    let _refinements = refinements
    let _refinementsValues = refinementsValues

    if (init) {

      _refinements.push(<InputWrapper key={0} inputChange={(event, position) => this.changeInput('refinementsValues', event.target.value, position)} position={0} checkboxChange={(event, position) => this.changeCheckbox('refinementsValues', event.target.checked, position)} indicator='0:' inputClass='add-category__refinement_0' selectChange={(event, position) => this.selectChange('refinementsValues', event.target.value, position)} />)
      _refinementsValues.push({
        value: '',
        online: false,
        type: 'default'
      })

      this.setState({
        refinementsValues: _refinements,
        refinementsValues: _refinementsValues
      })
    } else {

      _refinements.push(<InputWrapper key={_refinements.length} inputChange={(event, position) => this.changeInput('refinementsValues', event.target.value, position)} position={_refinements.length} checkboxChange={(event, position) => this.changeCheckbox('refinementsValues', event.target.checked, position)} selectChange={(event, position) => this.selectChange('refinementsValues', event.target.value, position)} indicator={`${_refinements.length}:`} inputClass={`add-category__refinement_${_refinements.length}`} />)
      _refinementsValues.push({
        value: '',
        online: false,
        type: 'default'
      })

      this.setState({
        refinementsValues: _refinements,
        refinementsValues: _refinementsValues
      })
    }
  }

  changeInput(array, value, position) {
    let newValues = this.state[array]
    let state = {}

    newValues[position]['value'] = value
    state[array] = newValues

    this.setState(state)
  }

  changeCheckbox(array, value, position) {
    let newValues = this.state[array]
    let state = {}

    newValues[position]['online'] = value
    state[array] = newValues

    this.setState(state)
  }

  selectChange(array, value, position) {
    let newValues = this.state[array]
    let state = {}

    newValues[position]['type'] = value
    state[array] = newValues

    this.setState(state)
  }

  submit() {
    const {
      categoryName,
      innerValues,
      refinementsValues
    } = this.state

    const {
      actions
    } = this.props

    if (categoryName !== '') {
      actions.addCategory({
        categoryName,
        innerValues,
        refinementsValues
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
      refinements,
      innerValues,
      refinementsValues
    } = this.state

    return (
      <div className='add-category add-category__wrapper'>
        <div>
          <h2> Category Name: </h2>
          <input onChange={(event) => this.changeCategoryName(event)} value={categoryName} type='text' className='add-category__name' />
        </div>
        <div>
          <h4> Inner Categories: </h4>
          <div className='col col-xs-100'>
            <button className='btn btn-blue' onClick={() => this.updateInnerCategories()}>Add</button>
            { innerCategories }
          </div>
        </div>
        <div>
          <h4> Refinements: </h4>
          <div className='col col-xs-100'>
            <button className='btn btn-blue' onClick={() => this.updateRefinements()}>Add</button>
            { refinements }
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

export default connect(null, mapDispatchToProps)(AddCategory)
