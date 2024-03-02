import logo from './logo.svg';
import './App.css';
import Header from './Component/Header.jsx'
import Details from './Component/Details.jsx';

import './style.css'
import Footer from './Component/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <Footer />
      {/* <Card /> */}
    </div>
  );
}

export default App;
