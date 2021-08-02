import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [value,setValue]= useState(0)
  const prevSlide=()=>{
    value===0?setValue(data.length-1):setValue(value-1)
  }
  const nextSlide=()=>{
    value===data.length-1?setValue(0):setValue(value+1)
  }
  useEffect(()=>{
    let slider= setInterval(() => {
      nextSlide()
    }, 3000);
    return ()=>{
      clearInterval(slider)
    }
  },[value])
  return <section className="section">
    
    <div className="title">
      <h2><span>/</span>Reviews</h2>
    </div>
   
    <section className="section-center">
      {data.map((info,index)=>{
        const {image, id, name, title, quote}= info;
        let position="nextSlide";
        if(index===value){
          position="activeSlide"
        }
        if(index===value-1 || (value===0&&index===data.length-1)){
          position="lastSlide"
        }
        return <article key={id} className={position}>
        <img src={image} className="person-img" alt="" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon"/>
        </article>
      })}
      
      <button className="prev" onClick={prevSlide}><FiChevronLeft/></button>
      <button className="next" onClick={nextSlide}><FiChevronRight/></button>
    </section>
  </section>
}

export default App;
