import Accordion from '../Accordion/Accordion'
import SectionHeader from '../SectionHeader/SectionHeader'
import './AppartmentFeatured.css'



const AppartmentFeatured = () => { 

  const data = [
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
    <div className='appartment-featured col'>
      <SectionHeader title="| Featured" text="Best Appartment & Sea view"/>
      <Accordion data={data}/>
    </div>
  )
}

export default AppartmentFeatured