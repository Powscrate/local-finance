import { Bell, UserCircle, Moon, MoreVertical } from 'lucide-react'

export default function Topbar() {
    return (
        <div style={{}} className="flex fixed w-full px-5 p-4 z-3 text-white bg-[#212121] justify-between">
            <div>
                <h1 className=''>LocalFinance</h1>
            </div>
            <div className="icons flex gap-7">
                <Bell className='hover:cursor-p'/>
                <UserCircle className='hover:cursor-p'/>
                <Moon className='hover:cursor-p'/>
                <MoreVertical className='hover:cursor-p'/>
            </div>
        </div>
    )
}