import { DollarSign, ChartArea, Plus, Edit } from 'lucide-react'
export default function Category() {

    const categories = [
        { id: 1, name: "Nouriture", percentage: 50, color: "#2E4A62" },
        { id: 2, name: "Santé", percentage: 13, color: "#309130" },
        { id: 3, name: "Frais", percentage: 12, color: "#e03131" },
        { id: 4, name: "Vêtements", percentage: 25, color: "#8d5eb7" }
    ]
    return (
        <div className="w-full ml-[16rem] pt-[5rem] bg-white p-5 bg-[#fefaee] ">
            <h1 className='text-[#2E4A62] font-bold text-xl'>Vos catégories</h1>
            <p className='mb-4'>Vous pouvez modifier ou ajouter des catégories selon vos besoins, ci-dessous sont ajoutés par défaut</p>
            <div className="actioncard flex w-100 mb-4 gap-4">
                <button className="hover:border-green rounded-xl gap-3 flex text-sm border p-2">
                    <Plus />
                    Ajouter un autre catégorie
                </button>
                <button className="rounded-xl flex gap-3 text-sm border p-2">
                    <Edit />
                    Modifier un catégorie
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {categories.map(category => (
                    <div key={category.id} style={{ backgroundColor: category.color }} className={`rounded-xl text-white card p-4 border rounded`}>
                        <h1 className='text-xl'>{category.name}</h1>
                        <h1 className='text-bold'>{category.percentage}% de dépenses</h1>
                    </div>
                ))}
            </div>


        </div>
    );
}