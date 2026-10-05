import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../Lib/Api'

function ProductDeatels() {

    const { id } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        api.get('/products')
            .then((response) => {
                setItems(response.data.products)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const item = items.find((x) => x.id === Number(id))

    console.log(items)
    console.log(item)

    return (
        <div >hjhfgf
            gcgggfgfgddff
            {item && (
                <div>
                    <h1>{item.title}</h1>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                </div>
            )}
        </div>
    )
}

export default ProductDeatels