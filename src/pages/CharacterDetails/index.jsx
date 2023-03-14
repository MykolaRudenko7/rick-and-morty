import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
//
import { Button, Loader, NotFound } from '../../components';
import style from './CharacterDetails.module.scss';
//
//
//
export const CharacterDetails = () => {
  // витягую id персонажа на якого клікнули з url
  let { id } = useParams();

  // тут цей конкретний персонаж
  const [character, setCharacter] = React.useState(null);
  //чи завантажилась стр.
  const [ifLoadingDetail, setIfLoadingDetail] = React.useState(true);

  // роблю запит на цього конкретного персонажа і записую його в стейт
  React.useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
        setIfLoadingDetail(true);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIfLoadingDetail(false);
      });
  }, [id]);

  if (ifLoadingDetail) {
    return <Loader />;
  }
  if (!character) {
    return <NotFound />;
  }
  return (
    <div className={style.container}>
      <Button />
      <figure className={style.character}>
        <div className={style.character__image}>
          <img src={character.image} alt={character.name} />
        </div>
        <figcaption className={style.character__caption}>
          <h2 className={style.character__name}>{character.name}</h2>
          <div className={style.informations}>
            <h3 className={style.informations__title}>Informations</h3>
            <ul className={style.informations__block}>
              <li className={style.details}>
                <h4 className={style.details__title}>Gender</h4>
                <p className={style.details__description}>{character.gender}</p>
              </li>
              <li className={style.details}>
                <h4 className={style.details__title}>Status</h4>
                <p className={style.details__description}>{character.status}</p>
              </li>
              <li className={style.details}>
                <h4 className={style.details__title}>Specie</h4>
                <p className={style.details__description}>{character.species}</p>
              </li>
              <li className={style.details}>
                <h4 className={style.details__title}>Origin</h4>
                <p className={style.details__description}>{character.origin.name}</p>
              </li>
              <li className={style.details}>
                <h4 className={style.details__title}>Type</h4>
                <p className={style.details__description}>
                  {character.type === '' ? 'undefined' : character.type}
                </p>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
