import React from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div`
    padding: 25px;
    text-align: center;
    font-family: Lumos;
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-bottom: 15px;
`

export const StyledText = styled.h5`
    
`

export const EachSpell = (props) => {
    return( <div>
        <StyledDiv>
            <h1>{props.spellName}</h1>
            <h2>Effect: {props.effect}</h2>
            <h3>Type: {props.type}</h3>
        </StyledDiv>
    </div> )
}

export default EachSpell