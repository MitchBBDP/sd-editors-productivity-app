import { useState } from "react"
import Tabs from './components/Tabs'
import TabContent from './components/TabContent'


function App() {

  const [activeTab, setActiveTab] = useState(0)
  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const [customerName, setCustomerName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [socialMedia, setSocialMedia] = useState(false)
  const [selfieCamera, setSelfieCamera] = useState(false)

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value)
  }

  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value)
  }

  const handleSocialMediaChange = (event) => {
    setSocialMedia(event.target.checked)
  }

  const handleSelfieCameraChange = (event) => {
    setSelfieCamera(event.target.checked)
  }

  return (
    <div>
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <TabContent
        activeTab={activeTab}
        customerName={customerName}
        emailAddress={emailAddress}
        socialMedia={socialMedia}
        selfieCamera={selfieCamera}
        handleCustomerNameChange={handleCustomerNameChange}
        handleEmailAddressChange={handleEmailAddressChange}
        handleSocialMediaChange={handleSocialMediaChange}
        handleSelfieCameraChange={handleSelfieCameraChange}
      />
    </div>
  )
}

export default App

