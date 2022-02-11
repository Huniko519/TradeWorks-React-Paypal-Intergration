import Home from './pages/Home';
import CheckOut from './pages/CheckOut';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/checkout" element={<CheckOut />} />
       </Routes>
    </div>
  );
}

export default App;