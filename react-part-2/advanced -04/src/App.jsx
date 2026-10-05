import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {

    const [input, setInput] = useState('')
    const [data, setData] = useState([])
    const [showData, setShowData] = useState(false)


    const fetch = async () => {
        try {
            axios("https://dummyjson.com/products?limit=500" + input)
                .then(respo => setData(respo.data?.products))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const timer = setTimeout(fetch(), 300)
        return () => {
            clearTimeout(timer);
        }
    }, [input])


    return (

        <div className='App'>
            <div>
                <h1>search bar 🔍</h1>
                <div>
                    <input placeholder='please search '
                        className='search-input'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onFocus={() => setShowData(true)}
                        onBlur={() => setShowData(false)}
                    ></input>
                </div>


            </div>
            {showData && (<div className='search-out'>
                {data.filter(x => x.title.toLowerCase().includes(input.toLowerCase())).map(x => {
                    return (<div key={x.id}>{x.title}</div>)
                })}
            </div>)}

        </div>
    )
}
