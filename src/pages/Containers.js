import React from 'react'
import ContainerData from '../components/ContainerData'
import ProductData from '../components/ProductData'
import ContainerMovements from '../components/ContainerMovements'

function Containers() {
    return (
        <>
            <div>
                <h1>Containers</h1>
                <ProductData />
            </div>
            <div>
                <h5>Container Data</h5>
                <ContainerData />
            </div>
            <div>
                <h5>Container Movements</h5>
                <ContainerMovements />
            </div>
        </>
    )
}

export default Containers
