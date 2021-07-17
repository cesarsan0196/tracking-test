import React from 'react'

function ContainerData() {
    return (
        <>
            <div className="bg-gray-50  flex items-center justify-center px-16">
            <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="m-8 relative space-y-4">
                <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                    <div className="flex-1 flex justify-between items-center">
                    <div className="h-4 w-48 bg-gray-300 rounded">Vessel</div>
                    <div className="w-24 h-6 rounded-lg bg-purple-300">MSC</div>
                    </div>
                </div>
                <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                    <div className="flex-1 flex justify-between items-center">
                    <div className="h-4 w-40 bg-gray-300 rounded">Shipped to</div>
                    <div className="w-24 h-6 rounded-lg bg-purple-300">SHANGHAI, CN</div>
                    </div>
                </div>
                <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                    <div className="flex-1 flex justify-between items-center">
                    <div className="h-4 w-48 bg-gray-300 rounded">Container Type</div>
                    <div className="w-24 h-6 rounded-lg bg-purple-300">40' HIGH CUBE REEFER</div>
                    </div>
                </div>
                <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                    <div className="flex-1 flex justify-between items-center">
                    <div className="h-4 w-48 bg-gray-300 rounded">Voyage</div>
                    <div className="w-24 h-6 rounded-lg bg-purple-300">NX123R</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            
        </>
    )
}

export default ContainerData
