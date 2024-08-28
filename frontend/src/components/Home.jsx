import React from 'react'
import axios from 'axios'
function Home() {

  
  const pay = async () => {
    
    try {
      const {data} = await axios.post('http://localhost:5000/api/bkash/payment/create', {
         1 : 10, 2 : 20}, {withCredentials: true})
        console.log(data)
    }
    catch (error){
      console.log(error.response.data)
    }
  }
  return (
    <div>
      <button onClick={pay}>Pay Bkash</button>
    </div>
  )
}

export default Home