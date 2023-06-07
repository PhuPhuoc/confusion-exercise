import React, { useState } from 'react';
import { PlayersInfo } from '../shared/ListOfPlayers';
import PlayerPresentation from './PlayerPresentation';

const Main = () => {
    const [players, setPlayers] = useState(PlayersInfo);
    return (
        <PlayerPresentation players={players} />
    );
};

export default Main;