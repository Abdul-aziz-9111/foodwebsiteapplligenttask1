
import React from 'react'
import './App.css'
import food from './assets/zom.avif'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const App = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState(''); // search ke liye state

  useEffect(() => {
    fetch("http://10.208.27.193:3000/meals")
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setMeals(data.categories);
      })
  }, [])

  // search filter
  const filteredMeals = meals.filter(m =>
      
      m.strCategory.toLowerCase().includes(search.toLowerCase())
  
    );
    
    

  return (
    <>
      <div className='navbar' style={{ height: '70px', border: '1px solid #fff', display: 'flex', alignItems: 'center', backgroundColor: 'white', boxShadow: '2px 2px 2px #b9b9b9ff', top: '0px', position: 'sticky',maxWidth:'100%' }}>
        <img style={{ height: '35px', marginLeft: '12.5%' }} src={food} alt="" />
        <div className='searchbar' style={{ marginLeft: '3%' }}>
          <input
            type="text"
            style={{ height: '46px', width: '40vw', backgroundColor: '#fafafaf3', borderRadius: '30px', border: '1px solid  #fefffeff', paddingLeft: '36px', fontSize: '15px', color: 'black' }}
            placeholder='Search for veg Nonveg and Many more'
            value={search}
            onChange={(e) => setSearch(e.target.value)} // search update
          />
          <i style={{ position: 'absolute', marginLeft: '-39%', marginTop: '1.2%', fontSize: '16px', color: '#a1a1a1ff' }} className='fa-solid fa-magnifying-glass'></i>
         </div>
        <div className='content' style={{ display: 'flex', marginLeft: '3%', gap: '35px' }}>
          <h3 style={{ cursor:'pointer',color: '#424040ff',border:'1px solid #beb6b6ff',borderRadius:'26px', fontWeight: '300',padding:'10px' }}>Log in</h3>
          <h3 style={{ cursor:'pointer',color: '#424141ff', fontWeight: '300',border:'1px solid #beb6b6ff',borderRadius:'26px',padding:'10px' }}>Sign up</h3>
          <i id="menu" style={{ display: 'none' }} className="fa-solid fa-bars"></i>
        </div>
      </div>

      <div className='hero' style={{ display: 'grid', gridTemplateColumns: 'repeat(3,max-content)', placeItems: 'center', gap: '10px', justifyContent: 'center', marginTop: '1%' }}>
        {
          filteredMeals.map((m,index) => (
<Link to={`/detailspage/${index}`} style={{listStyleType:'none',color:'black',textDecoration:'none'}}>           <div key={m.idCategory} id="main" style={{ width: '25vw', height: '60vh', border: '2px solid black', overflow: 'scroll', scrollbarWidth: 'none' }}>
              <h3 style={{marginLeft:'32%'}}>{m.strCategory}</h3>
              <img id="image" style={{boxShadow:'2px 2px 2px 2px #e4d4d4ff', marginLeft:'8%',height: '200px', width: '220px',borderRadius:'6px' }} src={m.strCategoryThumb} alt="" />
              <h4>{m.strCategoryDescription}</h4>
              <button style={{marginLeft:'27%', padding: '4px 20px', backgroundColor: 'black', color: 'white' }}>Favorite</button>
            </div>
     </Link>         
          ))
        }
      </div>
      
            

    </>
  )
}

export default App


























































