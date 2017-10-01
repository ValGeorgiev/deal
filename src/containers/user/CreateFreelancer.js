import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from 'components/generics/main-footer/Footer'
import Header from 'components/generics/main-header/Header'
import FreelancerAddImage from 'components/freelancer/add-image/FreelancerAddImage'
import FreelancerAddDetails from 'components/freelancer/add-details/FreelancerAddDetails'
import FreelancerAddInformation from 'components/freelancer/add-information/FreelancerAddInformation'
import FreelancerMoreDetails from 'components/freelancer/more-details/FreelancerMoreDetails'
import FreelancerAddButton from 'components/freelancer/add-button/FreelancerAddButton'

class CreateFreelancer extends Component {

  render() {
    const {
      user
    } = this.props

    return (
      <div>
        <Header />
        <FreelancerAddImage user={user} />
        <FreelancerAddDetails user={user} />
        <FreelancerMoreDetails user={user} />
        <FreelancerAddInformation />
        <FreelancerAddButton />
        <Footer />
      </div>
    )
  }
}

CreateFreelancer.defaultProps = {
  user: {}
}

const mapStateToProps = (state) => {

  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(CreateFreelancer)

