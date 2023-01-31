import Link from 'next/link';
import { navLinks } from '../../data/navbarLinks';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const MobileNavbar = () => {

    return (
        <nav className='mobile'>
            <div className='navbar'>
                <div className="nav-container">
                    <div className='logo'>
                        <Link href='/'>
                        <Image 
                            src={logo}
                            height={28}
                            alt='logo'
                        />
                        </Link >
                    </div>
                    <input 
                        id="checkbox-menu" 
                        className="checkbox" 
                        type="checkbox"
                    />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className='menu-items'>
                        {navLinks.map((link, index) => {
                            return (
                                <Link key={index} href={link.path}>
                                    <li key={index}>{link.name}</li>
                                </Link>
                        )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default MobileNavbar;