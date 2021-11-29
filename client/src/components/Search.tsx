import React, {Dispatch, FormEvent, SetStateAction, useState} from 'react';
import {MainClient} from "pokenode-ts"

const api = new MainClient()

const Search = (props: { setData: Dispatch<SetStateAction<string[]>> }) => {
    const {setData} = props
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()

        api.pokemon.getPokemonSpeciesByName(searchQuery.toLowerCase())
            .then(species => {
                const entries = species.flavor_text_entries
                const englishEntries = entries
                    .filter(entry => entry.language.name === "en")
                    .map(entry => entry.flavor_text)
                setData(englishEntries)
            })
            .catch(console.log)
    }

    return <form onSubmit={handleSearch}>
        <input className={"search-box"}
               placeholder={"Search a Pokemon"}
               value={searchQuery}
               onChange={e => setSearchQuery(e.target.value)}
               type="text"
               autoFocus
        />
    </form>
};

export default Search;