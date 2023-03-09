import React from 'react';

import { ListItems } from '../list-items';
import { Map } from '../map/';

import styles from './app.module.css';

export const App = () => {
  return (
    <main className={styles.container}>
      <div className={styles.sidebar}>
        <ListItems />
      </div>

      <section className={styles.content}>
        <Map />
      </section>
    </main>

  );
};


