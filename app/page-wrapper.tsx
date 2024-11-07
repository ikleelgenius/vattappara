'use client'

import React, { ReactNode, Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Loading from './loading'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ScrollPercentage from './components/ScrollPercentage'
import useScrollToTop from './hooks/useScrollTop'
import KeywordDrawer from './components/KeywordDrawer'
import MobileNavigationDrawer from './components/MobileNavigationDrawer'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  useScrollToTop()
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Header />
        <KeywordDrawer />
        {children}
        <MobileNavigationDrawer />
        <ScrollPercentage />
        <Footer />
      </Provider>
    </Suspense>
  )
}

export default PageWrapper
