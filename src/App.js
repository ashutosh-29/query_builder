import QueryBuilder from "./components/QueryBuilder";
import Output from "./components/Output";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
const App= ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <QueryBuilder/>  
        }/>
        <Route path='/output' element={
          <Output/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
