import {useQuery} from  'react-query'


export const fetchCategories = async () =>{
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/category/all`);
    return res.json(); 
}

export const useCategories = () => {
    return useQuery('fetch-all-categories', fetchCategories);
}