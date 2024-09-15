import React from 'react'
import Styles from "./Pokemon.module.css"
import Arrow from '../../Partials/Svgs/Arrow2'

const Pokemon = () => {
    const [infos, setInfos] = React.useState()
    const [next, setNext] = React.useState()
    const [prev, setPrev] = React.useState()

    const getInfos = async () => {
        const id = window.location.pathname.split("/")[2]
        const res = await (await fetch(" https://pokeapi.co/api/v2/pokemon/" + id)).json()
        const resP = await (await fetch(" https://pokeapi.co/api/v2/pokemon/" + (+id - 1))).json()
        const resN = await (await fetch(" https://pokeapi.co/api/v2/pokemon/" + (+id + 1))).json()
        console.log(res)
        setInfos(res);
        setPrev(resP);
        setNext(resN);
    }

    React.useEffect(() => {
        getInfos()
    }, [])

    return (
        <div className={Styles.container}>
            {infos ? <>
                <div className={Styles.nav}>
                    <a href={`/pokemon/${prev.id}`} className={Styles.prev}>
                        <Arrow size={"25px"} color={"#eeeeee"} />
                        <span>Nº{prev.id.toString().padStart(4, "0")}</span>
                        {prev.name}
                    </a>
                    <a href={`/pokemon/${next.id}`} className={Styles.next}>
                        {next.name}
                        <span>Nº{next.id.toString().padStart(4, "0")}</span>
                        <Arrow size={"25px"} color={"#eeeeee"} />
                    </a>
                </div>
                <div className={Styles.title}>{infos.name} <span className={Styles.id}>Nº {infos.id.toString().padStart(4, "0")} </span> </div>
                <div className={Styles.infos}>
                    <div>
                        <img src={infos.sprites.other["official-artwork"].front_default} />
                    </div>
                </div>
            </> : ""}
        </div>
    )
}

export default Pokemon
