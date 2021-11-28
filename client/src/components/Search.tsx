import React, {FormEvent, useState} from 'react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [flavorText, setFlavorText] = useState("")

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${searchQuery}/`)
            .then(r => r.json())
            .then(r => {
                setFlavorText(r.flavor_text_entries[0].flavor_text)
            })
            .catch(e => console.log(e))
    }

    return <form onSubmit={handleSearch}>
        {flavorText && <input type="text" disabled value={flavorText}/>}
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