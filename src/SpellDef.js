import React from 'react'

export const SpellDef = (props) => {
    return( <div>
        <h1>Name: {props.spell.spell}</h1>
        <h2>Description: {props.spell.effect}</h2>
    </div> )
}

export default SpellDef