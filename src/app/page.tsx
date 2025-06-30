
// src/app/page.tsx
"use client";
import "./globals.css"
import { useState, useEffect, useCallback } from 'react';
import Topbar from '@/components/topbar/topbar';
import { LineChart, AreaChart } from "recharts";
import SideBar from '@/components/sidebar/sidebar';
import HomePage from '@/components/home/home';
import Money from "@/components/money/money";
import Category from "@/components/category/category";
import Calculator from "@/components/calculator/calculator";
import Prets from "@/components/prets/prets";


function renderPage({ }) {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <HomePage budgets="2.503.000Ar"/>;
      case 'money':
        return <Money />
      case 'category':
        return <Category />
      case 'calculator':
        return <Calculator />
      case 'pret':
        console.log(currentPage);
        return <Prets />
        
    }
  }

  return (

    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LocalFinance</title>
      </head>
      <body className='bg-white '>
        <div className="navbar fixed top-0" style={{width: "-webkit-fill-available"}}>
          <Topbar />
        </div>
        <div style={{zIndex: '-1',position: 'absolute',width: '-webkit-fill-available'}} className='flex'>
          <SideBar setCurrentPage={setCurrentPage} current={currentPage}/>
            {renderPageContent()}   
        </div>
      </body>
    </html>

  );
};

export default renderPage;
