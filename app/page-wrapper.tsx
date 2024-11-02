'use client'

import React, { ReactNode, Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Loading from './loading'
import Header from './components/header/Header'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </Suspense>
  )
}

export default PageWrapper
