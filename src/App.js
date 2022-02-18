import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from '../src/components/contact/Contact.jsx'

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
