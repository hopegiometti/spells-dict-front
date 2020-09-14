import React from 'react'
import EachSpell from './EachSpell'

// const renderEachSpell = (props) => {
    // props.allSpells.map(spell => <EachSpell key={spell._id} spellName={spell.spell}/>)
// }

export const BrowseSpells = (props) => {
    return( <div>
        {/* {renderEachSpell(props)} */}
        {props.allSpells.map(spell => <EachSpell key={spell._id} spellName={spell.spell} effect={spell.effect} type={spell.type}/>)}
    </div> )
}

export default BrowseSpells