import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from 'components/generics/main-footer/Footer'
import Header from 'components/generics/main-header/Header'
import ProfileImage from 'components/profile-image/ProfileImage'
import ProfileDetails from 'components/profile-details/ProfileDetails'
import ProfileLinks from 'components/profile-links/ProfileLinks'
import ProfileCover from 'components/profile-cover/ProfileCover'
import ProfileName from 'components/profile-name/ProfileName'
import PublicProfileLink from 'components/public-profile-link/PublicProfileLink'
import ProfileEdit from 'components/profile-edit/ProfileEdit'

class Profile extends Component {

  render() {
    const {
      user
    } = this.props

    return (
      <div>
        <Header />
        <div className='profile-images'>
          <ProfileCover />
          <ProfileImage />
        </div>
        <ProfileName name={`${user.firstName} ${user.lastName}`} />
        <ProfileEdit user={user} />
        <PublicProfileLink />
        <ProfileDetails user={user} />
        <ProfileLinks />
        <Footer />
      </div>
    )
  }
}

Profile.defaultProps = {
  user: {}
}

const mapStateToProps = (state) => {

  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Profile)
