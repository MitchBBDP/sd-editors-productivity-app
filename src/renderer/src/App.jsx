import { useState } from "react"
import CustomerForm from "./components/customerForm"

function App() {

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
      <CustomerForm 
        customerName={customerName} 
        emailAddress={emailAddress} 
        customerNameChange={handleCustomerNameChange} 
        emailChange={handleEmailAddressChange} 
        socialMedia={socialMedia}
        selfieCamera={selfieCamera}
        socialMediaChange={handleSocialMediaChange}
        selfieCameraChange={handleSelfieCameraChange}
      />
    </div>
  )
}

export default App

