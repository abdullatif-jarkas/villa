import InfoTable from '../../InfoTable/InfoTable'
import SectionHeader from '../../SectionHeader/SectionHeader'
import './BestDeal.css'
import DealImg from './../../../assets/imgs/deal-01.jpg'
import NavButton from '../../NavButton/NavButton'
import Tabs from '../../Tabs/Tabs'

const BestDeal = () => {

  const infodata = [
    {
      infoImg: '',
      infoText: <p><span>Total Flat Space</span><span>185 m2</span></p>
    },
    {
      infoImg: '',
      infoText: <p><span>Floor number</span><span>26th</span></p>
    },
    {
      infoImg: '',
      infoText: <p><span>Number of rooms</span><span>4</span></p>
    },
    {
      infoImg: '',
      infoText: <p><span>Parking Available</span><span>Yes</span></p>
    },
    {
      infoImg: '',
      infoText: <p><span>Payment Process</span><span>Bank</span></p>
    },
  ]

  const tabsData = [
    {
      text: "Appartment",
      active: true,
    },
    {
      text: "Villa House",
      active: false,
    },
    {
      text: "Penthouse",
      active: false,
    },
  ]

  return (
    <div className='best-deal'>
      <div className="container">
        <div className="deal-header">
          <SectionHeader title="| Best Deal" text="Find Your Best Deal Right Now!" />
          {
            <Tabs data={tabsData} />
          }
        </div>
        <div className="deal-container">
          <InfoTable info={infodata} />
          <div className="deal-img">
            <img src={DealImg} alt="deal-img" />
          </div>
          <div className="extra-info">
            <h4>Extra Info About Property</h4>
            <p>
              spanLorem ipsum dolor sit amet, consectetur adipiscing elit, 
              do eiusmod tempor pack incididunt ut labore et dolore magna 
              aliqua quised ipsum suspendisse.
            </p>
            <p>
              When you need free CSS templates, you can simply type TemplateMo 
              in any search engine website. In addition, you can type TemplateMo 
              Portfolio, TemplateMo One Page Layouts, etc.
            </p>
            <div className="extra-btn">
              <NavButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestDeal