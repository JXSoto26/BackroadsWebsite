import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
        </div>
        {/* <!-- left this comment on purpose --> */}

        <PageLinks parentClass='nav-links' itemClass='nav-link' />

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass='nav-icon' />
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
