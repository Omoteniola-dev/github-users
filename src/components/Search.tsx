import React from 'react'

interface searchProps{
    input: any,
    SearchChange: any
    getUser: any
}

const Search:React.FC<searchProps> = ({input, SearchChange, getUser}) => {
    return (
        <div>
            <form onSubmit={getUser}>
                <input type="text" name="text" value={input} id="text" placeholder="Enter username" onChange={SearchChange} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search
