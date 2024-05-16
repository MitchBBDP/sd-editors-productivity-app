import CustomerForm from './CustomerForm'

const TabContent = ({
  activeTab,
  customerName,
  emailAddress,
  socialMedia,
  selfieCamera,
  handleCustomerNameChange,
  handleEmailAddressChange,
  handleSocialMediaChange,
  handleSelfieCameraChange,
}) => {
  const tabContent = [
    <CustomerForm
      customerName={customerName}
      emailAddress={emailAddress}
      customerNameChange={handleCustomerNameChange}
      emailChange={handleEmailAddressChange}
      socialMedia={socialMedia}
      selfieCamera={selfieCamera}
      socialMediaChange={handleSocialMediaChange}
      selfieCameraChange={handleSelfieCameraChange}
    />,
    <div>Content for Tab 2</div>,
    <div>Content for Tab 3</div>,
  ]

  return <div>{tabContent[activeTab]}</div>
}

export default TabContent