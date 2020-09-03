import React, { useState, useEffect } from 'react'

export const SpellsComp = (props) => {
    const [spells, setSpells] = useState([])

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

    
    return ( <>
        <h1>Charms!</h1>
        {renderCharms(spells)}
    </>)
}



export default SpellsComp