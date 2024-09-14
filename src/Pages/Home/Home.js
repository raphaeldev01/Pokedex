import React from 'react'
import Styles from "./Home.module.css"
import PokeOpt from '../../Partials/PokemonOption/PokeOpt'

const Home = () => {
    const [allPoke, setAllPoke] = React.useState([]);
    const [pokeList, setPokeList] = React.useState(false)

    const getAllPokes = async () => {
        const res = await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")).json()
        setAllPoke(res.results);         
        setPokeList(res.results.slice(0, 25))
    }

    const seeMore =  () => {
        setPokeList(allPoke.slice(0, pokeList.length + 25))
    }

    React.useEffect(() => {
        getAllPokes()
    }, [])

    return (
        <div>
            <div className={Styles.container}>
                <div className={Styles.list}>
                    {pokeList ? pokeList.map(r => {
                        return <PokeOpt url={r.url} />
                    }) : <>n smd</>}
                    
                </div>
                <button className={Styles.btn} onClick={seeMore}>Load more</button>
            </div>
        </div>
    )
}

export default Home
