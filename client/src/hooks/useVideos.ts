import {useQuery} from  'react-query'
import { video } from '../types/Video';


export const fetchAllVideo = async (page:number , size:number) =>{    
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/video/all?page=${page}&&size=${size}`);
    return res.json(); 
}

export const useAllVideos = (page:number, size:number) => {
    return useQuery<{videos:video[],totalPages:number}>('fetch-all-videos', ()=>fetchAllVideo(page,size));
}