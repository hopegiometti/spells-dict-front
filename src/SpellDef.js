import React from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div`
    text-align: center;
    font-family: Lumos;
`

export const SpellDef = (props) => {
    return( <StyledDiv>
        <h1>{props.spell.spell}</h1>
        <h2>Effect: {props.spell.effect}</h2>
        <h3>Type: {props.spell.type}</h3>
    </StyledDiv> )
}

export default SpellDef