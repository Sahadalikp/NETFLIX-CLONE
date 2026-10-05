import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
const[prodect,setProdect]=useState([])
const[currentpage,setCurrentpage]=useState(0)

const collectdata= ()=>{
axios.get('https://dummyjson.com/products?limit=500')  
   .then((respons)=>{
    setProdect(respons.data.products)
    console.log(prodect.id)
   })

}
   useEffect(()=>{
    collectdata()
   },[])

   const perpage = 10; 
   const totelprodect = prodect.length;
   const numberofpage = Math.ceil(totelprodect / perpage)
   const start = currentpage * perpage;
   const end = start+perpage;

  return (
    <div >
      
      <h1 className='mainhead'>pagination</h1>

      <div>
              <div  className='image-div'>      
                  {prodect.slice(start,end).map((data)=>(
                    <div key={data.id} className='image-inn'>
                      
                    <img src={data.thumbnail}></img>
                    
                    
                    </div>
                  ) )}
              </div>
            <div>
                {[...Array(numberofpage)].map((_,index)=>(
                  <button key={index} 
                  onClick={()=>setCurrentpage(index)}
                  className='button' style={{
                  backgroundColor: currentpage === index ? "black" :'white',
                  color : currentpage === index ? 'white' : 'black'
                  }}
                  >{index+1}</button>
                ))}
            </div>
      </div>
    </div>
  )
}
