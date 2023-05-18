import React , {useState , useEffect}from 'react'
import NewBox from '../../reusableUi/NewBos'
import { Grid } from '@mui/material'
import { useAllNews } from '../../../hooks/useNews'
import MainBox from '../../skelton/MainBox';
import PaginationBox from '../../reusableUi/Pagenation';

function AdminViewNews() {
    const [page, setPage] = useState<number>(1);
    const {data , isFetching , refetch} = useAllNews(page);

    useEffect(()=>{
        refetch();
    },[page,refetch])

    
    
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
                <NewBox news={ne} isAdmin={true}/>
            </Grid>
            })
        }
    </Grid>
    <PaginationBox count={data?.totalPages||0} page={page} setPage={setPage}/>
    </>
  )
}

export default AdminViewNews