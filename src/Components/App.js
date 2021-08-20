import './App.js';
import './App.css'
import NavBar from './NavBar/NavBar.js';
import Home from './home/home.js';
import Projects from './projects/projects.js';
import Education from './Skills/education.js';
import Footer from './Footer/footer.js';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Home/>
      <Projects/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
