import React from 'react';
//
import styles from './NotFound.module.scss';
//
//
//
//
//
export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>
        <span> &#128533;</span>
        <br />
        <br />
        404 Not Found
      </h1>
      <p className={styles.notFound__describe}>
        The response required could not be found on this server!
      </p>
    </div>
  );
};
