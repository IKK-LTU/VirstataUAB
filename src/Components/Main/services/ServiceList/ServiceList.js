import React from 'react'

import classes from './ServiceList.css'

const ServicesList = (props) => (
  <div className={classes.ServiceList}>
    <h4 style={{ marginBottom: '10px' }}>{props.headline}</h4>

    <p>
      {' '}
      {props.text}
      {/* <strong class="strong">DAUGIAU!</strong>
                     <i class="ion-arrow-forward-circle-outline"></i> */}
      ...
      <strong
        style={{
          color: '#99db48',
          textTransform: 'uppercase',

          letterSpacing: '0.5px',
        }}
      >
        DAUGIAU!
      </strong>
    </p>
  </div>
)
export default ServicesList
