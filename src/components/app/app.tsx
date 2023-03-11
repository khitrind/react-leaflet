import React from 'react';
import { Header } from '../header';

import { ListItems } from '../list-items';
import { Map } from '../map/';

import styles from './app.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Header
          onClick={() => { console.log(12); }}
          text={'Item list'} />
        <ListItems />
      </aside>

      <main className={styles.content}>
        <Map />
      </main>
    </div>

  );
};


