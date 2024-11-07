import HomePageBanner from './components/home/HomePageBanner'
import AboutUs from './components/home/AboutUs'
import WhoWeAre from './components/home/WhoWeAre'
import StatisticsSection from './components/home/StatisticsSection'
import LatestProjects from './components/home/LatestProjects'

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh+16px)]">
      <HomePageBanner />
      <AboutUs />
      <WhoWeAre />
      <StatisticsSection />
      <LatestProjects />
    </div>
  )
}

export default HomePage
