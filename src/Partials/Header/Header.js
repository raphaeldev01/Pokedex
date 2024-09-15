import React from 'react'
import Styles from "./Header.module.css"
import Search from '../Svgs/Search'

const Header = () => {
  const [allPoke, setAllPoke] = React.useState([])
  const [searchPoke, setSearchPoke] = React.useState([])
  const [text, setText] = React.useState("")

  const getAllPokes = async () => {
    const res = await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")).json()
    setAllPoke(await res.results.map((p, i) => { return { name: p.name, id: i + 1 } }));
  }

  const handleSearch = (e) => {
    const search = e.target.value
    setText(search)
    if (search.length < 1) return setSearchPoke([])

    const newArr = allPoke.filter(r => r.name.includes(search))
    setSearchPoke(newArr.slice(0, 10));
    console.log(newArr);
  }


  React.useEffect(() => {
    getAllPokes()
  }, [])

  return (
    <div className={Styles.header}>
      <div className={Styles.inpt}>
        <input type='text' onChange={handleSearch} value={text} placeholder='Pesquisar' />
        <Search size={"40px"} />
      </div>
      <div className={Styles.opts}>

        <div>{searchPoke.map(p => { return (<a className={Styles.opt} href={`/pokemon/${p.id}`}>{p.name}</a>) })}</div>
      </div>

    </div>
  )
}

export default Header
