
import { Header } from './components/Header/Header';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <>
      <Header />
      <Greeting />
      <Main>
        <Intro />
      </Main>
    </>
  )

}

export default App
