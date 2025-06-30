import {Plus, Edit, LucideHandCoins} from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';


const Prets = () => {
    return (
        <div className="w-full ml-[16rem] pt-[5rem]  col-2 gap-4 bg-white p-5 bg-[#fefaee]">
            <h1 className='text-xl font-bold text-[#2E4A62]'>Vos prêts</h1>
            <p>Ici vous pouvez ajouter tout vos prêts pour mieux les organiser</p>
            <div className="actioncard flex mt-4 w-100 mb-4 gap-4">
                <button className="hover:border-green rounded-xl gap-3 flex text-sm border p-2">
                    <Plus />
                    Ajouter un prêt
                </button>
                <button className="rounded-xl flex gap-3 text-sm border p-2">
                    <Edit />
                    Modifier un prêt
                </button>
                <button className="rounded-xl flex gap-3 text-sm border p-2">
                    <LucideHandCoins />
                    Payer un prêt
                </button>
            </div>
        </div>
    )
}

export default Prets;