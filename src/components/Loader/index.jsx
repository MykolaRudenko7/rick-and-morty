import React from 'react';
// 
import styles from './Loader.module.scss';
//
//
//
//
//
export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <div className={styles.loader}></div>
        <div className={styles.loader}></div>
      </div>

      <div id="loader2" className={styles.loader}>
        <div className={styles.roller}></div>
        <div className={styles.roller}></div>
      </div>

      <div id="loader3" className={styles.loader}>
        <div className={styles.roller}></div>
        <div className={styles.roller}></div>
      </div>
    </div>
  );
};
