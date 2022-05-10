import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing';
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';
import {mainBody} from './styles/Themes'
import Home from './pages/Home';
import Pokedex from './pages/Pokedex.jsx'
import Detail from './pages/Detail'
import { Form } from './components/Form';

function App() {
  return (
    <>
    <GlobalStyles/>
     <ThemeProvider theme={mainBody} >
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/pokedex' element={<Pokedex/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/form' element={<Form/>}/>
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
