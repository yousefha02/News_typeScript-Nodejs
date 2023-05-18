import React , {useState , useEffect}from 'react'
import NewBox from '../../reusableUi/NewBos'
import { Grid } from '@mui/material'
import { useAllNews } from '../../../hooks/useNews'
import MainBox from '../../skelton/MainBox';
import PaginationBox from '../../reusableUi/Pagenation';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

function AdminViewNews() {
    const [page, setPage] = useState<number>(1);
    const {data , isFetching , refetch} = useAllNews(page);
    const {token} = useSelector( (st : RootState) => st.admin);


    useEffect(()=>{
        refetch();
    },[page,refetch])

    const handleDelete = async (id:number) :Promise<void> => {
        try{
            const response = await fetch(`${process.env.REACT_APP_API_KEY}/api/new/${id}`,{
                method:"DELETE",
                headers:{
                    "Authorization":token
                },
            })
            const resData = await response.json();
            if(response.status!==200 &&response.status!==201)
            {
                throw new Error('failed occured')
            }
        }
        catch(err)
        {
            console.log(err)
        }
        refetch();
    }
    
  return (
    isFetching
    ?
    <Grid container spacing={2}>
        <Grid item sm={6} md={4} lg={3}>
            <MainBox/>
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <MainBox/>
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <MainBox/>
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
            <MainBox/>
        </Grid>
    </Grid>
    :
    <>
    <Grid container spacing={2}>
        {
            data?.news.map(ne=>{
                return <Grid item sm={6} md={4} lg={3} key={ne.id+"senj"}>
                <NewBox news={ne} isAdmin={true} handleDelete={handleDelete}/>
            </Grid>
            })
        }
    </Grid>
    <PaginationBox count={data?.totalPages||0} page={page} setPage={setPage}/>
    </>
  )
}

export default AdminViewNews