import React, { useState, useEffect } from 'react'
import Search from './Search'
import SpellDisplay from './SpellDisplay'
import styled from 'styled-components'
import BrowseSpells from './BrowseSpells'

export const StyledHOne = styled.h1`
    text-align: center;
    padding-top: 200px;
    font-family: ParryHotter;
    font-size: 400%;
`
export const StyledButton = styled.button`
    background-color: #800000; /* Maroon */
    border: none;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`
export const StyledDiv = styled.div`
    position: fixed;
    top: 5px;
    display: inline-block;
    float: left;
`


export const SpellsComp = (props) => {
    const [spells, setSpells] = useState([])
    const [searchStr, setSearchStr] = useState("")
    const [showAllSpells, setDisplaySpells] = useState(false)

    const fetchSpells = async () => {
        const apiCall = await fetch("http://127.0.0.1:5000/")
        const  spells = await apiCall.json()
        setSpells(spells)
    }

    console.log(spells)

    useEffect(() => {
        fetchSpells()
    }, [])

    const renderCharms = (spells) => {
        let allCharms = []

        spells.map((spell) => {
            if (spell.type === "Charm") {
                allCharms.push(<h3>{spell.spell}</h3>)
            }
        })

        return allCharms
    }

    const browseSpells = (allSpells) => {
        // console.log("clicked")
        setDisplaySpells(true)
    }

    const searchSpells = (event) => {
        setSearchStr(event.target.value)
    }

    let searchedSpell = spells.filter(spell => spell.spell.toLowerCase().includes(searchStr) || spell.spell.includes(searchStr))

    
    return ( <>
        <Search onChange={searchSpells} />
        <StyledDiv><StyledButton onClick={browseSpells}>Browse</StyledButton></StyledDiv>
        {/* <StyledHOne>The Standard Website of Spells</StyledHOne> */}
        {showAllSpells ? <BrowseSpells allSpells={spells}/> : <StyledHOne>The Standard Website of Spells</StyledHOne>}
        {searchStr.length > 0 ? <SpellDisplay spellCollec={searchedSpell} /> : <></>}
        {/* <SpellDisplay spellCollec={searchedSpell} /> */}
        {/* <h1>Charms!</h1>
        {renderCharms(spells)} */}
    </>)
}



export default SpellsComp