import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Component/Game';

import spade from './Image/spade.png'
import heart from './Image/heart.png'
import diamond from './Image/diamond.png'
import club from './Image/club.png'

const data = () =>{
  const suits = [spade, heart, diamond, club]
  const card = []
  let times = 0

  for(let i in suits){
    for(let j = 1; j < 14; j++){
      times++
      card.push({id: times, suit: suits[i], number: j})
    }  
  }

  return(card)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Game data={data()} />
  </>
);

