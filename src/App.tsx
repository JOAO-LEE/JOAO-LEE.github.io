import { Header } from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';
import './App.css';

function App() {
  return (
    <>
      <Header />
      {/* <Greeting /> */}
      <Main>
        <Intro />
      </Main>
    </>
  )

}

export default App
