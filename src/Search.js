import React from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 25px;
`

export const StyledInput = styled.input`
    border: 1px solid #000;
    padding: 10px;
    margin: 5px;
    width: 300px;
    box-sizing: border-box;
`;


export const Search = (props) => {
    return( <div>
        <StyledDiv>
            <StyledInput onChange={props.onChange} placeholder="start typing to search spells..."/>
            {/* <input type="submit" value="submit" onSubmit={props.handleSubmit}/> */}
        </StyledDiv>
    </div>)
}

export default Search