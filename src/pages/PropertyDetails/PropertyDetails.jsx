import Hero from "../../components/Hero/Hero"
import InfoTable from "../../components/InfoTable/InfoTable"
import BestDeal from "../../components/main/BestDeal/BestDeal"
import './PropertyDetails.css'
import InfoImg1 from './../../assets/imgs/info-icon-01.png'
import InfoImg2 from './../../assets/imgs/info-icon-02.png'
import InfoImg3 from './../../assets/imgs/info-icon-03.png'
import InfoImg4 from './../../assets/imgs/info-icon-04.png'
import MainImg from './../../assets/imgs/single-property.jpg'
import Accordion from "../../components/Accordion/Accordion"
import NavBar from "../../components/common/NavBar/NavBar"
import Footer from "../../components/common/Footer/Footer"

const PropertyDetails = () => {

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

  const accordionData = [
    {
      question: "Best useful links ?",
      answer: <p>Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</p>,
    },
    {
      question: "How dose this work ?",
      answer: <p>Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn&apos;t eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
    },
    {
      question: "Why is villa agency the best ?",
      answer: <p>Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn&apos;t eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
    },
  ]


  return (
    <div className="property-details">
      <NavBar />
      <Hero title="/  Single Property" text="Single Property" />
      <div className="container">
        <div className="row">
          <div className="col property-details-info">
            <div className="details-main-img">
              <img src={MainImg} alt="" />
            </div>
            <div className="main-content">
            <span className="category">Apparment</span>
            <h4>24 New Street Miami, OR 24560</h4>
              <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven&apos;t heard of them ugh hella.</p>
              <p>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&amp;B DSA poutine neutra cardigan hoodie pop-up.</p>
            </div>
            <Accordion data={accordionData} />
          </div>
          <div className="col property-details-info-table">
            <InfoTable info={infodata} img={true} />
          </div>
        </div>
      </div>
      <BestDeal />
    </div>
  )
}

export default PropertyDetails