import { DollarSign, ChartArea, ChartBar, AlertCircle, FileMinus2 } from 'lucide-react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';

interface HomeProps {
    budgets: string;
}
const HomePage: React.FC<HomeProps> = ({ budgets }) => {

    const devises = "Ar";
    const numbers = [
        { id: 1, number: budgets, color: '#74b816', title: "BUDGETS", icon: <DollarSign /> },
        { id: 2, number: "25%", color: '#dc4c46', title: "TAUX DE DEPENSE", icon: <ChartArea /> },
        { id: 3, number: "75%", color: '#2a4b7c', title: "REVENUS", icon: <ChartBar /> },
        { id: 4, number: "3", color: '#6c4f3d', title: "PRÊTS NON PAYÉ", icon: <AlertCircle /> },
    ]
    const dépense = [
        { name: 'J', DÉPENSE: 445200 },
        { name: 'F', DÉPENSE: 304300 },
        { name: 'M', DÉPENSE: 500500 },
        { name: 'A', DÉPENSE: 205000 },
        { name: 'M', DÉPENSE: 206300 },
        { name: 'J', DÉPENSE: 455600 },
        { name: 'J', DÉPENSE: 350200 },
        { name: 'A', DÉPENSE: 370000 },
        { name: 'S', DÉPENSE: 252000 },
        { name: 'O', DÉPENSE: 360000 },
        { name: 'N', DÉPENSE: 240500 },
        { name: 'D', DÉPENSE: 326000 },

    ];

    const revenus = [
        { name: 'Nouriture', value: 50, d: '%' },
        { name: 'Santé', value: 13 },
        { name: 'Vêtements', value: 25 },
        { name: 'Frais', value: 12 },
    ];
    const COLORS = ['#2E4A62', '#309130', '#8d5eb7', '#e03131'];

    const history = [
        { id: '1', category: "Nouriture", message: 'Vous avez depensé 15000Ar', time: "Il y a une minute" },
        { id: '2', category: "Vêtement", message: 'Vous avez depensé 230000Ar', time: "Il y a 3h" },

    ]

    return (
        <div style={{ zIndex: 'n' }} className="w-full h-[100vh] ml-[16rem] pt-[5rem]   bg-white p-5 bg-[#fefaee] ">
            <div className="flex gap-4">
                {numbers.map(number => (
                    <div key={number.id} style={{ height: 'fit-content' }} className="p-5 border shadow overflow-hidden animate-fade-in hover:shadow-md transform hover:-translate-y-1 transition w-full rounded-xl">
                        <div className="flex justify-between items-center">
                            <h1 style={{ fontWeight: 'bold' }}
                                className={`text-[#2a4b7c] text-bold text-xl`}>{number.number} </h1>
                            <h1 style={{ background: 'linear-gradient(30deg,rgb(20, 70, 128),rgb(181, 217, 255)) ' }}
                                className={`border text-white rounded-xl p-2`}>{number.icon} </h1>
                        </div>
                        <p className={`text-[${number.color}]`}>{number.title} </p>
                    </div>
                ))}
            </div>

            <div className=" w-100">
                {/* CHART DE DEPENSE */}
                <div className="mt-5 shadow items-center justify-center p-2 border rounded h-60 bg-gray-50 rounded-md">
                    <h1 className='mb-4 text-center'>DÉPENSE MENSUELLE</h1>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dépense}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip labelStyle={{ color: "green" }} label='name' />
                            <Legend />
                            <Bar
                                dataKey="DÉPENSE"
                                fill="#2E4A62"
                                radius={5}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex w-100 gap-5">
                    <div className="rounded-xl card w-full p-4 mt-10 border">
                        <h1 className='mb-2'>Historiques</h1>
                        {history.map(historys => (
                            <div key={historys.id}>
                                <div className="card rounded-xl mb-4 items-center p-2 border rounded">
                                    <div className="flex items-center gap-2">
                                        <FileMinus2 />
                                        <div>
                                            <h1>{historys.message} pour {historys.category} </h1>
                                            <p className='italic text-sm'>{historys.time} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="card rounded-xl p-4 w-full mt-10 border">
                        <h1>Dépense par catégories</h1>
                        {/* CHART DE DEPENSE PAR CATEGORY */}

                        <div className="flex items-center justify-center h-60 bg-gray-50 rounded-md">
                            <PieChart width={400} height={300}>
                                <Pie
                                    data={revenus}
                                    cx={200}
                                    cy={150}
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={3}
                                    dataKey="value"
                                >
                                    {revenus.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;