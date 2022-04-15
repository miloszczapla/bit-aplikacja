import { Header } from './components/Header';
import { FckBHC } from './components/FckBHC';
import { HammImg } from './components/HammImg';
import { Answers } from './components/Answers';
import { Section } from './components/Section';

export function App() {
  return (
    <>
      <Header />
      <FckBHC />
      <HammImg />
      <h2 className='text-center text-4xl text-white'>
        <span className='uppercase  text-shadow-blue text-blue'>w</span>
        <span className='uppercase  text-shadow-crimson text-crimson'>b</span>
        <span className='uppercase  text-shadow-light-violet text-light-violet'>
          i
        </span>
        <span className='uppercase  text-shadow-crimson text-crimson'>j</span>
        <span className='uppercase  text-shadow-violet text-violet'>a</span>
        <span className='uppercase  text-shadow-blue text-blue'>m</span> się w{' '}
        <span className='text-red text-shadow-red'>BIT</span>a na{' '}
        <span className=' text-violet text-shadow-violet'>HAMMa</span>
      </h2>

      <Answers />
      <div className='px-20'>
        <Section side='right' topic='Motywacja' img='motivation.jpg'>
          <p>
            Główna motywacja to możliwość robienia tego zacnego eventu,
            sprawienie, że ktoś świetnie się będzie bawił, spojrzenie i
            zobaczenie, jaki kawał roboty się odwaliło i jak dużo osiągnęło.
            Oprócz tego integracja na całego ze wspaniałym CT jest zawsze
            kozacka. Zdobywanie doświadczenia od bardziej doświadczonych ludzi
            trzyma mnie najbardziej w projekcie, patrząc na nich, wiem, ile
            jeszcze mogę się dowiedzieć i co osiągnąć. LG to fuszka, która
            pociąga za sobą dużo odpowiedzialności i pracy, a to oznacza świetne
            warunki do rozwoju, nauki i poznawania świata wydarzeń od podszewki.
            Ja ogólnie lubię takie klimaty i chętnie będę w robił coraz większe
            projekty albo coraz bardziej komfortowo i z pompą.
          </p>
        </Section>
        <Section side='left' topic='Dostępność' img='clock.png'>
          <p>
            Jest szansa, że pomiędzy 16 a 25 lipca wyjadę na BEST courses,
            oprócz tego planów aktualnie brak, więc mogę być cały wasz, cały
            wasz.
          </p>
        </Section>
        <Section side='right' topic='Doświadczenie' img='exp.png'>
          <p>
            Expu trochę mam, chociaż nie w logistyce. Chociaż byłem FR-em na
            obozie zimowy, SZEF&Adapciak i aktualnie jestem w Tygodniu Zdrowia.
            Więc mam podstawowe pojęcie, jak wygląda organizacja wydarzenia i co
            się tam w ogóle dzieje. W wolnym czasie organizuje integracje dla
            kierunku (to mój projekt na kursie XD), jakieś planszówki, laser Tag
            czy kręgle.
          </p>
        </Section>
        <Section side='left' topic='Dlaczego BIT' img='logo.webp'>
          <p>
            Brałem udział w tegorocznej edycji jako uczestnik warsztatów. Bardzo
            mi się spodobało, to co wam się udało zrobić i chętnie w tym roku
            będę razem z całym CT tworzył coś jeszcze lepszego niż w poprzednim.
            Podoba mi się też połączenie świetnej zabawy i wartościowej wiedzy w
            jednej tematyce na jednym wydarzeniu. Myślę, że dodaje to dynamizmu
            całości. Też tematyka gier nie jest mi obca i, mimo że już mało
            spędzam czasu na gierkach komputerowych to duży mam do nich, jak i
            graczy sentyment. Przesiadłem się na planszówki (integracja? Wink,
            wink)
          </p>
        </Section>
        <Section side='right' topic='Najlepsze Toy Story' img='old_sid.jpg'>
          <h1>
            Zdecydowanie Toy Story 3, w tej częsci okazało się, że Sid skończył
            jako śmieciarz.
          </h1>
        </Section>
      </div>

      <div className='flex flex-col justify-center py-6'>
        <h1 className='font-comfortaa text-violet text-shadow-red text-2xl'>
          Miłosz Czapla
        </h1>
        <img
          src={require('./assets/milosz.jpg')}
          alt='Ja'
          className='p-4 mx-auto rounded-3xl'
        />
      </div>
    </>
  );
}
