const Button = ({text, isDark, onClickFunction}) => {
    return (
        <button 
            className={`button-purple ${isDark ? 'dark' : 'light'}`}
            onClick={onClickFunction}
        >
            {text}
        </button>
    )
};

export default Button;