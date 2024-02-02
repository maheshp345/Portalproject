
import './App.css';
import Home from './Pages/Home/Home';
import Price from './Pages/Price/Price';
import Training from './Pages/Training/Training';
import Contact from './Pages/Contact/Contact';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">

     <Router>
      <ScrollToTop>
      <Routes>
        <Route path= "/Portalproject" element = {<Home/>} /> 
        <Route path= "/training" element = {<Training/>} /> 
        <Route path= "/pricing" element = {<Price/>} /> 
        <Route path= "/contact" element = {<Contact/>} /> 

      </Routes>
      </ScrollToTop>
     </Router>

      </div>
     
  );
}

export default App;
