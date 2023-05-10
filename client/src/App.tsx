import React , {useEffect}from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import {createTheme,ThemeProvider} from '@mui/material'
import Home from './pages/user/Home';
import Opinions from './pages/user/Opinions';
import OpinionsCategory from './pages/user/OpinionsCategory';
import SingleAuthor from './pages/user/SingleAuthor';

const themes = createTheme({
    palette:{
      primary:{
        main:"#b80000",
        contrastText:"#fff"
      }
    }
})

function App() {
  useEffect(()=>{
    document.body.dir="rtl"
  },[]);

  return (
    <ThemeProvider theme={themes}>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='opinions' element={<Opinions/>}/>
        <Route path='opinions/:categId' element={<OpinionsCategory/>}/>
        <Route path='authors/:authorId' element={<SingleAuthor/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
