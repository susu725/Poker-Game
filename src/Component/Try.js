import React, { useState } from 'react'
import '../Style/Poker.css'
import poker from '../Image/poker.png'

function Poker(props) {
    // 解構賦值
    const { remain, judge } = props

    // 一開始是正面蓋起、反面翻開
    const [css1, setCss1] = useState('front size')
    const [css2, setCss2] = useState('back size')

    // 一組animation會沒有作用，用兩組來控制，所以設一個值當作判斷
    let a = 'front x1 size'

    // 翻牌
    const scoreCount = () => {
        if (judge.length < 1) {

            // 翻第一張
            judge.push({ id: props.datum.id, number: props.datum.number })

            // 得過分了嗎
            if (remain.includes(judge[0].id)) {
                // 還沒得過就打開
                setCss1('front o size')
                setCss2('back o size')
            } else {
                // 得過了也保持打開
                judge.splice(0, 1)
                console.log("不能按啦")
                setCss1('front o size')
                setCss2('back o size')
            }
        }
        else {
            // 翻第二張
            judge.push({ id: props.datum.id, number: props.datum.number })
            // 翻兩張之後判斷是不是同一張
            JudgeSame()
        }
    }


    // 翻兩張之後判斷是不是同一張
    const JudgeSame = () => {
        if (judge[0].id !== judge[1].id) {

            // 得過分了嗎
            if (remain.includes(judge[1].id)) {
                // 還沒得過
                if (judge[0].number === judge[1].number) {
                    // 還沒得過且翻對就保持打開
                    console.log("恭喜發財")
                    setCss1('front o size')
                    setCss2('back o size')
                    // 把答對的從remain刪掉
                    for (let i in judge) {
                        for (let j in remain) {
                            if (remain[j] === judge[i].id) {
                                remain.splice(j, 1)
                            }
                        }
                    }
                    judge.splice(0, 2)
                } else {
                    // 還沒得過但答錯就使用打開又蓋回去的動畫
                    console.log("再接再厲")
                    if (a === css1) {
                        setCss1('front x2 size')
                        setCss2('back x2 size')
                    } else {
                        setCss1('front x1 size')
                        setCss2('back x1 size')
                    }
                }
                judge.splice(1, 1)
            } else {
                // 得過了保持打開
                judge.splice(1, 1)
                console.log("不能按啦")
                setCss1('front o size')
                setCss2('back o size')
            }
        } else {
            // 翻到同一張保持打開
            judge.splice(1, 1)
            console.log("你翻到同一張了啦！")
            setCss1('front o size')
            setCss2('back o size')
        }
    }

    return (
        <div className='poker-card' onClick={scoreCount}>
            <div className={css1}>
                <p className='top'>{props.datum.number}</p>
                <img className='poker-suit' src={props.datum.suit} alt="" />
                <p className='bottom'>{props.datum.number}</p>
            </div>
            <div className={css2}>
                <img className='poker-back' src={poker} alt="" />
            </div>
        </div>
    )
}

export default Poker