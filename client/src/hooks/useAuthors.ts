import {useQuery} from  'react-query'
import { Author } from '../types/Author';


export const fetchAllAuthors = async (page:number) =>{    
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/author/all?page=${page}`);
    return res.json(); 
}

export const useAllAuthors = (page:number) => {
    return useQuery<{authors:Author[],totalPages:number}>('fetch-all-authors', ()=>fetchAllAuthors(page));
}



export const fetchSingleNewsAuthor = async (id:string) =>{        
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/author/${id}`);
    return res.json(); 
}

export const useSingleAuthor = (id:string) => {
    return useQuery<{author:Author}>(['fetch-single-author',id], ()=>fetchSingleNewsAuthor(id));
}