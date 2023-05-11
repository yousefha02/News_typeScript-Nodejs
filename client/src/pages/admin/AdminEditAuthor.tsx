import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useParams } from 'react-router-dom'
import Loading from '../../components/reusableUi/Loading';
import AddAuthor from '../../components/admin/authors/AddAuthor';
import HeaderTitle from '../../components/reusableUi/HeaderTitle';

export default function AdminEditAuthor() {
    const {authorId} = useParams();
  return (
    <AdminLayout>
        {
            false?
            <Loading/>
            :
            <>
                <HeaderTitle title={"تعديل المؤلف"} color={true}/>
                <AddAuthor name='مؤلف 1' headline='وصف مؤلف' isUpdate={true}/>
            </>
        }
    </AdminLayout>
  ) 
}
