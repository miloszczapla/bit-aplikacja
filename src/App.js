import { Header } from './components/Header';
import { FckBHC } from './components/FckBHC';
import { HammImg } from './components/HammImg';

export function App() {
  return (
    <>
      <FckBHC />
      <Header />
      <HammImg />
      <h2 className='text-center text-4xl'>
        <span className='uppercase text-blue'>w</span>
        <span className='uppercase text-crimson'>b</span>
        <span className='uppercase text-light-violet'>i</span>
        <span className='uppercase text-crimson'>j</span>
        <span className='uppercase text-violet'>a</span>
        <span className='uppercase text-blue'>m</span> się w{' '}
        <span className='text-red text-shadow-red'>BIT</span>a na{' '}
        <span className=' text-violet text-shadow-violet'>HAMMa</span>
      </h2>
    </>
  );
}
