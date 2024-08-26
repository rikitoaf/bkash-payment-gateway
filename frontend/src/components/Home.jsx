import React from 'react'
import axios from 'axios'
function Home() {
  const pay = async() => {
    try {
      const {data} = await axios.post('http://localhost:5000/bkash/payment/create', {
        amount: 50, orderId: 1}, {withCredentials: true})
        console.log(data)
    }
    catch {
      console.log(error.response.data)
    }
  }
  return (
    <div>
      <button>Pay Bkash</button>
    </div>
  )
}

export default Home