import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './DetailsPage.css'
import { useParams } from 'react-router-dom'
const DetailsPage = () => {
    const {index}=useParams();

    const[details,setDetails]=useState([]);
    useEffect(()=>{
    fetch('http://10.208.27.193:3000/details')
    .then(res=>res.json())
    .then(data=>
        setDetails(data)
    )   
},[])
const item=details[index];
if (!item) {
  return <p style={{ color: 'white' }}>Loading...</p>;
}

  return (
<div className='detailbg' style={{height:'100vh',backgroundColor:'black',display:'flex'}}>
  
      
<div key={item.id} className='details' style={{boxShadow:'1px 1px 4px blue',border:'1px solid black',width:'85vw',marginLeft:'8%',height:'97vh',padding:'10px',overflow:'hidden',scrollbarWidth:'none',scrollBehavior:'none'}}>
    <h3 style={{marginLeft:'36%',color:'red',fontWeight:'bolder',fontSize:'25px'}}>{item.title}</h3>
   <h4 style={{color:'white',fontWeight:'10',fontSize:'15px',fontFamily:'sans-serif'}}>{item.body}</h4>

</div>

</div>
)
}

export default DetailsPage