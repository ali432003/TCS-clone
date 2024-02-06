import React from 'react'
import Nav from '../../components/Nav'
import Caroseul from '../../components/Caroseul'
import ProductsServices from './ProductsServices';
import ExpCenter from './ExpCenter';
import EcomSol from './EcomSol';
import CSR from './CSR';
import CustomerSup from './CustomerSup';
import News from './News';
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <>
            <Nav />
            <Caroseul />
            <ProductsServices />
            <ExpCenter />
            <EcomSol />
            <CSR />
            <CustomerSup />
            <News />
            <Footer />
        </>
    )
}

export default Home;