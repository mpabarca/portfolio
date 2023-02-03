import Link from 'next/link';

const Button = ({text, isDark, path, passHref, anotherPage}) => {
    return (
        <Link 
            href={path} 
            passHref={passHref} 
            target={anotherPage ? '_blank' : '_self'}
        >
            <button 
                className={`button-purple ${isDark ? 'dark' : 'light'}`}
            >
                {text}
            </button>
        </Link>
    )
};

export default Button;