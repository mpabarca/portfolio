import Link from 'next/link';
import { navLinks } from '../data/navbarLinks';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
            <ul className='menu-rrss'>
                <Link href='https://github.com/mpabarca'>
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link href='https://www.linkedin.com/in/mpabarca/'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link href='https://www.instagram.com/pacita_tua/'>
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href='mailto:mp.abarca.alvear@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </ul>
        </nav>
    )
};

export default DesktopNavbar;