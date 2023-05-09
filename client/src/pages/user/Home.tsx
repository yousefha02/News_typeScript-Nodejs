import React from 'react'
import Layout from '../../components/user/Layout'
import MainNews from '../../components/user/home/MainNews'
import NewsDetails from '../../components/user/home/NewsDetails'
import Opinions from '../../components/user/home/Opinions'

export default function Home() {
    return (
        <Layout>
            <MainNews/>
            <NewsDetails/>
            <Opinions/>
        </Layout>
    )
}