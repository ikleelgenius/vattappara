import HomePageBanner from './components/home/HomePageBanner'
import AboutUs from './components/home/AboutUs'
import WhoWeAre from './components/home/WhoWeAre'
import StatisticsSection from './components/home/StatisticsSection'
import LatestProjects from './components/home/LatestProjects'
import Brandscroll from './components/brandscroll/Brandscroll'
const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh+16px)]">
      <HomePageBanner />
      <AboutUs />
      <Brandscroll/>
      <WhoWeAre />
      <StatisticsSection />
      <LatestProjects />
    </div>
  )
}

export default HomePage
