import React from 'react'
import Styles from "./ByType.module.css"
import PokeOpt from '../../Partials/PokemonOption/PokeOpt'
import Arrow from '../../Partials/Svgs/Arrow';
import { Link, useLocation } from 'react-router-dom';

const url = window.location.pathname.split('/').pop();
const ByType = (props) => {

    const history = useLocation();
    const [all, setAll] = React.useState([])
    const [allPoke, setAllPoke] = React.useState([]);
    const [pokeList, setPokeList] = React.useState(false)
    const [filterEnable, setFilterEnable] = React.useState(true);
    const [typePoke, setTypePoke] = React.useState('')

    const getAllPokes = async () => {
        const type = (window.location.pathname.split("/")[2]);
        setTypePoke(window.location.pathname.split("/")[2])

        const res = await (await fetch("https://pokeapi.co/api/v2/type/" + type)).json()
        const arr = await res.pokemon.map(r => r.pokemon)
        console.log(res.pokemon);

        setAll(await arr)
        setAllPoke(await arr);
        setPokeList(await arr.slice(0, 25))

        console.log('oi');

    }

    const seeMore = () => {
        setPokeList(allPoke.slice(0, pokeList.length + 25))
    }

    const handleFilter = () => {
        setFilterEnable(!filterEnable)
    }

    React.useEffect(() => {
        console.log('ola432');
        
        getAllPokes();
    }, [])

    return (
        <div>
            <div className={Styles.container}>
                <div className={`${filterEnable ? Styles.enable : "false"} ${Styles.filterOpt}`}>
                    <div>
                        <div className={Styles.title}>Types: </div>
                        <div className={Styles.tipesOpt}>
                            <a href="/type/bug" className='bug'>Bug</a>
                            <a href="/type/normal" className='normal'>Normal</a>
                            <a href="/type/fighting" className='fighting'>fighting</a>
                            <a href="/type/flying" className='flying'>flying</a>
                            <a href="/type/poison" className='poison'>poison</a>
                            <a href="/type/ground" className='ground'>ground</a>
                            <a href="/type/rock" className='rock'>rock</a>
                            <a href="/type/ghost" className='ghost'>ghost</a>
                            <a href="/type/steel" className='steel'>steel</a>
                            <a href="/type/fire" className='fire'>fire</a>
                            <a href="/type/grass" className='grass'>grass</a>
                            <a href="/type/water" className='water'>water</a>
                            <a href="/type/electric" className='electric'>electric</a>
                            <a href="/type/psychic" className='psychic'>psychic</a>
                            <a href="/type/ice" className='ice'>ice</a>
                            <a href="/type/dragon" className='dragon'>dragon</a>
                            <a href="/type/dark" className='dark'>dark</a>
                            <a href="/type/fairy" className='fairy'>fairy</a>
                            <div></div>
                            <a href='/'>Clear filter</a>
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

export default ByType
