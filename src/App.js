import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Main from './components/Main';
import Menu from './components/Menu';
import gif from './Assets/giph.gif';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={gif}  alt="gif" height={100} />
        <Link className="App-link" to='/'>HOME</Link>
        <Link className="App-link" to='/about'>ABOUT-US</Link>
        <Video />
        <hr  style={{width:'90%'}}/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Menu />
      </header>

    </div>
  );
}

export default App;
