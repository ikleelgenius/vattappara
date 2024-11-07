import React from 'react'
import Banner from '../components/common/Banner'
import AboutUs from '../components/home/AboutUs'
import OurWorkingProcess from '../components/OurWorkingProcess'

const WhoWeAre = () => {
  return (
    <div>
      <Banner src="/images/who-we-are.jpg" breadcrumb="Who We Are" title="Who We Are" />
      <AboutUs />
      <OurWorkingProcess />
    </div>
  )
}

export default WhoWeAre
