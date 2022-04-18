import { useState, useRef } from 'react';

import { Header } from './components/Header';
import { Section } from './components/Section';
import line from './assets/profile_vector.svg';
import face from './assets/face.png';
import hare from './assets/hare.png';

export function App() {
  const extraMeme = useRef(null);
  const profile = useRef(null);
  const [scrolledOutside, setScrolledOutside] = useState(false);

  return (
    <>
      <Header />
      <div className='mx-auto max-w-3xl pt-40' ref={profile}>
        <div className='w-auto relative'>
          <img
            src={scrolledOutside ? hare : face}
            alt='milosz'
            className='absolute -top-[95px]'
          />
          <h1 className='text-3xl absolute left-56 -top-9 text-violet'>
            Miłosz Czapla
          </h1>
          <img src={line} alt='' className='svg absolute w-max' />
        </div>
      </div>
      <div className='pt-72 px-20 pb-40 flex gap-36 flex-col'>
        <Section topic='Motywacja'>
          <p>
            Myślę, że pomysł hakatonu jest genialny, chętnie zobaczę, jak coś
            takiego wygląda, jak to się organizuje i ile trzeba zrobić, żeby coś
            takiego się udało. Mam nadzieję na stworzenie silnych relacji w CT i
            świetną zabawę, słyszałem też, że macie najlepsze sesje zdjęciowe
            XD, nie mogę się doczekać nowej fotki na profilowym. Chciałbym też
            zdobyć doświadczenie przy robieniu dużego wydarzenia, jakim
            zdecydowanie jest BHC. Jeśli chodzi o grafikę, to coś, co daje
            zawsze masę frajdy, efekty pracy są szybko widoczne i robią
            wrażenie.
          </p>
        </Section>
        <Section topic='Doświadczenie'>
          <p>
            Moje doświadczenie polega na robieniu mock upów stron internetowych,
            które potem tworzyłem jako swoje projekty, oprócz samego układu
            oznacza to też tworzenie jakichś ikonek. Uważam, że to małe
            doświadczenie, ale jest . Mam raczej nadzieję na zdobycie go,
            uważam, że posiadanie wyczucia stylu jest zawsze wartościowe, czy to
            przy zakupie NFT, czy też robieniu CV.
          </p>
        </Section>
        <Section topic='Dostępność'>
          <p>
            Elastycznie dostosowuje swój grafik. W wakacje na razie jest szansa,
            że pojadę na BEST course 16-25 lipca.
          </p>
        </Section>
        <Section topic='Ulubiony Harry Potter'>
          <p>
            Harry Potter i Komnata Tajemnic – pierwszy raz w niej zostajemy
            zaznajomieni z proszkiem Fiuu i siecią Fiuu, czego skutkami w
            przyszłości jest stworzenie w kolaboracji z serialem Gra o Tron memu
            z{' '}
            <span
              className='text-violet text-xl cursor-pointer'
              onClick={() => {
                extraMeme.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              „extra extra meme”
            </span>
          </p>
        </Section>
        <section className='w-4/5 mx-auto'>
          <p className='p-4 font-bold text-3xl  text-white text-left'>Meme</p>
          <div className='p-4 text-left'>
            <h1>
              Nie mam ulubionego aktora z filmów o małym okularniku, ale postać
              którą lubię już mam
            </h1>
            <img
              className='py-6 mx-auto'
              src={require('./assets/watt.png')}
              alt='meme'
            />
            <div className='flex justify-between'>
              <div>
                <a
                  className='py-4 hover:text-dark'
                  href='
              https://www.youtube.com/watch?v=j6jSvHGLUWk
              '
                  target='_blank'
                >
                  Extra meme
                </a>
              </div>
              <div>
                <a
                  className={`py-4 hover:text-dark `}
                  ref={extraMeme}
                  href='https://www.youtube.com/watch?v=5Hplx-geZHo'
                  target='_blank'
                  onClick={() => {
                    setScrolledOutside(true);
                  }}
                  rel='noreferrer'
                >
                  extra extra meme
                </a>
              </div>
            </div>
          </div>
        </section>
        <h1 className={`text-3xl ${scrolledOutside ? 'hidden' : ''}`}>
          Czy udało ci się znaleść zająca?{' '}
        </h1>
      </div>
    </>
  );
}
