import Button from '../../components/button';

const Contact = () => {
    return(
        <div className='contact'>
            <h1>Contact me .</h1>
            <div>
                <Button
                    text={'Mail me'}
                    isDark={true}
                    path={'mailto:mp.abarca.alvear@gmail.com'}
                    passHref={true}
                    anotherPage={true}
                />
                <Button
                    text={'... Or Copy My Email'}
                    isDark={false}
                    path={'https://www.linkedin.com/in/mpabarca'}
                    passHref={true}
                    anotherPage={true}
                />
            </div>
        </div>
    )
};

export default Contact;