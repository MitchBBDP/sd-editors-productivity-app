import CustomerForm from './CustomerForm'
import Settings from './Settings'
import Menu from './Menu'

const TabContent = ({ activeTab }) => {
  
  const tabContent = [
    <CustomerForm />,
    <Menu />,
    <Settings />,
  ]

  return <div className='tab-content'>{tabContent[activeTab]}</div>
}

export default TabContent