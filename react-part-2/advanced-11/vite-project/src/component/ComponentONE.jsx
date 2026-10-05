import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createContext } from 'react'
import Navbar from './Navbar'

export const dataContext = createContext()

function ComponentONE() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                setData(response.data.products)
            })
    }, [])

    const [nowpage, setNowpage] = useState(0)


    const perpage = 4;
    const totelpage = data.length;
    const currentpage = Math.ceil(totelpage / perpage);
    const start = nowpage * perpage;
    const end = start + perpage


    return (
        <div>
            <div className='box-div'>
                {data.slice(start, end).map((user) => (
                    <div key={user.id}   >
                        <div>
                            <div>
                                <h4>{user.title}</h4>
                                <div className='image-div'>
                                    <img src={user.thumbnail}
                                      style={{ width: "200px", height: "200px", border: '2px solid black' }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {[...Array(currentpage).keys()].map((number) => (
                    <button onClick={() => setNowpage(number)}>{number + 1}</button>
                ))}
            </div>

            
            <dataContext.Provider value={data}>
                 
            </dataContext.Provider>
        </div>
    )
}




export default ComponentONE