import React from 'react';
import { PlayersInfo } from './shared/ListOfPlayers';
const Players = () => {
    return (
        <div>
            <div className="container">
                {PlayersInfo.map((player) => (
                    <div className="column">
                        <div className="card">
                            <img src={player.img} />
                            <h3>{player.name}</h3>
                            <p className="title">{player.club}</p>
                            <p><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Players;