import React from 'react'
import EachSpell from './EachSpell'
import styled from 'styled-components'

export const StyledBox = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
`
export const StyledHOne = styled.h1`
    text-align: center;
    padding-top: 25px;
    font-family: ParryHotter;
    font-size: 400%;
`

export const BrowseSpells = (props) => {
    return(<> 
    <StyledHOne>All Spells</StyledHOne>
    <StyledBox>
        {props.allSpells.map(spell => <EachSpell key={spell._id} spellName={spell.spell} effect={spell.effect} type={spell.type}/>)}
    </StyledBox> 
    </>)
}

export default BrowseSpells