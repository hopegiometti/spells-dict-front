import React from 'react'
import SpellDef from './SpellDef'
import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SpellDisplay = (props) => {
    return( <StyledDiv>
        {props.spellCollec.map(spell => <SpellDef spell={spell}/>)}
    </StyledDiv> )
}

export default SpellDisplay