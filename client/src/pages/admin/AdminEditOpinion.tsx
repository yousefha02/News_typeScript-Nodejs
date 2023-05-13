import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useParams } from 'react-router-dom'
import Loading from '../../components/reusableUi/Loading';
import AddAuthor from '../../components/admin/authors/AddAuthor';
import HeaderTitle from '../../components/reusableUi/HeaderTitle';
import AddOpinion from '../../components/admin/opinions/AddOpinion';

export default function AdminEditOpinion() {
    const {opinionId} = useParams();
  return (
    <AdminLayout>
        {
            false?
            <Loading/>
            :
            <>
                <HeaderTitle title={"تعديل الرأي"} color={true}/>
                <AddOpinion title='رأي 1' description='' authortId={'10'} isUpdate={true}/>
            </>
        }
    </AdminLayout>
  ) 
}
