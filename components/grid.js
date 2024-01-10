'use client'

import style from './grid.module.scss';

export default function Grid() {
    let gridCells = Array(10).fill(Array(10).fill(0));


    return (
        <div className={style.grid}>
            {
                gridCells.map((row, i) => 
                    row.map((cell, i) => {
                        return <div className={style.grid__cell}>🌊</div>;
                    })
                )
            }
        </div>
    );
}