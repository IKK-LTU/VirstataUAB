import React from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { FcPhone, FcContacts, FcBusinessman } from 'react-icons/fc'
import { HiOfficeBuilding } from 'react-icons/hi'
import { motion } from 'framer-motion'
import classes from './contact-us-details.css'
import VKimg from './VK.jpg'
import img1 from './contactImg.jpg'


const ContactsDetails = () => (
  <div
    style={{
      backgroundAttachment: 'fixed',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${img1})`,
    }}
    className={classes.contactUs_details}
  >
    <motion.div
      className={classes.contactUs_details_img}
      initial={{ x: -1000 }}
      animate={{ x: 20 }}
    >
      <motion.img
        style={{ justifyContent: 'space-around' }}
        alt="contact-us"
        src={VKimg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      />
      <h3 style={{ textAlign: 'center' }}>
        {' '}
        <FcBusinessman className={classes.icons} />
        <br /> Direktorius <br /> Virginijus Kunickas
      </h3>
      <p>
        aagregertgrtgegerfgdgregegegrergerffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </p>
    </motion.div>

    <motion.div className={classes.contactUs_info} initial={{ x: -1000 }} animate={{ x: 20 }}>
      <p style={{ textAlign: 'center', fontSize: '150%' }}>
        <b>UAB VIRSTATA</b>
      </p>
      <p>
        <FcContacts className={classes.icons} />
        <strong style={{ textTransform: 'uppercase' }}>Įmonės kodas:</strong> 123456789
      </p>
      <p>
        <FcContacts className={classes.icons} />
        <strong style={{ textTransform: 'uppercase' }}>PVM kodas:</strong> LT123456789
      </p>
      <p>
        <FcPhone className={classes.icons} />{' '}
        <strong style={{ textTransform: 'uppercase' }}>Tel. Nr.</strong> +37061135306
      </p>
      <p>
        <HiOfficeBuilding className={classes.icons} />
        <strong style={{ textTransform: 'uppercase' }}>Adresas:</strong> Gedvydžių g. 7-9, Vilnius
      </p>
      <p>
        <BiEnvelope className={classes.icons} />
        <strong style={{ textTransform: 'uppercase' }}>El. paštas:</strong> virstata@gmail.com
      </p>
    </motion.div>
  </div>
)

export default ContactsDetails
