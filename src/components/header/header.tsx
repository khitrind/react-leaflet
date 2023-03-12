import { memo, useCallback } from 'react';
import { IconButton } from 'src/components/icon-button';
import { isAddModeEnabledselector } from 'src/store/map-objects/selectors';
import { toggleIsAddMode } from 'src/store/map-objects/slice';
import { useAppDispatch, useAppSelector } from 'src/store/store';
import { ReactComponent as PlusIcon } from 'src/icons/plus.svg';

import styles from './header.module.css';

type Props = {
  text: string;
};

export const Header = memo(({ text }: Props) => {
  const isAddModeEnabled = useAppSelector(isAddModeEnabledselector);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(toggleIsAddMode());
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <p className={styles.text}>{text}</p>
      <IconButton
        onClick={handleClick}
        label="Activating the mod for adding elements"
        Icon={PlusIcon}
        fill={isAddModeEnabled ? 'green' : 'white'}
      />
    </header>
  );
});
