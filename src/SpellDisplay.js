import React from 'react'
import SpellDef from './SpellDef'

export const SpellDisplay = (props) => {
    return( <div>
        {props.spellCollec.map(spell => <SpellDef spell={spell}/>)}
    </div> )
}

export default SpellDisplay