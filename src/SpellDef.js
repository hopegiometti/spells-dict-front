import React from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div`
    text-align: center;
    font-family: Lumos;
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-bottom: 15px;
`

export const SpellDef = (props) => {
    return( <StyledDiv>
        <h1>{props.spell.spell}</h1>
        <h2>Effect: {props.spell.effect}</h2>
        <h3>Type: {props.spell.type}</h3>
    </StyledDiv> )
}

export default SpellDef