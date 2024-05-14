import CustomerForm from "../components/customerForm"

function App() {

  const [customerName, setCustomerName] = useState('enter name...')
  const [emailAddress, setEmailAddress] = useState('enter email...')

  return (
    <div>
      <CustomerForm customerName={customerName} emailAddress={emailAddress}/>
    </div>
  )
}

export default App

