import React from "react";

const SearchBox = ({searchfild, searchChange}) => {
    return(
        <div className="pa2">
            <input 
            className="pa3 ba br4 b--green bg-wached-green"
            type="search" 
            placeholder="Search robots" 
            onChange={searchChange}
            />
        </div>
        
    )
}
 export default SearchBox;