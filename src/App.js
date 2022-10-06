import './App.css';
import React,{useState,useEffect} from "react";
import {Switch, Route} from "react-router-dom"
import axios from "axios";
import NavBar from "./NavBarFolder/NavBar.js"
import About from "./NavBarFolder/About.js"
import Favorites from "./NavBarFolder/Favorites"
import Home from "./NavBarFolder/Home"
import Search from "./SearchFolder/Search"


import AllCards from './AllCardsFolder/AllCards';
import MagicCardContainer from "./AllCardsFolder/MagicFolder/MagicCardContainer.js";
import PokemonCardContainer from "./AllCardsFolder/PokemonFolder/PokemonCardContainer";
import YugiohCardContainer from "./AllCardsFolder/YugiohFolder/YugiohCardContainer"

import NewPokemonCardForm from './NewPokemonCardForm';
import NewYugiohCardForm from "./NewYugiohCardForm"
import NewMagicCardForm from "./NewMagicCardForm"

import PokemonSort from "./AllSortFolder/PokemonSort"
import MagicSort from "./AllSortFolder/MagicSort"
import YugiohSort from "./AllSortFolder/YugiohSort"


function App() {

  const [searchBar, setSearchBar]=useState("")
  const [pokemonSort,setPokemonSort]=useState(false)
  const [magicSort,setMagicSort]=useState(false)
  const [yugiohSort,setYugiohSort]=useState(false)

  const [renderCheckedPokemonCards,setRenderCheckedPokemonCards]=useState(false)
  const [renderCheckedMagicCards, setRenderCheckedMagicCards]=useState(false)
  const [renderCheckedYugiohCards,setRenderCheckedYugiohCards]=useState (false)

  const [pokemon, setPokemon] = useState([])
  const [magic, setMagic] = useState([])
  const [yugioh, setYugioh] = useState([])


  const fetchData = () => {
      const pokemonUrl = "http://localhost:4000/Pokemon"
      const magicUrl =  "http://localhost:4000/Magic-the-Gathering"
      const yugiohUrl = "http://localhost:4000/Yu-Gi-Oh!"
      
      const getPokemon = axios.get(pokemonUrl)
      const getMagic = axios.get(magicUrl)
      const getYugioh = axios.get(yugiohUrl)
      
      axios.all([getPokemon, getMagic, getYugioh]).then(
          axios.spread((...allData) => {
              const allPokemonData = allData[0].data
              const allMagicData = allData[1].data
              const allYugiohData = allData[2].data

              // console.log(allPokemonData)
              // console.log(allYugiohData)
              // console.log(allMagicData)

              setPokemon(allPokemonData)
              setMagic(allMagicData)
              setYugioh(allYugiohData)
          })  
      )
  }
  // console.log(pokemon)
  useEffect(() => {
    fetchData()
  }, []);

  const filteredPokemonCards=pokemon.filter((onePokemonCard)=>{
    if(onePokemonCard.name.toLowerCase().includes(searchBar.toLowerCase())){
      return(true)
    }else if (onePokemonCard.comment.toLowerCase().includes(searchBar.toLowerCase())){
      return (true)
    }else{
      return(false)
    }
  })


  const sortedPokemon= pokemonSort ? [...filteredPokemonCards].sort(
    (pokemonA,pokemonB)=>{
      return (
        pokemonA["pokedex-no"]-pokemonB["pokedex-no"]
      )
      
    }
  ): filteredPokemonCards

  // const checkedPokemonBox=pokemon.filter((pokemonCards)=>(pokemon ? (pokemonCards['card-franchise']) : true)).sort((pokemon1,pokemon2)=>{
  //   if(sort === "pokemon"){
  //     return pokemon1.id-pokemon2.id
  //   }else {
  //     return pokemon1.name.localCompare(pokemon2.name)
  //   }
  // })


  const filteredMagicCards=magic.filter((oneMagicCard)=>{
    if(oneMagicCard.name.toLowerCase().includes(searchBar.toLowerCase())){
      return(true)
    }else if (oneMagicCard.comment.toLowerCase().includes(searchBar.toLowerCase())){
      return(true)
    }else{
      return(false)
    }
  })

  const sortedMagic= magicSort ? [...filteredMagicCards].sort(
    (magicA,magicB)=>{
      return magicA["expansion-symbol"]-magicB["expansion-symbol"]
    }
  ): filteredMagicCards

  const filteredYugiohCards=yugioh.filter((oneYugiohCard)=>{
    if(oneYugiohCard.name.toLowerCase().includes(searchBar.toLowerCase())){
      return(true)
    }else if (oneYugiohCard.comment.toLowerCase().includes(searchBar.toLowerCase())){
      return (true)
    }else{
      return(false)
    }
  })

  const sortedYugioh= yugiohSort ? [...filteredYugiohCards].sort(
    (yugiohA,yugiohB)=>{
      return yugiohA["card-type"]-yugiohB["card-type"]
    }
  ): filteredYugiohCards


  function handleAddCard(newPokemonCard) {
    const newPokeArray = [...sortedPokemon, newPokemonCard]
    setPokemon(newPokeArray)
  }

  function handleAddYugiohCard(newYugiohCard){
    const newYugiohArray = [...sortedYugioh, newYugiohCard]
    setYugioh(newYugiohArray)
  }

  function handleAddMagicCard(newMagicCard){
    const newMagicArray = [...sortedMagic, newMagicCard]
    setMagic(newMagicArray)
  }

  return (
    <div className="App">
      <header className="App-header">
         <nav>
        <NavBar />
        <Switch>
          <Route path = "/about">
            <About />
          </Route>
          <Route eact path = "/">
            <Home />
          </Route>
          <Route path ="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </nav>
      </header>

      <div>
        <div>
        <AllCards/>
          <Switch>
            <Route path ="/Pokemon">
              <PokemonCardContainer 
              pokemon={sortedPokemon}
              renderCheckedPokemonCards={renderCheckedPokemonCards}
              />
      
              <Search 
              searchBar={searchBar} 
              setSearchBar={setSearchBar} 
              // pokemonSort={pokemonSort}
              // setPokemonSort={setPokemonSort}
              yugiohSort={yugiohSort}
              setYugiohSort={setYugiohSort}
              renderCheckedPokemonCards={renderCheckedPokemonCards}
              setRenderCheckedPokemonCards={setRenderCheckedPokemonCards}
              renderCheckedMagicCards={renderCheckedMagicCards}
              setRenderCheckedMagicCards={setRenderCheckedMagicCards}
              renderCheckedYugiohCards={renderCheckedYugiohCards}
              setRenderCheckedYugiohCards={setRenderCheckedYugiohCards}
              />
              <PokemonSort pokemonSort={pokemonSort} setPokemonSort={setPokemonSort} />
              <NewPokemonCardForm handleAddCard={handleAddCard}/>             

              
            </Route>

            <Route path="/Magic">
              <MagicCardContainer 
              magic={sortedMagic}
              renderCheckedMagicCards={renderCheckedMagicCards}
              />
              <Search 
              searchBar={searchBar} 
              setSearchBar={setSearchBar} 
              magicSort={magicSort}
              setMagicSort={setMagicSort}
              renderCheckedPokemonCards={renderCheckedPokemonCards}
              setRenderCheckedPokemonCards={setRenderCheckedPokemonCards}
              renderCheckedMagicCards={renderCheckedMagicCards}
              setRenderCheckedMagicCards={setRenderCheckedMagicCards}
              renderCheckedYugiohCards={renderCheckedYugiohCards}
              setRenderCheckedYugiohCards={setRenderCheckedYugiohCards}
              />
              <MagicSort magicSort={magicSort} setMagicSort={setMagicSort} />
              <NewMagicCardForm handleAddCard={handleAddMagicCard}/>
            </Route>

            <Route path="/YuGiOh">
              <YugiohCardContainer 
              yugioh={sortedYugioh}
              renderCheckedYugiohCards={renderCheckedYugiohCards}
              />
              <Search 
              searchBar={searchBar} 
              setSearchBar={setSearchBar} 
              yugiohSort={yugiohSort}
              setYugiohSort={setYugiohSort}
              renderCheckedPokemonCards={renderCheckedPokemonCards}
              setRenderCheckedPokemonCards={setRenderCheckedPokemonCards}
              renderCheckedMagicCards={renderCheckedMagicCards}
              setRenderCheckedMagicCards={setRenderCheckedMagicCards}
              renderCheckedYugiohCards={renderCheckedYugiohCards}
              setRenderCheckedYugiohCards={setRenderCheckedYugiohCards}
              />
              <YugiohSort yugiohSort={yugiohSort} setYugiohSort={setYugiohSort} />
              <NewYugiohCardForm handleAddCard={handleAddYugiohCard} />
            </Route>

            {/* <Route path ="*">
              <h1>404 not found</h1>
            </Route> */}
          </Switch>
        </div>
  
      </div>

    </div>
  );
}


export default App;
