import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'
import NavLinks from './Navlinks'
const Navbar = () => {
  const {sidebarOpen} = useGlobalContext()
  return (
    <nav>
      <div className="nav-center">
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={sidebarOpen}><FaBars/></button>
        <NavLinks/>
      </div>
    </nav>
  )
}
export default Navbar