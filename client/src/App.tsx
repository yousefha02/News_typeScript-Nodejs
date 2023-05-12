import React , {useEffect}from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import {createTheme,ThemeProvider} from '@mui/material'
import Home from './pages/user/Home';
import AdminLand from './pages/admin/AdminLand';
import AdminCategories from './pages/admin/AdminCategories';
import AdminNews from './pages/admin/AdminNews';
import Opinions from './pages/user/Opinions';
import OpinionsCategory from './pages/user/OpinionsCategory';
import SingleAuthor from './pages/user/SingleAuthor';
import Videos from './pages/user/Videos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminEditNew from './pages/admin/AdminEditNew';
import AdminAuthors from './pages/admin/AdminAuthors';
import AdminEditAuthor from './pages/admin/AdminEditAuthor';
import AdminOpinions from './pages/admin/AdminOpinions';
import AdminEditOpinion from './pages/admin/AdminEditOpinion';
import AdminVideos from './pages/admin/AdminViedos';


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
        {/* start admin pages */}
        <Route path='/admin' element={<AdminLand/>}/>
        <Route path='/admin/categories' element={<AdminCategories/>}/>
        <Route path='/admin/news' element={<AdminNews/>}/>
        <Route path='/admin/news/edit/:newId' element={<AdminEditNew/>}/>
        <Route path='/admin/authors' element={<AdminAuthors/>}/>
        <Route path='/admin/authors/edit/:authorId' element={<AdminEditAuthor/>}/>
        <Route path='/admin/opinions' element={<AdminOpinions/>}/>
        <Route path='/admin/opinions/edit/:opinionId' element={<AdminEditOpinion/>}/>
        <Route path='/admin/videos' element={<AdminVideos/>}/>
        {/* end admin pages */}
        <Route path='opinions' element={<Opinions/>}/>
        <Route path='opinions/:categId' element={<OpinionsCategory/>}/>
        <Route path='authors/:authorId' element={<SingleAuthor/>}/>
        <Route path='videos' element={<Videos/>}/>
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
