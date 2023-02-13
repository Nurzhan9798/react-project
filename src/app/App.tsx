import React, { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/provider/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classnames/classNames'
import { AppRoute } from 'app/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRoute />
        </div>
      </Suspense>
    </div>
  )
}

export default App
