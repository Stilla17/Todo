import React from 'react'

function UsersSide() {
    return (
        <div>
            <div className="w-[500px] h-[600px] bg-white rounded-xl shadow-xl p-6">
                <div className="flex justify-between border-b pb-4 mb-5">
                    <button className="text-blue-600 font-semibold">Primary</button>
                    <button className="text-gray-500 font-semibold">General</button>
                    <button className="text-gray-500 font-semibold">Requests</button>
                </div>
                <ul className="space-y-5">
                    {[
                        'Roger Korsgaard',
                        'Terry Torff',
                        'Angel Bergson',
                        'Emerson Gouse',
                        'Corey Baptista',
                        'Zain Culhane',
                        'Randy Lipshutz',
                        'Craig Botosh',
                    ].map((name, idx) => (
                        <li key={idx} className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            <p className="text-[16px] font-medium">{name}</p>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 text-blue-500 text-sm cursor-pointer hover:underline">View All</div>
            </div>
        </div>
    )
}

export default UsersSide