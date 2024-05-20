import { useState } from "react"

function CustomerForm() {
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

    const handleNewProject = async (event) => {
        event.preventDefault()
        if (customerName && emailAddress) {
            let projectName = customerName
            if (socialMedia && !selfieCamera){
                projectName = `SM ${customerName}`
            } else  if (!socialMedia && selfieCamera){
                projectName = `HC ${customerName}`
            } else  if (socialMedia && selfieCamera){
                projectName = `SMHC ${customerName}`
            }

            try {
                const result = await window.api.createFolders(projectName)
                if (result.success) {
                    console.log(result.message)
                    setCustomerName('')
                    setEmailAddress('')
                    setSocialMedia(false)
                    setSelfieCamera(false)
                } else {
                    console.log(result.message)
                }
            } catch (error) {
                console.error('Failed to create folder:', error)
            }
        } else {
            console.log('Customer Name and Email Address is required')
        }
    }

    return (
        <div className="container">
            <div className="section-header my-2">Create New Project</div>
            <form onSubmit={handleNewProject}>
                <div className="form-group d-flex align-items-center mb-2">
                    <label htmlFor="customerInput" className="form-label small name-label">Name:</label>
                    <input
                        id="customerInput"
                        className="form-control form-control-sm"
                        value={customerName}
                        onChange={handleCustomerNameChange}
                    />
                </div>
                <div className="form-group d-flex align-items-center mb-1">
                    <label htmlFor="emailInput" className="form-label small email-label">Email:</label>
                    <input
                        id="emailInput"
                        className="form-control form-control-sm"
                        value={emailAddress}
                        onChange={handleEmailAddressChange}
                    />
                </div>
                <div className="form-group d-flex mb-1">
                    <div className="form-check custom-ig-checkbox">
                        <input
                            type="checkbox"
                            className="form-check-input custom-checkbox"
                            checked={socialMedia}
                            onChange={handleSocialMediaChange}
                            id="socialMediaCheckbox"
                        />
                        <label className="form-check-label small" htmlFor="socialMediaCheckbox">Social Media &nbsp;</label>
                    </div>
                    <div className="form-check custom-hc-checkbox">
                        <input
                            type="checkbox"
                            className="form-check-input custom-checkbox"
                            checked={selfieCamera}
                            onChange={handleSelfieCameraChange}
                            id="selfieCameraCheckbox"
                        />
                        <label className="form-check-label small" htmlFor="selfieCameraCheckbox">Handicam</label>
                    </div>
                </div>
                <div className="create-btn">
                    <button type="submit" className="btn btn-primary btn-sm">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CustomerForm
