import plusIcon from '../assets/plus-lg.svg'
import gearIcon from '../assets/gear.svg'
import gridIcon from '../assets/grid.svg'

const Tabs = ({ activeTab, handleTabClick }) => {
    const tabs = [
        <img key={0} src={plusIcon} alt="Plus Icon" />,
        <img key={1} src={gridIcon} alt="Grid Icon" />,
        <img key={2} src={gearIcon} alt="Gear Icon" />,
      ]

    return (
        <div className='main-tabs'>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`button-tabs ${activeTab === index ? 'active' : ''}`}
                >
                    {tab}   
                </button>
            ))}
        </div>
    )  
}

export default Tabs;