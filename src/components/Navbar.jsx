import { Link } from "react-router-dom"
import Logo from '../assets/images/logo.png'
import EU from '../assets/images/eu.svg'
import Austria from '../assets/images/austria.svg'
import Env from '../assets/images/env.svg'
import MarketAnalysis from '../assets/images/market-analysis.svg'
import ProjectManagement from '../assets/images/promanage.svg'
import Valuation from '../assets/images/valuation.svg'
import Newsletter from '../assets/images/newsletter.svg'
import Team from '../assets/images/team.svg'
import Jobs from '../assets/images/jobs.svg'
import Events from '../assets/images/events.svg'
import ContactUs from '../assets/images/contact-us.svg'
// import GermanyFlag from '../assets/images/Germany-flag.svg'
// import UKFlag from '../assets/images/UK-flag.svg'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { FaConnectdevelop } from 'react-icons/fa'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="logo-navlinks">
            <Link to={"/"} className="logo"><img src={Logo} alt="" /></Link>        
            <ul className="nav-list">
              <li className="nav-item"><Link><span>Home</span></Link></li>
              <li className="nav-item">
                <Link><span>Consulting</span><MdOutlineKeyboardArrowDown /></Link>
                <div className="dropdown-wrapper">
                  <ul className="dropdown">
                    <li><Link to={'#'}><img src={EU} alt="" /><span>EU Funding</span></Link></li>
                    <li><Link to={'#'}><img src={Austria} alt="" /><span>Austrian Funding</span></Link></li>
                    <li><Link to={'#'}><img src={Env} alt="" /><span>Energy & Environment Consulting</span></Link></li>
                    <li><Link to={'#'}><img src={Valuation} alt="" /><span>Company Valuation</span></Link></li>
                    <li><Link to={'#'}><img src={MarketAnalysis} alt="" /><span>Makrget Analysis</span></Link></li>
                    <li><Link to={'#'}><img src={ProjectManagement} alt="" /><span>Project Management</span></Link></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item"><Link>Funding Agencies</Link></li>
              <li className="nav-item">
                <Link><span>Get Involved</span><MdOutlineKeyboardArrowDown /></Link>
                <div className="dropdown-wrapper">
                  <ul className="dropdown">
                    <li><Link to={'#'}><img src={Team} alt="" /><span>The Dharma Team</span></Link></li>
                    <li><Link to={'#'}><img src={Jobs} alt="" /><span>Jobs</span></Link></li>
                    <li><Link to={'#'}><img src={Events} alt="" /><span>Events</span></Link></li>
                    <li><Link to={'#'}><img src={Newsletter} alt="" /><span>Newsletter</span></Link></li>              
                    <li><Link to={'#'}><img src={ContactUs} alt="" /><span>Contact Us</span></Link></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <select name="lang" className="lang">
                  <option value="languge" selected disabled>Language</option>
                  <option value="germany">German</option>
                  <option value="uk">English</option>
                </select>
              </li>
            </ul>
          </div>
          <div className="button">
            <button className="connect"><FaConnectdevelop /><spanc className="ml-2">Connect</spanc></button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
