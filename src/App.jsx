import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import compimage from './assets/compimage.jpg'
import {motion,useInView, useScroll, useTransform, useMotionValueEvent} from 'framer-motion'
import meet from './assets/IMG_2212.jpg'

function App() {
  const [count, setCount] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    service: "",
    description: "",

  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = ["Corporate Events", "Weddings", "Social Events", "Themed Parties", "Other"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectService = (service) => {
    setFormData({ ...formData, service });
    setIsDropdownOpen(false);
  };

  const sendWhatsAppMessage = () => {
    const { firstName, lastName, mobile, email, service, description } = formData;
    const message = `Inquiry:\n\nName: ${firstName} ${lastName}\nMobile: ${mobile}\nEmail: ${email}\nService: ${service}\nDescription: ${description}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=7777949850&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
  };

  const brands = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmNCtUxGTpR8gFKlx_lWZyT0-2LIb8Om63g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYwNfvUQIZEvfgatP9W4KFAHUYS0KlOVIxQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkqe8f5NSJMXblhvhAndtQhwiBWYVLoFIrQ&s",
    "https://static.pib.gov.in/WriteReadData/userfiles/image/image001CHJU.jpg",
    "https://m.economictimes.com/thumb/msid-93712274,width-1200,height-900,resizemode-4,imgsize-13962/filmfare.jpg",
    "https://images.jdmagicbox.com/v2/comp/mumbai/81/022p8402081/catalog/aamir-khan-productions-pvt-ltd-khar-west-mumbai-film-production-houses-pa66l-250.jpg",


  ];

  return (
    <>
      <div className="bg-blue-300 w-full h-screen m-0 p-0 scroll-smooth">
        {/* navigation bar */}
        <div className="bg-blue-600">
  <nav className="flex flex-col md:flex-row justify-between items-center p-5 h-auto md:h-20">
    <img src={logo} alt="Organization logo" className="w-[150px] md:w-[200px] mt-0 md:mt-[-10px]" />
    <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
      {['Home', 'About', 'Services', 'Contact'].map((item) => (
        <li key={item} className="text-white font-bold hover:text-blue-200 mb-2 md:mb-0">
          {item}
        </li>
      ))}
    </ul>
  </nav>
</div>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between p-5 md:p-20 md:bg-cover md:bg-center" >
  <motion.div 
    className="text-left bg-white bg-opacity-75 p-5 rounded-md"
    initial={{ opacity: 0, x: 0 }} 
    whileInView={{ opacity: 1, x: 50 }} 
    transition={{ duration: 1 }} 
    viewport={{ once: true }}
  >
    <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-900">Explore . Finance . Solution</h2>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Welcome to jadav innovation</h1>
    <button className="border-2 border-black rounded-md bg-blue-200 mt-10 px-4 py-2 md:px-6 md:py-3">Book now</button>
  </motion.div>
  <div className="relative mt-10 md:mt-0 hidden md:block">
    <motion.img
      initial={{ opacity: 0, x: 50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1.5 }} 
      viewport={{ once: true }}
      src={compimage}
      alt="Speaker"
      className="rounded-lg w-full md:w-[800px] h-auto "
    />
  </div>
</section>


        {/* about section */}
        <section className="bg-white flex flex-col md:flex-row items-center justify-between p-5 md:p-20">
          <div className="text-left">
            <motion.h1 className="text-5xl font-bold text-blue-900"  initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1,}} viewport={{ once: true }}>About us</motion.h1>
            <motion.p 
             initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="text-blue-900 mt-5 font-medium">
            
              Welcome to Jadav Innovation, your premier event management company.

              At Jadav Innovation, we transform your visions into unforgettable experiences. With a passion for creativity and a dedication to excellence, we specialize in delivering top-notch event management services for a wide range of occasions.

              Our Mission Our mission is to create unique and memorable events that exceed our clients’ expectations. Whether it’s a corporate conference, wedding, or social gathering, we strive to bring your ideas to life with precision and flair.

              What We Do With a keen eye for detail and a flair for innovation, we offer a comprehensive range of event management services:
                <br /><br />
              <b>Corporate Events:</b> From seminars and conferences to product launches and team-building retreats, we ensure your corporate events leave a lasting impression.
                <br /><br />
              <b>Weddings:</b> We craft the wedding of your dreams, handling every detail from venue selection to floral arrangements, ensuring a seamless and enchanting celebration.
                <br /><br />
              <b>Social Events:</b> Birthdays, anniversaries, and special celebrations are our forte. We bring your personal milestones to life with creativity and style.
                <br /><br />
              <b>Themed Parties:</b> Whether you envision a whimsical fairy tale or a chic black-tie gala, our themed parties are designed to captivate and delight your guests.
                <br /><br />
              Our Approach At Jadav Innovation, we believe that every event is unique and deserves personalized attention. Our experienced team works closely with you to understand your vision, preferences, and budget, tailoring our services to meet your specific needs. We manage every aspect of event planning and execution, ensuring a stress-free and enjoyable experience for you and your guests.

              Our Team Our team of dedicated professionals brings a wealth of experience and expertise to the table. With a passion for creativity and a commitment to excellence, we work tirelessly to ensure every detail is perfect. 
              <br /><br />
            </motion.p>            
          </div>
          <div className="relative mt-10 md:mt-0">
            <motion.img 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.3,}} viewport={{ once: true }}
            src="https://andit.co/projects/html/wingtrip/assets/img/event/event-organize-img.png" alt="image" className="w-[260rem] h-auto" />
          </div>
        </section>
        {/* our work */}
        <section className="bg-blue-300">
  <motion.h1 
    initial={{ opacity: 0, scale: 0.5 }} 
    whileInView={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.5 }} 
    viewport={{ once: true }}
    className='text-4xl sm:text-5xl text-center pt-10 font-bold text-blue-900'
  >
    Our works
  </motion.h1>
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-10 overflow-hidden"
  >
    {[
      "https://th.bing.com/th/id/OIP.bfXGR_2kE5legWu3CGUsOAHaE8?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.oTlU7ktZCdi-u0cYnxVUjAHaE8?rs=1&pid=ImgDetMain",
      "https://i.pinimg.com/originals/8e/07/80/8e078013204d0cc9876e9edbb1fd3f85.jpg",
      "https://th.bing.com/th/id/R.735f71a9eeae396cab5b58a8c8944a88?rik=HQIzcUQR5rW2JQ&riu=http%3a%2f%2fwww.khaoz-productionz.com%2fwp-content%2fuploads%2f2017%2f12%2fEvent-Marketing9.jpg&ehk=AoknQZgMJSrWBvViKSy9IMnXEJrb6bf0eq0eyiV7VhA%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.qw-PyAuxIDS2MxjUqd6jZAHaEK?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.0_TozseRcCSbzcKB-9lR9QHaE6?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.n1uoRtgJIxs498eBmvTNfgHaDt?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.IUNBolnViqwCSinauLeZkAHaE8?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-D2gwHYN5WrZasAJ38R_7QHaEL?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.cgjfKQBzwFwlHZ1eFm1h4gHaFS?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.03s9dZah4ds-4kMR9pSMYQHaFQ?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.-fqUTg0FnkvFh4R65c1qRAHaGI?w=834&h=691&rs=1&pid=ImgDetMain"
    ].map((src, index) => (
      <motion.img 
        key={index}
        src={src}
        alt={`img${index + 1}`}
        className='w-full h-[350px] border-2 border-black rounded-lg'
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />
    ))}
  </motion.div>
</section>

        
      {/* why us */}
      <section className='p-5 md:p-10 bg-blue-50'>
  <div className="">
    <motion.h1 
      initial={{ opacity: 0, scale: 0.5 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }} 
      viewport={{ once: true }}
      className='text-4xl sm:text-5xl text-center pt-10 font-bold text-blue-900'
    >
      Why us
    </motion.h1>
  </div>
  <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center mt-10 gap-10">
    <motion.div
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }}
      className='bg-red-200 h-auto sm:h-[400px] w-full sm:w-[300px] rounded-lg p-5'
    >
      <h1 className='font-bold text-3xl'>Value for money</h1>
      <p className='pt-3'>We offer competitive pricing without compromising on quality. Our goal is to provide exceptional value for your investment, ensuring that you get the most out of every penny spent. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }} 
      viewport={{ once: true }}
      className='bg-gray-200 h-auto sm:h-[400px] w-full sm:w-[300px] rounded-lg p-5'
    >
      <h1 className='font-bold text-3xl'>Expertise and Experience</h1>
      <p className='pt-3'>We have a proven track record of delivering high-quality projects on time and within budget. With [X years] of experience in [your industry or field], we understand the nuances and demands of the work, ensuring top-notch results.</p>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }} 
      viewport={{ once: true }}
      className='bg-teal-300 h-auto sm:h-[400px] w-full sm:w-[300px] rounded-lg p-5'
    >
      <h1 className='font-bold text-3xl'>Client-Centric Approach</h1>
      <p className='pt-3'>Our clients are at the heart of everything we do. We prioritize clear communication, responsiveness, and a collaborative spirit to ensure that your vision is fully realized. Your satisfaction is our top priority.</p>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }}
      className='bg-violet-300 h-auto sm:h-[400px] w-full sm:w-[300px] rounded-lg p-5'
    >
      <h1 className='font-bold text-3xl'>Innovative and Creative</h1>
      <p className='pt-3'>We stay ahead of the curve by continuously exploring new tools, techniques, and trends in the industry. This allows us to bring fresh ideas and innovative solutions to your projects, giving you a competitive edge.</p>
    </motion.div>
  </div>
</section>


      {/* contact section */}
      {/* <section className="bg-black flex flex-col justify-evenly md:flex-row items-center md:justify-between p-5 md:p-20">
        
    
      
      <div className="space-y-4">
        <form className="grid grid-cols-3 space-x-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className=""
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-1/2 p-2 "
            required
            onChange={handleChange}
          />
        
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="w-full p-2 "
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-2 "
          required
          onChange={handleChange}
        />
      
          <input
            type="text"
            name="service"
            placeholder="Select Service or Write own your own"
            className="w-full p-2 "
            required
            value={formData.service}
            onChange={handleChange}
            onFocus={() => setIsDropdownOpen(true)}
          />
          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded">
              {services.map((service) => (
                <div
                  key={service}
                  className="p-2 hover:bg-gray-200"
                  onClick={() => handleSelectService(service)}
                >
                  {service}
                </div>
              ))}
            </div>
          )}
        <textarea name="description" id="" placeholder='Desciption'></textarea>
        <input 
        type="text"
        name="service"
        placeholder="What service do you required"
        className="w-full p-2 border rounded"
        required
        onChange={handleChange} 
        />
        <button
          onClick={sendWhatsAppMessage}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Send via WhatsApp
        </button>
        </form>
    
    </div>
    
    <div className="text-center pr-10">
          <h1 className='text-5xl text-center pt-10 text-[150px] text-blue-900'>Lest's Get</h1>
          <div className='text-end'><h1 className='text-5xl text-start pt-5 text-[150px] text-blue-900'>In</h1></div>
          <h1 className='text-5xl text-start pt-10 text-[150px] text-blue-900'>Touch</h1>
        </div>
 
      </section> */}

{/*  */}
{/* new contact section */}

<div>
  <section className='pt-16 px-5 md:px-10'>
    <div>
      <p className='font-semibold text-xl'>Get A Free Estimate</p>
      <h1 className='font-bold text-3xl md:text-5xl'>Contact Us</h1>
    </div>

    <div className="flex flex-col lg:flex-row justify-between mt-10 gap-10">
      {/* Form */}
      <div className='w-full lg:w-2/3'>
        <motion.form 
          initial={{ opacity: 0, translateZ: 50 }} 
          whileInView={{ opacity: 1, translateZ: 0 }} 
          transition={{ duration: 1.5 }} 
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'
        >
          <input
            className='appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500 valid:border-green-400'
            type="text"
            name='firstName'
            placeholder='Name'
            minLength={3}
            onChange={handleChange}
            required
          />
          <input
            className='appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500 valid:border-green-400'
            type="text"
            name="lastName"
            placeholder='Last Name'
            minLength={3}
            onChange={handleChange}
            required
          />
          <input
            className='appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500 valid:border-green-400'
            type="email"
            name="email"
            placeholder='Email'
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="service"
            placeholder="Select Service or Write own"
            className='appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500 valid:border-green-400'
            required
            value={formData.service}
            onChange={handleChange}
            onFocus={() => setIsDropdownOpen(true)}
          />
          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 bg-white border rounded">
              {services.map((service) => (
                <div
                  key={service}
                  className="p-2 hover:bg-gray-200"
                  onClick={() => handleSelectService(service)}
                >
                  {service}
                </div>
              ))}
            </div>
          )}
          <input 
            className='appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500 valid:border-green-400'
            type="number"
            name="mobile"
            placeholder='Mobile Number'
            minLength="10"
            maxLength="10"
            onChange={handleChange}
            required
          />
          <input 
            className='appearance-none border-2 bg-blue-100 h-10 border-red-50 rounded-xl p-4 invalid:border-red-500 valid:border-green-400'
            type="datetime-local"
            required
          />
          <textarea 
            className='appearance-none bg-blue-100 rounded-xl p-4 col-span-2 lg:col-span-3 h-24 invalid:border-red-500 valid:border-green-400'
            type="text" 
            name='description'
            placeholder='Description' 
            minLength="20"
            rows='4'
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className='bg-yellow-400 rounded-2xl h-14 lg:h-20 w-full lg:w-25'
            onClick={sendWhatsAppMessage}
          >
            Send Via WhatsApp 
          </button> 
        </motion.form>

        <div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            viewport={{ once: true }}
            className="mt-10 bg-gray-100 w-full lg:w-[800px] flex flex-col lg:flex-row rounded-[30px] p-5 lg:p-0"
          >
            <div className="flex flex-col items-center bg-yellow-400 rounded-[30px] p-5 w-full lg:w-72">
              <p className='text-xl font-semibold'>People Trust</p>
              <h1 className='text-2xl lg:text-3xl font-bold'>Why We <br /> Are Best</h1>
              <p className='pt-5'>Curabitur vitae nunc sed velit dignissim sodales ut eu. Leo vel orci porta non.</p>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/3 p-5">
              <div>
                <img src='' className='h-[63px] w-[68px] pt-4' alt="" />
              </div>                
              <div className="pt-4">
                <h1 className='text-2xl font-bold'>Licensed Technician</h1>
                <p>Mauris augue neque gravida in fermentum et sollicitudin.</p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/3 p-5">
              <div>
                <img src='' className='h-[63px] w-[68px] pt-4' alt="" />
              </div>                
              <div className="pt-4">
                <h1 className='text-2xl font-bold'>Top Rated Service</h1>
                <p>Mauris augue neque gravida in fermentum et sollicitudin.</p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/3 p-5">
              <div>
                <img src='' className='h-[63px] w-[68px] pt-4' alt="" />
              </div>                
              <div className="pt-4">
                <h1 className='text-2xl font-bold'>Timely Services</h1>
                <p>Mauris augue neque gravida in fermentum et sollicitudin.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <img 
          className='h-full w-full lg:w-[500px] rounded-3xl object-cover'
          src={meet} 
          alt="" 
        />
      </div>
    </div>
  </section>
</div>

{/*  */}


<main className="max-w-screen pl-[80px] mix-blend-multiply"> 
  <div className="relative overflow-hidden w-full" 
  style={
    { height: "100px", 
    maskImage: "linear-gradient(to right, transparent, #000 25%, #000 35%, transparent)", 
    WebkitMaskImage: "linear-gradient(to right, transparent, #000 25%, #000 35%, transparent)" }
    } >
       <div className="relative flex bg-blue-400 ml-24 gap-10"> 
        {brands.map((brand, idx) => ( 
          <motion.div key={idx} 
          className="absolute gap-10" 
          style={{ width: "150px", height: "100px" }} 
          initial={{ left: "100%" }} 
          animate={{ left: "-150px" }} 
          transition={{ duration: 10, ease: "linear", repeat: Infinity, delay: (10 / brands.length) * idx }} > 
          <img src={brand} alt="" 
          className="w-full h-full object-contain mix-blend-color-do" /> 
          </motion.div> 
        ))} 
        </div> 
        </div>
         </main>

        {/* footer section */}
        <footer className="bg-gray-100 text-gray-700 py-10 px-5">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <img src={logo} alt="Company Logo" className='w-[340px] h-auto bg-blue-300'/>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3 underline">Conference</h3>
      <ul className="space-y-2">
        <li>About us</li>
        <li>Work with us</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3 underline">Support</h3>
      <ul className="space-y-2">
        <li>FAQ</li>
        <li>Contact</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3 underline">Need any help?</h3>
      <p>Call 24/7 for any help</p>
      <p className="text-lg font-bold">+91 77779 49850</p>
      <p className="mt-3">Mail to our support team</p>
      <p className="text-blue-600">support@domain.com</p>

      <div className="mt-4 flex space-x-3">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</footer>
  
<div className="border-t bg-blue-600 text-center text-sm text-black py-4">
  <p>© 2025 All Rights Reserved</p>
  <div className="mt-2 flex justify-center space-x-4">
    <a href="#" className="hover:underline">
      Privacy Policy
    </a>
    <a href="#" className="hover:underline">
      Terms & Conditions
    </a>
  </div>
</div>

            

      </div>

      
    </>
  )
}





export default App

// 
// 
// 







