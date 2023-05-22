import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import LoginMain from './pages/LoginMain';
import ELogin from './pages/ELogin';
import EJoin from './pages/EJoin';
import EPhone from './pages/EPhone';
import FinElogin from './pages/FinElogin';
import Main from './pages/Main';


function App() {
  
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<LoginMain/>} />
            <Route path="/ejoin" element={<EJoin/>} />
            <Route path="/elogin" element={<ELogin/>} />
            <Route path="/ephone" element={<EPhone/>} />
            <Route path="/finelogin" element={<FinElogin/>} />
            <Route path="/main" element={<Main/>} />
            
          </Routes>
    </div>
  );
}

export default App;
