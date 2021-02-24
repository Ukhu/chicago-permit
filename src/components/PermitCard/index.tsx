import React, { useState } from 'react';
import styles from './PermitCard.module.scss';

export interface PermitData {
  id: string
  permit_: string
  permit_type: string
  work_description: string
  review_type: string
  contact_1_type: string
  contact_1_name: string
  contact_1_city: string
  contact_1_state: string
  issue_date: string
  subtotal_paid: string
  subtotal_unpaid: string
  building_fee_paid: string
  building_fee_unpaid: string
  zoning_fee_paid: string
  zoning_fee_unpaid: string
  other_fee_paid: string
  other_fee_unpaid: string
  street_number: string
  street_direction: string
  street_name: string
  community_area: string
  xcoordinate: string
  ycoordinate: string
  longitude: string
  latitude: string
}

interface PermitCardProps {
  permit: PermitData
}

export default function PermitCard({ permit }: PermitCardProps) {
  const [viewMore, setViewMore] = useState<boolean>(false);

  return (
    <div className={styles.PermitCard}>
      <h5 className={styles.PermitCard__Title}>{permit.permit_type} - {permit.permit_}</h5>
      <p className={styles.PermitCard__SummaryTitle}><span className={styles.PermitCard__FieldName}>Description: </span>{permit.work_description}</p>
      <div className={styles.PermitCard__Info}>
        <div className={styles.PermitCard__SectionInfo}>
          <h6 className={styles.PermitCard__SectionTitle}>Contact Information</h6>
          <p className={styles.PermitCard__Field}>
            <span className={styles.PermitCard__FieldName}>Type: </span>
            {permit.contact_1_type}
          </p>
          <p className={styles.PermitCard__Field}>
            <span className={styles.PermitCard__FieldName}>Name: </span>
            {permit.contact_1_name}
          </p>
          <p className={styles.PermitCard__Field}>
            <span className={styles.PermitCard__FieldName}>Address: </span>
            {permit.contact_1_city}, {permit.contact_1_state}
          </p>
        </div>

        <div className={styles.PermitCard__SectionInfo}>
          <h6 className={styles.PermitCard__SectionTitle}>Permit Information</h6>
          <p className={styles.PermitCard__Field}>
            <span className={styles.PermitCard__FieldName}>Review Type: </span>
            {permit.review_type}
          </p>
          <p className={styles.PermitCard__Field}>
            <span className={styles.PermitCard__FieldName}>Issue Date: </span>
            {(new Date(permit.issue_date)).toDateString()}
          </p>
          <p className={styles.PermitCard__Field}>
            <span className={styles.PermitCard__FieldName}>SubTotal Paid: </span>
            ${permit.subtotal_paid}
          </p>
        </div>
      </div>
      <button 
        className={styles.PermitCard__Button}
        onClick={() => setViewMore(!viewMore)}>
        { viewMore ? 'View Less Info' : 'View More Info' }
      </button>
      {
        viewMore && (
          <>
            <div className={styles.PermitCard__Info}>
              <div className={styles.PermitCard__SectionInfo}>
                <h6 className={styles.PermitCard__SectionTitle}>Fees Paid</h6>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Building Fee: </span>
                  {permit.building_fee_paid}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Zoning Fee: </span>
                  {permit.zoning_fee_paid}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Other Fee: </span>
                  {permit.other_fee_paid}
                </p>
              </div>
              <div className={styles.PermitCard__SectionInfo}>
                <h6 className={styles.PermitCard__SectionTitle}>Fees Unpaid</h6>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Unpaid Building Fee: </span>
                  {permit.building_fee_unpaid}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Unpaid Zoning Fee: </span>
                  {permit.zoning_fee_unpaid}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Unpaid Other Fee: </span>
                  {permit.other_fee_unpaid}
                </p>
              </div>
            </div>

            <div className={styles.PermitCard__Info}>
              <div className={styles.PermitCard__SectionInfo}>
                <h6 className={styles.PermitCard__SectionTitle}>Street Information</h6>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Street Number: </span>
                  {permit.street_number}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Street Direction: </span>
                  {permit.street_direction}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Street Name: </span>
                  {permit.street_name}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Community Area: </span>
                  {permit.community_area}
                </p>
              </div>
              <div className={styles.PermitCard__SectionInfo}>
                <h6 className={styles.PermitCard__SectionTitle}>Geographic Information</h6>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>X Cordinate: </span>
                  {permit.xcoordinate}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Y Cordinate: </span>
                  {permit.ycoordinate}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Longitude: </span>
                  {permit.longitude}
                </p>
                <p className={styles.PermitCard__Field}>
                  <span className={styles.PermitCard__FieldName}>Latitude: </span>
                  {permit.latitude}
                </p>
              </div>
            </div>
          </>
          
        )
      }
    </div>
  )
}
