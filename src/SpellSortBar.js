import React from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div`
    text-align: center;
`

export const StyledButton = styled.button`
    background-color: #800000; /* Maroon */
    border: none;
    color: white;
    padding: 10px 25px;
    padding-right: 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`


export const SpellSortBar = (props) => {
    return( <StyledDiv>
        <StyledButton onClick={() => props.renderCharmsQ("Charm")}>Charms</StyledButton>
        <StyledButton onClick={() => props.renderCharmsQ("Jinx")}>Jinxes</StyledButton>
        <StyledButton onClick={() => props.renderCharmsQ("Hex")}>Hexes</StyledButton>
        <StyledButton onClick={() => props.renderCharmsQ("Enchantment")}>Enchantments</StyledButton>
    </StyledDiv> )
}

export default SpellSortBar