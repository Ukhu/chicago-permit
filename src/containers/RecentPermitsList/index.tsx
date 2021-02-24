import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { fetchPermitsSaga } from '../../store/permit/permitActions';
import PermitCard from '../../components/PermitCard';
import StatusCard from '../../components/StatusCard';

import styles from './RecentPermitsList.module.scss';

export default function RecentPermitsList(): JSX.Element {
  const dispatch = useDispatch();
  const { permits, loading, error } = useSelector((state: RootState) => state.permit);

  const noData = loading || error;

  useEffect(() => {
    dispatch(fetchPermitsSaga());
  }, [dispatch])

  return (
    <div className={styles.RecentPermitsList}>
      <h3>Most recent permits</h3>
      {
        noData && (
          <StatusCard
            loading={loading}
            error={error}
          />
        )
      }
      {
        permits.map(permit => (
          <PermitCard
            key={permit.id}
            permit={permit}
          />
        ))
      }
    </div>
  )
}
