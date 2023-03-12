import {Header} from 'src/components/header';
import {Map} from 'src/components//map';
import {ListItems} from 'src/components/list-items';

import styles from './app.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Header text={'Item list'} />
        <ListItems />
      </aside>

      <main className={styles.content}>
        <Map />
      </main>
    </div>
  );
};
