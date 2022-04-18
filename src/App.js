import { useState } from 'react';

import { Header } from './components/Header';
import { Section } from './components/Section';
import line from './assets/profile_vector.svg';
import face from './assets/face.png';
import hare from './assets/hare.png';

export function App() {
  const [scrolledOutside, setScrolledOutside] = useState(false);
  return (
    <>
      <Header />
      <div className='w-auto relative'>
        <img
          src={scrolledOutside ? hare : face}
          alt='milosz'
          className='absolute -top-[95px]'
        />
        <h1 className='text-3xl absolute left-56 -top-9'>Miłosz Czapla</h1>
        <img src={line} alt='' className='svg absolute w-max' />
      </div>
      <div className='px-20'>
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
            z „extra extra meme” poniżej
          </p>
        </Section>
        <Section topic='Meme'>
          <h1>
            Nie mam ulubionego aktora z filmów o małym okularniku, ale postać
            którą lubię już mam
          </h1>
          <img src='' alt='' />
        </Section>
      </div>

      {/* <div
        style={{
          width: '100%',
          height: 0,
          paddingBottom: '125%',
          position: 'relative',
        }}
      >
        <iframe
          src='https://giphy.com/embed/128Ygie2wLdH5m'
          width='100%'
          height='100%'
          style={{ position: 'absolute' }}
          frameBorder='0'
          className='giphy-embed'
          allowFullScreen
        ></iframe>
      </div> */}
    </>
  );
}
