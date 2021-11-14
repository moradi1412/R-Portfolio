import About from './components/About';
import background from '../src/assets/img/background.jpg'; 
import Nav from './components/Nav';
import './App.css';


function App() {
  return (
    <div  styles={{ backgroundImage:`url(${background})` }}>
      <Nav />
      <About />
 
    </div>
  );
}

export default App;
