import React from 'react'

interface searchProps{
    input: any,
    SearchChange: any
}

const Search:React.FC<searchProps> = ({input, SearchChange}) => {
    return (
        <div>
            <form>
                <input type="text" name="text" value={input} id="text" placeholder="Enter username" onChange={SearchChange} />
                <input type="submit" value="search" />
            </form>
        </div>
    )
}

export default Search
