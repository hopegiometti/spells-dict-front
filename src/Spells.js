import React, { useState, useEffect } from 'react'
import Search from './Search'
import SpellDisplay from './SpellDisplay'
import styled from 'styled-components'

export const StyledHOne = styled.h1`
    text-align: center;
    padding-top: 200px;
    font-family: ParryHotter;
    font-size: 400%;
`


export const SpellsComp = (props) => {
    const [spells, setSpells] = useState([])
    const [searchStr, setSearchStr] = useState("")

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

    const searchSpells = (event) => {
        setSearchStr(event.target.value)
    }

    let searchedSpell = spells.filter(spell => spell.spell.toLowerCase().includes(searchStr) || spell.spell.includes(searchStr))

    
    return ( <>
        <StyledHOne>The Standard Website of Spells</StyledHOne>
        <Search onChange={searchSpells} />
        {searchStr.length > 0 ? <SpellDisplay spellCollec={searchedSpell} /> : <></>}
        {/* <SpellDisplay spellCollec={searchedSpell} /> */}
        {/* <h1>Charms!</h1>
        {renderCharms(spells)} */}
    </>)
}



export default SpellsComp