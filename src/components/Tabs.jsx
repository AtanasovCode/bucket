

const Tabs = ({
    name,
    selectedTab,
    changeTab,
}) => {

    const tabStyle = selectedTab === name ? "bg-accent text-background" : "bg-inactive text-light"

    return (
        <div 
            className={`
                flex items-center justify-center mx-4 py-2 px-4 ${tabStyle}
                cursor-pointer rounded-xl
            `}
            onClick={() => changeTab(name)}
        >
            {name}
        </div>
    );
}

export default Tabs;