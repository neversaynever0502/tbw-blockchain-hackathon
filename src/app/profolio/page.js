'use client'


import react,{useState,useEffect} from 'react'

export default function Dashboard() {

    const [data,setData] = useState([1,2,3])
  
    return (
        <div>
            dashboard
            {data.map((item,index)=>{
                return <div key={index}>{item}</div>
            })}
        </div>
    )
  }
  