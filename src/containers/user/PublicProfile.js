import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import { bindActionCreators } from 'redux'
import Footer from 'components/generics/main-footer/Footer'
import Header from 'components/generics/main-header/Header'
import ProfileImage from 'components/profile-image/ProfileImage'
import ProfileDetails from 'components/profile-details/ProfileDetails'
import ProfileName from 'components/profile-name/ProfileName'
import BuyEstateGrid from 'components/buy-estate-grid/BuyEstateGrid'

class PublicProfile extends Component {

  componentWillMount() {

    const {
      actions,
      match
    } = this.props

    actions.getEstates({
      profile: match.params.id
    })
  }

  render() {
    const {
      user
    } = this.props

    return (
      <div>
        <Header />
        <div className='public-profile__profile col col-xs-100 col-md-30 col-lg-33'>
          <ProfileImage />
          <ProfileName name={`${user.firstName} ${user.lastName}`} />
          <ProfileDetails user={user} />
        </div>
        <div className='public-profile__estates col col-xs-100 col-md-70 col-lg-66'>
          <BuyEstateGrid />
        </div>
        <Footer />
      </div>
    )
  }
}

PublicProfile.defaultProps = {
  user: {}
}

const mapStateToProps = (state) => {

  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicProfile)
