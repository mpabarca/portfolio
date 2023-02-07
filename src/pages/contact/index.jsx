import Button from '../../components/button';

const Contact = () => {
    return(
        <div className='contact'>
            <h1>Contact me .</h1>
            <p>
                If you have any question, want to say hi, or even want to reach me for a job opportunity, I'll try my best to answer you as soon as possible. 
            </p>
            <div>
                <Button
                    text={'Mail me'}
                    isDark={true}
                    path={'mailto:mp.abarca.alvear@gmail.com'}
                    passHref={true}
                    anotherPage={true}
                />
                <Button
                    text={'... Or Reach Me Via LinkedIn'}
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