import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import classes from './Mission.css'

const Mission = ({title, subtitle}) => (
  <motion.div className={classes.Mission} initial={{ x: -2000 }} animate={{ x: 0 }}>
    <motion.div
      className={classes.Mission_Text}
      initial={{ x: -3000 }}
      animate={{ x: 0 }}
      transition={{ delay: 1 }}
    >
      <h2 title={title}>UAB VIRSTATA</h2>
      <h5 subtitle={subtitle}>
        Kokybiškai, greitai ir profesionaliai teikti paslaugas savo klientams! Nuolat tobulinti
        teikiamų paslaugų ir produkcijos kokybę! Gerinti darbo sąlygas įmonės darbuotojams ir
        užtikrinti sėkmingą įmonės plėtrą!
      </h5>
    </motion.div>
  </motion.div>
)
Mission.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
export default Mission
