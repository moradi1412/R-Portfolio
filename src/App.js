import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer'; 
import background from '../src/assets/img/background.jpg'; 

import './App.css';


function App() {
  return (
    <div  styles={{ backgroundImage:`url(${background})` }}>
      <Nav />
      <div className="content">
      <About />
      </div>
     
      <Footer />
      
    </div>
  );
}

export default App;
