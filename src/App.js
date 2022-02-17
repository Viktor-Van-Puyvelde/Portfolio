import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
