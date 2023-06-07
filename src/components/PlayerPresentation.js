import React, { useState } from 'react';
export default function PlayerPresentation({ players }) {
    const [player, setPlayer] = useState([]);
    return (
        <div className='container'>
            {players.map((player) => (
                <div className='column'>
                    <div className='card'>
                        <img src={player.img} alt='...' />
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                        <p><button onClick={() => { setPlayer(player) }}>
                            <a href='#popup__info' id='openPopUp'>Detail</a>
                        </button></p>
                    </div>
                </div>
            ))}
            <div id='popup__info' className='overlay'>
                <div className='popup'>
                    <img src={player.img} alt='...'></img>
                    <h2>{player.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>{player.info}</div>
                </div>
            </div>
        </div>
    )
}