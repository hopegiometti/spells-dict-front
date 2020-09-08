import React from 'react'
import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 300px;
    padding-bottom: 300px;
`

export const StyledInput = styled.input`
    border: 1px solid #000;
    padding: 10px;
    margin: 5px;
    width: 150px;
    box-sizing: border-box;
`;


export const Search = (props) => {
    return( <div>
        <StyledDiv>
            <StyledInput onChange={props.onChange}/>
        </StyledDiv>
    </div>)
}

export default Search