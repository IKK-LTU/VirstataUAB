import React from 'react';
import useFirestore from '../../../hooks/useFirestore';
import classes from './UploadForm.css';
import firstImg from '../../Img/bb.jpg';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
    
    return (
        <div className={classes.img_grid}>
            <motion.div
                    className={classes.img_wrap}
                    layout
                    whileHover={{ opacity: 1 }}
                    
                >
                <motion.img
                    onClick={()=> setSelectedImg(docs.url)}
                    src={firstImg}
                    alt="images" 
                    initial={{ opacity: 0 }}  
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    />
            </motion.div>
    </div>
    )
    
}
export default ImageGrid;
// const ImageGrid = ({setSelectedImg}) => {
    //     const { docs } = useFirestore('images');
    //     console.log(docs);
    //     console.log(docs[0]);
    //     return (
    //         <div className={classes.img_grid}>
    //             { docs &&
    //                 docs.map(docs => (
    //                 <motion.div className={classes.img_wrap}
    //                     key={docs.id}
    //                     layout
    //                     whileHover={{ opacity: 1 }}
    //                     onClick={()=> setSelectedImg(docs.url)}
    //                 >
    //                 <motion.img
    //                     src={docs.url}
    //                     alt="images" 
    //                     initial={{ opacity: 0 }}  
    //                     animate={{ opacity: 1 }}
    //                     transition={{ delay: 1 }}
    //                     />
    //                 </motion.div>
    //             ))}
            
    //     </div>
    //     )
        
    // }