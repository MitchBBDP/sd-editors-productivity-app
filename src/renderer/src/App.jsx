import { useState } from "react"
import Tabs from './components/Tabs'
import TabContent from './components/TabContent'


function App() {

  const [activeTab, setActiveTab] = useState(0)
  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <div>
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <TabContent activeTab={activeTab} />
    </div>
  )
}

export default App

