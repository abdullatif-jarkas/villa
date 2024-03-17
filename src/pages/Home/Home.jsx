import BestAppartment from "../../components/main/BestAppartment/BestAppartment"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import heroImg1 from './../../assets/imgs/hero-01.jpg'
import heroImg2 from './../../assets/imgs/hero-02.jpg'
import heroImg3 from './../../assets/imgs/hero-03.jpg'
import VideoView from "../../components/main/VideoView/VideoView"
import Counter from "../../components/Counter/Counter"
import './Home.css'
import BestDeal from "../../components/main/BestDeal/BestDeal"
import Properties from "../../components/main/Properties/Properties"
import Contact from "../../components/main/Contact/Contact"

const Home = () => {

  const data = [
    {
      img: heroImg1,
      city: "Toronto",
      country: "Canada",
      text: "Hurry! Get the Best Villa for you",
    },
    {
      img: heroImg2,
      city: "Melbourne",
      country: "Australia",
      text: "Be Quick! Get the best villa in town"
    },
    {
      img: heroImg3,
      city: "Miami",
      country: "South Florida",
      text: "Act Now! Get the highest level penthouse"
    },
  ]

  return (
    <div className="home">
      <ImageSlider imgUrls={data}/>
      <BestAppartment />
      <VideoView />
      <div className="counter-container">
        <Counter num="34" text1="Buildings" text2="Finished Now" />
        <Counter num="12" text1="Years" text2="Experience" />
        <Counter num="24" text1="Awwards" text2="Won 2023" />
      </div>
      <BestDeal />
      <Properties />
      <Contact />
    </div>
  )
}

export default Home