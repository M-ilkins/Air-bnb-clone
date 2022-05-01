import React from 'react';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import HeroInfo from './Components/Hero Info/HeroInfo';
import Card from './Components/Card/Card'
import styles from './index.css';
import datajs from './data.js';

export default function App(){

    const Carddata = datajs.map((data)=> {
      return <Card
          key={data.id}
          data={data}
      />
    })


  return (
    <div>
      <Nav/>
      <Hero/>
      <HeroInfo/>
      <section className='card-container'>
      {Carddata}
      </section>
    </div>
  )
};
