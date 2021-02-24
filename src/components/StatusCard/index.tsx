import React from 'react';
import styles from './StatusCard.module.scss';

interface StatusCardProps {
  loading: boolean
  error: string
}

export default function StatusCard({ loading, error }: StatusCardProps): JSX.Element {
  return (
    <div className={styles.StatusCard}>
      <h5
        className={styles.StatusCard__Title}
        style={{color: error ? 'red' : '#414141'}}>
        {loading ? "Fetching Permits..." : error}
      </h5>
    </div>
  )
}
