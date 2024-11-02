import Head from 'next/head'
import HomePageBanner from './components/home/HomePageBanner'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Construction Services Near Me | Story Construction</title>
        <meta
          name="description"
          content="Find expert construction services near you. We provide reliable, top-quality construction in Lynn, Massachusetts."
        />
        <meta
          name="keywords"
          content="construction, construction services, near me, Lynn, Massachusetts"
        />
      </Head>
      <HomePageBanner />
      <div className="w-20px h-[2000px]"></div>
    </>
  )
}

export default HomePage
