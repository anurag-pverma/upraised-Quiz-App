import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Fetch() {
    const [users, setUsers] = useState([])

    const fetchData = () => {
      axios.get("http://localhost:8080/results").then(response => {
        setUsers(response.data)
      })
    }

    useEffect(()=>{
        fetchData()
    })
    console.log(users)
  



  return (
    <div>Fetch</div>
  )
}

export default Fetch