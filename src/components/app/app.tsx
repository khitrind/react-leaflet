import {Header} from 'src/components/header';
import {Map} from 'src/components//map';
import {ListItems} from 'src/components/list-items';
import {useCanelSelect} from 'src/hooks/use-cancel-select';

import styles from './app.module.scss';

export const App = () => {
  useCanelSelect();
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
