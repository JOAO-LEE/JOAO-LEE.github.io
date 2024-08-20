import { Header } from './components/Header/Header';
// import Greeting from './components/Greeting/Greeting';
import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';
import './App.css';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import { ProjectProvider } from './context/Project/ProjectProvider';
import { projects } from './projects';

function App() {
  return (
    <>
      <ProjectProvider slides={projects}>
        <Header />
        <Main>
          <Intro />
          <About />
          <Projects/>
        </Main>
        </ProjectProvider>
    </>
  )
}

export default App;
