import {useQuery} from  'react-query'
import { Opinion } from '../types/Opinion';


export const fetchAllOpinion = async (page:number) =>{    
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/opinion/all?page=${page}`);
    return res.json(); 
}

export const useAllOpinions = (page:number) => {
    return useQuery<{opinions:Opinion[],totalPages:number}>('fetch-all-opinions', ()=>fetchAllOpinion(page));
}

export const fetchSingleOpinion = async (id:string) =>{    
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/opinion/${id}`);
    return res.json(); 
}

export const useSingleOpinion = (id:string) => {
    return useQuery<{opinion:Opinion}>(['fetch-single-opinion',id], ()=>fetchSingleOpinion(id));
}