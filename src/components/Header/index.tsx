import React from 'react';
import styles from './Header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.Header}>
      <h1>City of Chicago Permits</h1>
    </header>
  )
}
