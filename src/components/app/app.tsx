import React from 'react';

import { ItemsList } from '../items-list';
import { Map } from '../map/';

import styles from './app.module.css';

export const App = () => {
  return (
    <main className={styles.container}>
      <div className={styles.sidebar}>
        <ItemsList />
      </div>

      <section className={styles.content}>
        <Map />
      </section>
    </main>

  );
};


