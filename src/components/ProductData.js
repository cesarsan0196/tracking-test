import React from 'react'

function ProductData() {
    return (
        <>
            <div class="container flex mx-auto w-full items-center justify-center">
 
            <ul class="flex flex-col bg-gray-300 p-4">
                <li class="border-gray-400 flex flex-row mb-2">
                    <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">🍊</div>
                    <div class="flex-1 pl-1 mr-16">
                        <div class="font-medium">Tangerine</div>
                        <div class="text-gray-600 text-sm">W.Murcott.</div>
                    </div>
                    <div class="text-gray-600 text-xs">CANETE-ICA</div>
                    </div>
                </li>                    
            </ul>            
            </div>          
            
        </>
    )
}

export default ProductData
