import {useQuery} from  'react-query'
import { Video } from '../types/Video';


export const fetchVideos = async () =>{
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/video/all?size=8&&page=1`);
    return res.json(); 
}

export const useVideos = () => {
    return useQuery<{videos:Video[]}>('fetch-videos', fetchVideos);
}