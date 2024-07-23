import { Header } from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';
import './App.css';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <Projects />
      </Main>
      {/* <img src={"src/assets/up-arrow.png"} className='absolute size-80 up-arrow'/> */}
    </>
  )
}

export default App;
