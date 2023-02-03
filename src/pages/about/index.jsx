import Button from '../../components/button';
import { skillsList } from '../../data/skillsList';

const About = () => {
    return(
        <div className='about'>
            <h1>About me .</h1>
            <p>
                I’m a Web Developer specializing in Front-End that loves building products and beautiful web applications that give meaning to others.
            </p>
            <p className='about-quote'>
                I won’t bored you with my background and work experience, but if you have interest you can download my CV down below where all that information is well structured 
            </p>
            <div>
                <Button
                    text={'Download CV'}
                    isDark={true}
                    path={'/contact'}
                    passHref={true}
                    anotherPage={true}
                />
                <Button
                    text={'... Or Take A Look My LinkedIn'}
                    isDark={false}
                    path={'https://www.linkedin.com/in/mpabarca'}
                    passHref={true}
                    anotherPage={true}
                />
            </div>
            <p>
                And here are a few technologies I’ve been working with recently:
            </p>
            <ul>
                {skillsList.map((element, index) => {
                    return <li key={index}>{element}</li>
                })}

            </ul>
        </div>
    )
};

export default About;