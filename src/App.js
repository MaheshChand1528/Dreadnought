
import About from './About';
import './App.css';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Info from './Info';
import Postheader from './Postheader';
import Prefooter from './Prefooter';
import Social from './Social';

function App() {
  return (
    <div className="App">
      <Header/>
      <Postheader/>
      <Info/>
      <Social/>
      <About/>
      <Experience/>
      <Prefooter/>
      <Footer/>
    </div>
  );
}

export default App;
