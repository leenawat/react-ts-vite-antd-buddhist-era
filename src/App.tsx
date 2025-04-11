import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ConfigProvider } from 'antd'
import BuddhistCalendarDemo from './BuddhistCalendarDemo'


function App() {
  return (
    <ConfigProvider theme={{}}>
      <div className="card">
        <BuddhistCalendarDemo />
      </div>
    </ConfigProvider>
  )
}

export default App
