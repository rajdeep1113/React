import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [crypto, setCrypto] = useState([])

  async function getData() {
    let data = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR")
    setCrypto(data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>CryptoTracker</h1>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Markets</a>
          <a href="#">About</a>
        </div>
      </nav>

      {/* Cards */}
      <div className="card-container">
        {crypto && crypto.map((item, index) => (
          <div className="crypto-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name} ({item.symbol.toUpperCase()})</h2>
            <p className="price">₹ {item.current_price.toLocaleString()}</p>
            <p className="market-cap">Market Cap: ₹ {item.market_cap.toLocaleString()}</p>
            <p>Rank: {item.market_cap_rank}</p>
            <p>ATH: ₹ {item.ath}</p>
            <p>ATL: ₹ {item.atl}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
