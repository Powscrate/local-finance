import { Layout, DollarSign, Calculator, BookTextIcon, Sidebar, MessageSquareTextIcon, HelpingHand } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react';


interface SidebarProps {
    setCurrentPage: (page: string) => void;
    current?: string;
}


const SideBar: React.FC<SidebarProps> = ({ setCurrentPage, current }) => {
    const menu = [
        { id: 1, title: "Dashboard", icon: <Layout />, navigation: "dashboard" },
        { id: 2, title: "Budget", icon: <DollarSign />, navigation: "money" },
        { id: 3, title: "Prêts", icon: <HelpingHand />, navigation: "pret" },
        { id: 4, title: "Catégories", icon: <BookTextIcon />, navigation: "category" },
        { id: 5, title: "Calculator", icon: <Calculator />, navigation: "calculator" },

    ]
    return (
        <div className="w-100 bg-[#F8F8FF] h-[100vh] mt-[4.6%] z-2 fixed border-r p-5">
            {menu.map(menus => (
                <div key={menus.id} onClick={() => setCurrentPage(menus.navigation)}
                    className={`${current == menus.navigation ? 'bg-black text-white font-bold' : ''} mb-3 p-2 hover:cursor-p  hover:bg-[#212121] hover:text-white w-[200px] bg-white flex gap-3 border border-[#e2e2e2] rounded-xl`}>
                    {menus.icon}
                    {menus.title}
                </div>
            ))}
        </div>
    )
};

export default SideBar;