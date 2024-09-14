import React from 'react'
import Styles from "./PokeOpt.module.css"
import { Link } from 'react-router-dom'

const PokeOpt = ({ name, url }) => {
    const [infos, setInfos] = React.useState()

    const getInfos = async () => {
        const res = await (await (fetch(url))).json()
        setInfos(res)
    }

    React.useEffect(() => {
        getInfos()
    }, [])

    return (
        <>
            {infos && <Link to={`/pokemon/${infos.id}`} className={Styles.opt}>
                <img src={infos.sprites.front_default} />
                <div className={Styles.infos}>
                    <div className={Styles.num}>Nº {infos.id.toString().padStart(4, "0")}</div>
                    <div className={Styles.name}>{infos.name.toLocaleUpperCase(0)}</div>
                    <div>
                        <div className={Styles.types}>
                            {infos.types.map(({ type }) => {
                                const t = type.name
                                return <div className={`${Styles.type} ${t}`}>{t}</div>
                            })}</div>
                    </div>
                </div>
                </Link>
            }
        </>
    )
}

export default PokeOpt
