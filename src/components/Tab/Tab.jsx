import './Tab.css'

const Tab = ({ active, text, filterItems }) => {
  return (
      <button onClick={() => filterItems(text)} className={active? "tab active": "tab"}>
        {text}
      </button>
    )
}

export default Tab