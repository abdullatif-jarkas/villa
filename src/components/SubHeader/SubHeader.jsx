import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMap, FaTwitter } from 'react-icons/fa'
import './SubHeader.css'

const SubHeader = () => {
  return (
    <div className='sub-header'>
      <div className="container">
        <div className="row">
          <ul className="sub-header-info">
            <li>
              <FaEnvelope />
              info@company.com
            </li>
            <li>
              <FaMap />
              Sunny Isles Beach, FL 33160
            </li>
          </ul>
          <ul className="sub-header-social-links">
            <li>
              <a href="#"><FaFacebook /></a>
            </li>
            <li>
              <a href="#"><FaTwitter /></a>
            </li>
            <li>
              <a href="#"><FaLinkedin /></a>
            </li>
            <li>
              <a href="#"><FaInstagram /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SubHeader