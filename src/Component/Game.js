import React from 'react'
import '../Style/Game.css'
import Poker from './Poker'

function Game(props) {
    // 給子層的資料們
    let remain = Array.from({ length: 52 }, (_, index) => index + 1)
    let judge = []
    const datum = props.data.map(function (datum) {
        return <Poker key={datum.id} datum={datum} remain={remain} judge={judge} />
    })

    // 撲克牌隨機排列
    const randomSort = (data) => {
        return data.sort(() => Math.random() - 0.5)
    }




    return (
        <div className='poker'>
            <h1>POCKER GAME</h1>
            <div className='poker-game'>{randomSort(datum)}</div>
        </div>
    )
}

export default Game