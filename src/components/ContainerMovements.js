import React from 'react'

function ContainerMovements() {
    return (
        <>
            <div>
                <table className="min-w-full table-auto">
                    <thead className="justify-between">
                    <tr className="bg-gray-800">
                        <th className="px-16 py-2">
                        <span className="text-gray-300"></span>
                        </th>
                        <th className="px-16 py-2">
                        <span className="text-gray-300">Location</span>
                        </th>
                        <th className="px-16 py-2">
                        <span className="text-gray-300">Description</span>
                        </th>
                        <th className="px-16 py-2">
                        <span className="text-gray-300">Date</span>
                        </th>

                        <th className="px-16 py-2">
                        <span className="text-gray-300">Vessel</span>
                        </th>

                        <th className="px-16 py-2">
                        <span className="text-gray-300">Voyage</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                    <tr className="bg-white border-4 border-gray-200">
                        <td className="px-16 py-2 flex flex-row items-center">
                        
                        </td>
                        <td>
                        <span className="text-center ml-2 font-semibold">CALLAO, PE</span>
                        </td>
                        <td className="px-16 py-2">
                        <span className="text-center ml-2 font-semibold">Empty to Shipper</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>12/06/2021</span>
                        </td>
                        <td className="px-16 py-2">
                        <span></span>
                        </td>

                        <td className="px-16 py-2">
                        <span className="text-yellow-500">
                           
                        </span>
                        </td>
                    </tr>
                    <tr className="bg-white border-4 border-gray-200">
                        <td className="px-16 py-2 flex flex-row items-center">
                        
                        </td>
                        <td>
                        <span className="text-center ml-2 font-semibold">CALLAO, PE</span>
                        </td>
                        <td className="px-16 py-2">
                        <span className="text-center ml-2 font-semibold">Gate In Full</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>14/06/2021</span>
                        </td>
                        <td className="px-16 py-2">
                        <span></span>
                        </td>

                        <td className="px-16 py-2">
                        <span className="text-yellow-500">
                           
                        </span>
                        </td>
                    </tr>
                    <tr className="bg-white border-4 border-gray-200">
                        <td className="px-16 py-2 flex flex-row items-center">
                        
                        </td>
                        <td>
                        <span className="text-center ml-2 font-semibold">CALLAO, PE</span>
                        </td>
                        <td className="px-16 py-2">
                        <span className="text-center ml-2 font-semibold">Loaded</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>18/06/2021</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>MSC MADHU B</span>
                        </td>

                        <td className="px-16 py-2">
                        <span className="text-yellow-500">
                        NX123R
                        </span>
                        </td>
                    </tr>
                    <tr className="bg-white border-4 border-gray-200">
                        <td className="px-16 py-2 flex flex-row items-center">
                        
                        </td>
                        <td>
                        <span className="text-center ml-2 font-semibold">RODMAN, 8, PA</span>
                        </td>
                        <td className="px-16 py-2">
                        <span className="text-center ml-2 font-semibold">Transshipment Discharged</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>22/06/2021</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>MSC MADHU B</span>
                        </td>

                        <td className="px-16 py-2">
                        <span className="text-yellow-500">
                        NX123R
                        </span>
                        </td>
                    </tr>
                    <tr className="bg-white border-4 border-gray-200">
                        <td className="px-16 py-2 flex flex-row items-center">
                        
                        </td>
                        <td>
                        <span className="text-center ml-2 font-semibold">BALBOA, PA</span>
                        </td>
                        <td className="px-16 py-2">
                        <span className="text-center ml-2 font-semibold">Transshipment Loaded</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>24/06/2021</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>MAERSK HURON</span>
                        </td>

                        <td className="px-16 py-2">
                        <span className="text-green-500">
                        122W
                        </span>
                        </td>
                    </tr>
                    <tr className="bg-white border-4 border-gray-200">
                        <td className="px-16 py-2 flex flex-row items-center">
                        
                        </td>
                        <td>
                        <span className="text-center ml-2 font-semibold">SHANGHAI, 31, CN</span>
                        </td>
                        <td className="px-16 py-2">
                        <span className="text-center ml-2 font-semibold">Estimated Time of Arrival</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>23/07/2021</span>
                        </td>
                        <td className="px-16 py-2">
                        <span>MAERSK HURON</span>
                        </td>

                        <td className="px-16 py-2">
                        <span className="text-green-500">
                        
                        </span>
                        </td>
                    </tr>

                    
                    </tbody>
                </table>
                </div>

            
        </>
    )
}

export default ContainerMovements
