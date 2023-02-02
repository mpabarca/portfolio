import Link from 'next/link';

const Button = ({text, isDark, path}) => {
    return (
        <Link href={path}>
            <button 
                className={`button-purple ${isDark ? 'dark' : 'light'}`}
            >
                {text}
            </button>
        </Link>
    )
};

export default Button;