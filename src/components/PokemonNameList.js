import React from 'react';

function PokemonNameList({ pokemon }) {
    return (
        <div>
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}

export default PokemonNameList;