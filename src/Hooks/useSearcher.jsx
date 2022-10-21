import React from 'react'

function useSearcher(){

    const [searchValue, setSearchValue] = React.useState("");

    return{
        searchValue,
        setSearchValue,
    }

}

export {useSearcher}