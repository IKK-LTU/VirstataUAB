import React, { useEffect } from 'react';
import classes from './ProgressBar.css';
import useStorage from '../../../../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url,setFile])

    return (
        <motion.div className={classes.progress_bar}
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            
        ></motion.div>
    )
}
export default ProgressBar;