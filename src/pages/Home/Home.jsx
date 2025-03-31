import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="hero">
            <h1>Crypto <br /> Price Tracker</h1>
            <p>Welcome here</p>
            <form>
                <input type="text" placeholder='Search crypto..' />
                <button type='submit'>Search</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{ textAlign:"center"}}>24H Change</p>
                <p className='marketcap'>Market cap</p>
            </div>
        </div>
    </div>
  )
}

export default Home