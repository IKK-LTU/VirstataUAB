import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import classes from './OurMission.css'

const OurMission = (props) => (
  <div className={classes.OurMission}>
    <h1>Garantuojame!</h1>
    <div className={classes.OurMission_box}>
      <div className={classes.OurMission_item} style={{ opacity: props.Appears }}>
        <FcCheckmark className={classes.OurMission_Icon} />
        <h2>Profesionalumą</h2>
      </div>
      <div className={classes.OurMission_item} style={{ opacity: props.Appears }}>
        <FcCheckmark className={classes.OurMission_Icon} />
        <h2>Kokybę</h2>
      </div>
      <div className={classes.OurMission_item} style={{ opacity: props.Appears }}>
        <FcCheckmark className={classes.OurMission_Icon} />
        <h2>Operatyvumą</h2>
      </div>
    </div>
  </div>
)

export default OurMission
