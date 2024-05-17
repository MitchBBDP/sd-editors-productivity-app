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

    return (
        <div className="container">
            <form>
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
