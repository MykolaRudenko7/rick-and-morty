import React from 'react'
//
import AvatarImg from '../../assets/AvatarDetails.jpg'
import { Button } from '../../components'
import style from './CharacterDetails.module.scss'

export const CharacterDetails = () => {
  return (
    <div className={style.container}>
      <Button />

      <figure className={style.character}>

        <div className={style.character__image}>
          <img src={AvatarImg} alt="Charackters Avatar" />
        </div>

        <figcaption className={style.character__caption}>
          <h2 className={style.character__name}>Rick Sanchez</h2>

          <div className={style.informations}>
            <h3 className={style.informations__title}>Informations</h3>


            <ul className={style.informations__block}>

              <li className={style.details}>
                <h4 className={style.details__title}>Gender</h4>
                <p className={style.details__description}>Male</p>
              </li>
              <li className={style.details}>
                <h4 className={style.details__title}>Gender</h4>
                <p className={style.details__description}>Male</p>
              </li>
              <li className={style.details}>
                <h4 className={style.details__title}>Gender</h4>
                <p className={style.details__description}>Male</p>
              </li>
              <li className={style.details}>
                <h4 className={style.details__title}>Gender</h4>
                <p className={style.details__description}>Male</p>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </div>
  )

}
