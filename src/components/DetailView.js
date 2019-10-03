import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-id'>ID: {id} </h1>
        <h1 className='data-name'>Nama:{name}</h1>
        <h2 className="data-char">Type: {type}</h2>
      </div>
    </section>
  )
}

export default DetailView;