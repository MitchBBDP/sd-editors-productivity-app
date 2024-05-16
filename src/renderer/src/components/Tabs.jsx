const Tabs = ({ activeTab, handleTabClick }) => {
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3']

    return (
        <div>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={activeTab === index ? 'active' : ''}
                >
                    {tab}   
                </button>
            ))}
        </div>
    )  
}

export default Tabs;