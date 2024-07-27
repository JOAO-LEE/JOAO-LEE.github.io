import { Header } from './components/Header/Header';
// import Greeting from './components/Greeting/Greeting';
import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';
import './App.css';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <About />
        <Projects/>
      </Main>
    </>
  )
}

export default App;
