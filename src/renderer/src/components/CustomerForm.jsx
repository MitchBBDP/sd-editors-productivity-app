function CustomerForm({customerName, emailAddress, customerNameChange, emailChange, socialMedia, socialMediaChange, selfieCamera, selfieCameraChange}) {
    return (
        <div className="container">
            <form>
                <div className="form-group d-flex align-items-center mb-2">
                    <label htmlFor="customerInput" className="form-label small name-label">Name:</label>
                    <input
                        id="customerInput"
                        className="form-control form-control-sm"
                        value={customerName}
                        onChange={customerNameChange}
                    />
                </div>
                <div className="form-group d-flex align-items-center mb-1">
                    <label htmlFor="emailInput" className="form-label small email-label">Email:</label>
                    <input
                        id="emailInput"
                        className="form-control form-control-sm"
                        value={emailAddress}
                        onChange={emailChange}
                    />
                </div>
                <div className="form-group d-flex mb-1">
                    <div className="form-check custom-ig-checkbox">
                        <input
                            type="checkbox"
                            className="form-check-input custom-checkbox"
                            checked={socialMedia}
                            onChange={socialMediaChange}
                            id="socialMediaCheckbox"
                        />
                        <label className="form-check-label small" htmlFor="socialMediaCheckbox">Social Media &nbsp;</label>
                    </div>
                    <div className="form-check custom-hc-checkbox">
                        <input
                            type="checkbox"
                            className="form-check-input custom-checkbox"
                            checked={selfieCamera}
                            onChange={selfieCameraChange}
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
