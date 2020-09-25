import React from 'react'
import EachSpell from './EachSpell'
import styled from 'styled-components'
import SpellSortBar from './SpellSortBar'

export const StyledBox = styled.div`
    padding-top: 50px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
`
export const StyledDiv = styled.div`
    padding: 10px;
`

export const StyledHOne = styled.h1`
    text-align: center;
    padding-top: 25px;
    font-family: ParryHotter;
    font-size: 400%;
`

export const BrowseSpells = (props) => {
    return(<> 
    {/* <StyledHOne>All Spells</StyledHOne> */}
    {console.log(props.allSpells)}
    <SpellSortBar allSpells={props.allSpells} renderCharmsQ={props.renderCharmsQ}/>
    <StyledBox>
        {props.allSpells.map(spell => <EachSpell key={spell._id} spellName={spell.spell} effect={spell.effect} type={spell.type}/>)}
    </StyledBox> 
    </>)
}

export default BrowseSpells