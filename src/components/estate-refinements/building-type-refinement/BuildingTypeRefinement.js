import React, { PureComponent } from 'react'
import t from 'translations'
import './buildingtyperefinement.scss'

class BuildingTypeRefinement extends PureComponent {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="building-type__refinement__wrapper">
        <h4>Вид строителство</h4>
        <select>
          <option value='brick'>Тухла</option>
          <option value='panel'>Панел</option>
          <option value='epk'>ЕПК</option>
          <option value='gradored'>Градоред</option>
          <option value='pk'>ПК</option>
        </select>
      </div>
    )
  }
}

export default BuildingTypeRefinement
