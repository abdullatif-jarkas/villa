import Tab from '../Tab/Tab'
import './Tabs.css'

const Tabs = ({ data, filterItems }) => {
  return (
    <ul className='tabs'>
      {
        data.map((item, index) => (
          <li key={index}>
            <Tab filterItems={filterItems} active={item.active} text={item.text} />
          </li>
        ))
      }
    </ul>
  )
}

export default Tabs