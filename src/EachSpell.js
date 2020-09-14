import React from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div`
    padding: 25px;
    text-align: center;
    font-family: Lumos;
`

export const StyledText = styled.h5`
    
`

export const EachSpell = (props) => {
    return( <div>
        <StyledDiv>{props.spellName}</StyledDiv>
        {/* {console.log(props)}   */}
    </div> )
}

export default EachSpell