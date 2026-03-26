import React from 'react'
import style from "./Home.module.css"
export const Home = () => {
  return (
    <section className={style.home}>
      <div className={style.limit_page}>
        <h2 className={style.wellcome}>Wellcome</h2>
      </div>
    </section>
  )
}

export default Home
