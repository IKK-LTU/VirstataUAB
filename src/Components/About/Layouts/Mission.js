/** @format */

import React from "react";
import classes from "./Mission.css";
import { motion } from "framer-motion";
const Mission = (props) => (
  <motion.div
    className={classes.Mission}
    initial={{ x: -2000 }}
    animate={{ x: 0 }}>
    <motion.div
      className={classes.Mission_Text}
      initial={{ x: -3000 }}
      animate={{ x: 0 }}
      transition={{ delay: 1 }}>
      <h2 title={props.title}>UAB VIRSTATA</h2>
      <h5 subtitle={props.subtitle}>
        Kokybiškai, greitai ir profesionaliai teikti paslaugas savo klientams!
        Nuolat tobulinti teikiamų paslaugų ir produkcijos kokybę! Gerinti darbo
        sąlygas įmonės darbuotojams ir užtikrinti sėkmingą įmonės plėtrą!
      </h5>
    </motion.div>
  </motion.div>
);
export default Mission;
