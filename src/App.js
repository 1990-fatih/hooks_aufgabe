import logo from './logo.svg';
import './App.css';
import Zahler from './Components/Zahler';
import Form from './Components/Form';
import Bücher from './Components/Bücher';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Footer/> */}
      { <Bücher/>
        /* <Form/>
       <Zahler/> */} 
      </header>
    </div>
  );
}

export default App;
