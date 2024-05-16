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
    </div>,
    <div>Content for Tab 2</div>,
    <div>Content for Tab 3</div>,
  ]

  return <div className='tab-content'>{tabContent[activeTab]}</div>
}

export default TabContent