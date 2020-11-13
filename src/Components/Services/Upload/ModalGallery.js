import React from 'react';
import classess from './Modal/Modal.css';
import classes from './UploadForm.css';
import { motion } from 'framer-motion';
import useFirestore from '../../../hooks/useFirestore';

const ModalGallery = ({selectedImg, setSelectedImg}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains(classess.backdrop)) {
            setSelectedImg(null);
        }
    }
    const { docs } = useFirestore('images');
    return (
        <motion.div
            className={classess.backdrop}
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}  
        >
            { docs &&
                docs.map(docs => (
                <motion.div className={classes.img_wrap}
                    key={docs.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                    
                >
                <motion.img
                    src={docs.url}
                    alt="images" 
                    initial={{ opacity: 0 }}  
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default ModalGallery;