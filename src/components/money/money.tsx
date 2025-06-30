import { DollarSign, ChartArea, Wallet,Wallet2 , Plus, Edit, Search, Filter, Zap } from 'lucide-react'
import HomePage from '../home/home';
import { useState } from 'react'
export default function Money() {

    const [billNumber, setBillNumber] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [amount, setAmount] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    // Données fictives pour l'historique des paiements
    const paymentHistory = [
        { id: 1, date: new Date(), billNumber: 'FACT-1001', category: 'Nouriture', amount: 25000, status: 'En attente' },
        { id: 2, date: new Date(2023, 7, 18), billNumber: 'FACT-1002', category: 'Santé', amount: 50000, status: 'Complété' },
        { id: 3, date: new Date(2023, 7, 17), billNumber: 'FACT-1003', category: 'Frais', amount: 75000, status: 'Échoué' },
        { id: 4, date: new Date(2023, 7, 16), billNumber: 'FACT-1004', category: 'Vêtements', amount: 100000, status: 'En attente' },
    ];

    // Filtrer les données en fonction des valeurs de searchQuery, statusFilter et dateFilter
    const filteredPayments = paymentHistory.filter(payment => {
        const matchesSearch =
            payment.billNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.status.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter ? payment.status === statusFilter : true;

        const matchesDate = dateFilter ? payment.date.toLocaleDateString('fr-KM') === new Date(dateFilter).toLocaleDateString('fr-KM') : true;

        return matchesSearch && matchesStatus && matchesDate;
    });
    return (
        <div className="w-full ml-[16rem] pt-[5rem]  col-2 gap-4 bg-white p-5 bg-[#fefaee]">
            <h1 className='text-xl font-bold text-[#2E4A62] '>Vos Budgets</h1>
            <p>Ici vous pouvez ajouter tout vos prêts pour mieux les organiser</p>
            <div className="flex mt-4 gap-4">
                <div
                    style={{ background: 'linear-gradient(30deg,rgb(6, 21, 39),rgb(181, 217, 255)) ' }}
                    className="card flex justify-between p-10 shadow rounded-xl w-40 border text-white">
                    <div>
                        <h1>Solde Total</h1>
                        <h1 className='text-2xl font-bold'>2.503.000Ar</h1>
                    </div>
                    <div className="icon  text-xxl">
                        <Wallet size={30} />
                    </div>

                </div>

                <div
                    style={{ background: 'linear-gradient(30deg,rgb(6, 21, 39),rgb(181, 217, 255)) ' }}
                    className="card flex justify-between p-10 shadow rounded-xl w-40 border text-white">
                    <div>
                        <h1>Salaire mensuelle</h1>
                        <h1 className='text-2xl font-bold'>1.500.000Ar</h1>
                    </div>
                    <div className="icon  text-xxl">
                        <Wallet2 size={30} />
                    </div>

                </div>

                <div className="actioncard p-5">
                    <button className="hover:border-green rounded-xl mb-3 gap-3 flex w-full text-sm border p-2">
                        <Plus />
                        Ajouter
                    </button>
                    <button className="rounded-xl mt-3 flex gap-3 w-full text-sm border p-2">
                        <Edit />
                        Modifier
                    </button>
                </div>
            </div>




            <div className="overflow-x-auto mt-10">
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b border-gray-200">
                            <th className="pb-3 font-medium text-sm text-gray-500">Date</th>
                            <th className="pb-3 font-medium text-sm text-gray-500">N° Facture</th>
                            <th className="pb-3 font-medium text-sm text-gray-500">Catégories</th>
                            <th className="pb-3 font-medium text-sm text-gray-500">Montant</th>
                            <th className="pb-3 font-medium text-sm text-gray-500">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((payment) => {
                            const statusClass =
                                payment.status === 'En attente' ? 'bg-yellow-100 text-yellow-800' :
                                    payment.status === 'Complété' ? 'bg-green-100 text-green-800' :
                                        'bg-red-100 text-red-800';

                            const categoryClass =
                                payment.category === 'Nouriture' ? 'bg-blue-100 text-blue-800' :
                                    payment.category === 'Santé' ? 'bg-green-100 text-green-800' :
                                        payment.category === 'Frais' ? 'bg-yellow-100 text-yellow-800' :
                                            payment.category === 'Vêtement' ? 'bg-brown-100 text-brown-800' :
                                                'bg-red-100 text-red-800';

                            return (
                                <tr key={payment.id} className="border-b border-gray-100">
                                    <td className="py-3 text-sm">
                                        {payment.date.toLocaleDateString('fr-KM')}
                                    </td>
                                    <td className="py-3 text-sm">
                                        {payment.billNumber}
                                    </td>
                                    <td className="py-3 text-sm">
                                        <span
                                            className={`px-2 py-1 rounded-full w-[90%] text-xs ${categoryClass}`}>
                                            {payment.category}
                                        </span>
                                    </td>
                                    <td className="py-3 text-sm font-medium">
                                        {payment.amount.toLocaleString('fr-KM')} Ar
                                    </td>
                                    <td className="py-3 text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs ${statusClass}`}>
                                            {payment.status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}