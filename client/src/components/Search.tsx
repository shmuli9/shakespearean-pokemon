import React, {FormEvent, useState} from 'react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()

        fetch(`http://pokeapi.co/api/v2/pokemon-species/${searchQuery}/`, {
            credentials: 'same-origin'
        }).then(r => console.log(r))
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