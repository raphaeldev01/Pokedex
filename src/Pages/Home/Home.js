import React from 'react'
import Styles from "./Home.module.css"
import PokeOpt from '../../Partials/PokemonOption/PokeOpt'
import Arrow from '../../Partials/Svgs/Arrow';
import { Link } from 'react-router-dom';

const Home = () => {
    const [all, setAll] = React.useState([])
    const [allPoke, setAllPoke] = React.useState([]);
    const [pokeList, setPokeList] = React.useState(false)
    const [filterEnable, setFilterEnable] = React.useState(true);
    const [typePoke, setTypePoke] = React.useState('')

    const getAllPokes = async () => {
        const res = await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")).json()
        setAll(await res.results)        
        setAllPoke(await res.results);
        setPokeList(await res.results.slice(0, 25))
    }

    const seeMore = () => {
        setPokeList(allPoke.slice(0, pokeList.length + 25))
    }

    const handleFilter = () => {
        setFilterEnable(!filterEnable)
    }

    React.useEffect(() => {
        getAllPokes()
    }, [])

    return (
        <div>
            <div className={Styles.container}>
                <div className={`${filterEnable ? Styles.enable : "false"} ${Styles.filterOpt}`}>
                    <div>
                        <div className={Styles.title}>Types: </div>
                        <div className={Styles.tipesOpt}>
                            <Link to="/type/bug" className='bug'>Bug</Link>
                            <Link to="/type/normal" className='normal'>Normal</Link>
                            <Link to="/type/fighting" className='fighting'>fighting</Link>
                            <Link to="/type/flying" className='flying'>flying</Link>
                            <Link to="/type/poison" className='poison'>poison</Link>
                            <Link to="/type/ground" className='ground'>ground</Link>
                            <Link to="/type/rock" className='rock'>rock</Link>
                            <Link to="/type/ghost" className='ghost'>ghost</Link>
                            <Link to="/type/steel" className='steel'>steel</Link>
                            <Link to="/type/fire" className='fire'>fire</Link>
                            <Link to="/type/grass" className='grass'>grass</Link>
                            <Link to="/type/water" className='water'>water</Link>
                            <Link to="/type/electric" className='electric'>electric</Link>
                            <Link to="/type/psychic" className='psychic'>psychic</Link>
                            <Link to="/type/ice" className='ice'>ice</Link>
                            <Link to="/type/dragon" className='dragon'>dragon</Link>
                            <Link to="/type/dark"  className='dark'>dark</Link>
                            <Link to="/type/fairy" className='fairy'  >fairy</Link>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className={`${filterEnable ? Styles.enable : "false"} ${Styles.filter}`} onClick={handleFilter}><Arrow size="15px" /> </div>
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
