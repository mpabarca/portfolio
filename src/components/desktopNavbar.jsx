import Link from 'next/link';
import { navLinks } from '../../data/navbarLinks';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const DesktopNavbar = () => {
    return (
        <nav className='desktop'>
            <div className='logo'>
                <Link href='/'>
                    <Image 
                        src={logo}
                        width={65}
                        alt='logo'
                    />
                </Link >
            </div>
            <ul className='menu'>
                {navLinks.map((link, index) => {
                    return (
                        <Link key={index} href={link.path}>
                            <li key={index}>{link.name}</li>
                        </Link>
                )
                })}
            </ul>
        </nav>
    )
};

export default DesktopNavbar;