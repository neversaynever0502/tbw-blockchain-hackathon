'use client'

import Image from 'next/image'
import styles from './page.module.css'
import {useState,useEffect} from 'react'

export default function Home() {

  const [data,setData] = useState([])

  const postGPTresponse = async() => {
    const response = await fetch('/api/posts',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({
      //   message: '我想寫一本書'
      // })
    })
    const dataJSON = await response.json()
    setData(dataJSON)
    console.log(dataJSON)
  }

  useEffect(()=>{
    postGPTresponse()
  },[])


  return (
    <main className={styles.main}>
      hello
      <a href="/dashboard">dashboard</a>  
      {data.map((item,index)=>{
        return <div key={index}>
          {item.id}: {item.title} =====
          {item.body}
          </div>
      })}
    </main>
  )
}
