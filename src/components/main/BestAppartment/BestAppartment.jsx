import AppartmentImage from './../../AppartmentImage/AppartmentImage'
import MainImg from './../../../assets/imgs/featured.jpg'
import BadgeImg from './../../../assets/imgs/featured-icon.png'
import AppartmentFeatured from './../../AppartmentFeatured/AppartmentFeatured'
import InfoTable from './../../InfoTable/InfoTable'
import InfoImg1 from './../../../assets/imgs/info-icon-01.png'
import InfoImg2 from './../../../assets/imgs/info-icon-02.png'
import InfoImg3 from './../../../assets/imgs/info-icon-03.png'
import InfoImg4 from './../../../assets/imgs/info-icon-04.png'
import './BestAppartment.css'

const BestAppartment = () => {
  
  const infodata = [
    {
      infoImg: InfoImg1,
      infoText: <h4>250 m2 <span>Total Flat Space</span></h4>
    },
    {
      infoImg: InfoImg2,
      infoText: <h4>Contract <span>Contract Ready</span></h4>
    },
    {
      infoImg: InfoImg3,
      infoText: <h4>Payment <span>Payment Process</span></h4>
    },
    {
      infoImg: InfoImg4,
      infoText: <h4>Safety <span>24/7 Under Control</span></h4>
    },
  ]

  return (
    <div className='best-appartment'>
      <div className="container">
        <div className="row">
          <AppartmentImage mainImg={MainImg} badgeImg={BadgeImg} />
          <AppartmentFeatured />
          <div className="info-table-container col">
            <InfoTable info={infodata} img={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestAppartment