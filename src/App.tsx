import './app.css'
import AboutMe from './components/aboutMe'
import Header from './components/header'
import Projects from './components/projects'
import Skill from './components/skill'
import WhatIdo from './components/whatIdo'

function App() {
  return (
   <div className=''>
    <Header/>
    <div className="w-[90%] h-[2px] bg-gray-500 mx-auto my-8"></div>
    <AboutMe/>
    <div className="w-[90%] h-[2px] bg-gray-500 mx-auto my-8"></div>
    <WhatIdo/>
    <div className="w-[90%] h-[2px] bg-gray-500 mx-auto my-8"></div>
    <Skill/>
    <div className="w-[90%] h-[2px] bg-gray-500 mx-auto my-8"></div>
    <Projects/>
   </div>
  )
}

export default App
