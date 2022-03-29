import { Route , Routes} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <h1>This Site Build for Learning React Routing!!</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
