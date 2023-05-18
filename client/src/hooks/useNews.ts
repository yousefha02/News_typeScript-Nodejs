import {useQuery} from  'react-query'
import { New } from '../types/News';


export const fetchAllNews = async (page:number) =>{    
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/new/all?page=${page}`);
    return res.json(); 
}

export const useAllNews = (page:number) => {
    return useQuery<{news:New[],totalPages:number}>('fetch-all-news', ()=>fetchAllNews(page));
}

export const fetchSingleNewsAdmin = async (id:string , token:string) =>{    
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/new/admin/${id}`,{
        headers:{
            "Authorization":token
        }
    });
    return res.json(); 
}

export const useSingleNewsAdmin = (id:string,token:string) => {
    return useQuery<{new:New}>(['fetch-single-admin-news',id], ()=>fetchSingleNewsAdmin(id,token));
}