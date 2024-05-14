function CustomerForm({customerName, emailAddress, customerChange, emailChange}) {
    return (
        <div>
            {/* <form onSubmit={addNote}> */}
            <form>
                <label htmlFor="customerInput">Customer Name:</label>
                <input
                    id="customerInput"
                    value={customerName}
                    onChange={customerChange}
                />
                <label htmlFor="emailInput">Email:</label>
                <input
                    id="emailInput"
                    value={emailAddress}
                    onChange={emailChange}
                />
                <button type="submit">save</button>
            </form> 
        </div>
    )
  }
  
  export default CustomerForm
  
  