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

        if (id > 1) {
            const resP = await (await fetch(" https://pokeapi.co/api/v2/pokemon/" + (+id - 1))).json()
            setPrev(resP);

        }
        if (id < 1025) {
            const resN = await (await fetch(" https://pokeapi.co/api/v2/pokemon/" + (+id + 1))).json()
            setNext(resN);

        }


        setInfos(res);
    }

    React.useEffect(() => {
        getInfos()
    }, [])

    return (
        <div className={Styles.container}>
            {infos ? <>
                <div className={Styles.nav}>
                    {prev ? <a href={`/pokemon/${prev.id}`} className={Styles.prev}>
                        <Arrow size={"25px"} color={"#eeeeee"} />
                        <span>Nº{prev.id.toString().padStart(4, "0")}</span>
                        {prev.name}
                    </a> : ""}
                    {next ? <a href={`/pokemon/${next.id}`} className={Styles.next}>
                        {next.name}
                        <span>Nº{next.id.toString().padStart(4, "0")}</span>
                        <Arrow size={"25px"} color={"#eeeeee"} />
                    </a> : ""}

                </div>
                <div className={Styles.title}>{infos.name} <span className={Styles.id}>Nº {infos.id.toString().padStart(4, "0")} </span> </div>
                <div className={Styles.infos}>
                    <div className={Styles.pt1}>
                        <div>
                            <img src={infos.sprites.other["official-artwork"].front_default} />
                        </div>
                        <div className={Styles.info}>
                            <div>Height: <span>{infos.height / 10}m</span></div>
                            <div>Weight: <span>{infos.weight / 10}Kg </span></div>
                            <div>
                                <div>Types:</div>
                                <div className={Styles.types}>{infos.types.map(t => <div className={`${t.type.name} ${Styles.type}`}>{t.type.name}</div>)}</div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.basestatus}>
                        <h2>Base Stats</h2>
                        <div className={Styles.stts}>
                            <div>HP - {infos.stats[0].base_stat}</div>
                            <div className={Styles.range}>
                                <div style={{ width: ((infos.stats[0].base_stat * 100) / 170) + "%" }} className={Styles.fill}></div>
                            </div>
                        </div>
                        <div className={Styles.stts}>
                            <div>ATK - {infos.stats[1].base_stat}</div>
                            <div className={Styles.range}>
                                <div style={{ width: ((infos.stats[1].base_stat * 100) / 170) + "%" }} className={Styles.fill}></div>
                            </div>
                        </div>
                        <div className={Styles.stts}>
                            <div>DEF - {infos.stats[2].base_stat}</div>
                            <div className={Styles.range}>
                                <div style={{ width: ((infos.stats[2].base_stat * 100) / 170) + "%" }} className={Styles.fill}></div>

                            </div>
                        </div>
                        <div className={Styles.stts}>
                            <div>SP ATK - {infos.stats[3].base_stat}</div>
                            <div className={Styles.range}>
                                <div style={{ width: ((infos.stats[3].base_stat * 100) / 170) + "%" }} className={Styles.fill}></div>
                            </div>
                        </div>
                        <div className={Styles.stts}>
                            <div>SP DEF - {infos.stats[4].base_stat}</div>
                            <div className={Styles.range}>
                                <div style={{ width: ((infos.stats[4].base_stat * 100) / 170) + "%" }} className={Styles.fill}></div>
                            </div>
                        </div>
                        <div className={Styles.stts}>
                            <div>SPEED - {infos.stats[5].base_stat}</div>
                            <div className={Styles.range}>
                                <div style={{ width: ((infos.stats[5].base_stat * 100) / 170) + "%" }} className={Styles.fill}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </> : ""}
        </div>
    )
}

export default Pokemon
