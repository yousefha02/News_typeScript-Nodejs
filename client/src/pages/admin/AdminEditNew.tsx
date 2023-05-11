import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { useParams } from 'react-router-dom'
import Loading from '../../components/reusableUi/Loading';
import AddNew from '../../components/admin/news/AddNew';
import HeaderTitle from '../../components/reusableUi/HeaderTitle';

export default function AdminEditNew() {
    const {newId} = useParams();
  return (
    <AdminLayout>
        {
            false?
            <Loading/>
            :
            <>
            <HeaderTitle title={"تعديل الخبر"} color={true}/>
            <AddNew title='خبر 1' description='<p>وصف الخبر</p>' categoryId='10' isUpdate={true}/>
            </>
        }
    </AdminLayout>
  ) 
}
