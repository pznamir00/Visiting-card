import React from 'react'
import { Projects, Stack, Links } from './Content/index'
import Contact from './Contact/index'
import './style.scss'


const Main = () => {
  return (
    <main>
      <div className="content">
        <Projects />
        <Stack />
        <Links />
      </div>
      <Contact />
    </main>
  )
}

export default Main;
