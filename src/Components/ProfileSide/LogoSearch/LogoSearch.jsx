import './LogoSearch.css'
import logo from '../../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons';

const LogoSearch = () => {
  return (
    <div>
        <div className='logo-search'>
          <img src={logo} alt='logo'/>
          <div className='searchbar'>
            <input type='text' placeholder='#Explore' />
            <div className='search-icon'>
              <UilSearch/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LogoSearch