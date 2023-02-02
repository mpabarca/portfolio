import Image from 'next/image';
import { Inter } from '@next/font/google';
import Button from '../components/button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='home'>
      <h3>Hola !</h3>
      <h1>I’m Maria Paz Abarca,</h1>
      <h2>a chilean Frontend Web Developer</h2>
      <div>
        <Button
          text={'Get In Touch'}
          isDark={true}
          path={'/contact'}
        />
        <Button
          text={'About Me'}
          isDark={false}
          path={'/about'}
        />
      </div>
    </div>
  )
}
