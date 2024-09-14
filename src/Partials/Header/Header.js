import React from 'react'
import Styles from "./Header.module.css"
import Search from '../Svgs/Search'

const Header = () => {
  return (
    <div className={Styles.header}>
        <div className={Styles.inpt}>
            <input type='text' placeholder='Pesquisar' />
            <Search size={"40px"} />
        </div>
        
    </div>
  )
}

export default Header
