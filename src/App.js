import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonNameList from './components/PokemonNameList'
import PageChanger from './components/PageChanger';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = 
  useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [ loading, setLoading] = useState(true)

  useEffect(() => {
     setLoading(true)
     let cancel
    axios.get(currentPageUrl, {
       cancelToken: new axios.CancelToken(c => cancel = c )
    })
    .then( response => {
     setLoading(false) 
     setNextPageUrl (response.data.next) 
     setPokemon (response.data.results.map(p => p.name))
  })
     return () => cancel()

  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  

  if(loading) return "Loading..."

  return (
    <>
    <PokemonNameList pokemon={pokemon} />
    <PageChanger
      gotoNextPage={nextPageUrl ? gotoNextPage : null}
      
    />
    </>
  );
}

export default App;
