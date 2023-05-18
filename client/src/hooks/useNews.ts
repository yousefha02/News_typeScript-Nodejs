import {useQuery} from  'react-query'
import { New } from '../types/News';


export const fetchAllNews = async (page:number) =>{
    console.log("elmknek");
    
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/new/all?page=${page}`);
    return res.json(); 
}

export const useAllNews = (page:number) => {
    return useQuery<{news:New[],totalPages:number}>('fetch-all-news', ()=>fetchAllNews(page));
}