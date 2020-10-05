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
    const [fetchedSpells, setFetchedSpells] = useState([])
    const [searchStr, setSearchStr] = useState("")
    const [showAllSpells, setDisplaySpells] = useState(false)
    const [renderCharmsOn, setRenderCharms] = useState(false)
    const [showSortedSpells, setShowSortedSpells] = useState(false)
    const [spellType, setSpellType] = useState("")
    const [spells, setSpells] = useState(fetchedSpells)

    const fetchSpells = async () => {
        const apiCall = await fetch("http://127.0.0.1:5000/")
        const  spells = await apiCall.json()
        setFetchedSpells(spells)
    }

    console.log(spells)

    useEffect(() => {
        fetchSpells()
    }, [])

    const renderCharmsQ = (type) => {
        if (showSortedSpells === false) {
            setShowSortedSpells(true) 
        }
        
        console.log(type)
        let sortedSpells = []
        if (type === "All") {
            fetchedSpells.map((spell) => {
                sortedSpells.push(spell)
            })
        } else {
            fetchedSpells.map((spell) => {
                if (spell.type === type) {
                    sortedSpells.push(spell)
                    
                }
            })
        }
        
        setSpells(sortedSpells)
    }


    const renderCharms = (spells) => {
        let sortedSpells = []
        console.log(sortedSpells)

        spells.map((spell) => {
            if (spell.type === spellType) {
                sortedSpells.push(spell)
                
            }
        })
        // console.log(sortedSpells)
        setSpells(sortedSpells)
        // return <BrowseSpells allSpells={sortedSpells} />
    }

    const browseSpells = (allSpells) => {
        console.log(fetchedSpells.map(spell => spell.type))
        setShowSortedSpells(false)
        setDisplaySpells(!showAllSpells)
    }

    const searchSpells = (event) => {
        setSpells(fetchedSpells)
        setDisplaySpells(false)
        setSearchStr(event.target.value)
    }

    let searchedSpell = spells.filter(spell => spell.spell.toLowerCase().includes(searchStr) || spell.spell.includes(searchStr))

    
    return ( <>
        <Search onChange={searchSpells} />
        <StyledDiv><StyledButton onClick={browseSpells}>Browse</StyledButton></StyledDiv>
        {/* <StyledHOne>The Standard Website of Spells</StyledHOne> */}
        <StyledHOne>The Standard Website of Spells</StyledHOne>
        {showAllSpells ? <BrowseSpells allSpells={spells} renderCharmsQ={renderCharmsQ}/> : null}
        {searchStr.length > 0 ? <SpellDisplay spellCollec={searchedSpell} /> : <></>}
        {/* {showSortedSpells ? renderCharms(spells) : null} */}
    </>)
}



export default SpellsComp