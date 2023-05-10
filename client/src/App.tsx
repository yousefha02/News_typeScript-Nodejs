import React , {useEffect}from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import {createTheme,ThemeProvider} from '@mui/material'
import Home from './pages/user/Home';
import AdminLand from './pages/admin/AdminLand';
import AdminCategories from './pages/admin/AdminCategories';
import AdminNews from './pages/admin/AdminNews';

const themes = createTheme({
  direction:"rtl",
    palette:{
      primary:{
        main:"#b80000",
        contrastText:"#fff"
      },
      secondary:{
        main:"#000000",
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
        {/* admin pages */}
        <Route path='/admin' element={<AdminLand/>}/>
        <Route path='/admin/categories' element={<AdminCategories/>}/>
        <Route path='/admin/news' element={<AdminNews/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
