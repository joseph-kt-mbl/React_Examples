import React, { useState } from "react";
import styles from './Wrapper.module.css';

function Wrapper() {
    const [score, setScore] = useState(0);

    const data = [
        ['#FF5733', '#33FF57', '#3357FF'],
        ['#F1C40F', '#8E44AD', '#3498DB'],
        ['#E74C3C', '#2ECC71', '#1ABC9C'],
        ['#9B59B6', '#34495E', '#F39C12'],
        ['#16A085', '#27AE60', '#2980B9']
    ];

    const [color, setColor] = useState(
        score < data.length ?
        data[score][Math.floor(Math.random() * 3)]:
        '##'
    );
    const [answer,setAnswer] = useState(
        {
            val:false,
            text:''
        }
    )

    const handleClick = (e) => {
        const btnColor = e.target.textContent;

        if (color === btnColor) {
            setAnswer({
                val:true,
                text:'Correct'
            })
            setScore(score => score + 1);
            setColor(data[score + 1] ? data[score + 1][Math.floor(Math.random() * 3)] : '##');
        }
        else{
            setAnswer({
                val:false,
                text:'Wrong!!'
            })
        }
    };

    return (
        <section>
            <h1 className={styles.mb_2rem}>Guess The Color Game</h1>
            <div className={styles.colorDisplayer} 
                style={{ backgroundColor: color }}>
            </div>
            <div className={`${styles.colorsBtns} ${styles.flex} ${styles.justify_between} ${styles.align_center}`}>
                <button onClick={handleClick}>
                    {score<data.length? data[score][0] :'-'}
                </button>
                
                <button onClick={handleClick}>
                    {score<data.length? data[score][1] :'-'}
                </button>

                <button onClick={handleClick}>
                    {score<data.length? data[score][2] :'-'}
                </button>
            </div>
            <p className={`${styles.score} ${styles.text_center}`}>
                Score: {score}
            </p>
            <p className={styles.text_center} style={
                    {
                        color:answer.val?'#0a0' :'#a00'
                    }
                }>
                {
                    color !== '##' ? answer.text : 'done!'
                }
                
            </p>
        </section>
    );
}

export default Wrapper;

